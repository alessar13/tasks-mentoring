// Сделайте функцию detElem, которая параметром будет принимать массив и какое значение и возвращать массив, в котором все элементы с таким значением будут удалены.

function detElem(arr, num)
    {   
        var arrNew = [];
        for (let i = 0; i < arr.length; i++) 
            {        
                if(arr[i] != num) 
                    {
                        arrNew.push(arr[i]);
                    }   
            }
        return arrNew;
    }

document.write(detElem([1, 2, 3, 5, 3, 8, 11], 11));




