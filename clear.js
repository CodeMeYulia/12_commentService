document.addEventListener('submit', (e) => { 
    // Отключаем событие по умолчанию 
        e.prevent.Default(); 
    // Очищаем поля формы 
        e.target.reset(); 
    });


    function clear() {
        document.getElementsByName('myForm')[0].reset();
        //document.getElementsByName ('text1').value = '';
    } 


    

    //<input onclick="clear();" type="button" value="Очитстить">

    function clear() {
        document.getElementById("text1").value = '';//пробую очистить 1 элемент формы
    }

