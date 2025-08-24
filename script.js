// Live updating About Me content
const aboutText = document.getElementById('aboutText');

aboutText.addEventListener('input', () => {
    console.log('About Me content:', aboutText.value);
});

// You can add more interactivity here, e.g., dynamic project links or animations