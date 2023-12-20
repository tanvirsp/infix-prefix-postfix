

function infixToPostfix(input){
    let output = "";
    const stack = [];

    for(let i= 0; i<input.length ; i++){
        const item = input[i];
        // console.log(item,  isNeumeric(item), isOperator(item) );

// (8+2)*3
        if( item == "(" ){
            stack.push(item);
        } else if ( item ==")" ){
            while( stack[stack.length - 1] != "(" ) {
                output +=stack.pop()
            }
            stack.pop();
        } else if( isNumeric(item)){
            output +=item;
        } else if (isOperator(item)){
            while( stack.length != 0 && getPrority(item) <= getPrority(stack[stack.length - 1]) ){
                output +=stack.pop();
            }
            stack.push(item);
        }
    }
    while( stack.length != 0){
        output +=stack.pop();
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
        return 2;
    } else if(char == "+" || char == "-")  {
        return 1;
    } else {
            return 0
    }
}






console.log(infixToPostfix(input));