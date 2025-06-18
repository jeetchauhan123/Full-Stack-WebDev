function outfunc() {
    let name = "mozilla"; //init created local variable name
    function infunc() {
        // inner function, that forms closure
        console.log(name); //parent declared variable
                
    }
    return infunc;
}
let inner=outfunc();
inner();