
const lii = document.querySelectorAll('.lii');

function activeLink() {
    lii.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');

    console.log('Error');
}

lii.forEach((item) =>
item.addEventListener('click', activeLink));


setInterval(() => {
    let date = new Date();
    
    let MyDateString = 
    date.getHours() + '.' + ('0' + (date.getMinutes())).slice(-2) + '.' + ('0' + date.getSeconds()).slice(-2);

    let clock = document.getElementById('clock').innerHTML = MyDateString;

}, 1000);

setInterval(() => {
    const namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

    let date = new Date();
    let month = namaBulan[date.getMonth()];
    let harini = namaHari[date.getDay()];

    let day = document.getElementById('hari').innerHTML =

    harini + ", " + date.getDate() + " " + month + " " + date.getFullYear()

}, 1000);

let clockToChangeIcon = new Date();
let takeHour = clockToChangeIcon.getHours();

let mcon = document.getElementById("morningCon");
let scon = document.getElementById("sunCon");
let ncon = document.getElementById("nightCon");

let ucapan = document.getElementById("ucapan");

if ( takeHour >= 0 && takeHour <= 12 ) {
    mcon.style.display = 'block';
    scon.style.display = 'none';
    ncon.style.display = 'none';

    ucapan.innerHTML = 'Good Morning,';

    document.documentElement.style.setProperty("--color-js", "#00D7FF");
}
else if ( takeHour >= 13 && takeHour <= 18 ) {
    mcon.style.display = 'none';
    scon.style.display = 'block';
    ncon.style.display = 'none';

    ucapan.innerHTML = 'Good Afternoon,';

    document.documentElement.style.setProperty("--color-js", "#FCE700");
} 
else if ( takeHour >= 19 && takeHour <= 24   ) {
    mcon.style.display = 'none';
    scon.style.display = 'none';
    ncon.style.display = 'block';

    ucapan.innerHTML = 'Good Evening,';

    document.documentElement.style.setProperty("--color-js", "#04009A");
}
else {
    console.log("Error Code 001");
}

let rdmText = document.getElementById("randomTxt");

let i = 0;

let arrText = [
    '"A"',
    '"B"',
    '"C"',
];

let myRandomText = () => {
    rdmText.innerHTML = arrText[i];
    i++;

    if (i == 3) {
        i = 0;
    }
};

setInterval(myRandomText, 5000);