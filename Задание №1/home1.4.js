//Сделайте функцию uniq, которая будет оставлять в массиве только уникальные элементы 
//(то есть будет удалять дубли).

//Решение сам не осилил... Взял с learnjavascript.ru.... Сам бы перебирал бы вложенным циклом...


function uniq(array)
    {   
        var obj = {};

        for (let i = 0; i < array.length; i++) 
        {
            var str = array[i];
            obj[str] = true;  
        }
        
        return Object.keys(obj);
    
    }


alert(uniq([2,2,3,4,4,6,6,7]))