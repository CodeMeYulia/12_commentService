const button = document.querySelector('.submit'); //переменная кнопки

const photo = document.querySelector('.photo'); //переменная для поля ссылки
const avatar = document.querySelector('.avatar'); //переменная поля аватара в чате

const mytext = document.querySelector('.mytext'); //переменная поля ввода сообщения в чате
const message = document.querySelector('.message'); //переменная строчки сообщения в чате

let firstname = document.querySelector('.firstname'); //переменная для поля фио
const nickname = document.querySelector('.nickname'); //переменная поля имени в чате

const timecode = document.querySelector('.timecode'); //переменная текущего времени в чате
// console.log(firstname.value);


button.addEventListener('click', () => {  //отправка сообщения в чат по нажатию кнопки в форме
    avatar.innerHTML = `<img src = ${photo.value} alt="userpic">`;
console.log(photo.value);
    // if (photo.value = '') {
    //     avatar.innerHTML = `<img src='https://kartinkin.net/pics/uploads/posts/2022-09/1662989910_1-kartinkin-net-p-pukhlie-koti-instagram-1.jpg' alt='cat'>`;
    // } else {
    //     avatar.innerHTML  = `<img src = ${photo.value} alt="userpic">`;
    // };

console.log(firstname.value);
    if (firstname.value === ''){
        nickname.textContent = "anonimka: ";
    } else {
        const arr = (firstname.value).split(" "); //получение массива строки имени
        // console.log(arr);
        const ArrUpp = []; //компиляции нового массива строки имени
        for (let i=0; i < arr.length; i++) 
    {
        ArrUpp.push(arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase()); //преобразование элементов массива строки имени
    };
        let firstnameUp = ArrUpp.join(' '); //объединение элементов массива строки имени
        // console.log(firstnameUp);
    
        nickname.textContent = `${firstnameUp}: `;  
        console.log(nickname.textContent);
    }

    // firstname.value = ("") ? nickname.textContent = "anonimka" : nickname.textContent = `${firstnameUp}: `;

    timecode.innerHTML = new Date().toLocaleString(); //запись текущего времени в комментарий
        
    message.textContent = (`"${mytext.value}"`).replace(/viAgrA/gi, "*****").replace(/xxx/gi, "*****"); //запись переданного сообщения в чат С АНТИСПАМОМ
    
   //самоочищение поля после передачи данных
    mytext.value = '';

});


// Котовасий иванЫч Маодзедун  https://kartinkin.net/pics/uploads/posts/2022-09/1662989910_1-kartinkin-net-p-pukhlie-koti-instagram-1.jpg