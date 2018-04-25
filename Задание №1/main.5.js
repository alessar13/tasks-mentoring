// С помощью функцию isSimple из предыдущей задачи выведите на экран все простые числа из промежутка от 1 до 100.
for (let i = 1; i < 100; i++) {
    if (isSimple(i) == true) document.write( i + "<br>") ;
}



function isSimple(int) 
{
   if (typeof(int) == 'number')
   {    
        for (let i = 2; i < int; i++) 
        {
            if (int%i != 0) return true; else return false;
        }
   }    
   else 
   {
       alert("Type Your Number");
   }
}   