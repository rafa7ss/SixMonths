function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var timerInterval = setInterval(function () {
        dias = parseInt(timer / 60 / 60 / 24, 10);
        horas = parseInt(timer / 60 / 60 % 24, 10);
        minutes = parseInt(timer / 60 % 60, 10);
        seconds = parseInt(timer % 60, 10);
        horas = horas == 0 ? "00" : horas;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if (timer != 0) {
            display.textContent = dias +" dias, "+horas + ":" + minutes + ":" + seconds;
        }else{
            display.textContent = dias +" dias, "+horas + ":" + minutes + ":" + seconds;
            document.getElementById('btnTrans').classList.remove('disabled');
            clearInterval(timerInterval);
        }
        timer--;
    }, 1000);
}

function configTimer() {

    var display = document.querySelector('#timer'); // selecionando o timer
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
        display.textContent = "0 dias, 00:00:00";
        setTimeout(() => {document.getElementById('btnTrans').classList.remove('disabled');}, 2000);
        return;
    }
    if(mes != 12){
        anoN = ano;
    }else{
        anoN = ano + 1;
    }

    var aniversario = new Date(String(mesN).padStart(2, '0')+"/05/"+String(anoN).padStart(2, '0')+" 00:00:00");
    var aniversario = new Date(String(10).padStart(2, '0')+"/23/"+String(anoN).padStart(2, '0')+" 00:22:00");
    var timeDiff = Math.abs(aniversario.getTime() - hoje.getTime());
    var duration = Math.ceil(timeDiff / (1000));
    startTimer(duration, display); // iniciando o timer
}

function loader(){
    loader = document.querySelector('#loader');
    cover = document.querySelector('#cover');
    setTimeout(() => {cover.classList.remove("trans");}, 800);
    setTimeout(() => {loader.classList.add("trans");}, 1000);
}

function transicao(){
    cover = document.querySelector('#cover');
    setTimeout(() => {cover.classList.add("trans");}, 500);
    setTimeout(() => {content.classList.add("visible");}, 500);
}