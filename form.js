const form = document.getElementById('form-valid');
let valor_A= document.getElementById('valor-a');
let valor_B= document.getElementById('valor-b');
formEValid = false;

function numberValid (valor_A,valor_B){
        return valor_B > valor_A;
}
form.addEventListener('submit', function(e){
e.preventDefault();
const messagesucess = `formulario enviado com sucesso!  <b> Valor A:${valor_A.value}<b/> menor que <b> Valor B: ${valor_B.value}<b>`;
let varA = parseFloat(document.getElementById('valor-a').value);
let varB = parseFloat(document.getElementById('valor-b').value);

formEValid = numberValid(varA,varB);
if (formEValid) {
    const containermessagesucess = document.querySelector('.confirmed-message');
    containermessagesucess.innerHTML = messagesucess;
    containermessagesucess.style.display ='block';

    valor_A.value ='';
    valor_B.value ='';
} 
else {
    valor_B.style.border= '1px solid red';
    document.querySelector('.error-message').style.display ='block'; 
    messagesucess = '';
}
})
    valor_B.addEventListener('keyup', function(e){
        formEValid =numberValid(e.target.value);

        if (!formEValid){
            valor_B.style='';
            document.querySelector('.error-message').style.display ='block'; 
            }else 
            valor_B.style.border= 'none';
            document.querySelector('.error-message').style.display ='none'; 
    });