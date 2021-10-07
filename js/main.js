function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        dias = parseInt(timer / 60 / 60 / 24, 10);
        horas = parseInt(timer / 60 / 60 % 24, 10);
        minutes = parseInt(timer / 60 % 60, 10);
        seconds = parseInt(timer % 60, 10);
        horas = horas == 0 ? "00" : horas;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = dias +" dias, "+horas + ":" + minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function configTimer() {

    var data = new Date(), mesN, anoN, diferenca;

    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var hoje = new Date();

    var strDia = String(data.getDate()).padStart(2, '0');
    var strMes = String(data.getMonth() + 1).padStart(2, '0');
    var strHoje = strDia + '/' + strMes + '/' + ano;
    if(dia < 5){
        mesN = mes;
    }else{
        mesN = mes + 1;
    }
    if(mes != 12){
        anoN = ano;
    }else{
        anoN = ano + 1;
    }

    var aniversario = new Date(String(mesN).padStart(2, '0')+"/05/"+String(anoN).padStart(2, '0')+" 22:14:00");
    var timeDiff = Math.abs(aniversario.getTime() - hoje.getTime());
    var duration = Math.ceil(timeDiff / (1000));
    display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
}

function loader(){
    loader = document.querySelector('#loader');
    setTimeout(() => {loader.classList.add("trans");}, 2000);
}

