
function stringHandsOn(){
    var greet = "  Hey you are doing good, keep it up  ";
    console.log(`Given string is: ${greet}`);
    console.log(`Length of String is: ${greet.length}`)
    var result = greet.trim();
    console.log(`After remove spaces The string is: ${result} And It's length:${result.length}`);
    var count = greet.length - result.length;
    console.log(`Extra spaces count is: ${count}`);
    console.log(`First character of String is: ${result.charAt(0)} And Last character is: ${result.charAt(result.length-1)}`);
    var countWord = result.split(" ");
    console.log(`Total count of Words is: ${countWord.length}`);
    var index = greet.indexOf("good");
    console.log(`Index of "good" is: ${index}`);
    var sub = greet.substring(20);
    console.log(`Substring is: ${sub}`);
    var res = result.endsWith("up");
    console.log(`String endsWith "up": ${res}`);
    
    var res1 = result.startsWith("Hey");
    console.log(`String startsWith "Hey": ${res1}`);
    
    
    
    
    
}
stringHandsOn();