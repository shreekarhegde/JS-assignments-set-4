// Write a JavaScript function to find a word within a string. 
// Test Data :
// console.log(findWord('The quick brown fox', 'fox')); 
// console.log(findWord('aa bb cc dd aa', 'aa'));
// Output : 
// "'fox' was found 1 times." 
// "'aa' was found 2 times."


function find(str,word){
    var count = 0;
    str = str.split(' ');
    for(var i = 0; i < str.length; i++){
        if(str[i] == word){
            count++;
        }
    }
    return word + ' was found '+ count +' times'; 
}

console.log(find('The quick brown fox', 'fox'));
console.log(find('aa bb cc dd aa', 'aa'));