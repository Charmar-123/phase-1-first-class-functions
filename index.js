function receivesAFunction(cb){

    return cb()
}

function returnsANamedFunction(){

    return function namedFunction(){
        console.log("hi");
    }
}

function returnsAnAnonymousFunction(){

    return function(){
        console.log("Anon function");
    }
}