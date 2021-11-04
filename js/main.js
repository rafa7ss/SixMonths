function startTimer(duration, display) {
    
    //Variáveis com duração
    var timer = duration, minutes, seconds;

    //Variável que seta intervalo para atualizar o timer
    var timerInterval = setInterval(function () {

        //Variáveis com duração formatada
        dias = parseInt(timer / 60 / 60 / 24, 10);
        horas = parseInt(timer / 60 / 60 % 24, 10);
        minutes = parseInt(timer / 60 % 60, 10);
        seconds = parseInt(timer % 60, 10);
        horas = horas < 10 ? "0" + horas : horas;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //Condição que verifica se o timer está zerado ou não
        if (timer != 0) {
            display.textContent = dias +" dias, "+horas + ":" + minutes + ":" + seconds;
        }else{
            display.textContent = dias +" dias, "+horas + ":" + minutes + ":" + seconds;
            document.getElementById('btnTrans').classList.remove('disabled');
            clearInterval(timerInterval);
        }

        //Tira um segundo do timer
        timer--;

    }, 1000);

}

function configTimer() {

    var display = document.querySelector('#timer'); // selecionando o timer
    var data = new Date(), mesN, anoN, diferenca;

    //Variáveis com data atual
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var hoje = new Date();

    //Variáveis com data atual em formato String
    var strDia = String(data.getDate()).padStart(2, '0');
    var strMes = String(data.getMonth() + 1).padStart(2, '0');
    var strHoje = strDia + '/' + strMes + '/' + ano;
    
    //Condição que confere se o dia já chegou!
    if(dia == 5 && mes == 11){
        display.textContent = "0 dias, 00:00:00";
        setTimeout(() => {document.getElementById('btnTrans').classList.remove('disabled');}, 2000);
        return;
    }

    //Data do aniversário
    var aniversario = new Date("11/05/2021 00:00:00");

    //Data de teste
    // var aniversario = new Date(String(11).padStart(2, '0')+"/"+dia+"/"+String(ano).padStart(2, '0')+" "+hoje.getHours() + ":" + hoje.getMinutes() + ":" + (hoje.getSeconds()+5));
    //Tempo de diferença entra aniversário e data atual
    var timeDiff = Math.abs(aniversario.getTime() - hoje.getTime());

    //Tempo de diferença sem milissegundos
    var duration = Math.ceil(timeDiff / (1000));

    //Inicia o Timer
    startTimer(duration, display);
}

//Faz a transição entre o Loader e o Timer
function loader(){
    if(localStorage.getItem('view')){

        transicao();

    }else{

        loader = document.querySelector('#loader');
        imagesLoader = document.querySelector('#imagesLoader');
        cover = document.querySelector('#cover');
        setTimeout(() => {cover.classList.remove("trans");}, 2000);
        setTimeout(() => {loader.classList.add("trans");}, 2200);
        setTimeout(() => {imagesLoader.classList.remove("heartbeat");}, 3000);
        configTimer();

    }

    document.getElementById('navbarheight').value = document.getElementById('navbar').offsetHeight;
    menuclick();
}

//Faz a transição entre o Tiemr e o Site, com o Loader aparecendo entre os dois
function transicao(){
    localStorage.setItem('view', 'S');
    loader = document.querySelector('#loader');
    imagesLoader = document.querySelector('#imagesLoader');
    cover = document.querySelector('#cover');
    imagesLoader.classList.add("heartbeat");
    loader.classList.remove("trans");
    cover.classList.add("trans");
    setTimeout(() => {loader.classList.add("trans");}, 2000);
    setTimeout(() => {content.classList.add("visible");}, 2200);
    setTimeout(() => {imagesLoader.classList.remove("heartbeat");}, 3000);
}

function resizeIframe(e){
    sectionTimeline = document.getElementById('section-timeline').offsetHeight;
    rowTimeline = document.getElementById('row1-timeline').offsetHeight;
    let height = sectionTimeline - rowTimeline - 20;
    e.style.height = height;
}

function scrollNavbar(id){
    if(id != ''){
        let bodyRect = document.body.getBoundingClientRect(),
        eRect = document.getElementById('wave-'+id).getBoundingClientRect(),
        navbar = document.getElementById('navbarheight').value;
        offset = eRect.top - bodyRect.top;
        window.scrollTo(0, eRect.top - bodyRect.top - navbar);
        if(window.innerWidth <= 992){
            $('#navbarcollapse').toggleClass('active');
        }

        navlinks = document.querySelectorAll('.nav-link');
        
        navlinks.forEach((e)=>{
            e.classList.remove("active");
        });

        document.getElementById(id).classList.add('active');
    }
}

function menuclick() {
    document.onclick = function(event){
        let id_teste = 'navbar',
        navbarcollapse = document.getElementById('navbarcollapse');

        if(event.target.id == 'content-filter' && navbarcollapse.classList.contains('active')){
            navbarcollapse.classList.remove('active');
        } 
    }
}