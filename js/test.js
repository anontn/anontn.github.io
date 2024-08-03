function adjustHeaderPosition() {
    const header = document.querySelector('.header');
    const width = window.innerWidth; 

    if (width >= 1366 && width <= 1920) { 
        const minWidth = 1366; 
        const maxWidth = 1920; 
        const minLeft = 0; 
        const maxLeft = 277; 

        const leftPosition = maxLeft * (width - minWidth) / (maxWidth - minWidth);

        
        header.style.left = `${leftPosition}px`;
    } else if (width < 1366) { 
        header.style.left = '0px';
    } else { 
        header.style.left = '277px'; 
    }
}

window.addEventListener('resize', adjustHeaderPosition);

adjustHeaderPosition();