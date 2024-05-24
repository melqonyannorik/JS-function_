//10, Տրված են A և B(A<B) ամբողջ թվերը:

//ա) Արտածել [A,B] հատվածին պատկանող 3-ին պատիկ առաջին թիվը:

// function numbers(a, b) {
//   for (let i = a; i <= b; i++) {
//     if (i % 3 === 0) {
//       console.log(i);
//       break;
//     }
//   }
// }
// numbers(10, 20);

//բ) Արտածել [A,B] հատվածին պատկանող բոլոր ամբողջ թվերի գումարը:

// function numbers(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// }
// numbers(1, 10);

// գ) Աճման կարգով արտածել [A,B] հատվածին պատկանող ամբողջ թվերը և դրանց քանակը:

// function numbers(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     console.log(i);
//     sum = i;
//   }
//   console.log(sum);
// }
// numbers(1, 10);

//********************************************************************** */

//11. Արտածել տրված բնական թվի

//ա) թվանշանների գումարը, քանակը, արտադրյալը,

// function numbers(a) {
//   let b = a;
//   let z = a;

//   let sum = 0;
//   while (a > 0) {
//     let c = a % 10;
//     sum = sum + c;
//     a = (a - c) / 10;
//   }
//   console.log("Gumar:" + " " + sum);
//   let count = 0;
//   while (b > 0) {
//     let c = b % 10;
//     b = (b - c) / 10;
//     count++;
//   }
//   console.log("Qanak:" + " " + count);

//   let res = 1;
//   while (z > 0) {
//     let c = z % 10;
//     res = res * c;
//     z = (z - c) / 10;
//   }
//   console.log("Artadryal:" + " " + res);
// }
// numbers(2252);

//բ) կենտ թվանշաններից ամենափոքրը,

//գ) 4-ից մեծ կենտ թվանշանների գումարը,

//դ) 7-ից փոքր զույգ թվանշանների արտադրյալը
