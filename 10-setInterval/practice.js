/*
    `setInterval` - runs the function every X milliseconds
*/

var sayMyName = setInterval(function(){console.log("Ganesh")},1000);

/*
    If we create a `setInterval` and do not assign it to a variable we can stop it by
    1. By refreshing the browser
    2. By running the code clearInterval(sayMyName)
*/
clearInterval(sayMyName)