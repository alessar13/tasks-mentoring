//Сделайте функцию shuffle, которая параметром будет принимать массив и перемешивать его элементы в случайном порядке.

function shuffle(array) 
{
    var result = [];
    var length = array.length;
    for (let i = 0; i < length; i++) 
    {
        var random = randomNumber(0, array.length - 1);
        var num = array.splice(random,1)[0];
        result.push(num);
    }
    return result;
}


function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(shuffle([1, 2, 3]));

