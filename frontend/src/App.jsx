import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  return (
    <div className="App" style={{ marginLeft: '50px' }}>
      <h1>Data from Backend:</h1>
      {data ? <pre>{data}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default App;
