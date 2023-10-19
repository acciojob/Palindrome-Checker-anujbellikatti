// complete the given function

function palindrome(str){

	let  xx = str.split(" ").toString();
	let x=xx.split("");
	let c=0;
	for(let i=0;i<x.length;i++){
		if(x[i]===x[x.length-i]){
			
		}else{
			c++;
		}
	}
	if(c>0){
		return false;
	}else{
		return true;
	}
}
module.exports = palindrome
