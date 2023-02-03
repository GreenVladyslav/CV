const btn = document.querySelector('.btn'),
      body = document.body,
      toggleText = document.querySelector('.toggleMode')
      link = document.querySelectorAll('a'),
      hoverLinkDark = document.querySelector('.hoverLinkDark');

btn.addEventListener('click', () => {

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleText.textContent = 'Change to Light Mode';
        
        link.forEach(a => {
            a.style.color = '#4e5b6f';
            a.style.textDecoration = 'underline'
        })
    } else {
        toggleText.textContent = 'Change to Dark Mode';
        link.forEach(a => {
            a.style.color = '#5a513666';
            a.style.textDecoration = 'underline'
        })
    }
    
});

