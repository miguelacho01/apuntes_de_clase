//evento reset
//evento submit
//input 


const boton=document.getElementById('ingresar')
boton.addEventListener('click',e=>{
    e.preventDefault()
    const username=document.getElementById('username').value
    const password=document.getElementById('password').value
    
    if(username==='' ||password ==='')
    alert('No se indicado un usuario o contraseña')

    
    if(username==='carlitos' && password==='carlitos123'){
        alert('BIENVENIDO')
        window.location.assign('inicio.html')
    } else {
        document.querySelector('#mensaje').style.display='block'
        setTimeout(()=>{
            document.querySelector('#mensaje').style.display='none'
        },3000)
        // document.getElementById('mensaje').style.display='block'
    } 
    
})

document.getElementById('password').addEventListener('mouseenter',mostrar)

function mostrar(){
  
    document.getElementById('password').type='text'
}

document.getElementById('password').addEventListener('mouseleave',ocultar)

function ocultar(){
   document.getElementById('password').type='password'
}

document.getElementById('rememberme').addEventListener('change',function(z)
{    
     if(z.target.checked==true){
        alert('Desea que recordemos sus datos')
    }
})
