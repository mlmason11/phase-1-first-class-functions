function receivesAFunction(callbackFunction) {
    return callbackFunction();
}

function returnsANamedFunction() {
    return function namedFunction() {};
}

function returnsAnAnonymousFunction() {
    return function () {};
}