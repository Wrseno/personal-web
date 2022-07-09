const swup = new Swup();

let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(el=>{
    el.addEventListener('click', function() {
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
    });
});

var typed = new Typed(".auto-type",{
    strings: ["Siswa SMK", "Konten Kreator"],
    typeSpeed: 300,
    backSpeed: 150,
    loop: true,
});

