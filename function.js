
console.log(" no.1");


function muncul() {
    return "halo function";
  }
  
  var shoutOut = muncul;
  console.log(shoutOut ())


  console.log(" no.2");

  function calculateMultiply ( num1, num2 ){
    return (num1 * num2)
  }
  
  var num1 = 5;
  var num2 = 6;
  
  var hasilPerkalian = calculateMultiply(num1,num2);
  console.log(hasilPerkalian);

  console.log(" no.3");

  function processSentence( name,age,addres,hobby){
    return ("nama saya "+name+", umur saya "+age+" , alamat saya , "+addres+ " dan saya punya hoby yaitu " + hobby+ "!")
  }
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";
  
  var fullSentence = processSentence(name,age,address,hobby);
  console.log(fullSentence);
