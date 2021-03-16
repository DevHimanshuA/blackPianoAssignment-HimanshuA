import React, {useState,useEffect} from 'react'
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// Literals file 
import Literals from './literals';
import Select from 'react-select';
// functional component named - 'App'
const App = () => {
    // setting up hooks for 'All Customer' Data
    const [customerAllData,setCustomerAllData] = useState([]);
    // setting up hooks for 'Customer' Data based on their 'name' and populate it into dropdown
    const [customerName,setCustomerName] = useState([]);
    // setting up hooks for 'selected Customer Name'
    const [selectedCustomerName,setSelectedCustomerName] = useState();
    // on useEffect(on page load) hit the api for 'All Customer' Data, populate table & dropdown using hooks(useEffect)
    useEffect(()=>{
      getAllCustomerData();
      populateDropdown();
    },[]);
    // here we get all customer data
    const getAllCustomerData = () =>{
      const apiUrl = Literals.customerAPIbaseURL;
      axios.get(apiUrl)
      .then(res => {
        setCustomerAllData(res.data);
      })
    }
    // here we populate dropdown based on 'name' of customer
    const populateDropdown = () =>{
      const apiUrl = Literals.customerAPIbaseURL;
      axios.get(apiUrl)
      .then(res => {
        let csData = res.data;
        let arr = []; 
        csData.map((val)=>{          
          return(arr.push({
            'value': val.name,
            'label': val.name
          }))
        })
        setCustomerName(arr);
      })
    }
    // handle/filter Search based upon dropdown value chosen - filter based on 'names' of customer
    const handleSearch = (selectedCustomerName) =>{
      const apiUrl = Literals.customerAPIbaseURL+"?name="+selectedCustomerName;
      axios.get(apiUrl)
      .then(res => {
        setCustomerAllData(res.data);
      })
    }
    // rendering customer data in a table
    return (
      <div className="container">
        <h2>{Literals.pageHeading}</h2>
        <Select options={customerName} value={selectedCustomerName} onChange={(e)=>setSelectedCustomerName(e)}/>
        <button onClick={()=>{handleSearch(selectedCustomerName.value)}}>Search</button>
        <BootstrapTable bordered={true} defaultSorted={Literals.defaultSorted} keyField='name' data={customerAllData} columns={Literals.columns} 
        pagination={paginationFactory({sizePerPage:3,hideSizePerPage:true,hidePageListOnlyOnePage: true})}/>
      </div>
    );
}
export default App;
