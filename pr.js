console.log('hello');

console.log(1+5);

console.log('hello');


function welcomeMessage (){

var message = '';
var age = prompt('what is your age');
console.log(age);

if (age>18){
   message = 'welcome'

}else{ message = 'not allowed'
}

return document.write('<h3>' + message + age + '</h3>');

}

welcomeMessage();




function productType (){


var product = prompt('what product type do you want? tv, phone or laptop');


while(product !== 'phone' && product !== 'tv' && product !== 'laptop'){
 product =prompt('please write valid product tv , phone or laptop')
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
return document.write(product);

}
productType();



