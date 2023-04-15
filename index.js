const button = document.querySelector('.submit'); //переменная кнопки
const visionNick = document.getElementById('vision'); //переменная сокрытия имени

const photo = document.querySelector('.photo'); //переменная для поля ссылки
const avatar = document.querySelector('.avatar'); //переменная поля аватара в чате

const mytext = document.querySelector('.mytext'); //переменная поля ввода сообщения в чате
const message = document.querySelector('.message'); //переменная строчки сообщения в чате

let firstname = document.querySelector('.firstname'); //переменная для поля фио
const nickname = document.querySelector('.nickname'); //переменная поля имени в чате

const timecode = document.querySelector('.timecode'); //переменная текущего времени в чате
// console.log(firstname.value);


button.addEventListener('click', () => {  //отправка сообщения в чат по нажатию кнопки в форме

// console.log(photo.value);
    if (photo.value === '') { //условие если ссылка не введена , то рэндом из 5 дефолтных автарок
        const arrPic = [
            'https://kartinkin.net/pics/uploads/posts/2022-09/1662989910_1-kartinkin-net-p-pukhlie-koti-instagram-1.jpg', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlakD34agZiK90D1ujPFrrjmeo41emXURkNjsYC4Z23z7Y63Dr93H9vz2g8tZU7HX8IFs&usqp=CAU', 
        'https://avatars.dzeninfra.ru/get-zen_doc/4460346/pub_6085d3c1e2c7114111efc2a2_6085e4803b735b52f85124ce/scale_1200', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOHu6zKpaJrrzWDAgiL4l_WPxMDRGJmi4Oy6Yin97VsDBiRA2oLWTyxcDHXdG2W5euy0&usqp=CAU', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaujfGmHDOB6fQSubGlYkhMGnUx6qFiuht4A&usqp=CAU'
    ];
        // console.log(arrPic);
        let randPic = arrPic[Math.floor(Math.random() * arrPic.length)];
        // console.log(randPic);
        avatar.innerHTML = `<img src = ${randPic} alt="userpic">`;

    } else {
        avatar.innerHTML  = `<img src = ${photo.value} alt="userpic">`; //либо по указанной ссылке
    };


// console.log(firstname.value);
    if (firstname.value === '' || visionNick.checked === false) //условие если имя не введено либо отмечено не показывать
    {
        nickname.textContent = "Incognito: ";
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
    
        nickname.textContent = 
        // (this.getAttribute('vision2').checked) ? "anonimka: " : 
        `${firstnameUp}: `;  
        console.log(nickname.textContent);
    }

    timecode.innerHTML = new Date().toLocaleString(); //запись текущего времени в комментарий
    message.textContent = (`"${mytext.value}"`).replace(/viAgrA/gi, "*****").replace(/xxx/gi, "*****"); //запись переданного сообщения в чат С АНТИСПАМОМ
    
   //самоочищение поля после передачи данных
    mytext.value = '';

});


// Котовасий иванЫч Маодзедун  https://kartinkin.net/pics/uploads/posts/2022-09/1662989910_1-kartinkin-net-p-pukhlie-koti-instagram-1.jpg