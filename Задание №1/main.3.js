
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

function transform(params) 
{   
    var arr = params.split("_");
    for (let i = 1; i < arr.length; i++) 
    {
        arr[i] = capLetter(arr[i]);  
    }
    return arr.join('');
}


function capLetter(str)
{
    return str.slice(0,1).toUpperCase() + str.slice(1); 
}


alert(transform('var_text_hello'));


