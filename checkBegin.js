// Write a JavaScript function to test whether a string starts with a specified string. 
// Test Data :
// console.log(startsWith('js string exercises', 'js'));
// true

function begin(string,i){
   var b = string.split(' ');
   // console.log(b[0]);
    if(b[0] === i){
       // console.log(string[0]);
        return true;
    }
    else {
        return false;
    }
}
console.log(begin('js string exercises', 'js'));