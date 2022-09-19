const numero1 = document.querySelector('#num1').value;
const numero2 = document.querySelector('#num2').value;
const resulta = document.querySelector('#resultado');
const suma    = document.querySelector("#suma");
const restar    = document.querySelector("#resta");
const multi    = document.querySelector("#division");
const divi    = document.querySelector("#multiplicacion");
//FUNCIONES
const sumar = ()=>{
   const resultado = parseInt(document.querySelector('#num1').value) + parseInt(document.querySelector('#num2').value);
   resulta.textContent = resultado
}
const resta = (n1,n2)=>{

        if(n2 > n1){
            alert("El número 2 no debe ser mayor al número 1");
        }{
            const resultado = parseInt(document.querySelector('#num1').value) - parseInt(document.querySelector('#num2').value);
            resulta.textContent = resultado
        }
    
}
const multiplicacion = (n1,n2)=>{
   
        const resultado = parseInt(document.querySelector('#num1').value) * parseInt(document.querySelector('#num2').value);
   resulta.textContent = resultado
    
}
const division = (n1,n2)=>{

        if(n2 > n1){
            alert("El número 2 no debe ser mayor al número 1");
        }{
            const resultado = parseInt(document.querySelector('#num1').value) / parseInt(document.querySelector('#num2').value);
   resulta.textContent = resultado
        }
    
}

suma.addEventListener('click', sumar)
restar.addEventListener('click', resta)
multi.addEventListener('click', multiplicacion)
divi.addEventListener('click', division)

