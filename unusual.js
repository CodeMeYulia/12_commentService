// // let arr = firstname.split('/\s+/');
// // let result = arr.map(function(elem){
// //     return elem[0].toUpperCase + elem.substring(1);
// // }).join('');
// // console.log(result);

// // // не работает
// // let arr = firstname.split('/\s+/');
// // console.log(arr);
// // arr.forEach(function(word){
// //   return word[0].toUpperCase() + word.substring(1));
// // });
// // console.log();

// // let firstnameText = firstname.textContent;

// // firstname.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
// // console.log(firstname);


// // // firstname = firstname[0].toUpperCase() + firstname.slice(1);
// // let nickname = document.querySelector('.nickname');
// // nickname.innerHTML = firstname;

// // const mytext = "buy ViAgRA now!";
// // let message = document.querySelector('.message');
// // message.innerHTML = mytext;

// const firstnameUp = (firstname) => {
//     return firstname
//         .toLowerCase()
//         .split('')
//         .map((word) =>word[0].toUpperCase() + word.substr(1))
//         .join('');
//     };
//     let result = firstnameUp(firstname);
//     console.log(result);


//     const firstname = "Барскова  поЛина Вольдемаровна: ";

// const words = firstname.split(" ");
// console.log(words);

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
// }

// words.join(" ");



// const firstname = "Барскова  поЛина Вольдемаровна: ";

// const words = firstname.split(" ");

// words.map((word) => {
//     return word[0].toUpperCase() + word.substring(1);
// }).join(" ");


// const firstname = "Барскова  поЛина Вольдемаровна: ";

// const firstnameUp = firstname.replace(/(^\w{1}|(\s+\w{1})/g, letter => letter.toUpperCase());


// usual

// const button2 = document.querySelector('.button2')
// const input2 = document.querySelector('.input2');

// button2.addEventListener('click', () => {
//     console.log(input2.value);
// });


// let date = new Date();
// console.log(date);
// let difr = (new Date() - (new Date() - 1));
// console.log(difr);

// console.log
// (difr < (1 * 1000) ? 
//    "прямо сейчас" : 
//    (difr < (1000 * 60) ? 
//     "n секунд назад" :
//     (disr < (1000 * 60 *60) ?
//     "m минут назад" :
//     "15.15.15 15:15"
//     )
//    );
// )


// const formatDate = (date) => {
//     let difr = (new Date() - date)
//     console.log(difr);
// }

// formatDate(new Date(13.04.2023));


// const button = document.querySelector('.button');
// const arr = ['eniki', 'beniki', 'eli', 'vareniki'];
// const block = document.querySelector('.block');
// let totalString = '';

// console.log(arr);
// console.log(arr[1]);

// button.addEventListener("click", () => {
//     let i = Math.floor(Math.random() * 4);
//     // console.log(i);
//     // console.log(arr[i]);
//     totalString = totalString + `<p>${arr[i]}</p>`;
//     block.innerHTML = totalString;
// })