const textInput = document.querySelector("#text-input");
const chkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

chkBtn.addEventListener("click", () => {
  /**
   * @type {string}
   */
  let inputContent = textInput.value;
  let moddedString  = inputContent.toLowerCase();
  moddedString = moddedString.replace(/[^a-z0-9]/g, "");
  let outputString = "";
  if ((moddedString === "")) {
    alert("Please input a value");
  } else {
    for (let i = moddedString.length - 1; i >= 0; i--) {
        outputString += moddedString[i];
    }
    console.log(result)
    if (outputString == moddedString) {
      result.innerHTML = `<strong>${inputContent}</strong> is a palindrome`;
    } else {
      result.innerHTML = `<strong>${inputContent}</strong> is not a palindrome`;
    }
  }
});
