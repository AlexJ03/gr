// Получаю все элементы html по их ID
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");

// Создаю массив объектов (el : содержит сам элемент, counter: счетчик для данного элемента)
const arrayOfVars = [{ el: a, counter: 0 }, { el: b, counter: 0 }, { el: c, counter: 0 }, { el: d, counter: 0 }, { el: e, counter: 0 }];

// Прохожу по каждому элементу массива
arrayOfVars.forEach(item => {
    // Вешаю событие click на каждый el
    item.el.addEventListener("click", () => {
        // Прибавляю counter данного элемента (++ - тоже самое что item.counter = item.counter + 1)
        item.counter++;
        // Дальнейшии манипуляции...
        console.log(item.counter);
    });
})
