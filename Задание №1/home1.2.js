// Сделайте функцию getDiff, которая параметром будет принимать два массива и возвращать массив элементов, которые не присутствуют одновременно в обоих массивах.

function getDiff(arr1, arr2)
    {
        var arrayFinal = arr1.concat(arr2);
        
        for (let i = 0; i < arr1.length; i++) 
            {
                for (let j = 0; j < arr2.length; j++) 
                    {
                        if (arr1[i] == arr2[j])
                        {
                            arrayFinal = checkElem(arrayFinal, arr1[i]);
                        }
                    }        
                    
            }
        return arrayFinal;    
    }


function checkElem (arr, num) 
    {
        var array = [];
        
        for (let i = 0; i < arr.length; i++) 
        {
            if (arr[i] != num)
            {
                array.push(arr[i]);
            }     
            
        }

        return array;
    }

document.write(getDiff([1, 2, 3, 5, 3, 8, 11], [2, 3, 5, 7, 11, 12]));