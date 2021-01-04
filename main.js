let bg = prompt('Введіть назву кольору для фону сторінки в форматі RGB, HEX або назву латинецею');
let font = prompt('Введіть назву шрифту для сторінки');
let title = prompt('Яке вирівнювання для заголовка h1 ви бажаєте? left, right or center?');
let bgP = prompt('Введіть назву кольору для фону параграфа з посиланнями в форматі RGB, HEX або назву латинецею');
let colorP = prompt('Введіть назву кольору для тексту у параграфі з посиланнями. Колір введіть в форматі RGB, HEX або назву латинецею. (#f54d865, rgb(200,15,20), green)');
let colorLink = prompt('Введіть назву кольору для посилань. Колір введіть в форматі RGB, HEX або назву латинецею. (#f54d865, rgb(200,15,20), green)');
let fontStyleDiv = prompt('Введіть назву кольору, розмір, товщину для тексту в елементі div. Ввід проводимо через кому. (#fd845dd,18px,600)');
let listStyle = prompt('Введіть тип маркера для маркованого списку. (none, circle, decimal, disc...)');
let link1 = prompt('Введіть назву першого сайту. Назву сайту вводимо без "http://"');
let link2 = prompt('Введіть назву другого сайту. Назву сайту вводимо без "http://"');
let link3 = prompt('Введіть назву третього сайту. Назву сайту вводимо без "http://"');

document.body.style.backgroundColor = bg;
document.body.style.fontFamily = font;
document.getElementsByTagName('h1')[0].style.textAlign = title;
document.querySelector('p').style.backgroundColor = bgP;
document.querySelector('p').style.color = colorP;
document.querySelector('ul').style.listStyle = listStyle;

let linkOne = document.querySelectorAll('a')[0];
    linkOne.href = `http://${link1}`;
    linkOne.textContent = link1;

let linkTwo = document.querySelectorAll('a')[1];
    linkTwo.href = `http://${link2}`;
    linkTwo.textContent = link2;

let linkThree = document.querySelectorAll('a')[2];
    linkThree.href = `http://${link3}`;
    linkThree.textContent = link3;

let div = fontStyleDiv.split(',')
document.querySelector('div').style.cssText = `color: ${div[0]}; font-size: ${div[1]}; font-weight: ${div[2]}`;

let a = document.getElementsByTagName('a');

for(let i=0; i < a.length; i++){
    a[i].style.color = colorLink;
}






