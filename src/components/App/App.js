import { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import Planets from 'components/Planets/Planets';
import People from 'components/People/People';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState('planets');

  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
