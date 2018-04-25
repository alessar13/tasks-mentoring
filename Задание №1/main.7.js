//Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

function getDivisors(num)
{
    return divisors(num);
}

function divisors(nums) {
    
    var arr = [];
    for (let i = 0; i < nums; i++) 
    {
        if(nums%i == 0)
        {
            arr.push(i);
        }
        
    }
    return arr;
}

alert(getDivisors(1200));