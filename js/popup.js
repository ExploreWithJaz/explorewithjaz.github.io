const openBtn = document.getElementById('open-btn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function() {
  overlay.style.display = 'block';
  setTimeout(() => {
    overlay.style.opacity = '1';
    document.getElementById('popup').style.opacity = '1';
  }, 50); // Delay added for smoother transition
});

closeBtn.addEventListener('click', function() {
  overlay.style.opacity = '0';
  document.getElementById('popup').style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300); // Same duration as CSS transition
});

const openBtnPet = document.getElementById('open-btn-pet');
const overlayPet = document.getElementById('overlay-pet');
const closeBtnPet = document.getElementById('close-btn-pet');

openBtnPet.addEventListener('click', function() {
  overlayPet.style.display = 'block'; 
  setTimeout(() => {
    overlayPet.style.opacity = '1'; 
    document.getElementById('popup-pet').style.opacity = '1'; 
  }, 50); // Delay added for smoother transition
});

closeBtnPet.addEventListener('click', function() {
  overlayPet.style.opacity = '0';
  document.getElementById('popup-pet').style.opacity = '0'; 
  setTimeout(() => {
    overlayPet.style.display = 'none'; 
  }, 300); // Same duration as CSS transition
});





const openBtnMinion = document.getElementById('open-btn-minion');
const overlayMinion = document.getElementById('overlay-minion');
const closeBtnMinion = document.getElementById('close-btn-minion');

openBtnMinion.addEventListener('click', function() {
  overlayMinion.style.display = 'block'; 
  setTimeout(() => {
    overlayMinion.style.opacity = '1'; 
    document.getElementById('popup-minion').style.opacity = '1'; 
  }, 50); // Delay added for smoother transition
});

closeBtnMinion.addEventListener('click', function() {
  overlayMinion.style.opacity = '0';
  document.getElementById('popup-minion').style.opacity = '0'; 
  setTimeout(() => {
    overlayMinion.style.display = 'none'; 
  }, 300); // Same duration as CSS transition
});