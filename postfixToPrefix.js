function postfixToPrefix(input){
    const stack = []
    for(let  i =0 ; i< input.length ; i++){
        let item = input[i];

        if(isNeumeric(item)){
            stack.push(item);
        } else {
            const first = stack.pop();
            const second = stack.pop();
            const newItem = item + second + first   ;
            stack.push(newItem);

        }
    }
    return stack.pop()

};


function isNeumeric(char){
    if(char >= "0" &&  char <= "9" ) return true
    return false
}

// 82+
// 8 2 +



console.log(postfixToPrefix("82+3*5-"));