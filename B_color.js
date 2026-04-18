const parent = document.getElementById('parent');

parent.addEventListener('click',(e)=>{
   // console.log(e.target)
   const child =e.target;
   const div= document.querySelector('div');
   div.style.backgroundColor = child.id;
})