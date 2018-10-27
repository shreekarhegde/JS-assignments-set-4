// Write a JavaScript function to chop a string into chunks of a given length. 
// Test Data :
// console.log(stringChop('resource')); 
// return ["resource"]

// console.log(stringChop('resource',2)); 
// return [ "re", "so", "ur", "ce"] 

// console.log(stringChop('dcresource',3));
//  return ["dcr", "eso", "urc", "e"]


function chop(string,index){
    
    var c = [];
    if(index >= 0){

    
    for(var i = 0; i <= string.length; i++){
        var b = string.substr(0,index);
        c.push(b);
        string = string.slice(index);
        console.log(string);
    }
    }
    else {
        var y = [];
         y.push(string);
         return y;
}
c.push(string);
return c;
}

console.log(chop('dcresource'));