

const para = document.querySelector('p');
// digitally listening; telling the browser to 'listen' for it
// or keep an eye out for it
para.addEventListener('click', updateName);



function updateName(){
  para.style.fontSize= "100px";
  para2.style.backgroundColor= "#d8fccc";
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`; // Not a quote!
  // para.style.fontSize= "100px";

}

const para2 = document.querySelector('p');
// digitally listening; telling the browser to 'listen' for it
// or keep an eye out for it
para2.addEventListener('hover', hoverColor);


function hoverColor (){
  para2.style.fontSize= "100px";
}

// Another type of function
// "Anonymous" Function
// document.getElementById("mydiv").onmouseover = function()
// {
//     this.style.backgroundColor = "pink";
// }
