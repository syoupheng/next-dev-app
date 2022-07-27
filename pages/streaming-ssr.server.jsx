import { Suspense } from "react";
import PokeCard from "../components/PokeCard.client";
import useData from "../utils/hooks/useData";

async function fetchData(url, delay = 0) {
  console.log(url);
  const [res] = await Promise.all([
    fetch(url),
    new Promise(res => setTimeout(res, (Math.random()) * delay))
  ])
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }

  // const data = await res.json();
  // console.log('data : ', data);
  return res.json()
}

const PokeList = () => {
  const { results } = useData("top", () => fetchData('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0', 500));
  // const { results } = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0', 500);

  return (
    <>
      {results.map(pokemon => {
        return (
          <Suspense key={pokemon.name} fallback={`loading...`}>
            {pokemon.name}
            <PokemonData url={pokemon.url} />
          </Suspense>
        );
      }
      )}
    </>
  )
}

const PokemonData = ({ url }) => {
  const data = useData("top", () => fetchData(url, 500));

  return <PokeCard {...data} />;
}

const PokemonListPage = () => {
  return (
    <div className="container pt-6 px-52 mx-auto">
      <Suspense fallback={`Loading...`}>
        <PokeList />
      </Suspense>
    </div>
  );
}
 
export default PokemonListPage;