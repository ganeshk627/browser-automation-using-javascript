

if('1'==1){
    console.log("evaluate to true because == converts types");
}

if('1'===1){
    console.log("evaluate to false because a String value does not equal an integer value");
}

if (true) {
    console.log("always");
} else {
    console.log("rarely");
}

if (false) {
    console.log("rarely");
} else {
    console.log("always");
}