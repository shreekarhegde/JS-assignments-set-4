// Write a JavaScript function to test whether the character at the provided (character) index is upper case. 
// Test Data :
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false

function checkUppercase(string,i){
   
    if(string.charAt(i) === string.charAt(i).toUpperCase(i)){
        return true;
    }
    else {
        return false;
    }
}
console.log(checkUppercase('Js STRING EXERCISES', 1));