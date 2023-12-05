//базовые переменные
const personName = document.getElementById('person');
const avatar = document.getElementById('avatar');
const message = document.getElementById('message');
const sendMessage = document.getElementById('sendMessage');
const chat = document.querySelector('.chat');
const checkPublic = document.getElementById('checkbox');



//функция отправки сообщения по клику на кнопку
sendMessage.addEventListener('click', function(){

    const myMessage = document.createElement('div'); //создаем окно сообщения
    myMessage.classList.add('myMessage');
    chat.append(myMessage);

    const textBlock = document.createElement('textBlock');//отделяем текстовый блок в сообщении
    textBlock.classList.add('textBlock');
    myMessage.append(textBlock);


    //передаем аватар
    function createAva(){
        const avas = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCeJ3908QSdViNzTKtgnrhGrR_ggK93l3tX8dskJdJl8VLX_DHx1tJqc5pZi9oq2A9Tg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Z5mFAbDSrdQSBizpNuN8xM0Nr7LycEz33jPsbLGFolTTLRLfO1rSejMcnS5IBRB5PTE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKoe_eoXy8BbKbmgedUf-YjRcnWPlF-fXwckI68upohVfkWEY7f2R4m03xe0DdTfQEzM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzPsDdTS7t19UoE4Tq_X-m4Xf7D0-6yrxjFQ0mKXYT5zIAiAN58Qtp__EtpKSvw-uamw&usqp=CAU",
        ];
        const randomEl = Math.floor(Math.random()*5);
        console.log(randomEl);
        const randomAva = avas[randomEl]; 
        const ava = document.createElement('img');
        //добавляем условие проверки - если поле аватара не заполнено
        if(avatar.value === ""){ava.src = randomAva}
        else{ava.src = avatar.value}; 
        myMessage.prepend(ava);
        ava.classList.add('ava');
    };
    createAva();


    //передаем автора
    function createText(){
        const about = document.createElement('div'); 
        about.classList.add('about');
        textBlock.append(about);
        
        const getNick = () => {
            const nick = document.createElement('div');
            if (personName.value === "" || checkPublic.checked === false ) {nick.innerText = "Некто: "} //если поле не заполнено ставится имя по умолчанию
            else{nick.innerText = personName.value[0].toUpperCase() + personName.value.slice(1).toLowerCase()+": ";
            };
            nick.classList.add('personName');
            about.prepend(nick);
        }
        getNick();
        
        //передаем время комментария
    function fixTime(){
        const nowHours = " " + new Date().getHours() + "." + new Date().getMinutes() + "." + new Date().getSeconds();
        const nowDate = new Date().getDate() + ":" + new Date().getMonth() + ":" + new Date().getFullYear() + "г." + " " ;
        // console.log(now);
        const timeMess = document.createElement('div'); 
        timeMess.classList.add('timeMess');
        timeMess.innerHTML = `<div class="now">
        <div class="nowDate">${nowDate} </div>
        <div class="nowHours">  ${nowHours}</div>
        </div>`;
        about.append(timeMess);
    };
    fixTime();
    };
    createText();

    //передаем текст сообщения и проверяем на спам
    function checkSpam(){
        const mess = document.createElement('div');
        mess.classList.add('mess');
        const str = message.value;
        const strChecked = str.replace(/vIagrA|xxx|виагра/gi, "***");
        mess.textContent = strChecked;
        textBlock.append(mess);
    };
    checkSpam();

    function clearInputs(){
        avatar.value = "";
        message.value = "";
    };
    clearInputs();

    //добавляем кнопку сброса имени
    // const addNewName = document.createElement('button');
    // addNewName.classList.add('addNewName');
    // addNewName.innerText = "Новое имя";
    // sendMessage.append(addNewName);
}); 