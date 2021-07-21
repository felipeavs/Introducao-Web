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
            img.src = 'https://media.contentapi.ea.com/content/dam/eacom/SIMS/images/2017/10/ea-the-sims-featured-image-16-9.jpg.adapt.crop191x100.1200w.jpg';
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

