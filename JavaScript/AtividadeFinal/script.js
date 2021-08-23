async function getYellowPokemons() {
    try {
      const response = await (await fetch('https://pokeapi.co/api/v2/pokemon-color/yellow')).json();
      const pokemons = response.pokemon_species
      renderPokemonsButtons(pokemons);
    } catch (error) {
      console.error(error);
    }
}

function renderPokemonsButtons(pokemons){
    const pokemonList = document.getElementById("pokemon-list");
    for(pokemon of pokemons){
        const button = document.createElement('button');
        button.addEventListener("click", handleClick);
        button.innerText = pokemon.name;
        button.className = 'button-pokemon';
        pokemonList.append(button); 
    }
}

function renderPokemonInfos({height, name, weight, image, abilities}){
    const pokemonInfo = document.getElementById("pokemon-info");
    pokemonInfo.innerHTML = "";
    
    const img = document.createElement('img');
    img.src = image;
    img.alt = name;
    img.className = 'imagem-pokemon';
    pokemonInfo.append(img);
    
    let abilitiesStr = abilities[0].ability.name; 
    for(let i = 1; i<abilities.length; i++){
        abilitiesStr+=`, ${abilities[i].ability.name}`
    }

    const ul = document.createElement('ul');
    ul.innerHTML = `
        <li>Nome: ${name}</li>
        <li>Altura: ${height}</li>
        <li>Peso: ${weight}</li>
        <li>Habilidades: ${abilitiesStr}</li>`;
    pokemonInfo.append(ul);
}

function parsePokemonInfo(pokemonInfo){
    return {
        height: pokemonInfo.height,
        name: pokemonInfo.name,
        weight: pokemonInfo.weight,
        image: pokemonInfo.sprites.front_default,
        abilities: pokemonInfo.abilities
    }
}

async function handleClick(event){
    event.preventDefault();
    const name = event.target.innerText;
    try {
        const response = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json();
        renderPokemonInfos(parsePokemonInfo(response));
      } catch (error) {
        console.error(error);
    }
    
}

getYellowPokemons();
