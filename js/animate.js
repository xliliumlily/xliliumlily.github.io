
// 重置scrollTop這個變數的值
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//一鍵複製
function copy(){
  const mail =document.getElementById('mail');
  navigator.clipboard.writeText(mail.innerText);
  alert('已複製!');
}

let layers = document.querySelectorAll('.para');
let speed,yPos;

window.addEventListener("scroll",function (event) {
      let fromTop = this.scrollY;

      for(let layer of layers){
        speed = layer.getAttribute('speed');
        yPos = -(fromTop * speed) * 0.01;
      

      layer.style.transform = `translateY(${yPos}px)`;
      }
});
