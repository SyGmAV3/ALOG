const botonContacto = document.querySelector('.btnContact');
const modal = document.querySelector('.modal');
const cerrar = document.querySelector('.aSalir'); 

const btnExperiencia = document.querySelector('.btnExp');
const modExp = document.querySelector('.modExp');
const SalirExp = document.querySelector('.aSalirExp');

const btnEducacion = document.querySelector('.btnEdu');
const modEdu = document.querySelector('.modEdu');
const SalirEdu = document.querySelector('.aSalirEdu');

const btnHabilidades = document.querySelector('.btnHab');
const modHab = document.querySelector('.modHab');
const SalirHab = document.querySelector('.aSalirHab');

const btnProyectos = document.querySelector('.btnPro');
const modPro = document.querySelector('.modPro');
const SalirPro = document.querySelector('.aSalirPro');

const btnCertificacion = document.querySelector('.btnCer');
const modCer = document.querySelector('.modCer');
const SalirCer = document.querySelector('.aSalirCer');

const button=document.querySelector('.button')
const nav=document.querySelector('.nav')

    botonContacto.addEventListener('click', ()=>
        {
        modal.classList.add('modal--Mostrar')
        })

    cerrar.addEventListener('click', ()=>
        {
        modal.classList.remove('modal--Mostrar')      
        })
    
    btnExperiencia.addEventListener('click', ()=>
        {
        modExp.classList.add('modal--Mostrar')
        })
                
    SalirExp.addEventListener('click', ()=>
        {
        modExp.classList.remove('modal--Mostrar')
        })

    btnEducacion.addEventListener('click', ()=>
        {
        modEdu.classList.add('modal--Mostrar')
        })
                    
    SalirEdu.addEventListener('click', ()=>
        {
        modEdu.classList.remove('modal--Mostrar')
        })

    btnHabilidades.addEventListener('click', ()=>
        {
        modHab.classList.add('modal--Mostrar')
        })
                                
    SalirHab.addEventListener('click', ()=>
        {
        modHab.classList.remove('modal--Mostrar')
        })
        
    btnProyectos.addEventListener('click', ()=>
        {
        modPro.classList.add('modal--Mostrar')
        })
                        
    SalirPro.addEventListener('click', ()=>
        {
        modPro.classList.remove('modal--Mostrar')
        })

    btnCertificacion.addEventListener('click', ()=>
        {
        modCer.classList.add('modal--Mostrar')
        })
                            
    SalirCer.addEventListener('click', ()=>
        {
        modCer.classList.remove('modal--Mostrar')
        })
    
        // Toggle .activo
button.addEventListener('click', ()=>
    {
        nav.classList.toggle('activo')
    })

