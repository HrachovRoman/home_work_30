//1. Используйте цикл for..of
for (let elem of document.getElementById('ulId').children) {
    console.log(elem.innerHTML); 
}
//или
for (let elem of document.querySelectorAll('li')) {
    console.log(elem.innerHTML); 
}
//2 Вывести общее кол-во элементов в консоль
console.log(document.getElementById('ulId').children.length);

//или
console.log(document.getElementById('ulId').childNodes.length);

//3 Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль
const arr = [];
for (let elem of document.querySelectorAll('li')) {
    arr.push(elem.textContent);
}
console.log(arr);

//или
const arr1 = Array.from(document.querySelectorAll('ul>li')).map(elem => elem.innerHTML);

console.log(arr1);