// let now = new Date();
// console.log(date);
// console.log(+date);

// let date = new Date(16 апреля 2023);
// console.log(date);
// console.log(+date);


// let date1 = new Date(Date(2019,11,11));
// console.log(date1);

// console.log(new Date(Date.UTC(2019,11,11))); //Wed Dec 11 2019 03:00:00 GMT+0300 (Москва, стандартное время)
// console.log(new Date(Date(2019,11,11))); //Sun Apr 16 2023 19:07:12 GMT+0300 (Москва, стандартное время)

// let now = new Date(); 
// console.log(now);  //Sun Apr 16 2023 18:44:37 GMT+0300 (Москва, стандартное время)
// console.log(now.toLocaleTimeString()); //18:45:04
// console.log(now.toLocaleTimeString().slice(0,-3)); //18:45

// console.log(now.toLocaleString());
// console.log(now.toLocaleString()).slice(0,-3);

// console.log(new Date(31536000000));

// console.log(new Date(2015,01,24,21,23));

// console.log(new Date('05.11.19'));
// console.log(new Date('2015-02-24T21:23'));

// let date = new Date(Date.parse('апрель 1, 2023'));
// console.log(date);

// const now = new Date(),
// hour = now.getHours(),
// minute = now.getMinutes(),
// second = now.getSeconds()
// ,
// message = ''
;

// console.log(now);


// let options = {
//     year:'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
// }

// let start = new Date(2023, 03, 16, 23, 59);
// for (let i=0; i<100000; i++) {
//     let doSomething = i*i*i;
// }
// let end = new Date();
// // console.log(`${end - start}`);
// let delta = (`${end - start}`);
// console.log(delta);

// if (delta <= 1 * 1000) {
//     console.log("прямо сейчас");
// } else if (delta < 1 * 1000 * 60) {
//     console.log("n сек. назад");
// } else if (delta < 1 * 1000 * 60 * 60) {
//     console.log("m мин. назад");
// } else {
//     console.log(start.toLocaleString('ru', options));
// }

// message += '' 

// function formatDate(date) {
//     if(formatDate(new Date(new Date - 1)))
// }

// let d = new Date();
// console.log(d);
// // console.log(new Date(dateString));

// d = new Date(60000); //через 60 сек от даты 0 таймстампа
// console.log(d);

// d = new Date("2023-04-16T10:30:10.555"); //Sun Apr 16 2023 10:30:10 GMT+0300 (Москва, стандартное время)
// console.log(d);

// console.log(Date.parse("2023-04-16T10:30:10.555")); //1681630210555

// d = new Date(2022, 04, 15);
// console.log(d);

//сколько времени выполняется код
// let a = +new Date();
// console.log(a);

// for(let i=0; i<1000; i++) {
//     console.log(0)
// }

// let d = +new Date();
// console.log(d);

// let x = d-a;
// console.log(x);

// //или
// let p = Date.now(new Date());
// console.log(p);

// for(let i=0; i<1000; i++) {
//     console.log(0)
// }

// let r = Date.now(new Date());
// console.log(r);

// let y = r-p;
// console.log(x);

//вывод даты
// let g = new Date();
// let options = {
//     year:'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
// }
// console.log(g.toLocaleString('ru', options));