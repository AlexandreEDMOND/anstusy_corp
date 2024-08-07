document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // ID utilisateur et mot de passe corrects pour la simulation
    var correctUserId = "yan_tursunov";
    var correctPassword = "Xy9vG2zLq";

    var Username = "yan353"
    
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;

    var errorMessage = document.getElementById('error-message');

    if (password === correctPassword && userId == Username) {
        // Si seul le mot de passe est correct mais pas l'ID utilisateur
        errorMessage.textContent = "Nous vous demandons l'ID, pas le Username.";
        errorMessage.style.display = 'block';
    } else if (userId === correctUserId && password === correctPassword) {
        // Si l'ID utilisateur et le mot de passe sont corrects
        window.location.href = "home.html"; // Redirection vers un autre fichier HTML
    } else {
        // Si l'ID utilisateur ou le mot de passe est incorrect
        errorMessage.textContent = "ID ou mot de passe incorrect.";
        errorMessage.style.display = 'block';
    }
});
