let boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  box.addEventListener('click', function() {
    alert(this.innerText); 
  });
});