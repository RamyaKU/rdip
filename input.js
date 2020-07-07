function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}



function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function abs(form) {
	form.display.value = Math.abs(form.display.value);
}


function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  //if (val !== 0.0) {
   // var percent = form.display.value;  
   // percent = pcent.substring(percent.indexOf("%")+1);
   // form.display.value = parseFloat(percent)/100 * val;
    //val = 0.0;
 // } else 
    form.display.value = eval(form.display.value);
  }



function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}


function validation()                                    
{ 
    var name = document.forms["form1"]["Name"];               
    var email = document.forms["form1"]["EMail"];    
    var phone = document.forms["form1"]["Telephone"];   
   
    var letters = /^[A-Za-z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   var phoneno = /^\d{10}$/;
if((name.value.match(letters))&&(email.value.match(mailformat))&&(phone.value.match(phoneno)))
{
document.write('VALID entry');
return true;
}
else
{
document.write('INVALID entry:Please try again.');
return false;                                 
}

} 



function checkPalindrome() {

var revStr = "";

var str = document.getElementById("str").value;

var i = str.length;

for(var j=i; j>=0; j--) {

revStr = revStr+str.charAt(j);

}

if(str == revStr) {


document.write(str+" is Palindrome");

return str+"checkPalindrome";
}
else
 {
document.write(str+" is not a Palindrome");
return str+"checkPalindrome";
}
}




function checkAnagram() {
  var str1 = document.getElementById('string1').value;
  var str2 = document.getElementById('string2').value;
  if(str1 !== null && str2 !== null) {
    if(str1.length !== str2.length) {
     document.getElementById('result').innerHTML = "Strings are not anagrams.";
      return false;
    }
    var hashTable = {};
    for(var i = 0; i < str1.length; i++) {
      if(hashTable.hasOwnProperty(str1[i])) {
        hashTable[str1[i]] = hashTable[str1[i]] + 1;
    } else {
     hashTable[str1[i]] = 1; 
    }
  }
   
  for(var i = 0; i < str2.length; i++) {
    if(hashTable.hasOwnProperty(str2[i])) {
      hashTable[str2[i]] = hashTable[str2[i]] - 1;
    } else {
       document.getElementById('result').innerHTML = "Strings are not anagrams!"; 
      return false;
    }
  }
    
  for(var i in hashTable) {
    if(hashTable[i] !== 0) {
      document.getElementById('result').innerHTML = "Strings are not anagrams!";
      return false;
    } else {
        document.getElementById('result').innerHTML = "Strings are anagrams!";
    }
  }
}
}