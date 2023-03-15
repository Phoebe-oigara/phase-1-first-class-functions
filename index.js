function receivesAFunction(mantra) {
    mantra();

}

function returnsANamedFunction() {
    return (function sum() {1+2});
}

function returnsAnAnonymousFunction() {
    return (function() {console.log ("functions are pretty tricky at times")});
}