 function functionhandler (e){

    e.preventDefault();

   var a = document.getElementById('fname').value;
   var aa = document.getElementById('f');
   aa.innerText=a;

   var b = document.getElementById('sname').value;
   var bb = document.getElementById('s');
   bb.innerText=b;

   var c = document.getElementById('dno').value;
   var cc = document.getElementById('A');
                cc.innerText = c;
    var d = document.getElementById('area').value;
    var dd = document.getElementById('B')
   dd.innerText = d;

   var f = document.getElementById('land').value;
   var ff = document.getElementById('C1');
        ff.innerText = f;
   
    var g = document.getElementById('st').value;  
    var gg = document.getElementById('Street');
            gg.innerText =g;

    var h = document.getElementById('pcod').value;
    var hh = document.getElementById('pinh');
    hh.innerHTML =h;   

    var i = document.getElementById('count').value;
    var ii = document.getElementById('countri');
            ii.innerText =i;     
            
    var j = document.getElementById('food').value;            
     var jj = document.getElementById('sfood');
        jj.innerText =j;        

    }

    function fun(){  
       
        document.getElementById("myForm").reset();  
      }   



