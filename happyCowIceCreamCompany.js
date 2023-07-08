// Instruction: The Happy Cow Ice Cream Company manufactures several types of ice cream. Design a flowchart or psuedocode for a program that accepts an ice cream flavor, price per gallon, and number of gallons sold in the average year. Display message that indicates whether the ice cream is a bestseller, which defined as a flavor that sells more than 40,000 gallons per year.

$('#check').click(function(){
  // console.log("Check");

  $('#bestseller').empty();

  var flavorVal = $('#flavor').val();
  var priceVal = $('#price').val();
  var numberVal = $('#number').val();

  var intPriceVal = parseInt(priceVal);
  var intNumberVal = parseInt(numberVal);

  console.log(flavorVal);
  console.log(intPriceVal);
  console.log(intNumberVal);

  var bestSellerMessage = $(`<p>The ${flavorVal} is our bestseller throughout the year.</p>`);

  var notBestSellerMessage = $(`<p>The ${flavorVal} is not our bestseller ice cream.</p>`);

  if(intNumberVal > 40000){
    $('#bestseller').append(bestSellerMessage);
  } else{
    $('#bestseller').append(notBestSellerMessage);
  }

})