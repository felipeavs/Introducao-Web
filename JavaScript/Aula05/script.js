let status = false;

function onClick(){
    
    const imagem = document.querySelector('img');
    const button = document.querySelector('button');
    const body = document.querySelector('body');

    if(!status){
        imagem.src = 'imagens/Ligada.png';
        status = true;
        body.style.backgroundColor = 'white';
        button.style.backgroundColor = 'tomato';
        button.firstChild.data = 'Desligar';
    }
    else{
        imagem.src = 'imagens/Desligada.png';
        status = false;
        body.style.backgroundColor = 'silver'
        button.style.backgroundColor = 'lightgreen';
        button.firstChild.data = 'Ligar';
    }
    
}

const button = document.querySelector('button');
button.addEventListener('click', onClick);