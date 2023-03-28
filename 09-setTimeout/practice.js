/*
    In order to clear the localstorage from the console we use the command:
*/

localStorage.clear()


/*
    `setTimeout` - runs a function after X milliseconds has passed
*/

function print_pannuda(n) {
    for(m=1; m<=n;m++){
        console.log(m);
    }
}
function simple_print(v){
    console.log(v);
}

// will not wait before run
setTimeout(print_pannuda(10), 2000)
// will wait before run
setTimeout(print_pannuda(10), 2000)

// will not wait before run
function etho_onnu() {
    for (x = 1; x <= 10; x++) {
        setTimeout(simple_print("loop " + x), x * 100)
    }
}
etho_onnu();
// will wait before each run or step
function etho() {
    for(x=1;x<=10;x++) {
        setTimeout(simple_print, x*100, "loop "+x)
    }
}
etho();