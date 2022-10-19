
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
    const namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kammis", "Jum'at", "Sabtu"];

    let date = new Date();
    let month = namaBulan[date.getMonth()];
    let harini = namaHari[date.getDay()];

    let day = document.getElementById('hari').innerHTML =

    harini + ", " + date.getDate() + " " + month + " " + date.getFullYear()

}, 1000);