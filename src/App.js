const api = {
  key: "c0a04fdf33fbb1b29501d185a09efd82",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Enter a city..."/>
        </div>
      </main>
    </div>
  );
}

export default App;
