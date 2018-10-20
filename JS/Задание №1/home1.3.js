//Сделайте функцию arrayRand, которая параметром будет принимать массив и возвращать случайный элемент из этого массива.

function arrayRand(array) 
    {   
        let randNum = numRandom(array);
        return array[randNum];
    }


function numRandom(arr) 
    {
        var random = Math.floor(Math.random() * arr.length);
        return random;
    }

document.write(arrayRand([1, 2, 3, 4]));