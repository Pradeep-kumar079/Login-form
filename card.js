 
 window.prompt("enter no");
 document.getElementsByClassName(submit).innerHTML='noone';
 
 const createsidebtn = document.getElementsByClassName("lgnbtn");//btn
 const createsidediv = document.getElementsByClassName("login");
 const createaccountbtn = document.getElementsByClassName("submit");//btn
 const createaccount = document.getElementsByClassName("signup");
 const loginpbtn = document.getElementsByClassName("submit1");//btn
 const logindiv = document.getElementsByClassName("signup1");
 const loginsidebtn = document.getElementsByClassName("lgnbtn12");//btn
 const loginsidediv = document.getElementsByClassName("login12");
 createaccountbtn.addeventlistener('click',()=>{
   createaccount.style.display='none';
   logindiv.style.display='block'
 });



