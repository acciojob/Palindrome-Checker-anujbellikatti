// complete the given function

// function palindrome(str){

// 	let  xx = str.split(" ").toString();
// 	let x=xx.split("");
// 	let c=0;
// 	for(let i=0;i<x.length/2;i++){
// 		if(x[i]===x[x.length-i]){
			
// 		}else{
// 			c++;
// 		}
// 	}
// 	if(c>0){
// 		return false;
// 	}else{
// 		return true;
// 	}
// }
// module.exports = palindrome

function palindrome(str){
 let ch="" ;
	str=str.toLowerCase();
	for (let i = (str.length-1); i >=0 ; i--) {
		ch+=str[i];
	
	}
	if(ch==str){
		return true;
	}else{
		return false;
	}
}
module.exports = palindrome
