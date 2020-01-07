function ONParser(eq) {
    //var equasion = eq.
    var stack = []
    var output = []
    
    eq = eq.replace(/ /g, "")

    function doSomethingWithSymbol(plusorminus) {
        if(stack.length <= 0){
            stack.push(symbol)
        } else {
            let o2 = stack.pop()
            if(plusorminus){
                if (o2 == '*' || o2 == '/') {
                    stack.push(o2)
                    stack.push(symbol)
                }else {
                    output.push(o2)
                    stack.push(symbol)
                }
            }else {
                if (o2 == '+' || o2 == '-') {
                    stack.push(o2)
                    stack.push(symbol)
                }else {
                    output.push(o2)
                    stack.push(symbol)
                }
            }
        }
    }

    for(symbol of eq) {
        switch(symbol) {
            case "+":
                doSomethingWithSymbol(true)
                break;
            case "-":
                doSomethingWithSymbol(true)
                break;
            case "*":
                doSomethingWithSymbol(false)
                break;
            case "/":
                doSomethingWithSymbol(false)
                break;
            default: 
                output.push( parseInt(symbol) )
        }
    }

    while(stack.length > 0) {
        output.push( stack.pop() )
    }
    //2+2*2
    return output;
}


function ONP (wyrazenie) { 
    let stos = []
    for(let i=0; i < wyrazenie.length; i++){
        if( typeof(wyrazenie[i]) == "number" ){
            stos.push(wyrazenie[i])
        }else {
            a = stos.pop()
            b = stos.pop()
            if(wyrazenie[i] == "+"){
                stos.push(b + a)
            }else if(wyrazenie[i] == "-") {
                stos.push(b - a)
            }if(wyrazenie[i] == "*") {
                stos.push(b * a)
            }if(wyrazenie[i] == "/") {
                stos.push(b / a)
            }
        }
    }
    return stos.pop()
}

module.exports = { ONParser: ONParser, ONP: ONP }