const mobileMenu = document.querySelector('.mobile-menu');
const menu2 = document.querySelector('.menu2');

mobileMenu.addEventListener('click', () => {
  if (menu2.classList.contains('show')) {
    // Fechando o menu
    const menuItems = menu2.querySelectorAll('li');
    menuItems.forEach((item, index) => {
      // Aplica um atraso baseado no índice
      setTimeout(() => {
        item.classList.add('hide'); // Inicia a animação de saída
      }, index * 200); // Ajuste o tempo entre as animações
    });

    // Aguarda o tempo total da animação para esconder o menu
    setTimeout(() => {
      menu2.classList.add('hidden'); // Esconde o menu após animação
      menu2.classList.remove('show', 'hide'); // Reseta classes para o próximo uso
      menuItems.forEach(item => item.classList.remove('hide')); // Reseta animação dos itens
    }, menuItems.length * 200 + 500); // Duração total (número de itens * atraso + duração animação)
  } else {
    // Abrindo o menu
    menu2.classList.remove('hidden'); // Torna visível novamente
    menu2.classList.add('show'); // Inicia a animação de abertura
  }
});

// Reseta o estado do menu em telas maiores
window.addEventListener('resize', () => {
  if (window.innerWidth >= 759) {
    menu2.classList.add('hidden'); // Esconde o menu para telas grandes
    menu2.classList.remove('show', 'hide'); // Remove classes de animação
  }
});
