document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-projects');
  const projects = document.querySelectorAll('.project');

  toggleButton.addEventListener('click', function () {
    const hiddenProjects = document.querySelectorAll('.project.d-none');

    if (hiddenProjects.length > 0) {
      // Mostrar todos os projetos
      projects.forEach(project => project.classList.remove('d-none'));
      this.textContent = 'Show Less'; // Altera o texto do botão
    } else {
      // Ocultar todos os projetos, exceto os primeiros 3
      projects.forEach((project, index) => {
        if (index >= 3) project.classList.add('d-none');
      });
      this.textContent = 'Show More'; // Altera o texto do botão
    }
  });
});
