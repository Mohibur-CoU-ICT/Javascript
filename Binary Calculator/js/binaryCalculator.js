var res = document.getElementById("res");

function getOutput(){
	return res.innerHTML;
}

function printOutput(num){
	res.innerHTML = num;
}

function checkOperator(op){
	if(op=='+' || op=='-' || op=='*' || op=='/'){
		return true;
	}
	else{
		return false;
	}
}

var number = document.getElementsByClassName("number");
for(let i=0; i<number.length; i++){
	number[i].addEventListener('click', function(){
		var output = getOutput();
		if(output == undefined) output = "";
		var len = output.length;
		// console.log("output = "+output);
		// console.log("len = "+len);

		if(len>0 || this.id != "btn0"){
			// console.log("I am here");
			output += this.innerHTML;
			if(checkOperator(output[len-1]) && this.id == "btn0"){
				output = output.substr(0, len);
			}
		}
		printOutput(output);
	});
}

var operator = document.getElementsByClassName("operator");
for(let i=0; i<operator.length; i++){
	operator[i].addEventListener('click', function(){
		var output = getOutput();
		if(output == undefined) output = "";
		var len = output.length;
		if(len>0 && checkOperator(output[len-1])){
			output = output.substr(0, len-1);
		}
		output += this.innerHTML;
		printOutput(output);
	});
}

var clear = document.getElementById("btnClr");
clear.addEventListener('click', function(){
	printOutput("");
});

var equal = document.getElementById("btnEql");
equal.addEventListener('click', function(){
	var output = getOutput();
	var len = output.length;
	if(len > 0){
		var operatorIndex = -1;
		for(let i=0; i<len; i++){
			if(checkOperator(output[i])){
				operatorIndex = i;
			}
		}
		// console.log("operatorIndex = "+operatorIndex);
		var num1 = parseInt(output.substr(0, operatorIndex), 2);
		var num2 = parseInt(output.substr(operatorIndex+1), 2);
		// console.log("num1 = "+num1);
		// console.log("num2 = "+num2);
		var ans = 0;
		if(isNaN(num2)){
			ans = num1;
		}
		else if(output[operatorIndex]=='+'){
			ans = num1 + num2;
		}
		else if(output[operatorIndex]=='-'){
			ans = num1 - num2;
		}
		else if(output[operatorIndex]=='*'){
			ans = num1 * num2;
		}
		else if(output[operatorIndex]=='/'){
			ans = Math.floor(num1 / num2);
		}
		// console.log("ans = "+ans);
		printOutput(ans.toString(2));
	}
});