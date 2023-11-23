// header

// section inicio
ScrollReveal().reveal('.inicio-texto h1', {
    origin: 'left',
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out'
  });
  
  ScrollReveal().reveal('.inicio-texto p', {
    origin: 'left',
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 200
  });
  
  ScrollReveal().reveal('.inicio-imagem img', {
    origin: 'right',
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out',
  });
  
  // section Sobre
  ScrollReveal().reveal('.sobre-texto h4', {
    origin: 'left',
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out'
  });
  
  ScrollReveal().reveal('.sobre-texto p', {
    origin: 'left',
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 500
  });
  
  ScrollReveal().reveal('.sobre-imagem', {
    duration: 2000, 
    easing: 'ease-in-out',
    opacity: 0, 
  });
  
  ScrollReveal().reveal('.sobre-imagem figcaption', {
    origin: 'top',
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out'
  });
  
  // section História
  ScrollReveal().reveal('.historia-texto h2', {
    origin: 'left',
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out'
  });
  
  ScrollReveal().reveal('.historia-texto p', {
    origin: 'left',
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 500 
  });
  
  ScrollReveal().reveal('.historia-imagem img', {
    origin: 'right',
    duration: 1000,
    easing: 'ease-in-out'
  });
  
  ScrollReveal().reveal('.historia-imagem figcaption', {
    origin: 'right',
    duration: 1000,
    easing: 'ease-in-out'
  });
  
  // section diferencial
  ScrollReveal().reveal('.diferencial-titulo h2', {
    origin: 'top',
    distance: '30px',
    duration: 1000,
    easing: 'ease-in-out'
  });
  
  const listaDiferenciais = document.querySelectorAll('.diferencial-lista li');
  
  listaDiferenciais.forEach((item, index) => {
    const isImpar = index % 2 !== 0;
  
    ScrollReveal().reveal(item, {
      origin: isImpar ? 'left' : 'right',
      distance: '30px',
      duration: 1000,
      easing: 'ease-in-out',
      delay: 200 * index
    });
  });
  