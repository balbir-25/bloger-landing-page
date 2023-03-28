const barLis = document.querySelectorAll('.bar-li');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const navbar = document.querySelector('.navbar')

barLis.forEach(barLi => {
  const drop = barLi.querySelector('.drop');
  const arrow = barLi.querySelector('.arrow');
  
  barLi.addEventListener('click', () => {
    if (drop.style.display === 'inline-block') {
      drop.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
    } else {
      drop.style.display = 'inline-block';
      arrow.style.transform = 'rotate(180deg)';
    }
  });
});

openBtn.addEventListener('click', () => {
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  navbar.style.display = 'block';
  navbar.style.animation = 'slide-in 0.5s forwards';
});
 
closeBtn.addEventListener('click', () => {
  closeBtn.style.display = 'none';
 navbar.style.animation = 'slide-out 0.5s forwards';
  setTimeout(() => {
    navbar.style.display = 'none';
    openBtn.style.display = 'block';
  }, 500);
});
 

