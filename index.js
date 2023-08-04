// Получаю все элементы li
const elems = document.querySelectorAll("li");

// Создаю пустой массив, в который буду добавлять объекты
const arr = [];

// Прохожусь по каждому элементу elems
elems.forEach(el => {

    // Новый объект
    const obj = {
        el, counter: 0, dataName: el.dataset.name
    };

    // Добавляю объект в массив
    arr.push(obj);
})

// Провека, но она тут мб и ни к чему
if (arr.length > 0) {
    // Прохожусь по каждому объекту массива arr
    arr.forEach(elem => {

        // Добавляю событие click на каждый el
        elem.el.addEventListener("click", () => {
            // Прибавляю counter
            elem.counter++;

            // Дальнейшие действия
            console.log(elem.dataName, elem.counter);
        })

    });

}