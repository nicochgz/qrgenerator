const containerQR = document.getElementById('containerQR');
const formulario = document.getElementById('formulario');


const words = ["","GENERADOR DE CÓDIGOS QR"];
let masterTL = gsap.timeline();
words.forEach(word => {
    let tl = gsap.timeline()
    tl.to('#titulo', {duration: 1.5, text: word})
    masterTL.add(tl)
})





/*const botonDescargar = document.createElement('a');
const textoBotonDescargar = document.createTextNode('Descargar');
botonDescargar.appendChild(textoBotonDescargar);*/

const QR = new QRCode(containerQR);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();//evita que la página se refresque al presionar el botón (hacer el evento 'submit')
    QR.makeCode(formulario.link.value);

    gsap.to("#containerQR", { duration: 2.5,
        ease: "power2.out",
        y: -10,
    });
    

    /*containerQR.insertAdjacentElement('afterend', botonDescargar);
    botonDescargar.className = 'btn btn-descargar';
    botonDescargar.setAttribute("href", "data:image");
    botonDescargar.setAttribute("download", "QRCode.png");
    document.querySelector('.btn-descargar').style.background = 'linear-gradient(90deg, #ff5a5a, #ff9a2f)';
    document.querySelector('.btn-descargar').style.color = '#fff';
    document.querySelector('.btn-descargar').style.marginTop = '1rem';

    const abtn = document.querySelectorAll(' a');
    abtn.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.pageX - e.target.offsetLeft;
            let y = e.pageY - e.target.offsetTop;   

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove()
            },700);
        })
    });*/
});


const buttons = document.querySelectorAll('button, a');
//const button = document.getElementById('btn-form');

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {

        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;
    
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
    
        setTimeout(() => {
            ripples.remove()
        },700);
    })
});
/*Array.from(button).forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        },1000);
    })
})*/