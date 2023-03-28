
// Snippets
var reference = new function() {
    // public function - accessible
    this.print_pannuda = function (n) {
        for(m=1; m<=n;m++){
            console.log(m);
        }
    }
    this.simple_print = function (v){
        console.log(v);
    }

    // private function - not accessible
    function clear_console(){
        clear();
    }
}






// Console
reference.print_pannuda(7);
reference.simple_print("Hi");
reference.clear_console(); // produces error