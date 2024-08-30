document.addEventListener('DOMContentLoaded', function() {
    const animationSettings = [
        { selector: '.animate', enterClass: 'animate-enter', exitClass: 'animate-exit', inTransform: 'translate-in', outTransform: 'translate-out' },
        { selector: '.animate_dois', enterClass: 'animate_dois-enter', exitClass: 'animate_dois-exit', inTransform: 'translate_dois-in', outTransform: 'translate_dois-out' },
        { selector: '.animate_tres', enterClass: 'animate_tres-enter', exitClass: 'animate_tres-exit', inTransform: 'translate_tres-in', outTransform: 'translate_tres-out' }
    ];

    const observerOptions = {
        threshold: 0.1 // Trigger the callback when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            animationSettings.forEach(setting => {
                if (entry.target.matches(setting.selector)) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(setting.enterClass, setting.inTransform);
                        entry.target.classList.remove(setting.exitClass, setting.outTransform);
                    } else {
                        entry.target.classList.remove(setting.enterClass, setting.inTransform);
                        entry.target.classList.add(setting.exitClass, setting.outTransform);
                    }
                }
            });
        });
    }, observerOptions);

    animationSettings.forEach(setting => {
        const elementsToAnimate = document.querySelectorAll(setting.selector);
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    });
});
