const form = document.getElementById('form-valid');
const valor_B= document.getElementById('valor-b');

let valorA =parseFloat(document.getElementById("valor-a").value);
let valorB = parseFloat(document.getElementById("valor-b").value);

formEValid = false;

function numberValid (valorA,valorB){
        return valorB > valorA;
}

form.addEventListener('submit', function(e){
e.preventDefault();
const messagesucess = `formulario enviado com sucesso! verificando: <b> Valor A ${valorA.value}<b/> menor que <b> Valor B ${valorB.value}<b>`;

formEValid = numberValid(valorA,valorB)
if (formEValid){
    const containermessagesucess = document.querySelector('.confirmed-message');
    containermessagesucess.innerHTML = messagesucess;
    containermessagesucess.style.display ='block';

    valorA.value ='';
    valorB.value ='';
} 
else {
    valor_B.style.border= '1px solid red';
    document.querySelector('.error-message').style.display ='block';
}
})

valor_B.addEventListener('keyup',function(e){
console.log(e.target.value)
formEValid = numberValid(e.target.value);

if (!formEValid){

    valor_B.classList.add('error');
    document.querySelector('.error-message').style.display ='block';
} else {
    valor_B.classList.remove('error');
    document.querySelector('.error-message').style.display ='none';
}
})