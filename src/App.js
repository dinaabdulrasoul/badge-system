import { useState } from "react";
import keys from "./keys.json";
import { saveAs } from "file-saver";

function App() {
  const [search, setSearch] = useState("");
  const flag = false;
  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") return;
    for (let i = 0; i < keys.length; i++) {
      if (search === keys[i].passcode) {
        saveAs(keys[i].badge, "image.jpg"); // Put your image url here.
        flag = true;
      }
    }
    if (flag == false) {
      alert("It seems you didn't win a badge yet :)");
    }
  };
  return (
    <div className="App">
      <header>
        <img src="https://drive.google.com/uc?export=view&id=1rjk3EkUYSlNgk5GnJ6pHpE1pBypQsLmr"></img>
        <h1>
          Welcome to <br></br>the Badge Master
        </h1>
        <h3>Congratulations for winning a badge!</h3>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="password"
            placeholder="Enter your badge passcode then press enter:"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </form>
      </header>
    </div>
  );
}

export default App;
