//Сделайте функцию uniq, которая будет оставлять в массиве только уникальные элементы 
//(то есть будет удалять дубли).


function uniq(arr) 
{
    for (let i = 0; i < arr.length; i++) 
    {
        for (let j = 0; j < arr.length; j++) 
        {
            if (arr[i] == arr[j]) 
            {
                arr = deleteCopies(arr, arr[i])
            }     
        }
    }

    return arr;
    
}

function deleteCopies (arr, num) 
{
    var arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num)
        {
            arr1.push(arr[i]);
        }
        
    }    
    return arr1;
}
alert(uniq([2,2,3,4,4,6,6,7]));