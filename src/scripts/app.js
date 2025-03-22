import html2pdf from 'html2pdf.js';

// Función para cambiar el tema de oscuro a claro
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  const toggle = document.querySelector('.theme-toggle');
  toggle.classList.toggle('theme-toggle--toggled');
}

// Función para cambiar la animación del tema oscuro en base al localStorage
function applyStoredTheme() {
  const storedTheme = localStorage.getItem('theme');
  const html = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');

  if (storedTheme === 'dark') {
    html.classList.add('dark');
    toggle.classList.add('theme-toggle--toggled');
  } else {
    html.classList.remove('dark');
    toggle.classList.remove('theme-toggle--toggled');
  }
}

// Función para descargar el PDF del CV usando html2pdf
function downloadPDF() {
  const element = document.getElementById("cv-content");

  if (!element) {
    console.error("No se encontró el elemento para generar el PDF.");
    return;
  }

  try {
    html2pdf()
  .from(element)
  .set({
    margin: 0,
    filename: 'CV_Adam_Sanchez.pdf',
    html2canvas: {
      backgroundColor: '#000000',
      useCORS: true,
      scale: 2,
      compress: true
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  })
  .save('CV_Adam_Sanchez.pdf');
  } catch (error) {
    console.error("Error al cargar html2pdf.js:", error);
  }
}

// Establecer el tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    applyStoredTheme();
  
    const darkModeButton = document.getElementById('dark-mode-toggle');
    darkModeButton.addEventListener('click', toggleDarkMode);
  
    const downloadButton = document.getElementById('download-pdf');
    downloadButton.addEventListener('click', downloadPDF);
});
