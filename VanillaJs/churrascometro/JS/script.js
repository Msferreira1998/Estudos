
    let inputAdultos = document.getElementsByTagName("input")[0]
    let inputCriancas = document.getElementsByTagName("input")[1]
    let inputHoras = document.getElementsByTagName("input")[2]

    let carne = document.getElementById("carne");
    let cerveja = document.getElementById("cerveja");
    let bebidas = document.getElementById("bebidas");

    

    function calcular(){
        
        let adultos = inputAdultos.value;
        let criancas = inputCriancas.value;
        let duracao = inputHoras.value

        let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
        let qtdTotalCerveja = cervejaPP(duracao) * adultos;
        let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
        
        imprimirQtd(qtdTotalCarne, qtdTotalCerveja, qtdTotalBebidas)
    }

    function imprimirQtd(carneP, cervejaP, bebidasP){
        carne.innerHTML = carneP/1000+"kg "+"de Carne" 
        cerveja.innerHTML = cervejaP/1000+"L "+"de Cerveja" 
        bebidas.innerHTML = bebidasP/1000+"L "+"de Refrigerante/Água"
    }

    function carnePP(duracao){
        if (duracao >= 6){
            return 650;
        }else{
            return 400;
        }

    }

    function cervejaPP(duracao){
        if (duracao >= 6){
            return 2000;
        }else{
            return 1200;
        }
    }

    function bebidasPP(duracao){
        if (duracao >= 6){
            return 1500;
        }else{
            return 1000;
        }
    }
