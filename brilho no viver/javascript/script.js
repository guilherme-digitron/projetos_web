var menumobile = document.querySelector(".mobile-menu")
var links = document.querySelector('.menu2')

function menu_abrir()
{


    if(links.style.display == 'none')
    {

        links.style.display = 'block'

    }
    else
    {

        links.style.display = 'none'

    }


}

function tamanho ()
  {

    if (window.innerWidth >= 759) {
      
      links.style.display = 'none'

    }else
    {

      links.style.display = 'block'

    }

  }


  const mobileMenu = document.querySelector('.mobile-menu');
  const menu2 = document.querySelector('.menu2');
  
  mobileMenu.addEventListener('click', () => {
    menu2.classList.toggle('show'); // Exibe ou oculta o menu
  });
  