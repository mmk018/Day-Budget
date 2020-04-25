"use strict";
// // if (2*4 == 7) {
// // console.log("Verno!")
// // } else {
// //     console.log("Neverno")
// // // }

// // let num = 50;

// // if (num < 49) {
// //     console.log("Neverno!")
// // } else if (num > 100) {
// //     console.log("Mnogo!")
// // } else {
// //     console.log("Verno")
// // };// Uslovia mogut dalse vipolnjtsa..

// // (num == 50) ? console.log("Verno") : console.log("Neverno!");// Toze uslovie no ternarnij operator, mense mesta
// // //Uslovie       esli true to          esli false to

// // switch (num) {//Eto toze aljternativa proverki s raznimi uslovijami
// //     case num < 49:
// //             console.log("Neverno!");
// //             break;
// //     case num > 100:
// //             console.log("Mnogo!");
// //             break;
// //     case num > 80:
// //             console.log("Vse ese mnogo!");
// //             break;
// //     case 50:// Ravenstvo proverjaetsja pri switche imenno tak
// //             console.log("Verno!");
// //             break;
// //     default:
// //             console.log("Sto to ne tak!");
// //             break;//Vsegda ljubaja proverka v switche zakantsivaetsa break

// // }

// //Cycles

// let num = 50;
// // while (num < 55) {//POka num menjse 55 tsislo vivoditsja v consolj
// //     console.log(num);//tsislo vivoditsja v consolj
// //     num++;// i Uvelitsivaetsja na 1
// // } //KOnets tsikla

// do {// Delai
//     console.log(num);//Vivodi destvie
//     num++;// Kazdij raz dobavljaj 1
// }
// while (num < 55);// do teh por poka mensje 55

// for(let i = 1; i < 8; i++) {
//  // Zadaem Pere; uslovia break; uslovija povtora
//     console.log(i)// Vivod v kosole
// }

// for(let i = 1; i < 8; i++) {
//   // Zadaem Pere; uslovia break; uslovija povtora  
//     if (i == 6) {
//         break;
//     }
//     // Zadaem Pere; uslovia break; uslovija povtora
//        console.log(i)// Vivod v kosole
//    }

//    for(let i = 1; i < 8; i++) {
//     // Zadaem Pere; uslovia break; uslovija povtora  
//       if (i == 6) {//esli i ravno 6 to propustitj i idti dalse
//           continue;
//       }
//       // Zadaem Pere; uslovia break; uslovija povtora
//          console.log(i)// Vivod v kosole 123457
//      }





// ///////////////////
// //Funktion
// let num = 20;
// function showFirstMessage(text) {// Nazvanie Funktsii (uslovie)
//     alert(text);// Sto delaet
//     let num = 10;// Esli peremennja objavlena vnutri fu nktsii, to i vidn
//     //a ona toljko vnutri. Mi ne mozem ee vizvatj snaruzi fu ktsii
// //No esli  peremennaja uze bila, to izmenjatj ee mozno iz nutri funktsii.
// }// Vnutri i snaruzu peremennije mogut imetj odinakovie imena
// //Vsegda iset vnatssale vnutri funktsii a potom za ee predelami

// showFirstMessage("Hello World ! ");//Vizov funktsii, u ukazanie sto pomestitj v znatsenii

// function calc (a,b) {
//     return(a + b);
// }
// console.log(calc(3,4));
// console.log(calc(8,4));

// function retVar () {
//     let num = 50;
//     return num;// Tserez return mozno vivezti peremennuju vov nesnij mir
// }
// // TAKZE MOZNO VIZVATJ FUNKTSIJU ESE DO EE OBJAVLENIJA V KODE

// let anotherNum = retVar();
// console.log(anotherNum);

// TAKZE MOZNO VIZVATJ FUNKTSIJU ESE DO EE OBJAVLENIJA V KODE


// console.log(calc(3,4));
// console.log(calc(8,4));




// function calc (a,b) {
//     return(a + b);
// }




let calc = (a,b) => a+b;// Strelatsnja Funktsija standart ES&
console.log(calc(3,4));
console.log(calc(8,4));

let str = "test";// svoistavo, dlja nego ne nuzni kruglie skobki
console.log(str.length);// otvet budet 4 symbola

console.log(str.toUpperCase());//vse vivesti metodom boljsih bukv
console.log(str.toLowerCase());// vse bukvi vivesti malenjkimi

// let twelwe = "12.2";
// console.log(Math.round(twelwe)); //metod Okruglit do tselih

let twelwe = "12.2px";
console.log(parseInt(twelwe));// metod beret toljko do totski
console.log(parseFloat(twelwe)); //mestod desjatitsnogo tsisla


