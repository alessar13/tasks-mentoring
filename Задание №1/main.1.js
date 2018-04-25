function getFriend(num1, num2) 
{   
    return getSum(getDiv(num1)) == num2 && getSum(getDiv(num2)) == num1;
}

function getDiv(num) 
{   
    var arr = [];
    
    for (let i = 1;  i < num; i++) {
        if (num % i == 0){
        arr.push(i);    
        }
    }
    return arr;
}

function getSum(arr) 
{
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum;
    
    
}

alert(getFriend(220, 284));