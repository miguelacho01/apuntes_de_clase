const pedir = document.querySelector('.pedir')
const lista = document.querySelector('#lista')
const modal = document.querySelector('.modal')
const escogido = document.querySelector('.producto_escogido')


const cancelar = document.querySelector('.cancel')
const aceptar  = document.querySelector('.aceptar')

pedir.addEventListener('click',()=>{
    if(lista.options[lista.selectedIndex].value === 'value0'){
        alert('No escogista')
    }else {
        modal.style.top=0
        escogido.textContent=lista.options[lista.selectedIndex].text;
        // producto = escogido.textContent
    } 
    

})

cancelar.addEventListener('click',()=>{
    modal.style.top="-980px"
    lista.selectedIndex=0
}) 
aceptar.addEventListener('click',()=>{
alert('Gracias por su compra')
modal.style.top="-980px"
})


