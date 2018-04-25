    var array1 = [1, 2, 3, 4, 6, 8, 10]
    
    var obj = {};
    var common = [];
    
    for (let i = 0; i < array1.length; i++) 
    {
        obj[array1[i]] = array1[i];
    }


    for (const key in obj) {
        {
            alert(obj[key])            
        }
    }