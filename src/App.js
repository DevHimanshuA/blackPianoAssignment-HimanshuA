import React, {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// functional component named - 'App'
const App = () => {
    // setting up hooks for filmData and initialize it with blank array
    const [filmData,setFilmData] = useState([]);
    // on useEffect(on page load) hit the api for films data and populate table based upon it using hooks
    useEffect(()=>{
      const apiUrl = 'https://ghibliapi.herokuapp.com/films';
      axios.get(apiUrl)
      .then(res => {
        setFilmData(res.data);
      })
    },[]);

    // setting up columns for table
    const columns = [{
      dataField: 'title',
      text: 'Title'
    }, {
      dataField: 'director',
      text: 'Directed By'
    }, {
      dataField: 'release_date',
      text: 'Release On'
    }];
    return (
      <div className="container">
        <h2>A Normal data Fetching into table Using Rest APIs</h2>
        <BootstrapTable sort={true} bordered={true} keyField='title' data={filmData} columns={columns} 
        pagination={paginationFactory({sizePerPage:5,hideSizePerPage:true})}/>
      </div>
    );
}
export default App;
