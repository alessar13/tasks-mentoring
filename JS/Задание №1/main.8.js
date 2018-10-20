// Сделайте функцию getIntersect, которая параметром принимает 
// два массива и возвращает массив элементов, 
// которые есть в обоих массивах.

// var arrX = [1, 2, 3, 4, 5, 10];
// var arrY = [1, 2, 5, 7, 8, 10];

function getIntersect(arr1, arr2) 
{
    return arrayCommon(arr1, arr2);
}

function arrayCommon(array1, array2)
{
    var obj = {};
    var common = [];
    
    for (let i = 0; i < array1.length; i++) 
    {
        obj[array1[i]] = array1[i];
    }

    for (let i = 0; i < array2.length; i++) 
    {
       var elem = array2[i];
       if (elem in obj)
       {
           common.push(elem);
       }

    }
    return common;
}

alert(getIntersect([1, 2, 3, 4, 5, 10, 11], [1, 2, 5, 7, 8, 10, 11]));


