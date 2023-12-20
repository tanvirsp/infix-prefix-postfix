function prefixToPostfix(input){
    const stack = []
    for(let  i = input.length - 1; i >= 0 ; i--){
        let item = input[i];

        if(isNeumeric(item)){
            stack.push(item);
        } else {
            const first = stack.pop();
            const second = stack.pop();
            const newItem = first + second + item;
            stack.push(newItem);

        }
    }
    return stack.pop()

};


function isNeumeric(char){
    if(char >= "0" &&  char <= "9" ) return true
    return false
}





console.log(prefixToPostfix("-*+8235"));