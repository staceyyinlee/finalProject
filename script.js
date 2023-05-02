const tiktokIcon = document.getElementById('tiktokIcon');
const clickIcon = document.getElementById('clickIcon');

tiktokIcon.addEventListener('click', function() {
  document.body.style.background = 'black';
  document.getElementById('bottom-left').style.backgroundColor = 'black';
  document.getElementById('bottom-right').style.backgroundColor = 'black';
  clickIcon.style.display = 'none';
  
  const popups = document.getElementsByClassName('popup');
  const numPopups = popups.length;
  
  for (let i = 0; i < numPopups; i++) {
    const popup = popups[i];
    popup.style.display = 'block';
    
    const randomX = Math.floor(Math.random() * (window.innerWidth - popup.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - popup.offsetHeight));
    popup.style.left = `${randomX}px`;
    popup.style.top = `${randomY}px`;
  }
});

function hidePopup(id) {
  document.getElementById(id).style.display = 'none';
  document.body.style.backgroundColor = 'black';
  document.getElementById('bottom-left').style.backgroundColor = 'black';
  document.getElementById('bottom-right').style.backgroundColor = 'black';
  const popups = document.getElementsByClassName('popup');
  const numPopups = popups.length;
  const randomPopupIndex = Math.floor(Math.random() * numPopups);
  const nextPopup = popups[randomPopupIndex];
  nextPopup.style.display = 'block';
  const randomX = Math.floor(Math.random() * (window.innerWidth - nextPopup.offsetWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - nextPopup.offsetHeight));
  nextPopup.style.left = `${randomX}px`;
  nextPopup.style.top = `${randomY}px`;
}

