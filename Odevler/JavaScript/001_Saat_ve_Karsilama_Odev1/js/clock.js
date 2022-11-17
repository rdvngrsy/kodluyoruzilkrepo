let myName = prompt("Adınız:")

document.querySelector("#myName").innerHTML = myName[0].toUpperCase() + myName.slice(1)

function saatGoster() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const g = new Date();
    let gun = gunler[g.getDay()];

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;


    let time = hours + ":" + minutes + ":" + seconds + " " + gun
    document.querySelector("#myClock").innerHTML = time;
}

setInterval(saatGoster, 1000);