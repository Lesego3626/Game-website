document.addEventListener('DOMContentLoaded', () => {
  console.log("NeonWorks Lore site active 🔐");

  const loader = document.getElementById('loader-screen');
  const sound = document.getElementById('startup-sound');
  const terminal = document.getElementById('terminal-welcome');

  // Prevent scrolling while loading
  document.body.classList.add('no-scroll');
  
  // 👇 Wait for first user interaction to play sound
  const unlockSound = () => {
    sound.play().catch((e) => {
      console.warn("User gesture needed to play sound", e);
    });
    document.removeEventListener('click', unlockSound);
  };
  document.addEventListener('click', unlockSound);


  // Terminal typewriter effect
  const lines = [
    'ACCESS GRANTED...',
    'Welcome, Agent Leon.',
    'Initializing secure files...',
    'Decrypting clone data...'
  ];

  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex < lines.length) {
      const line = lines[lineIndex];
      if (charIndex < line.length) {
        terminal.textContent += line.charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, 50);
      } else {
        terminal.textContent += '\n';
        charIndex = 0;
        lineIndex++;
        setTimeout(typeLine, 500);
      }
    }
  }

  typeLine();

  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(() => {
      loader.remove();
      document.body.classList.remove('no-scroll');
    }, 600);
  }, 9000);

  // Timeline and clues behavior (same as before)
  document.querySelectorAll('.clue-item').forEach(item => {
    item.addEventListener('click', () => {
      const content = item.querySelector('.clue-content');
      content.classList.toggle('hidden');
    });
    item.addEventListener('keydown', e => {
      if (e.key === "Enter" || e.key === " ") {
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
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.click();
      }
    });
  });
});

