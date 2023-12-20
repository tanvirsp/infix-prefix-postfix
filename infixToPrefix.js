

function infixToPrefix(input){
    let output = "";
    const stack = [];

    for(let i=input.length -1 ; i >= 0 ; i--){
        const item = input[i];
        // console.log(item,  isNeumeric(item), isOperator(item) );


        if( item == ")" ){
            stack.push(item);
        } else if ( item =="(" ){
            while( stack[stack.length - 1] != ")" ) {
                output = stack.pop() + output
            }
            stack.pop();
        } else if( isNumeric(item)){
            // output +=item;
            output = item + output;
        } else if (isOperator(item)){
            while( stack.length != 0 && getPrority(item) <= getPrority(stack[stack.length - 1]) ){
                output = stack.pop() + output
            }
            stack.push(item);
        }
    }
    while( stack.length != 0){
        output = stack.pop() + output
    }

    return output
    
}



function isNumeric(char){
    if(char >= "0" &&  char <= "9" ) return true
    return false
}

function isOperator(char){
    if(char == "+" || char == "-" || char =="*" || char =="/"  ) {
        return true;
    } else {
        return false
    }
    
}


function getPrority(char){
    if(char == "*" || char=="/"){
        return 3;
    } else if(char == "-")  {
        return 2;
    } else if(char == "+")  {
        return 1;
    }
    else {
            return 0
    }
}




// 82+3-

// -+823

console.log(infixToPrefix("(8+2)-3"));