const createBtn = (text = 'No text') => {// Creates button
const btn = document.createElement('button');

//Changes button Text
btn.innerText = text

//Adds button to page
document.body.appendChild(btn);

//Add eventlistener
btn.addEventListener('click', () => {
  alert('Button Clicked');
})}

createBtn('pizza')

