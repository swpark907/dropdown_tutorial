const dropDown = document.querySelector('.dropdown');

dropDown.addEventListener('click', e =>  {
  if(dropDown.className.includes('active')){
    // e.target.
  }
  dropDown.classList.toggle('active');
})