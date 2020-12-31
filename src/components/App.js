import React, { useState, useEffect } from "react";
import Header from "./header";
import CountryCard from "./cards";
import Pagination from './pagination'
import './common.css'

function App() {
  const [option, setOption] = useState("name");
  const [text, setText] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((res) => {
        setCountryData(res);
      });
  }, []);

  const optionChange = (event) => {
    setOption(event.target.value);
  };

  const textChange = (event) => {
    setText(event.target.value);
    setCurrentPage(0);
  };

  const search = (text, list) => {
    if (text === "") {
      return list;
    }
    return list.filter((value) => searchNow(value));
  };

  const searchNow = (data) => {
    if (
      data.name.toLowerCase().startsWith(text.toLowerCase()) &&
      option === "name"
    ) {
      return true;
    } else if (
      data.capital.toLowerCase().startsWith(text.toLowerCase()) &&
      option === "capital"
    ) {
      return true;
    } else if (
      data.region.toLowerCase().startsWith(text.toLowerCase()) &&
      option === "region"
    ) {
      return true;
    }
    return false;
  };
  
  return (
    <div>
      <center>
        <Header optionfn={optionChange} textfn={textChange} />
        {search(text, countryData).slice(currentPage * 5, (currentPage * 5) + 5).map((country, index) => (
          <div key={index} style={{ display: "inline-block" }}>
            <CountryCard country={country} />
          </div>
        ))}
        <Pagination currentPage = {currentPage} data= {search(text, countryData)} pagefn = {setCurrentPage}/>
      </center>
    </div>
  );
}

export default App;
