
// VARIABLES 
const iconMenu = document.querySelector('.responsive-menu-icon')
const responsiveMenu = document.querySelector('.responsive-menu')
const linkMenu = document.querySelector('.responsive-menu-links')
// Icono de cerrar ventana de links en menu mobile
const closeMenu = document.querySelector('.responsive-menu-close')
// Menu General
const menu = document.getElementById('menu');
// Lista de enlaces del Menu en grandes resoluciones 
const menuLinks = document.querySelector('.max-menu-links');

const titleNav = document.querySelector('.title-menu-responsive')

const linksNavMobile = document.querySelector('container-responsive-mobile')




    

// Crea un objeto MediaQueryList para la resolución deseada
const mediaQuery = window.matchMedia('(max-width: 1030px)');

// Ejecuta la función al cargar la página para aplicar el estado inicial
// applyResponsiveClass(mediaQuery);

// Agrega un event listener para detectar cambios en la resolución
// mediaQuery.addEventListener('change', applyResponsiveClass);

// ARRAY DE PROYECTOS
const projects = [
  {
      id:1,
      title: 'TechHub 💻',
      subtitle: 'tech-hub',
      description: `Tech Hub es un ecommerce de productos electrónicos, presentando una aplicacion con una arquitectura de cliente-servidor, donde el front-end se comunica con el back-end a través de una API REST. Esta API se ha construido utilizando Java  y Spring Boot, lo que permite manejar las solicitudes y respuestas entre el front-end y la base de datos.`,
      image: '../assets/projects/tech-hub.png',
      githubLink: 'https://github.com/juanibarguen/TechHub-FrontEnd',
      webLink: 'https://www.example.com/proyecto',
      technologies: ['Angular','Java','Spring Boot', 'HTML', 'CSS','TypeScript','MySQL']
    },
    {
      id:2,
      title: 'Weatherio 🌤️',
      subtitle: 'weatherio',
      description: `Weatherio está diseñada para funcionar completamente del lado del cliente, utilizando tecnologías como HTML y CSS para su interfaz, Angular con TypeScript para la funcionalidad.
      La aplicación consume la API de OpenWeatherMap para obtener datos precisos y actualizados sobre el clima actual y el pronóstico para los próximos 5 días.`,
      image: '../assets/projects/wheario.png',
      githubLink: 'https://github.com/',
      webLink: 'https://github.com/juanibarguen/Weatherio',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'API']
    },
    {
      id:3,
      title: 'Calculator ✖️ ➗ ',
      subtitle: 'calculator-ios',
      description: `Esta aplicación de calculadora fue desarrollada utilizando Swift, junto con las tecnologías de Storyboard y componentes de UIKit en el entorno de desarrollo Xcode.
      Permite a los usuarios realizar operaciones matemáticas básicas, como suma, resta, multiplicación y división, de manera sencilla y rápida.`,
      image: '../assets/projects/tech-hub.png',
      image2:'assets/projects/calculator2.png',
      githubLink: 'https://github.com/juanibarguen/CalculatorApp',
      technologies: ['Swift', 'UIkit']
    },
    {
      id:4,
      title: 'Viviendas Sion 🏠',
      subtitle: 'viviendas-sion',
      description: 'Mi primer proyecto en el mundo del desarrollo web, desarrollada utilizando HTML, CSS, Bootstrap y un toque de JavaScript, este sitio web brinda a los visitantes la oportunidad de explorar una variedad de opciones de viviendas de manera fácil y agradable.',
      image: 'assets/projects/viviendas-sion.png',
      githubLink: 'https://github.com/juanibarguen/viviendas-sion',
      webLink: 'https://juanibarguen.github.io/viviendas-sion/',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
    }
  ];


// FORM CONTACT
// Verificar si la URL contiene el fragmento "#message-sent"
if (window.location.hash === '#message-sent') {
        // Crear el div para mostrar el mensaje
        var messageDiv = document.createElement('div');
        messageDiv.className = 'message-container';
  
        // Crear el div para contener el contenido del mensaje
        var contentDiv = document.createElement('div');
        contentDiv.className = 'content';
  
        // Crear el párrafo dentro del div de contenido
        var paragraph = document.createElement('p');
        paragraph.textContent = 'Message sent succesfully ✅ ';
  
        // Crear el botón 'Ok' dentro del div de contenido
        var okButton = document.createElement('button');
        okButton.textContent = 'Ok';
        okButton.addEventListener('click', function() {
          messageDiv.style.display = 'none';
          // Eliminar el fragmento '#message-sent' de la URL
          history.replaceState(null, null, ' ');
        });
  
        // Agregar el párrafo y el botón al div de contenido
        contentDiv.appendChild(paragraph);
        contentDiv.appendChild(okButton);
  
        // Agregar el div de contenido al div del mensaje
        messageDiv.appendChild(contentDiv);
  
        // Agregar el div del mensaje al cuerpo de la página
        document.body.appendChild(messageDiv);
}



// Selección de elementos
const maxMenu = document.querySelector('.max-menu');
const linksMaxMenu = document.querySelector('.container-links');
const iconoMenu = document.querySelector('.max-menu-icon');

// Evento para alternar la clase de visibilidad al hacer clic en el ícono del menú
iconoMenu.addEventListener('click', () => {
  iconoMenu.classList.toggle('rotate');
  linksMaxMenu.classList.toggle('links-view');  // Alterna la visibilidad del menú
});

// Cerrar el menú cuando se hace clic en un enlace
const enlaces = document.querySelectorAll('.container-links a');
enlaces.forEach((enlace) => {
  enlace.addEventListener('click', () => {
    iconoMenu.classList.remove('rotate');
    linksMaxMenu.classList.remove('links-view');  // Oculta el menú
  });
});

// Control de la visibilidad del menú basado en el scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 200) {
    // Si el menú está oculto y no tiene la clase de vista
    if (!maxMenu.classList.contains('max-menu-view')) {
      maxMenu.classList.remove('max-menu-hide'); // Remueve la animación de ocultar si está presente
      maxMenu.classList.add('max-menu-view'); // Agrega la animación de aparición
    }
  } else {
    // Si el menú está visible y no tiene la clase de ocultar
    if (maxMenu.classList.contains('max-menu-view')) {
      maxMenu.classList.remove('max-menu-view'); // Remueve la animación de aparición
      maxMenu.classList.add('max-menu-hide'); // Agrega la animación de ocultar
    }
  }
});

// Control del menú responsivo
const container = document.querySelector(".responsive-menu");
const btnMenuResponsive = document.querySelector('.btn-responsive-menu');
const menuResponsiveExpand = document.querySelector('.responsive-menu-expand');
const menuResponsiveNav = document.querySelector('.responsive-menu-navbar');
const menuResponsiveClose = document.querySelector('.responsive-menu-close');

document.getElementById("expandButton").addEventListener("click", function() {
  container.classList.add("expanded");
  menuResponsiveNav.style.display = 'none';
  menuResponsiveExpand.style.display = 'flex';
});

menuResponsiveClose.addEventListener('click', () => {
  container.classList.remove('expanded');
  menuResponsiveNav.style.display = 'flex';
  menuResponsiveExpand.style.display = 'none';
});
