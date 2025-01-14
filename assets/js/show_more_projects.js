document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-projects');
  const projects = document.querySelectorAll('.project');
  let visibleCount = 3;

  toggleButton.addEventListener('click', function () {
    visibleCount = visibleCount >= projects.length ? 3 : visibleCount + 3;

    projects.forEach((project, index) =>
      project.classList.toggle('d-none', index >= visibleCount)
    );

    toggleButton.textContent = visibleCount >= projects.length ? 'Show Less' : 'Show More';
  });
});
