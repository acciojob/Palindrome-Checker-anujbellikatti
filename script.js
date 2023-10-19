// complete the given function

function palindrome(str){

	let  x = str.split("");
	for(let i=0;i<x.length;i++){
		if(x[i]===x[x.length-i]){
			return true;
		}else{
			return false;
		}
	}
}
module.exports = palindrome
