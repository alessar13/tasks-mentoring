// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. 
// Для этого сделайте вспомогательную функцию ucfirst, 
// которая будет получать строку, 
// делать первый символ этой строки заглавным 
// и возвращать обратно строку с заглавной первой буквой.


var arrayJoin = [];

function bigLetter(str) 
{
    var arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) 
    {
        ucfirst(arr[i]);
    }
    return arrayJoin.join(' ');
}

function ucfirst(params) {
    arrayJoin.push(params.charAt(0).toUpperCase() + params.slice(1));
}

alert(bigLetter("hello world"));