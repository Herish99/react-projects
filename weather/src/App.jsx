import React, { useState } from "react";
import "./App.css";

// Define the API configuration
const api = {
  key: "ff431b01e24bf42cc8b9d90009e86b7f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  // Initialize state variables
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  // Function to handle the search button click
  const searchbtn = () => {
    // Fetch weather data from the API
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col border border-dark mt-5 ">
            <h1 className="text-center my-3">Weather Detail</h1>
            <div className="result text-center">
              <div className="inpbtn my-5">
                {/* Input field for city name */}
                <input
                  className="text-center p-1"
                  type="text"
                  placeholder="City Name"
                  onChange={(e) => setSearch(e.target.value)}
                />

                {/* Search button */}
                <button
                  className="mx-2 button-42"
                  type="button"
                  value="Search"
                  onClick={searchbtn}
                >
                  Search
                </button>
              </div>

              <hr />
              {/* Conditional rendering based on weather data */}
              {typeof weather.main &&
              weather.coord &&
              weather.wind &&
              weather.weather !== "undefined" ? (
                <div className="finalResult">
                  {/* Display weather details in a table */}

                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <div>City :- {weather.name}</div>
                        <div>Latitude :- {weather.coord.lat}</div>
                        <div>Longitude :- {weather.coord.lon}</div>
                        <div>Visibility :- {weather.visibility / 1000} KM</div>
                        <div>Wind speed :- {weather.wind.speed} m/s</div>
                      </div>
                      <div className="col-6">
                        <div>Temperature :- {weather.main.temp} °С</div>
                        <div>Feels like :- {weather.main.feels_like} °С</div>
                        <div>Pressure :- {weather.main.pressure} hpa</div>
                        <div>Humidity :-{weather.main.humidity} %</div>
                        <div>Status :- {weather.weather[0].description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                

                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div>City :-  </div>
                      <div>Latitude :- </div>
                      <div>Longitude :-</div>
                      <div>Visibility :-</div>
                      <div>Wind speed :-</div>
                    </div>
                    <div className="col-6">
                      <div>Temperature :- </div>
                      <div>Feels like :- </div>
                      <div>Pressure :- </div>
                      <div>Humidity :-</div>
                      <div>Status :- </div>
                    </div>
                  </div>
                </div>
                // Render nothing if weather data is not available
                // <div className="finalResult">
                //   {/* Display weather details in a table */}
                //   <table className="my-table">
                //     <tbody>
                //       <tr>
                //         <th className="mainRow" colSpan={2}>
                //           Result
                //         </th>
                //       </tr>
                //       <tr>
                //         <th>City</th>
                //         <td>{""}</td>
                //       </tr>
                //       <tr>
                //         <th>Latitude</th>
                //         <td>{""}</td>
                //       </tr>
                //       <tr>
                //         <th>Longitude</th>
                //         <td>{""}</td>
                //       </tr>
                //       <tr>
                //         <th>Visibility</th>
                //         <td>{""} KM</td>
                //       </tr>
                //       <tr>
                //         <th>Wind-Speed</th>
                //         <td>{""}m/s</td>
                //       </tr>
                //       <tr>
                //         <th>Temperature</th>
                //         <td>{""} °С</td>
                //       </tr>
                //       <tr>
                //         <th>Feels Like</th>
                //         <td>{""}</td>
                //       </tr>
                //       <tr>
                //         <th>Pressure</th>
                //         <td>{""}</td>
                //       </tr>
                //       <tr>
                //         <th>Humidity</th>
                //         <td>{""}</td>
                //       </tr>
                //       <tr>
                //         <th>Status</th>
                //         <td>({""})</td>
                //       </tr>
                //     </tbody>
                //   </table>
                // </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
