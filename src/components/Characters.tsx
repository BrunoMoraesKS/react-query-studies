import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IData {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: ICharacter[];
}

const Characters = () => {
  const [page, setPage] = useState(1);

  const fetchCharacters = async () => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return res.json();
  };

  const { isLoading, error, data, isPreviousData } = useQuery<IData>(
    ["characters", page],
    fetchCharacters,
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="characters">
      {data?.results.map((character: ICharacter) => (
        <Character key={character.id} character={character} />
      ))}

      <div>
        <button
          onClick={() => setPage((page) => page - 1)}
          disabled={isPreviousData || page === 1}
        >
          Previous
        </button>
        <button
          disabled={isPreviousData || page === data?.info.pages}
          onClick={() => setPage((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
