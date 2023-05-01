

export default async function getData2() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
      const data = await response.json();
      const output = data;
      console.log(output);
    } catch (error) {
      console.error(error);
    }
  }