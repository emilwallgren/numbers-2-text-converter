function getNumber() {
  var inputNumber = document.getElementById("number").value;
  console.log("Input: " + inputNumber);
  console.log("Inputlength: " + inputNumber.length);
  inputNumber.toString();
  var length = inputNumber.length;
  if (length == 2 && inputNumber > 19) {
    var firstNumber = inputNumber.charAt(0) * 10;
    var secondNumber = inputNumber.charAt(1);
    var result = tens[firstNumber] + zeroToNineteen[secondNumber];
    document.getElementById("result").innerHTML = result;
  } else {
    if (inputNumber == 0) {
      document.getElementById("result").innerHTML = zero;
    } else {
    document.getElementById("result").innerHTML = zeroToNineteen[inputNumber];
    }
  }
  if (length == 3) {
    var firstNumber = inputNumber.charAt(0) * 100;
    var secondNumber = inputNumber.charAt(1) * 10;
    var thirdNumber = inputNumber.charAt(2);
    var specialNumber = inputNumber - firstNumber;
    console.log(specialNumber);

    if (secondNumber >= 20) {
      var result = hundreds[firstNumber] + 'and' + tens[secondNumber] + zeroToNineteen[thirdNumber];
      document.getElementById("result").innerHTML = result;
    } else {
      var result = hundreds[firstNumber] + 'and' + zeroToNineteen[specialNumber];
      document.getElementById("result").innerHTML = result;
      console.log(specialNumber);
    }
    if (secondNumber == 0) {
      if (thirdNumber == 0) {
        var result = hundreds[firstNumber];
        document.getElementById("result").innerHTML = result;
      }
      else {
        var result = hundreds[firstNumber] + 'and' + zeroToNineteen[thirdNumber];
        document.getElementById("result").innerHTML = result;
      }
    }
  }
}


//ARRAYS CONTAINING INFO REGARDING NUMBERS

var zero = 'zero';

var zeroToNineteen = [];
zeroToNineteen[0] = '';
zeroToNineteen[1] = 'one';
zeroToNineteen[2] = 'two';
zeroToNineteen[3] = 'three';
zeroToNineteen[4] = 'four';
zeroToNineteen[5] = 'five';
zeroToNineteen[6] = 'six';
zeroToNineteen[7] = 'seven';
zeroToNineteen[8] = 'eight';
zeroToNineteen[9] = 'nine';
zeroToNineteen[10] = 'ten';
zeroToNineteen[11] = 'eleven';
zeroToNineteen[12] = 'twelve';
zeroToNineteen[13] = 'thirteen';
zeroToNineteen[14] = 'fourteen';
zeroToNineteen[15] = 'fifteen';
zeroToNineteen[16] = 'sixteen';
zeroToNineteen[17] = 'seventeen';
zeroToNineteen[18] = 'eighteen';
zeroToNineteen[19] = 'nineteen';

var tens = [];
tens[20] = 'twenty';
tens[30] = 'thirty';
tens[40] = 'fourty';
tens[50] = 'fifty';
tens[60] = 'sixty';
tens[70] = 'seventy';
tens[80] = 'eighty';
tens[90] = 'ninety';

var hundreds = [];
hundreds[100] = 'onehundred';
hundreds[200] = 'twohundred';
hundreds[300] = 'threehundred';
hundreds[400] = 'fourhundred';
hundreds[500] = 'fivehundred';
hundreds[600] = 'sixhundred';
hundreds[700] = 'sevenhundred';
hundreds[800] = 'eighthundred';
hundreds[900] = 'ninehundred';
