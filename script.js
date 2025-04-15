// Controle de Tamanho de Fonte e Modo de Alto Contraste
document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const body = document.body;
    const minSize = 14;
    const maxSize = 20;
    const defaultSize = 16;

    // Função para alterar o tamanho da fonte
    function setFontSize(size) {
        html.style.fontSize = `${size}px`;
        localStorage.setItem('fontSize', size);
    }

    // Carregar tamanho salvo
    const savedSize = localStorage.getItem('fontSize');
    if (savedSize) setFontSize(parseInt(savedSize));

    // Acessibilidade: alternar exibição do menu
    const accessibilityToggle = document.getElementById('accessibilityToggle');
    const accessibilityMenu = document.getElementById('accessibilityMenu');

    accessibilityToggle.addEventListener('click', () => {
        // Alterna a classe "d-none" para mostrar ou esconder o menu
        accessibilityMenu.classList.toggle('d-none');
    });

    // Eventos dos botões no menu de acessibilidade
    document.getElementById('increaseFont').addEventListener('click', () => {
        const currentSize = parseInt(getComputedStyle(html).fontSize);
        if (currentSize < maxSize) setFontSize(currentSize + 1);
    });

    document.getElementById('decreaseFont').addEventListener('click', () => {
        const currentSize = parseInt(getComputedStyle(html).fontSize);
        if (currentSize > minSize) setFontSize(currentSize - 1);
    });

    document.getElementById('resetFont').addEventListener('click', () => {
        setFontSize(defaultSize);
    });

    // Alterna o modo de alto contraste
    document.getElementById('toggleContrast').addEventListener('click', () => {
        body.classList.toggle('high-contrast');
    });
});
