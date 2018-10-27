// Write a JavaScript function to Uncapitalize the first letter of each word of a string. 
// Test Data :
// console.log(unCap('Js String Exercises'));
// "js string exercises"

function unCap(string){
    var res = '';
    string = string.split(' ');
   
    for(var i = 0; i < string.length; i++){
        if(string[i].charAt(0) === string[i].charAt(0).toUpperCase()){
       string[i] = string[i].toLowerCase();
        console.log(res);
        }
    }
    res = string.join(' ');
return res;
}

console.log(unCap('Js String Exercises'));
console.log(unCap('javaScript is exceptional scripting language for create client side web applications'));
