function setBootstrapTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', theme);
}

setBootstrapTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setBootstrapTheme);
