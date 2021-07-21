/*
//Percorrendo a DOM
function walkTree(root, level){
    if(root.nodeType == Node.TEXT_NODE){
        console.log(level + 'text:' + root.textContent);
    }else{
        console.log(level + root.nodeName);
    }

    for(const child of root.childNodes){
        walkTree(child, level + "     ");
    }
}
walkTree(document.querySelector('html'), "");
*/


//Adicionando TAG
function countImg(img_elements){
    const size = img_elements.length
    const child = document.createElement('h1');
    child.textContent = "Number of images: " + size;
    child.id = 'h1_novo';
    child.style.color = 'blue';
    child.style.fontSize = '5em';
    child.style.backgroundColor = 'black';
    child.style.padding = '20px';
    document.body.insertBefore(child, document.body.firstChild);
}

function changeImgs(img_elements){
    if(img_elements){
        for(const img of img_elements){
            const height = img.height;
            const width = img.width
            img.src = 'https://media.contentapi.ea.com/content/dam/eacom/SIMS/images/2021/05/ts4-hero-md-vault-section-210517-7x2-xl.jpg';
            img.height = height;
            img.width = width;
        }
    }
}
    
function extension(){
    const img_elements = document.querySelectorAll('img');
    countImg(img_elements);
    changeImgs(img_elements);
}

extension();


/*
//Mudando a cor do texto de uma tag 
const h1tag = document.querySelector('#h1_novo');
if(h1tag){
    h1tag.style.color = 'red';
    h1tag.style.fontSize = '10em';
}
*/
/*
//Alterando a cor da fonte e backgroung
const body_tag = document.querySelector('body');
if(body_tag){
    body_tag.style.color = 'blue';
    body_tag.style.backgroundColor = 'red';
}
*/
