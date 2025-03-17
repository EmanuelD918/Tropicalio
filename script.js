// Controle de Tamanho de Fonte
document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const minSize = 14;
    const maxSize = 20;
    const defaultSize = 16;

    function setFontSize(size) {
        html.style.fontSize = `${size}px`;
        localStorage.setItem('fontSize', size);
    }

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

    // Carregar tamanho salvo
    const savedSize = localStorage.getItem('fontSize');
    if (savedSize) setFontSize(parseInt(savedSize));
});
