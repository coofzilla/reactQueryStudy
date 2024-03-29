import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Person from 'components/Person/Person';
const queryClient = new QueryClient();

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/');
  return res.json();
};

const People = () => {
  const { data, status } = useQuery('people', fetchPeople);
  console.log(data);

  return (
    <div>
      <h2>People</h2>
      {/* <p>{status}</p> */}

      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Wraped() {
  return (
    <QueryClientProvider client={queryClient}>
      <People />
    </QueryClientProvider>
  );
}
