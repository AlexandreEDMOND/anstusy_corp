const associations = {
    1: 2009,
    2: 15329,
    3: 40.0,
    4: 71.8,
    5: 14857695,
    6: 5,
    7: 41074.2,
    8: 125,
    9: 244129,
    10: 999,
    11: 52495104
  };

function checkNumber(index) {
    const input = document.getElementById(`number${index}`);
    const value = input.value;
    // Logique pour vérifier si le nombre est correct

    if (index == 7) {
        if (value <= 41074.2 && value >= 39558.8) {
            alert(`Nombre ${index} correct!`);
        } else {
            alert(`Nombre ${index} incorrect!`);
        }
    } else if (value == associations[index]) {
        alert(`Nombre ${index} correct!`);
    } else {
        alert(`Nombre ${index} incorrect!`);
    }
}

function checkAll_on_click() {
    let allCorrect = true;
    for (let i = 1; i <= 11; i++) {
        const input = document.getElementById(`number${i}`);
        const value = input.value;
        // Logique de vérification pour chaque nombre

        if (i == 7) {
            if (value <= 41074.2 && value >= 39558.8) {
                continue;
            } else {
                allCorrect = false;
                break;
            }
        } else if (value != associations[i]) { 
            allCorrect = false;
            break;
        }
    }

    const resultMessage = document.getElementById('result-message');
    if (allCorrect == true) {
        resultMessage.textContent = "Voici l'ID de Yan : yan_tursunov";
    } else {
        resultMessage.textContent = "Certains nombres sont incorrects.";
    }
}

function enlargeImage(number) {
    const newImageUrl = `img/image${number}.png`;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const newImage = document.createElement('img');
    newImage.src = newImageUrl;
    newImage.classList.add('new-image');

    document.body.appendChild(newImage);
    overlay.style.display = 'block';

    overlay.onclick = function() {
        document.body.removeChild(newImage);
        document.body.removeChild(overlay);
    };
}