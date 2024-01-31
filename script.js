const calculatorDiv = document.querySelector('.calculator');

 const firstInput = document.querySelector('#first');
const secondInput = document.querySelector('#second');
const additionBtn = document.querySelector('#radio1');
const substractionBtn = document.querySelector('#radio2');
const multiplicationBtn = document.querySelector('#radio3');
const divisionBtn = document.querySelector('#radio4'); 

const submitBtn = document.querySelector('#submitBtn');

const resultDiv = document.querySelector('#result');

submitBtn.addEventListener('click',()=>{
  const firstValue = Number(firstInput.value);
  const secondValue = Number(secondInput.value);
  let result = 0;
  if(additionBtn.checked){
    result = (firstValue + secondValue);
    resultDiv.innerText = result;
  }
  else if(substractionBtn.checked){
    result = (firstValue - secondValue);
    resultDiv.innerText = result;
    }
  else if(multiplicationBtn.checked){
    result = (firstValue * secondValue);
    resultDiv.innerText = result;
  }
  else if(divisionBtn.checked){
    if(secondValue === 0){
      resultDiv.innerText = `can't divide by 0`;
    }else{
    result = (firstValue/secondValue);
    resultDiv.innerText = result;
   } 
  }
  
});
