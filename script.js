document.addEventListener('DOMContentLoaded', () => {
    // Add simple reveal animation for hobby items
    const hobbyItems = document.querySelectorAll('.hobby-item');
    
    hobbyItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 800 + (index * 100));
    });

    // Add a subtle parallax effect on the profile card based on mouse movement
    const card = document.querySelector('.profile-card');
    const container = document.querySelector('.container');

    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    container.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
