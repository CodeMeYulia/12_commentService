const button = document.querySelector('.submit'); //переменная кнопки
const photo = document.querySelector('.photo'); //переменная для поля ссылки
let firstname = document.querySelector('.firstname'); //переменная для поля фио
firstname = "Котовасий иванЫч Маодзедун";
const mytext = document.querySelector('.mytext'); //переменная поля ввода сообщения в чате
const avatar = document.querySelector('.avatar'); //переменная поля аватара в чате
const nickname = document.querySelector('.nickname'); //переменная поля имени в чате
const message = document.querySelector('.message'); //переменная строчки сообщения в чате

const arr = firstname.split(" "); //получение массива строки имени
console.log(arr);

const newArr = []; //компиляции нового массива строки имени

for (let i=0; i < arr.length; i++) {
    newArr.push(arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase()); //преобразование элементов массива строки имени
};

let firstnameUp = newArr.join(' '); //объединение элементов массива строки имени
console.log(firstnameUp);

button.addEventListener('click', () => {  //отправка сообщения в чат по нажатию кнопки в форме
    avatar.innerHTML = `<img src = ${photo.value} alt="userpic">`;
    nickname.textContent = `${firstnameUp}: `;
    message.textContent = `"${mytext.value}"`;
});


// Котовасий иванЫч Маодзедун

