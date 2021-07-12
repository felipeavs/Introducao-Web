let counterOpenDoor = 0;
let counterCloseDoor = 0;

function getDate(){
    const data = new Date();
    return data.getDate() + '/'+ (parseInt(data.getMonth())+1) + '/' + data.getFullYear();
}

function getHours(){
    const data = new Date();
    return data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
}

function switchDoor(doorHidden, doorVisible){
        doorHidden.classList.add('hidden'); 
        doorVisible.classList.remove('hidden');
}

function onClick(){

    const  closeDoor = document.querySelector('#porta-fechada');
    const openDoor = document.querySelector('#porta-aberta');
    const statusDaPorta = document.querySelector('.status');
    const textOpenDoor = document.querySelector('.contador-porta-aberta')
    const textCloseDoor = document.querySelector('.contador-porta-fechada')

    if(openDoor.className === 'hidden'){
        counterOpenDoor++;
        switchDoor(closeDoor, openDoor);
        statusDaPorta.firstChild.data = 'Porta Aberta';
        textOpenDoor.firstChild.data = 'Porta aberta ' + counterOpenDoor + ' vezes\n' + getDate() + ' '+ getHours();
    }
    else{
        counterCloseDoor++;
        switchDoor(openDoor, closeDoor);
        statusDaPorta.firstChild.data = 'Porta Fechada';
        textCloseDoor.firstChild.data = 'Porta fechada ' + counterCloseDoor + ' vezes\n' + getDate() + ' ' + getHours();
    }
}

const image = document.querySelectorAll('.img-porta');
for(let item of image){
    item.addEventListener('click', onClick)
}