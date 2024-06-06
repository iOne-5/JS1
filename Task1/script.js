function findMiddleCharacter() {
    let userInput = prompt("Please enter a word:");

    if (userInput === null) {
        alert("Canceled.");
        return;
    }

    userInput = userInput.trim();

    if (userInput === "") {
        alert("Invalid value");
        return;
    }

    const length = userInput.length;
    const middleIndex = Math.floor(length / 2);

    let result;

    if (length % 2 === 0) {
        result = userInput[middleIndex - 1] + userInput[middleIndex];
    } else {
        result = userInput[middleIndex];
    }

    alert(result);
}
