for (let x=0;x<25 ;x++){
    let para = document.createElement("span");                       // Create a <p> node
    let t = document.createTextNode((x + 1));      // Create a text node
    para.appendChild(t);                                          // Append the text to <p>
    document.getElementById("textArea").appendChild(para);           // Append <p> to <div> with id="myDIV"
}
const jsonEx = /{(\n)*.*:({.*:.*}|.*)*(\n)*}/gm;
const consoleLogEx = /console\.log\((.+)\)/gm;
evaling= ()=> {
    document.querySelector('#terminal').innerHTML='';
    let output = document.querySelector('#terminal');
    let data;
    let input = document.querySelector('#code').value.toString();
    input= checkForConsoleLog(input);
    data =  new Function(input)
    try {
    console.log(data());
    output.innerText +=' '+data()
    } catch (e) {
    output.innerHTML +=' '+e
    }
};
let checkForJSON = (input)=>{
    if (jsonEx.test(input)) {
        jsonEx.test(input);
        let json = jsonEx.exec(input);
        return input.replace(jsonEx, 'JSON.stringify('+json[0]+')');
    }
    else {
        return input
    }
};
let checkForConsoleLog= (input)=>{
    if (consoleLogEx.test(input)) {
    consoleLogEx.test(input);
    let groupOne = consoleLogEx.exec(input);
    input= input.replace(consoleLogEx, 'return ' + groupOne[1]);
    return  checkForJSON(input);
    }
    else {
        return input
    }

};

//alert(jsonEx.exec("console.log({'name':'lol'})")[0]);
