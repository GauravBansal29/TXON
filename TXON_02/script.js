/* CREATED BY: Gaurav Bansal*/

let display=document.querySelector('#display')
let btnnum= document.querySelectorAll('#numbers section');
let numsec= document.querySelector('#numbers');
let oprsec= document.querySelector('#operators');
let symsec=document.querySelector('#symbols');
let clear=document.querySelector('#clr');
let togglesign=document.querySelector('#tgsgn')
let prt= document.querySelector('#percent');
let btn= document.querySelectorAll('.btn');

console.log(btnnum);
let op;
let eq=false;
    document.addEventListener('click',function (event) {
        if(event .target.textContent !='=') eq=false;
        if(numsec.contains(event.target))
        {
            if(display.textContent=='' && event.target.textContent=='.') display.textContent='0';
            console.log(event.target.textContent);
            if(display.textContent=='0' && event.target.textContent!='.')  display.textContent =event.target.textContent;
            else display.textContent+=  event.target.textContent;
            
        }
        else if(oprsec.contains(event.target))
        {
            if(event.target.textContent=='=')
            {
                if(eq) alert("THIS IS NOT ALLOWED");
                else 
                {
                    op+= display.textContent;
                    display.textContent= eval(op);
                    eq=true;
                }
            }
            else 
            {
                op=display.textContent;
                if(!op || op=='0')  alert("This is NOT ALLOWED");
                else{
                display.textContent='';
                op+=event.target.textContent;
                console.log(op);
                }
            }

        }
        else if(symsec.contains(event.target))
        {
            if(clr.contains(event.target)) 
            {
                op='';
                display.textContent='';
            }
            else if(togglesign.contains(event.target))
            {   console.log('helllo');
                let a= parseInt(display.textContent);
                if(a==0) a=parseFloat(display.textContent);
                console.log(a);
                a*=(-1);
                display.textContent=a;
            }
            else
            {
                
                let a= parseInt(display.textContent);
                a/=100;
                display.textContent=a;
            }
        }
        
    });
