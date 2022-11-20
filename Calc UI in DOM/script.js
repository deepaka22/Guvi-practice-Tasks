



const thtable4444but = document.createElement('button');
                        thtable4444but.setAttribute('id','test1');
                        thtable4444but.innerHTML = '/';
                        thtable4444but.value = '/';
                        thtable4444but.setAttribute('onclick', "btn1('/')")

const thtable4444 = document.createElement('th');                
                  thtable4444.appendChild(thtable4444but);

const thtable3333but = document.createElement('button');
                    thtable3333but.setAttribute('id','test1');
                    thtable3333but.innerHTML = '.';
                    thtable3333but.value = '.';
                    thtable3333but.setAttribute('onclick', "btn1('.')")

const thtable3333 = document.createElement('th');                
                 thtable3333.appendChild(thtable3333but);

const thtable2222but = document.createElement('button');
                        thtable2222but.setAttribute('id','test1');
                        thtable2222but.innerHTML = '=';
                        thtable2222but.value = '=';
                        thtable2222but.setAttribute('onclick', 'solve()')

const thtable2222 = document.createElement('th');          
                thtable2222.appendChild(thtable2222but);

const thtable1111but = document.createElement('button');
                    thtable1111but.setAttribute('id','test1');
                    thtable1111but.innerHTML = '0';
                    thtable1111but.value = '0';
                    thtable1111but.setAttribute('onclick', 'btn1(0)')

const thtable1111 = document.createElement('th');
                  thtable1111.appendChild(thtable1111but);


// 11. tr3 table
const innerinfo3 = document.createElement('tr');
                    innerinfo3.setAttribute('id','table1')
                    innerinfo3.appendChild(thtable1111);
                    innerinfo3.appendChild(thtable2222);
                    innerinfo3.appendChild(thtable3333);
                    innerinfo3.appendChild(thtable4444);
                    


//12. th3 table
const thtable444but = document.createElement('button');
                  thtable444but.setAttribute('id','test1');
                  thtable444but.innerHTML = '*'; 
                  thtable444but.value = '*';
                  thtable444but.setAttribute('onclick', "btn1('*')")

const thtable444 = document.createElement('th');
                  thtable444.appendChild(thtable444but);

const thtable333but = document.createElement('button');
                  thtable333but.setAttribute('id','test1');
                  thtable333but.innerHTML = '9';
                  thtable333but.value = '9';
                  thtable333but.setAttribute('onclick', 'btn1(9)')  

const thtable333 = document.createElement('th');
                  thtable333.appendChild(thtable333but);

const thtable222but = document.createElement('button');
                  thtable222but.setAttribute('id','test1');
                  thtable222but.innerHTML = '8';   
                  thtable222but.value = '8';
                  thtable222but.setAttribute('onclick', 'btn1(8)')               

const thtable222 = document.createElement('th');            
                  thtable222.appendChild(thtable222but);


const thtable111but = document.createElement('button');
                    thtable111but.setAttribute('id','test1');
                    thtable111but.innerHTML = '7';
                    thtable111but.value = '7';
                    thtable111but.setAttribute('onclick', 'btn1(7)')


const thtable111 = document.createElement('th');
                thtable111.appendChild(thtable111but);



// 11. tr3 table
const innerinfo2 = document.createElement('tr');
                    innerinfo2.setAttribute('id','table1')
                    innerinfo2.appendChild(thtable111);
                    innerinfo2.appendChild(thtable222);
                    innerinfo2.appendChild(thtable333);
                    innerinfo2.appendChild(thtable444);

//12. th2 table

const thtable44but = document.createElement('button');
                  thtable44but.setAttribute('id','test1');
                  thtable44but.innerHTML = '-';
                  thtable44but.value = '-';
                  thtable44but.setAttribute('onclick', "btn1('-')")


const thtable44 = document.createElement('th');
                  thtable44.appendChild(thtable44but);
 
const thtable33but = document.createElement('button');
                  thtable33but.setAttribute('id','test1');
                  thtable33but.innerHTML = '6';
                  thtable33but.value = '6';
                  thtable33but.setAttribute('onclick', 'btn1(6)')

const thtable33 = document.createElement('th');
                thtable33.appendChild(thtable33but);

const thtable22but = document.createElement('button');
                  thtable22but.setAttribute('id','test1');
                  thtable22but.innerHTML = '5';
                  thtable22but.value = '5';
                  thtable22but.setAttribute('onclick', 'btn1(5)')

const thtable22 = document.createElement('th');
                thtable22.appendChild(thtable22but);

const thtable11but = document.createElement('button');
                  thtable11but.setAttribute('id','test1');
                  thtable11but.innerHTML = '4';
                  thtable11but.value = '4';
                  thtable11but.setAttribute('onclick', 'btn1(4)')

const thtable11 = document.createElement('th');
                  thtable11.appendChild(thtable11but); 


