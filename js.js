"use strict";
// if (2*4 == 7) {
// console.log("Verno!")
// } else {
//     console.log("Neverno")
// // }

// let num = 50;

// if (num < 49) {
//     console.log("Neverno!")
// } else if (num > 100) {
//     console.log("Mnogo!")
// } else {
//     console.log("Verno")
// };// Uslovia mogut dalse vipolnjtsa..

// (num == 50) ? console.log("Verno") : console.log("Neverno!");// Toze uslovie no ternarnij operator, mense mesta
// //Uslovie       esli true to          esli false to

// switch (num) {//Eto toze aljternativa proverki s raznimi uslovijami
//     case num < 49:
//             console.log("Neverno!");
//             break;
//     case num > 100:
//             console.log("Mnogo!");
//             break;
//     case num > 80:
//             console.log("Vse ese mnogo!");
//             break;
//     case 50:// Ravenstvo proverjaetsja pri switche imenno tak
//             console.log("Verno!");
//             break;
//     default:
//             console.log("Sto to ne tak!");
//             break;//Vsegda ljubaja proverka v switche zakantsivaetsa break

// }

//Cycles

let num = 50;
// while (num < 55) {//POka num menjse 55 tsislo vivoditsja v consolj
//     console.log(num);//tsislo vivoditsja v consolj
//     num++;// i Uvelitsivaetsja na 1
// } //KOnets tsikla

do {// Delai
    console.log(num);//Vivodi destvie
    num++;// Kazdij raz dobavljaj 1
}
while (num < 55);// do teh por poka mensje 55

for(let i = 1; i < 8; i++) {
 // Zadaem Pere; uslovia break; uslovija povtora
    console.log(i)// Vivod v kosole
}

for(let i = 1; i < 8; i++) {
  // Zadaem Pere; uslovia break; uslovija povtora  
    if (i == 6) {
        break;
    }
    // Zadaem Pere; uslovia break; uslovija povtora
       console.log(i)// Vivod v kosole
   }

   for(let i = 1; i < 8; i++) {
    // Zadaem Pere; uslovia break; uslovija povtora  
      if (i == 6) {//esli i ravno 6 to propustitj i idti dalse
          continue;
      }
      // Zadaem Pere; uslovia break; uslovija povtora
         console.log(i)// Vivod v kosole 123457
     }
