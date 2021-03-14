import React, { useState,useEffect } from 'react'
import Select from 'react-select';
import './App.css';
import axios from 'axios';
// functional component named - 'App'
const App = () => {
    // setting up hooks for filmData
    const [filmData,setFilmData] = useState([]);
    // on useEffect(on page load) hit the api for films data and populate dropdown based upon it
    useEffect(()=>{
      const apiUrl = 'https://ghibliapi.herokuapp.com/films';
      axios.get(apiUrl)
      .then(res => {
        // initialize dropdown options with blank array
        let drpOptions = [];
        // loop through API reponse and populate dropdown in key/value pair object based upon 'title' of film
        res.data.forEach((val,i,arr)=>{
          drpOptions.push({
            value: val.title,
            label: val.title
          });
        })
        setFilmData(drpOptions);
      })
    },[]);

    // onchange method for dropdown
    const onSelectDrpDown = (drpVal) => {
      console.log(">>>",drpVal);
    }
    // onChange={(e)=>onSelectDrpDown(e.target.value)}
    const handleSearch = () => {
      console.log("handling search...");
    }
    return (
      <div className="container">
        <h2>A Normal Search Using Dropdown</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
          <Select options={filmData} isClearable={true} className="selectDrpDown" classNamePrefix="selectDrpDown"
          onChange={(e)=>onSelectDrpDown(e.target.value)} value=""/>
          <button onClick={(e)=>handleSearch()}>Search</button>
        </form>
        
      </div>
    );
}
export default App;
