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

    avatar.innerHTML = `<img src = ${photo.value} alt="userpic">`;
// console.log(photo.value);
    if (photo.value === '') {
        avatar.innerHTML = `<img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUXFRUVFRUVFRUVFRUVFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8PFS0dFR0tLjEtNzctMC03Ny03LSsrLS0rLTItLS8rKy0tKy03KysrLTE3KystKy0rLCsrKysrOP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAAAQIDBAUGBwj/xAA1EAACAQIDBQUHBAMBAQAAAAAAAQIDESExQQQSUWFxBROBkfAGByKhscHRMmLh8UJSciMU/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECBAUDBv/EACMRAQEAAwACAQQDAQAAAAAAAAABAgMRBCExBRIiQRRx0RP/2gAMAwEAAhEDEQA/APw0AAACQIBIAgkAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAABKQEFrBI1jAKxsSonVCjxNFFE6vHA4kNHobkbkT2cdTjgB1SomPdl6jIk2VIt3SHV45yDq7hCWzriTpxyg3ns7XMxsVEAAAAAAAAAAAAALAlACATYICpZCxLwQGkEtTZ1Yo4wOL1vOsZ94Z3A4daxqnRCucRZMcOvRUkzOpTMacsDoc8PWhKsViirlbM1VzCqyB3hnOoUkyjZeI1VUNp5mIKLSiuJWwARAJIAAAAAAAAAvYIkACESTFATBE1ciYkVWRWNwSCogAAXjx4ZlZKzJps0qwwvwwf2frgUUpyOuhj5nIo5czqpz3bf8ARjVb7XGzVjCqk0K1S66P7ExldJa3+v8AQHKZs7auzO11wv8AN5HLOOPyKiuhFi81jbgv7KtgQASmBBBpOOpmAAAAAAASALghBsCS+SKJESYVrT1ZlJmiwj1MRCgACAJJiBMIG8v0+Sfhin9vAzgmsfSNK79fQLxlcOeFudzMFG1yaEsTOcsCtwOrv3vRtpgaTtjby5429cjhjLG5tSqY353CIqxtdc7+GiMWjvnG6vrr1/Cy8zllDxAxBZohog0hirGTL0XiTWhZlGQJCIFgCbAQCbACbgACxRItIvs8cbhV6uGBzm1WRjYkKEE2BUTFHRTp39fYyp+Bq6i4fYlWDlbDqZTlgd1PsuvJXjQm1/y8jkr0ZRdpRlF6pqzJMsbfVW42TtjnBLIMmICABJKZCJSA6qVWyJw89TLBWuzWMk9URVK1FxMUb1U2+Ri8CiUrG9WKcehSk+R0LhYlV5wL1lZsqViixYE2CosCQEQSiLkwQUZpS1M2jWk8MiVYpUMy9UqIlRcE2JsZImmm2ks3kfqfux9jKc4vaay3rSlGCavH4HZy543sfmnZ63akG8rr+Pmfv3u7rReyOlFq9OpUWmKlJyg7c4yT8Tj/AFvds1eNbr9ds7/Ta8WS5e3n+2m3LZNmdWN4u6hTpxwcpN6u17JXZ4e1dhPaKcJVH3kKtJTpVJRipxbimoyaWL5nqe9CDq7FuRi3VhWjLcs23F/Dg1wckz6bsGrCOzUqNlJ0qMYyf+Kkkk7Yu7vc4+rb/wAfEw2S/nbW7l3LZcbPT+c+19glQqypSWMX5rRnIj633luL22e7mkt7k+B8iz6rRsuzVjlfmxzNuMxzsi0UVZ0UlgZSPZ5qHrdh9jzrtvdk4RaT3c5SeUI8/oeUj9v91Wx01ssJYPHeyV+8vjjr8O6l0NLz/K/javv/AG9tOv78uV4OxdjrZdq2XZaqUO/jvNqKe5JtxpqTf6k2mn1R9R7S+72lXpVHGMI144JwwbaWCnHmZe2NFVNt2TaoO8YVFTqfDjCMZKpGTTeCVpq/F8z7l9op0515RUIbrav/AJWu3J+tDi+R5N+zXtwz/O/62JLMrLPxfy1XhKm3F54Xs76fyjHePY7akp1N6KtdY83KUpYeEorwPIkfSY3slrTs5UwZ00Wcp00GWkZ7ZC0jnR17dn4HMkWIlEMukVsEQCbACheBQvAVSRalIzmKZFXmUNJIpNFKqWRUtEqN6cv7Pr/Zf2unss1L9StuyX+0U8OjV3Z+D0t8WjSL4Hlt1Y7cbhnOysscrjex+6w9suztpipTlDeWk/gmup5HbnvB2ajTcNl3XLRRS3U+Mpa+B+Ru3Aza1OXh9E8fHLvbcZ+u+mzfLy56nt672edVVK88XUbWt7r4r44WyVrnh7prLaZ7u7vPdxwu7Y54eBipHXk41cr1up2RnNi1yrRlKjo7NX/rDC9pJ+TufZezHtFPs2rKjUtOk5YqLTcXe6klnbG/ifCwm1l0L968OluvU8d2nDdhcM52VlhncL2fL93l7b9myW/OdNvPGD3vK2Z8l7Ze8X/6Y9zSTjS1vg52yX7Y/U/Od5kSvrc0NH0nRpy+73bPjr3z8jLKc4vtFXeu9XdtnPYvukOJ1Gsqkd2zxWbOOCPRhBKOJKscu14u5ikdM4mUixKrYo2JMq2ZMU3JKXAEGkJGZaBisRNhEyRUK2uVkiISJkRWbJTIkRcqNFIsmZbxaKYG2+Uk7l5JJZ3MrgQ0UZvuFdy7zSCFNlpq56Gz0KLW7v8AxcbOz8C2z7DGLvVlaKV3bF9LeXmRlx4xaxetbee7e13a5S5UXi+pdS4mKZomBsrGVZonvOBlmBvsyxOivUu+BlRVkL3ZAlgYzmTWkYtmU+ETchkAIkEAogtAqSjFV5IzNChItQW3iti6hxduWpUVYjFvJXNN9LJeLx/grKo36+wE909Wl1ZeMVrK/RN/WxkrnTR2NvGT3VxdvnfLxAzklon1b/Bk0dtaMF+58Xfd8s38ujONhUxkWkrlFDkaRXIqIikvzwFSpfW+vr5EONmt7LW2diJqN/hulzz+RFLcEVZruYEShqBFKPI6q+ztJWV+WvgtfAxhG1nfDXk+ZpXrtpJ+axT8MmBz7q5r5mkYJZl1U1dmvP5PFeDLPcfGK4r4o+KeK+YGLlpctSjzJWzP/Fp807/J4omphhYDCq8TO5MipUCSCQFwLAIgkixNiKsmQEie7YVDkVNO74tL5k70VpfrgvJfkIpGDeSubRpJYN3fCOL88vqUc283ZcsF5LMOei/lgdHfxjgkvD7yzfRYFHJvGb6LL+l9Sm6o54v6flk0abm+Sxb9aga0IqTcpfpWmV+XJes2ialNLOyeb/auFvJf0WdRZr9MbWXF6dUsXz8TnqVLrq7v7L6vxKIqS45lVNmbZKYF3jiHEneI38AosC0auhi2QEb3s7rXTjxTLKdsUrxecXo+v3Mk9PHxIhO3rBkVo46xbt849fyRCfnxX3WTDwd4t205ciV8WSs+Gj6fgDWMdVg+WXnp0FWu8n68CtN2KVJXEFH08vwUsGN4qIsCbEAATcAQSQAJuWUigAmQJiyVEioV2Xul1KufAiEbuy1y68Ai1ODk7L+P4R0VaiityPi9Xz/C4dWJNQVli9Xxf+q/ateL5GEZZyfh14gTVllFaZ9dTOcsSAwKglgAAAAAAm4kQSkBeEvXrUvCBnFGm/ZWCpqTvhrx4mLEmL8SobxDQaIuAJuQAJuCCAJBBKIAAKLIXKkpAEjoit1YZ6taJ/4rm/WplF2yz48OglPTT1iBWUr+tCGwQRUkABAABQEoBEE2JJAixaKIiyHIKs5FGyAVC4IAFrkNEE3AgEkEAAAAAAAAAm5BIFmypAAlEtCJLZRUAACXEmC4kSRBAFgABO6LAEQTukMogAEAAAAAAAAAAAAAAAAEogAAAAJBAAEgAAAABAAkAAAyAAAAAAAAAAAAAAAf/9k=' alt='cat'>`;
    } else {
        avatar.innerHTML  = `<img src = ${photo.value} alt="userpic">`;
    };

// console.log(firstname.value);
    if (firstname.value === '' || visionNick.checked === false) 
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