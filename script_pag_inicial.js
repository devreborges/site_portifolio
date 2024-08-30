document.addEventListener('DOMContentLoaded', function() {
    // Selecione todos os elementos que têm a classe 'nav_texto'
    const navItems = document.querySelectorAll('.nav_texto');
    
    // Itere sobre cada um dos itens de navegação
    navItems.forEach(function(navItem, index) {
        navItem.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
        navItem.style.transform = 'translateY(10px)'; // Movimento inicial para baixo

        // Use setTimeout para iniciar a animação, podendo adicionar um pequeno atraso entre cada item
        setTimeout(function() {
            navItem.style.transition = 'opacity 1s ease, transform 1s ease';
            navItem.style.opacity = '1';
            navItem.style.transform = 'translateY(0)';
        }, index * 100); // Atraso de 100ms entre cada item para um efeito de cascata
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sectionUmTop = document.querySelector('#section_um_top');
    sectionUmTop.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
    sectionUmTop.style.transform = 'translateX(5px)'; // Movimento inicial para baixo

    setTimeout(function() {
        sectionUmTop.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionUmTop.style.opacity = '1';
        sectionUmTop.style.transform = 'translateY(0)';
    }, 400); // Atraso para iniciar a animação após 300 milissegundos
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionUmTop = document.querySelector('#img_section');
    sectionUmTop.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
    sectionUmTop.style.transform = 'translateY(10px)'; // Movimento inicial para baixo

    setTimeout(function() {
        sectionUmTop.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionUmTop.style.opacity = '1';
        sectionUmTop.style.transform = 'translateY(0)';
    }, 700); // Atraso para iniciar a animação após 300 milissegundos
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionUmTop = document.querySelector('#portifolio');
    sectionUmTop.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
    sectionUmTop.style.transform = 'translateX(-500px)'; // Movimento inicial para a esquerda

    setTimeout(function() {
        sectionUmTop.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionUmTop.style.opacity = '1';
        sectionUmTop.style.transform = 'translateX(0)';
    }, 1500); // Atraso para iniciar a animação após 1500 milissegundos
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionUmTop = document.querySelector('#img_sobre_mim_top');
    sectionUmTop.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
    sectionUmTop.style.transform = 'translateY(-500px)'; // Movimento inicial para a esquerda

    setTimeout(function() {
        sectionUmTop.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionUmTop.style.opacity = '1';
        sectionUmTop.style.transform = 'translateY(0)';
    }, 0); // Atraso para iniciar a animação após 1500 milissegundos
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionUmTop = document.querySelector('#img_sobre_mim_top');
    sectionUmTop.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
    sectionUmTop.style.transform = 'translateY(-500px)'; // Movimento inicial para a esquerda

    setTimeout(function() {
        sectionUmTop.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionUmTop.style.opacity = '1';
        sectionUmTop.style.transform = 'translateY(0)';
    }, 0); // Atraso para iniciar a animação após 1500 milissegundos
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionUmTop = document.querySelector('#section_dash');
    sectionUmTop.style.opacity = '0'; // Começa com opacidade zero para efeito de aparecimento
    sectionUmTop.style.transform = 'translateY(-500px)'; // Movimento inicial para a esquerda

    setTimeout(function() {
        sectionUmTop.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionUmTop.style.opacity = '1';
        sectionUmTop.style.transform = 'translateY(0)';
    }, 0); // Atraso para iniciar a animação após 1500 milissegundos
});
