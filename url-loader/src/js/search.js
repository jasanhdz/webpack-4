async function search(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = response.json();
  return pokemon;
}

export default search;
