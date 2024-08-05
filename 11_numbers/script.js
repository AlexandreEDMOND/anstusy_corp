function checkNumber(index) {
    const input = document.getElementById(`number${index}`);
    const value = input.value;
    // Logique pour vérifier si le nombre est correct (exemple ici : si le nombre est 5)
    if (value == index) {
        alert(`Nombre ${index} correct!`);
    } else {
        alert(`Nombre ${index} incorrect!`);
    }
}

function checkAll() {
    let allCorrect = true;
    for (let i = 1; i <= 11; i++) {
        const input = document.getElementById(`number${i}`);
        const value = input.value;
        // Logique de vérification pour chaque nombre
        if (value != i) { // Exemple: vérifier si le nombre est 5
            allCorrect = false;
            break;
        }
    }

    const resultMessage = document.getElementById('result-message');
    if (allCorrect == true) {
        resultMessage.textContent = "Tous les nombres sont corrects!";
    } else {
        resultMessage.textContent = "Certains nombres sont incorrects.";
    }
}
