import "./App.css";
import { useEffect, useState } from "react";
import WeatherC from "./garbage";
import SearchIcon from "@mui/icons-material/Search";
import { Switch } from "@mui/material";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [query, setquery] = useState("delhi");
  const [search, setsearch] = useState("");
  const [data, setdata] = useState([]);
  const [theme, setTheme] = useState("light");

  // const API_KEY = "aed6395f91733bf120528bafcbda5df3";

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    getdata();
  }, [query]);

  const getdata = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=aed6395f91733bf120528bafcbda5df3`
    );
    // console.log(response);
    const data = await response.json();

    setdata(data);
    console.log(data);
  };

  const updateSearch = (e) => {
    setsearch(e.target.value);
  };

  function getSearch(e) {
    e.preventDefault();

    setquery(search);
    setsearch("");
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        {data.main != undefined ? (
          <>
            <div>
              <div className="top-bar">
                <h1 className="title">Weather Thing</h1>
                <div className="switch">
                  <Switch
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                    defaultChecked
                    size="small"
                  />
                  <label className="theme-label">
                    {theme === "light" ? "Light Mode" : "Dark Mode"}
                  </label>
                </div>
              </div>
              <div className="search">
                <form onSubmit={getSearch}>
                  <SearchIcon className="search-icon" />
                  <input
                    type="search"
                    placeholder=" Search for a city."
                    value={search}
                    onChange={updateSearch}
                    className="search-bar"
                  />
                  <button type="submit" className="search-button">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div>
              <WeatherC
                name={data.name}
                mainTemp={data.main.feels_like}
                descr={data.weather[0].description}
                icons={data.weather[0].icon}
                visi={data.visibility}
                cloud={data.clouds.all}
                humid={data.main.humidity}
                max={data.main.temp_max}
                min={data.main.temp_min}
                id={theme}
              />
              {/* <span>{data.main.temp}</span> */}
            </div>
          </>
        ) : (
          <div>Loading.</div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

// temperature={data.main.temp}