// 11. tr2 table
const innerinfo1 = document.createElement('tr');
                    innerinfo1.setAttribute('id','table1')
                    innerinfo1.appendChild(thtable11);
                    innerinfo1.appendChild(thtable22);
                    innerinfo1.appendChild(thtable33);
                    innerinfo1.appendChild(thtable44);


//12. th1 table 
const thtable4but = document.createElement('button');   
                    thtable4but.setAttribute('id','test1');
                    thtable4but.innerHTML='+';
                    thtable4but.value ='+';
                    thtable4but.setAttribute('onclick', "btn1('+')");
                   

const thtable4 = document.createElement('th');
                 thtable4.appendChild(thtable4but);


const thtable3but = document.createElement('button');
                  thtable3but.setAttribute('id','test1');
                  thtable3but.innerHTML = '3';
                  thtable3but.value = '3';
                  thtable3but.setAttribute('onclick', 'btn1(3)')

const thtable3 = document.createElement('th');
                  thtable3.appendChild(thtable3but);

const thtable2but = document.createElement('button');
                  thtable2but.setAttribute('id','test1');
                  thtable2but.innerHTML = '2';
                  thtable2but.value = '2';
                thtable2but.setAttribute('onclick', "btn1('2')")

const thtable2 = document.createElement('th');
                  thtable2.appendChild(thtable2but);

const thtable1but = document.createElement('button');
                    thtable1but.setAttribute('id','test1');
                     thtable1but.innerHTML = '1';
                     thtable1but.value ='1';
                     thtable1but.setAttribute('onclick', "btn1('1') ")
                    // thtable1but.onclick = subdiv2;


const thtable1 = document.createElement('th');
                  thtable1.appendChild(thtable1but);



// 11. tr1 table
const innerinfo = document.createElement('tr');
                    innerinfo.setAttribute('id','table1')
                    innerinfo.appendChild(thtable1);
                    innerinfo.appendChild(thtable2);
                    innerinfo.appendChild(thtable3);
                    innerinfo.appendChild(thtable4);

//10.Table
const table = document.createElement('table');
              table.setAttribute('id','table');
              table.appendChild(innerinfo);  
              table.appendChild(innerinfo1);  
              table.appendChild(innerinfo2);  
              table.appendChild(innerinfo3);  
              
//10.
// 9.
const subdiv4 = document.createElement('div');
                subdiv4.setAttribute('class','col-sm-8')
                subdiv4.setAttribute('class', 'border');
                subdiv4.setAttribute('id', 'innermainbox');
                subdiv4.appendChild(table);

//9.                
// 8.
const subdiv3 = document.createElement('div');
                subdiv3.setAttribute('class', 'row');
                // subdiv3.appendChild(subdiv4);
// 8.           
 // 7.
const subdiv2 = document.createElement('input');
                subdiv2.setAttribute('class', 'col-sm-8');
                subdiv2.placeholder="Calculator";
                subdiv2.setAttribute('id', 'innerbox');
                // subdiv2.innerHTML= thtable1but;
                subdiv2.appendChild(subdiv3);

//7. inner div for Ans;
// 6.
const subdiv1 = document.createElement('div');
                 subdiv1.setAttribute('class', 'border');
                 subdiv1.setAttribute ('id', 'mainoutlinebox');
                 subdiv1.appendChild(subdiv2); 
                 subdiv1.appendChild(subdiv3); 
                 subdiv1.appendChild(subdiv4); 

// 6. 1 main div borderbox 


// 5. (1st row div inside column)
const subdiv0 = document.createElement('div');
                 subdiv0.setAttribute('class', 'row')  
                 subdiv0.appendChild(subdiv1); 
//5.

// 4. inner div partition starts 
const columndiv = document.createElement('div');
                   columndiv.setAttribute('class', 'col-sm-2');

const columndiv1 = document.createElement('div');
                columndiv1.setAttribute('class', 'col-sm-8');
                columndiv1.appendChild(subdiv0); 
                // columndiv1.appendChild(subdiv1);

const columndiv2 = document.createElement('div');
                columndiv2.setAttribute('class', 'col-sm-2');
// 4.

//3.
const rowdiv = document.createElement('div');
                rowdiv.setAttribute('class','row')
                rowdiv.append(columndiv);
                rowdiv.appendChild(columndiv1);
                rowdiv.appendChild(columndiv2);
//3.

//2.
const maindiv = document.createElement('div');
                maindiv.setAttribute('class', 'container-fluid');
                maindiv.appendChild(rowdiv);
 //2.     

//1. 
const header = document.createElement('header');
                header.appendChild(maindiv);
    document.body.append(header);
//1.
function clearScreen() {
    document.getElementById("innerbox").value = "";
}

function btn1(value){
   document.getElementById('innerbox').value+= value;
   console.log( value);
} 

function solve(){

    let x = document.getElementById('innerbox').value
    console.log(x);

    let y = eval(x);
    console.log(y);

    document.getElementById('innerbox').value = y

    return y

}

