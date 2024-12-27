// document.write('This is my first Javascript page')    //for output on browser screen
// document.write('<h1>This is my first Javascript page</h1>')
// var pi=3.14;
// var person="are you GOD";
// var answer='Yes I am!';
// document.write(pi+"<br>")
// document.write(person+"<br>")
// document.write(answer+"<br>")
// function myFunction(){
//     var carname="Welcome";
//     document.getElementById("demo").innerHTML=carname;
// }
// var num=10;
// console.log(num);    //it willgo to inspect
// console.log(typeof(num));
// num=false;
// console.log(num);   
// console.log(typeof(num));
// num="ANAS KHAN"
// console.log(num);    //it willgo to inspect
// console.log(typeof(num));
// num=null;
// console.log(num);    //it willgo to inspect
// console.log(typeof(num));
// num="undefined";
// console.log(num);    //it willgo to inspect
// console.log(typeof(num));

// var companyname='Google';
// console.log(companyname)
// var pi=3.14;
// console.log(pi);
// var flag=true;
// console.log(flag);
// var array=[1,2,3];
// var animals=Array("cat","dog","mouse");
// console.log(array);
// console.log(animals);
// var person={
//     name:'Anas Khan',
//     age:'22',
//     title:'Btech'
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.title);
// create an object
// var person={
//     firstName:"John",
//     lastName:"Doe",
//     id:5566,
//     //access multiple properties of objects
//     getinfo:function(){
//         return this.firstName+""+this.lastName;
//     }
// };
// document.getElementsById("demo").innerHTML=person.getinfo();
// var person={
//     name:'Ramesh',
//     age:30,
//     isMarried:true,
//     getInfo:function(){},   address:{
//         street:'vijay nagar',
//         flatNo:203
//     }
// }
// console.log(person);
// var person2=new Object();
// person2.name='anas khan';
// person.age=32;
// person2.isMarried=true;
// person2.address={};
// person2.address.street='mansa road';
// person2['address']['flatNo']=45;
// console.log(person2);
// ===========================LOCAL AND GLOBAL VARIABE============================================================================
// function show() {
//     var a="a is a local outer variable";
//     document.write(a+"<br>");
//      function disk(){
//            var b="b is local inner variable";
//            document.write(b+"<br");
//            document.write(a+"<br>");
//      }
//      disk();
// } 
// show();
// var myVar="global";  //declare a global variable
// function check() {
//     var myVar="local";
//     document.write(myVar);
// }
// check();
// var a=10;
// function funA() {
//        console.log("Start functon A");
//        function funB(){
//         console.log("Start functon B");
//        }
//        funB();
//        console.log("Leaving function A");
//     }
// funA();
// console.log("Global context")
// var name='John';
// function f1(){
//     var a='hello';
//     f2();
//     var x=a+name;
//     console.log(x);
// }
// function f2(){
//     var b='hii';
//     f3();
//     var y=b+name;
//     console.log(y);
// }
// function f3(){
//     var c='hey';
//     var z=c+name;
//     console.log(z);
// }
// f1();
// var a=5;
// function add(){
//     var b=45;
//     console.log(a+b);
//    function mul(){
//        var c=10;
//        console.log(b*c);
//    }
//    mul();
// }
// add();
// =======================CONDITIONALS========================================================================
// var age=20;
// if(age>18){
//     document.write("<b>YOU ARE ELIGIBLE<b>");
// }
// var grade='D';
// document.write("Entering switch block<br/>");
// switch (grade){
//     case 'A':
//     document.write("Good job<br/>");
//     break;
//     case 'A':
//         document.write("Good job<br/>");
//         break;  
//         case 'B':
//         document.write("Good <br/>");
//         break;  
//          case 'C':
//         document.write("PASSED<br/>");
//         break; 
//           case 'D':
//         document.write("NOT SO GOOD<br/>");
//         break; 
//           case 'E':
//         document.write("POOR<br/>");
//         break;  
//          case 'F':
//         document.write("FAIL<br/>");
//         break;
// }
// document.write("exit");
// ================================LOOPS==================================================================
// var i;
// for(i=0;i<3;i++){
//     console.log(i);
// }
// var count;
// for(count =0;count<10;count++){
//       document.write("Current count :"+count);
//       document.write("<br/>");
// }
// for(var i=0;i<100;i++){
//     if(i%2==0){
//         console.log(i+" is an even number");
//     }
//     else{
//         console.log(i+" is odd number");
//     }
// }
// var myArray=["A","B","C"];
// for(var i=0;i<myArray.length;i++){
//     console.log("The member of myArray in index "+i+" is "+myArray[i]);
// }
// var x=0;
// document.write("Starting LOOP");
// while(x<10){
//     document.write("Current Count : "+x+"<br/>");
//     x++;
// }
// document.write("Loop stopped");
// function myFunction(){
//     alert("Hello World");
// }
// function sayHello(name,age){
//     document.write(name+" is "+age+" years old");
// }
// function add(a,b){
//       console.log(a+b);
//       document.write(a+b);
// }
// add(10,20);
//                  FUNCTIONS
// var res=mul(14,30);
// function mul(x,y)
// {
//       return x*y;
// }
// document.write(res);
//                                 ARROW FUNCTION
// var add=(a,b)=>{
//       console.log(a+b);
// };
// add(102,20);
// // arrow function for single line parameters
// var add2=(a,b)=>console.log(a+b);
// add2(30,50);
//                              0PERATORS
//                    STRING CONCATINATION
// function myFunction(){
//       var x=5+5;
//       var y="5"+5;
//       var z="Hello"+5;
//       var demoP=document.getElementById("demo");
//       demoP.innerHTML=x+"<br>"+y+"<br>"+z;
// }
//        ARRAY
//ARRAY is collection of anything
//Array is special kind of object in JS
// var myCollection=[
//       1,
//       "anas khan",
//       true,
//       {
//             name:"amaan",
//             age:22
//       },
//       function (name){
//             console.log(name);
//       },
//       "abhi","anurag","ashu","kumar"
// ]
// console.log(myCollection);
//==================================ARGUMENTS=====================================================================================================
// function information(firstName,lastName,language){
//       if(arguments.length===3){
//             console.log(lastName);
//       console.log(firstName);
//       console.log(language);}
// }
// information();
// information('anas','khan','english');
// function sayHello(){
//       alert("Hello ANAS")
// }
// function over(){
//       document.getElementById("mytext").style.color="red";

