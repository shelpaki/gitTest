window.onscroll = () => {
  const header = document.querySelector('.header');
  const Y = window.scrollY;


 if (Y > 500) {
   header.classList.add ('fixed_menu'); 
  } else if (Y < 100) {
  header.classList.remove ('fixed_menu');
  }
};