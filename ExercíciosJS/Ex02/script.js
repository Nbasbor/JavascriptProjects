
function verificar(){
    var age = window.document.getElementById('idade');
    var ano = Number.parseInt(age.value);
    var data = new Date();
    var anoatual = data.getFullYear();
    var idade = anoatual-ano;
    var sexo = window.document.getElementsByName('sexo');
    var img = window.document.getElementById('imagem');
    var msg = document.getElementById('msg');
    var genero = ' '
    //var img = document. createElement('img)
    //img.setAtribute('id', 'foto')
    //cria um elemento HTML pelo Javascript
    if (sexo[0].checked){
        genero = 'Homem'
        if (idade<6){
            img.src = 'homembebe.png';
            msg.innerHTML = `Você é um bebe de ${idade} anos`;
        } else if (idade>0 && idade<14){
            img.src = 'homemcrianca.png';
            msg.innerHTML = `Você é um menino de ${idade} anos`
        } else if (idade>13 && idade<18){
            img.src = 'homemadolescente.png'
            msg.innerHTML = `Você é um adolescente de ${idade} anos`
        } else if (idade>17 && idade<36){
            img.src = 'homemjovemadulto.png'
            msg.innerHTML = `Você é um homem jovem de ${idade} anos`    
        } else if (idade>35 && idade<65){
            img.src = 'homemadulto.png'
            msg.innerHTML = `Você é um homem adulto de ${idade} anos`
        } else {
            img.src = 'homemidoso.png';
            msg.innerHTML = `Você é um homem idoso de ${idade} anos`
        }
    } else if (sexo[1].checked) {
        if (idade<6){
            img.src = 'mulherbebe.png';
            msg.innerHTML = `Você é uma bebe de ${idade} anos`;
        } else if (idade>0 && idade<14){
            img.src = 'mulhercrianca.png';
            msg.innerHTML = `Você é uma menina de ${idade} anos`;
        } else if (idade>13 && idade<18){
            img.src = 'mulheradolescente.png';
            msg.innerHTML =`Você é uma adolescente de ${idade} anos`;
        } else if (idade>17 && idade<36){
            img.src = 'mulherjovemadulta.png';
            msg.innerHTML = `Você é uma mulher jovem de ${idade} anos`;
        } else if (idade>35 && idade<65){
            img.src = 'mulheradulta.png';
            msg.innerHTML =`Você é uma mulher adulta de ${idade} anos`;
        } else if (idade>65) {
            img.src = 'mulheridosa.png';
            msg.innerHTML = `Você é uma mulher idosa de ${idade} anos`;
    }  else   {
        msg.innerHTML ='Verifique o preenchimento de todos os campos';
    }}
   /* if (sex == 'Masculino' && idade<6) { //sempre usar == para igualar
        img.src = 'homembebe.png';
        msg.innerHTML = `Você é um bebe de ${idade} anos`;
    } else if (sex == 'Masculino' && idade<14){
            img.src = 'homemcrianca.png';
            msg.innerHTML = `Você é um menino de ${idade} anos`
        } else if (sex == 'Masculino' && idade<18) { // sempre usar == para igualar
            img.src = 'homemadolescente.png'
            msg.innerHTML = `Você é um adolescente de ${idade} anos`
        } else if (sex == 'Masculino' && idade<36) { //sempre usar == para igualar
            img.src = 'homemjovemadulto.png'
            msg.innerHTML = `Você é um homem jovem de ${idade} anos`
        } else if (sex == 'Masculino' && idade<65){
            img.src = 'homemadulto.png'
            msg.innerHTML = `Você é um homem adulto de ${idade} anos`
        } else if (sex == 'Masculino' && idade>64){
            img.src = 'homemidoso.png';
            msg.innerHTML = `Você é um homem idoso de ${idade} anos`
        } else if (sex == 'Feminino' && idade<6){
            img.src = 'mulherbebe.png';
            msg.innerHTML = `Você é uma bebe de ${idade} anos`
        } else if (sex == `Femninino` && idade<14){
            img.src = 'mulhercrianca.png'
            msg.innerHTML = `Você é uma menina de ${idade} anos`
        } else if (sex == 'Feminino' && idade<18){
            img.src = 'mulheradolescente.png'
            msg.innerHTML =`Você é uma adolescente de ${idade} anos`
        } else if (sex == 'Femnino' && idade>18 && idade<36){
            img.src = 'mulherjovemadulta.png'
            msg.innerHTML = `Você é uma mulher jovem de ${idade} anos`
        } else if (sex == 'Feminino' && idade<65){
            img.src = 'mulheradulta.png'
            msg.innerHTML =`Você é uma mulher adulta de ${idade} anos`
        } else if (sex == 'Feminino' && idade>64){
            img.src = 'mulheridosa.png'
            msg.innerHTML = `Você é uma mulher idosa de ${idade} anos`
        }else{
            msg.innerHTML ='Verifique todos os campos (preencha o campo de sexo com <strong>Masculino</strong> ou <strong>Feminino</strong> com as letras iniciais em MAiÚSCULO'
        }
    }*/
    //res.style.textAlign = 'center';
    //res.innerHTML = `Detectamos um ${sexo} com ${idade} anos de idade;
    //res.appendChild(img);

    }
