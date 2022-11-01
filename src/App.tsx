import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App(): JSX.Element {
  const { data: repositorio, isFetching } = useFetch<Repository[]>(
    "https://api.github.com/users/kiondartel/repos"
  );

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositorio?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
export default App;