// }
// function mout(){
//       document.getElementById("mytext").style.textDecoration="underline";

// }
// ===============================Dialog Box===============================================================================
// var retVal=confirm("Do you want tocontinue?");if(retVal==true){
//       alert("User wants to continue");
// }
// else{
//       alert("User doies not want to continue");
// }
//==================================Prompt Dialog Box============================
// var retVal=prompt("Enter your name:","your name here");
// // alert("You have entered : "+retVal);
// document.write("<h2>Hello "+retVal+"</h2>");
// var ques="What is 10+10";
// var ans=20;
// var correct='<img src="tick.webp" height="150px" width="250px">';
// var incorrect='<img src="cross.webp" height="150px" width="250px">';
// var response=prompt(ques,"0");
// for(let count=0;count<3;count++){
//       if(response!=ans){
//             confirm("Wrong.Press Ok for another chance");
//             response=prompt(ques,"0");
//             if(count==2){
//                   alert("Better luck next time");
//             }
//       }
//       else{
//             alert("Great!you are right");
//             count=3;
//       }
//       }
// var output=(response==ans)?correct:incorrect;
// document.write("</br>");
// document.write(output);
// ===========================REDIRECT PAGE=================================================================================
// function Redirect(){
//       window.location="https://www.facebook.com";

// }
// document.write("You will be redirected in 10sec");
// setTimeout('redirect()',10000);  //  10000 in ms
// Redirect();
// ==========================FORM==================================================================================================
function validateForm(){
      var x=document.forms["myform"]["fname"].value;
      if(x==null || x=="")
      {
            alert("First name must be filled out");
            return false;
      }
}

