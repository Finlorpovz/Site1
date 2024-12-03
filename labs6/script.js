const container = document.getElementById("container");

// Покебол появляется на экране
function createPokeball(x, y) {
    const pokeball = document.createElement("div");
    pokeball.className = "pokeball";
    pokeball.style.left = `${x - 50}px`;
    pokeball.style.top = `${y - 50}px`;

    container.appendChild(pokeball);

    // Через 1 секунду покебол исчезает, и появляется покемон
    setTimeout(() => {
        pokeball.remove();
        createPokemon(x, y);
    }, 1000);

    // Событие при клике на покебол
    pokeball.addEventListener("click", () => {
        pokeball.remove();
        createPokemon(x, y);
    });
}

// Создание покемона
function createPokemon(x, y) {
    const pokemon = document.createElement("div");
    pokemon.className = "pokemon";
    pokemon.style.backgroundImage = "url('https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif')";
    pokemon.style.left = `${x - 75}px`;
    pokemon.style.top = `${y - 75}px`;

    container.appendChild(pokemon);

    // Через 10 секунд покемон исчезает, появляется покебол
    setTimeout(() => {
        pokemon.remove();
        createPokeball(x, y);
    }, 10000);

    // Событие при клике на покемона
    pokemon.addEventListener("click", () => {
        pokemon.remove();
        createPokeball(x, y);
    });
}

// Событие для создания покебола по клику на экран
document.addEventListener("click", (event) => {
    createPokeball(event.clientX, event.clientY);
});