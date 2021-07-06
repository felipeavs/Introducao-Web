function onClick(){
    
    const imagem = document.querySelector('img');
    const button = document.querySelector('button');
    const body = document.querySelector('body');

    if(button.className === 'button-off'){
        button.classList.remove('button-off');
        body.classList.remove('body-off');
        button.firstChild.data = 'Ligar';
        imagem.src = 'imagens/Desligada.png';
    }
    else{
        button.classList.add('button-off');
        body.classList.add('body-off');
        button.firstChild.data = 'Desligar';
        imagem.src = 'imagens/Ligada.png';
    }    
}

const button = document.querySelector('button');
button.addEventListener('click', onClick);