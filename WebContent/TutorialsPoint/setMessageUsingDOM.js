function setMessageUsingDOM(message) {
    var userMessageElement = 
           document.getElementById("userIdMessage");
    var messageText;
    if (message == "false") {
       userMessageElement.style.color = "red";
       messageText = "Invalid User Id";
    } else {
       userMessageElement.style.color = "green";
       messageText = "Valid User Id";
    }
    var messageBody = document.createTextNode(messageText);


    // if the messageBody element has been created simple 
    // replace it otherwise append the new element

    if (userMessageElement.childNodes[0]) {
       userMessageElement.replaceChild(messageBody,
       userMessageElement.childNodes[0]);
    } else {
       userMessageElement.appendChild(messageBody);
    }
}