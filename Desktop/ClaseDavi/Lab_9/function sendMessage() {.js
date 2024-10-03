function sendMessage() {

    var userInput = document.getElementById("azul");
    var message = userInput.value.trim();



    if (message !== "") {

      var messageContainer = document.getElementById("chatMessages");
      var messageElement = document.createElement("div");
      messageElement.textContent = message;
      messageElement.classList.add("message");
      messageElement.style.backgroundColor = "lightblue"
      messageElement.style.marginTop = "15px"
      messageElement.style.padding = "8px" 
      messageElement.style.marginRight = "300px"
      messageElement.style.fontSize = "20px"
      messageContainer.appendChild(messageElement);
      userInput.value = "";

    }

  }

  function sendMessage2() {
    var userInput = document.getElementById("rojo");
    var message = userInput.value.trim();

    if (message !== "") {

      var messageContainer = document.getElementById("chatMessages");
      var messageElement = document.createElement("div");
      messageElement.textContent = message;
      messageElement.classList.add("message");
      messageElement.style.backgroundColor = "lightcoral"
      messageElement.style.marginTop = "15px"
      messageElement.style.padding = "8px" 
      messageElement.style.marginRight = "300px"
      messageElement.style.fontSize = "20px"
      messageContainer.appendChild(messageElement);
      userInput.value = "";

    }
  }