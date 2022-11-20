//12. th3 table
const thtable4444 = document.createElement('th');
                  thtable4444.innerText = '/'; 
                  thtable4444.setAttribute('id','th')

// const thtable3333 = document.createElement('th');
//                   thtable3333.innerText = '='; 
//                   thtable3333.setAttribute('id','th')

const thtable2222 = document.createElement('th');
                  thtable2222.innerText = '='; 
                  thtable2222.setAttribute('colspan', '2')
                  thtable2222.setAttribute('id','th')

const thtable1111 = document.createElement('th');
                  thtable1111.innerText = '0'; 
                  thtable1111.setAttribute('id','th')



// 11. tr3 table
const innerinfo3 = document.createElement('tr');
                    innerinfo3.setAttribute('id','table1')
                    innerinfo3.appendChild(thtable1111);
                    innerinfo3.appendChild(thtable2222);
                    // innerinfo3.appendChild(thtable3333);
                    innerinfo3.appendChild(thtable4444);


//12. th3 table
const thtable444 = document.createElement('th');
                  thtable444.innerText = '*'; 
                  thtable444.setAttribute('id','th')

const thtable333 = document.createElement('th');
                  thtable333.innerText = '9'; 
                  thtable333.setAttribute('id','th')

const thtable222 = document.createElement('th');
                  thtable222.innerText = '8'; 
                  thtable222.setAttribute('id','th')

const thtable111 = document.createElement('th');
                  thtable111.innerText = '7'; 
                  thtable111.setAttribute('id','th')



// 11. tr3 table
const innerinfo2 = document.createElement('tr');
                    innerinfo2.setAttribute('id','table1')
                    innerinfo2.appendChild(thtable111);
                    innerinfo2.appendChild(thtable222);
                    innerinfo2.appendChild(thtable333);
                    innerinfo2.appendChild(thtable444);

//12. th2 table
const thtable44 = document.createElement('th');
                  thtable44.innerText = '-'; 
                  thtable44.setAttribute('id','th')

const thtable33 = document.createElement('th');
                  thtable33.innerText = '6'; 
                  thtable33.setAttribute('id','th')

const thtable22 = document.createElement('th');
                  thtable22.innerText = '5'; 
                  thtable22.setAttribute('id','th')

const thtable11 = document.createElement('th');
                  thtable11.innerText = '4'; 
                  thtable11.setAttribute('id','th')



// 11. tr2 table
const innerinfo1 = document.createElement('tr');
                    innerinfo1.setAttribute('id','table1')
                    innerinfo1.appendChild(thtable11);
                    innerinfo1.appendChild(thtable22);
                    innerinfo1.appendChild(thtable33);
                    innerinfo1.appendChild(thtable44);


//12. th1 table
const thtable4 = document.createElement('th');
                  thtable4.innerText = '+'; 
                  thtable4.setAttribute('id','th')

const thtable3 = document.createElement('th');
                  thtable3.innerText = '3'; 
                  thtable3.setAttribute('id','th')

const thtable2 = document.createElement('th');
                  thtable2.innerText = '2'; 
                  thtable2.setAttribute('id','th')

const thtable1 = document.createElement('th');
                  thtable1.innerText = '1'; 
                  thtable1.setAttribute('id','th')



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




 