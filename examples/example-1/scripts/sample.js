const button = document.querySelector('button');

button.addEventListener('click', ()=>{
  console.log('Button clicked');
}, {once: true});

const divs = document.querySelectorAll('div');

const listClasses = (e) => {
  console.log(e.currentTarget.classList.value);
  // e.stopPropagation();
};
Array.from(divs).map((div) => {
  div.addEventListener('click', listClasses, {once: true, capture:true,})
})