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
var person={
    firstName:"John",
    lastName:"Doe",
    id:5566,
    //access multiple properties of objects
    getinfo:function(){
        return this.firstName+""+this.lastName;
    }
};
document.getElementsById("demo").innerHTML=person.getinfo();
