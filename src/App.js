import React from 'react';
import db from "./db/db.json"
import Search from "./components/Search"

console.log(db)
function App() {
  return (
    <div className="App">
      <Search db={db} resultsMaxLimit={5}/>
    </div>
  );
}

export default App;