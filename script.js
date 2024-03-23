let notifyingDiv = document.querySelector('.container');
let errMsg = document.querySelector('.error');
let incremnt = document.querySelector('#increment');
let dcrmnt = document.querySelector('#decrement');
let clr = document.querySelector('#clear');
let count = 0;
notifyingDiv.innerHTML = `Your Current Count is: ${count}`;

incremnt.addEventListener("click", increaseCount)
dcrmnt.addEventListener("click", decreaseCount)
clr.addEventListener("click", resetValue)
if(count == 0){
  errMsg.innerHTML = 'Error: Cannot go below 0'
  dcrmnt.disabled = true;
}
else{
  errMsg.innerHTML = '';
}
function increaseCount(){
  
  notifyingDiv.innerHTML = `Your Current Count is: ${++count}`;
  dcrmnt.disabled = false;
  if(count == 0){
    errMsg.innerHTML = 'Error: Cannot go below 0'
    dcrmnt.disabled = true;
  }
  else{
    errMsg.innerHTML = '';
  }
}
function decreaseCount(){
  notifyingDiv.innerHTML = `Your Current Count is: ${--count}`;
  if(count == 0){
    errMsg.innerHTML = 'Error: Cannot go below 0'
    dcrmnt.disabled = true;
  }
  else{
    errMsg.innerHTML = '';
  }
}
function resetValue(){
  count = 0;
  notifyingDiv.innerHTML = `Your Current Count is: ${count}`;
  dcrmnt.disabled = true;
  if(count == 0){
    errMsg.innerHTML = 'Error: Cannot go below 0'
    dcrmnt.disabled = true;
  }
  else{
    errMsg.innerHTML = '';
  }
}
