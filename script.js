var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input',function(){
      let cl = this.value;
      let fh =  (cl * 9/5) + 32;
      if(!Number.isInteger(fh)){
          fh = fh.toFixed(4);
      }
      fah.value = fh;
});
fah.addEventListener('input',function(){
     let fh = this.value;
     let cl = (fh - 32) * 5/9;
     if(!Number.isInteger(cl)){
        cl = cl.toFixed(4);
    }
     cel.value = cl;

});