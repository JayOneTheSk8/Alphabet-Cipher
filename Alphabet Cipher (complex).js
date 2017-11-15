var alphaCode = [["a", "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890 .&?!"]];


for (var i = 0; i < alphaCode[0][1].length - 1; i++){

  var newArray = [alphaCode[i][1]];
  var letter = alphaCode[i][1][0];
  var letterClass = alphaCode[i][1][1];

  var toPush = [letterClass, newArray[0].substr(1, (alphaCode[0][1].length - 1)) + letter];


  alphaCode.push(toPush);
}

console.log(alphaCode);

String.prototype.allClear = function (list){
	var count = 0;

	for (i = 0; i < list.length; i++){
		for(n = 0; n < list.length; n++){
			if (this[i] == list[n]){
				count++;
			}
		}
	}
	if (count == this.length){
		return true;
	} else {
		return false
	}
};

function alphabetCipher (hideOrSeek, passKey, encryption){

  if (passKey.allClear(alphaCode[0][1]) == false || encryption.allClear(alphaCode[0][1]) == false){
    return "The only acceptable characters are \"" + alphaCode[0][1] + "\"."
  } else{

    found = hideOrSeek.toUpperCase();

    if (found == "HIDE"){

      if (passKey.length > encryption.length){

        var difference = passKey.length - encryption.length;
        var password = passKey.slice(0, -difference);
        var message = "";

        for (i = 0; i < encryption.length; i++){
          var n = 0;
          while (alphaCode[n][0] != password[i]){
            n++;
          }
          var m = 0;
          while (alphaCode[m][0] != encryption[i]){
            m++;
          }
          message += alphaCode[m][1][n];
        }

        console.log("Your code has been encrypted as:\n\"" + message + "\"");

      } else if (passKey.length == encryption.length){

        var message = "";

        for (i = 0; i < encryption.length; i++){
          var n = 0;
          while (alphaCode[n][0] != passKey[i]){
            n++;
          }
          var m = 0;
          while (alphaCode[m][0] != encryption[i]){
            m++;
          }
          message += alphaCode[m][1][n];
        }

        console.log("Your code has been encrypted as:\n\"" + message + "\"");

      } else if (passKey.length < encryption.length) {

        var m = 1;

        for (var x = 1; m * passKey.length < encryption.length; x++){
          m++;
        }

        var longPass = passKey.repeat(m);

        if (longPass.length > encryption.length){
          var difference = longPass.length - encryption.length;
          var password = longPass.slice(0, -difference);
          var message = "";

          for (i = 0; i < encryption.length; i++){
            var n = 0;
            while (alphaCode[n][0] != password[i]){
              n++;
            }
            var m = 0;
            while (alphaCode[m][0] != encryption[i]){
              m++;
            }
            message += alphaCode[m][1][n];
          }
        } else {
          var message = "";

          for (i = 0; i < encryption.length; i++){
            var n = 0;
            while (alphaCode[n][0] != longPass[i]){
              n++;
            }
            var m = 0;
            while (alphaCode[m][0] != encryption[i]){
              m++;
            }
            message += alphaCode[m][1][n];
          }
        }

        console.log("Your code has been encrypted as:\n\"" + message + "\"");

      }
    } else if (found == "SEEK"){

      if (passKey.length > encryption.length){

        var difference = passKey.length - encryption.length;
        var password = passKey.slice(0, -difference);
        var message = "";

        for (i = 0; i < encryption.length; i++){
          var n = 0;
          while (alphaCode[n][0] != password[i]){
            n++;
          }
          var m = 0;
          while (alphaCode[m][1][n] != encryption[i]){
            m++;
          }
          message += alphaCode[m][0];
        }

        console.log("Your secret message is:\n\"" + message + "\"");

      } else if (passKey.length == encryption.length){

        var message = "";

        for (i = 0; i < encryption.length; i++){
          var n = 0;
          while (alphaCode[n][0] != passKey[i]){
            n++;
          }
          var m = 0;
          while (alphaCode[m][1][n] != encryption[i]){
            m++;
          }
          message += alphaCode[m][0];
        }

        console.log("Your secret message is:\n\"" + message + "\"");

      } else if (passKey.length < encryption.length){

        var m = 1;

        for (var x = 1; m * passKey.length < encryption.length; x++){
          m ++;
        }

        var longPass = passKey.repeat(m);

        if (longPass.length > encryption.length){
          var difference = longPass.length - encryption.length;
          var password = longPass.slice(0, -difference);
          var message = "";

          for (i = 0; i < encryption.length; i++){
            var n = 0;
            while (alphaCode[n][0] != password[i]){
              n++;
            }
            var m = 0;
            while (alphaCode[m][1][n] != encryption[i]){
              m++;
            }
            message += alphaCode[m][0];
          }
        } else {
          var message = "";

          for (i = 0; i < encryption.length; i++){
            var n = 0;
            while (alphaCode[n][0] != longPass[i]){
              n++;
            }
            var m = 0;
            while (alphaCode[m][1][n] != encryption[i]){
              m++;
            }
            message += alphaCode[m][0];
          }
        }

        console.log("Your secret message is:\n\"" + message + "\"");

      }
    } else if (hideOrSeek == null){
      console.log("You must enter \"hide\" or \"seek\" as a parameter.");
    } else {
      console.log("That is not a valid entry.");
    }
  }
}

alphabetCipher("hide", "scones", "Meet me by the tree.");
