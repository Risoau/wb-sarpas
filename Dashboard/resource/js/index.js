
// Active Nav Bar {

    const lii = document.querySelectorAll('.lii');

    function activeLink() {
        lii.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');

        console.log('Error');
    }

    lii.forEach((item) =>
    item.addEventListener('click', activeLink));

// };

// Time {

    setInterval(() => {
        let date = new Date();
        
        let MyDateString = 
        date.getHours() + '.' + ('0' + (date.getMinutes())).slice(-2) + '.' + ('0' + date.getSeconds()).slice(-2);

        document.getElementById('time').innerHTML = MyDateString;

    }, 1000);

// };

// Date {

    setInterval(() => {
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

        let date = new Date();
        let month = months[date.getMonth()];
        let day = days[date.getDay()];

        document.getElementById('date').innerHTML =

        day + ", " + date.getDate() + " " + month + " " + date.getFullYear()

    }, 1000);

// };

// Period {

    let time = new Date();
    let hour = time.getHours();

    let text = document.getElementById("text");

    let period = (gets, colors) => {
        let moment = document.getElementById(gets);

        // Change HTML Text  
        text.innerHTML = "Good" + " " + gets;

        // Change Display Style 
        moment.style.opacity = '1'; 

        // Insert Value To CSS Variable 
        document.documentElement.style.setProperty("--coloors", colors);
    };

    if ( hour >= 0 && hour <= 12 ) {
        let gets = 'morning';
        let colors = '#2192FF';

        period(gets, colors);
    }
    else if ( hour >= 13 && hour <= 18 ) {
        let gets = "afternoon";
        let colors = '#FCE700';

        period(gets, colors);
    }
    else if ( hour >= 19 && hour <= 24 ) {
        let gets = 'evening';
        let colors = '#04009A';

        period(gets, colors);
    }
    else {
        console.log("The System Is Currently Unvaiable");
    }

// };







// let rdmText = document.getElementById("randomTxt");
// let di, dii, diii, div, dv, dvi, dvii, dviii, dix, dx, dxi, dxii, dxiii, dxiv, dxv, dxvi, dxvii;

// di = '"Jangan Menunggu waktu yang tepat untuk melakukan hal yang baik"';
// dii = '"Tidak ada kata terlambat untuk berubah menjadi lebih baik"';
// diii = '"Gagal itu urusan nanti yang terpenting kita berani untuk mencoba dan terus mencoba"';
// div = '"Tetap bersikap ramah dan baik"';
// dv = '"Tak apa gagal, menyerah tak akan"';

// dvi = '"Balas dendam terbaik adalah menjadikan dirimu lebih baik"';
// dvii = '"Semakin menyerah semakin rumit"';
// dviii = '"Kunci hidup bahagian adalah jalani, nikmati, dan syukuri"';
// dix = '"Tidak semua hal harus sesuai apa yang engkau mau"';
// dx = '"Jangan biarkan impianmu dijajah oleh pendapat orang lain"';

// dxi = '"Bukan tidak bisa namun belum bisa"';
// dxii = '"Kedepannya memang tidak mudah namun pasti ada kemudahan"';
// dxiii = '"Jangan pernah menyesal atas pilihan mu"';
// dxiv = '"Tidak ada yang sia-sia jangan menyerah"';
// dxv = '"Tak perlu iri kita punya porsi masing-masing"';

// dxvi = '"Hidup yang terlihat mewah belum tentu benar indah"';
// dxvii = '"Akan tiba waktu nya hari tanpa kesedihan"';

// let i = 0;

// let arrText = [
//     di, dii, diii, div, dv, dvi, dvii, dviii, dix, dx, dxi, dxiii, dxiv, dxv, dxvi
// ];

// let myRandomText = () => {
//     rdmText.innerHTML = arrText[i];
//     i++;

//     if (i == 16) {
//         i = 0;
//     }
// };

// if (takeMinute == 0 || takeMinute == 20 || takeMinute == 40) {
//     myRandomText();
// }

// function ValidateEmail(event, inputText){
//     event.preventDefault();
//     console.log("Data Submitted!");
//  }