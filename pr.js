console.log('hello');

console.log(1+5);

console.log('hello');

var message = '';
var age = prompt('what is your age');
console.log(age);

if (age>18){
   message = 'welcome'

}else{ message = 'not allowed'
}

document.write('<h3>' + message + age + '</h3>');




var product = prompt('what product type do you want?');



while(product !== 'phone' && product !== 'tv' && product !== 'laptop'){
   product =prompt('please write valid product ')
}



if (product=== 'phone'){
   product = '<img src="images/phone.jpg"/>';
}else if(product==='laptop'){
   product = '<img src="images/laptop.jpg"/>';

}else if(product==='tv'){
   product = '<img src="images/tv.jpg"/>';
}

var imgNum = prompt('how many pic you want to see')
for( var i = 0 ; i<imgNum; i++){


   console.log(i);

   document.write(product);
}




