// let a = "Hello TS";

// console.log(a);
// export {};
// class App{
//     test(){
//         console.log("Test function working....")
//     }
// }

// var a = new App();

// a.test();

// let s:string = "Sheeshpal Singh Saini";

// console.log(s);

// export {}
// let a:number = 10;
// console.log(a);

// -------------modules concept 

import sLogin from './Student'
import tLogin from './Teacher'

let teacher = new tLogin();
console.log(teacher.data);

let student = new sLogin();
console.log(student.data);