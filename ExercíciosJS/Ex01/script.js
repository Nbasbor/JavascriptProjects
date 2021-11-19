function carregar() {
    var msg =  window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var titulo = window.document.getElementById('titulo');
    var data =  new Date();
    //var hora = 1
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
   
    if ( hora>5&&hora<=11) {
        //Bom dia
        img.src = 'manha.png'
        msg.innerHTML =`Agora são ${hora} horas`;
        document.body.style.background = '#567CB4';
        titulo.innerHTML = 'Bom dia!';
        titulo.style.color = '#E5D3C9';

    } else {
        if (hora>11 && hora<18) {
            //Boa tarde
            img.src = 'tarde.png'
            msg.innerHTML = `Agora são ${hora} horas`;
            titulo.innerHTML =  'Boa tarde!';
            titulo.style.color = '#F2B279';
        } else if (hora>17 && hora<=24){
            //Boa noite
            img.src = 'noite.png'
            msg.innerHTML = `Agora são ${hora} horas`; 
            document.body.style.background = '#172E36';
            titulo.innerHTML = 'Boa noite!';
            titulo.style.color = '#C28448';
        } else {
            //Boa madruada
            img.src = 'madragada.png'
            msg.innerHTML = `Agora são ${hora} horas`;
            document.body.style.background = '#026873';
            titulo.innerHTML = 'Boa madrugada!'
            titulo.style.color = '#03A678';
        }
    }

}

