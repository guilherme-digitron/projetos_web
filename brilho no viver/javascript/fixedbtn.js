function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateButtonPosition() {
    const button = document.querySelector('.fixed-btns');
    const footer = document.querySelector('.footer');
    if (!footer) return; // Verifica se o rodapé existe

    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Verifica se o rodapé está visível na janela
    if (footerRect.top < windowHeight) {
        // Quando o rodapé estiver visível, o botão deve parar na parte superior do rodapé
        const overlap = windowHeight - footerRect.top;
        button.style.transform = `translateY(-${overlap}px)`;
    } else {
        // Quando o rodapé não estiver visível, o botão fica fixo
        button.style.transform = 'translateY(0)';
    }
}

// Atualizar a posição do botão ao rolar a página
window.addEventListener('scroll', updateButtonPosition);

// Chamar a função quando a página é carregada
window.addEventListener('load', updateButtonPosition);
