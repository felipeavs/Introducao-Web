let originX = null;
let originY = null;
let offsetX = 0;
let offsetY = 0;
let dragStarted = false;
let delta = 50;

function onDragStart(event) {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    originX = event.clientX;
    originY = event.clientY;
    dragStarted = true; 
}

function onDragMove(event) {
    if (!dragStarted) {
        return;
    }
    event.preventDefault();
    const deltaX = event.clientX - originX;
    const deltaY = event.clientY - originY;
    const translateX = offsetX + deltaX;
    const translateY = offsetY + deltaY;
    event.currentTarget.style.transform = 'translate(' +
        translateX + 'px, ' + translateY + 'px)';
}

function onDragEnd(event) {
    dragStarted = false;
    offsetX += event.clientX - originX;
    offsetY += event.clientY - originY;
}

function transformImg(moveX, moveY){
    dragon.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
}

function moveByArrow(event) {
    dragon.style.left = offsetX;
    if (event.key === 'ArrowRight') {
        const translateX = offsetX + delta;
        transformImg(translateX, offsetY)
        offsetX += delta;
    }
    else if (event.key === 'ArrowLeft') {
        const translateX = offsetX - delta;
        const translateY = offsetY;
        transformImg(translateX, offsetY)
        offsetX -= delta;
    }
    else if (event.key === 'ArrowUp') {
        const translateY = offsetY - delta;
        transformImg(offsetX, translateY)
        offsetY -= delta;
    }
    else if (event.key === 'ArrowDown') {
        const translateY = offsetY + delta;
        transformImg(offsetX, translateY)
        offsetY += delta;
    } 
}

const dragon = document.querySelector('img');
dragon.addEventListener('pointerdown', onDragStart);
dragon.addEventListener('pointerup', onDragEnd);
dragon.addEventListener('pointermove', onDragMove);

//Movimentos pelas setinhas
document.addEventListener('keydown', moveByArrow);