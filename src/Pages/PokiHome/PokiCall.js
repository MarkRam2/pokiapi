export default async function fetchData(pokemon) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }