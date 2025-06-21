// You can add popup, typewriter effect, or clues interaction here.
console.log("NeonWorks Lore site active 🔐");

const clueBtn = document.getElementById('clue-btn');
const clueResponse = document.getElementById('clue-response');

clueBtn.addEventListener('click', () => {
  clueResponse.textContent = 'Welcome to the game....';
  clueResponse.style.display = 'block';
    setTimeout(() => {
    clueResponse.style.display = 'none';
    clueResponse.textContent = '';
  }, 2000); // message disappears after 2 seconds
});



window.addEventListener('load', () => {
  const loader = document.getElementById('loader-screen');
  document.body.classList.add('no-scroll');

  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';

    setTimeout(() => {
      loader.remove();
      document.body.classList.remove('no-scroll');
    }, 600);
  }, 2800);
});


document.querySelectorAll('.clue-item').forEach(item => {
  item.addEventListener('click', () => {
    const content = item.querySelector('.clue-content');
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });
  
  // Optional: toggle via keyboard (Enter/Space)
  item.addEventListener('keydown', e => {
    if(e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      item.click();
    }
  });
});

const timelineItems = document.querySelectorAll('.timeline li');
const timelineDetails = document.getElementById('timeline-details');

timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    timelineDetails.textContent = item.getAttribute('data-details');
  });
  item.addEventListener('keydown', e => {
    if(e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      item.click();
    }
  });
});

document.getElementById('skip-loader').addEventListener('click', () => {
  const loader = document.getElementById('loader-screen');
  loader.style.opacity = '0';
  loader.style.pointerEvents = 'none';
  setTimeout(() => {
    loader.remove();
    document.body.classList.remove('no-scroll');
  }, 600);
});






