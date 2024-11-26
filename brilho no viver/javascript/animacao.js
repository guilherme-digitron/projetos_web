// Configuração do Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
      }
    });
  }, { threshold: 0.1 }); // 10% visível para ativar

  // Selecionar todos os elementos que devem ser animados
  const elementosAnimados = document.querySelectorAll('.animado');

  // Observar cada elemento
  elementosAnimados.forEach(elemento => observer.observe(elemento));