// Seleciona todos os links com a classe "scroll-link"
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();  // Previne o comportamento padrão do link
      const targetId = this.getAttribute('href').substring(1);  // Remove o "#" do href
      const targetElement = document.getElementById(targetId);
  
      // Faz o scroll suave até o elemento alvo
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });