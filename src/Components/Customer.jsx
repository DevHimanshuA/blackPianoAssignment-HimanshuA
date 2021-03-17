import {useState,useEffect} from 'react';
// for making http requests to external resources
import axios from 'axios';
// for bootstrap table - import necessary modules
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// Literals file 
import Literals from '../literals';
// for modern dropdown - here we use react-select
import Select from 'react-select';
// functional Component for - Customer

const Customer = () =>{
    // setting up hooks for 'All Customer' Data
    const [customerAllData,setCustomerAllData] = useState([]);
    // setting up hooks for 'Customer' Data based on their 'name' and populate it into dropdown
    const [customerName,setCustomerName] = useState([]);
    // setting up hooks for 'selected Customer Name'
    const [selectedCustomerName,setSelectedCustomerName] = useState();
    // setting up hooks for 'selected Customer Name'
    const [disabledSearch,setDisabledSearch] = useState(true);
    
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

    // handle onChange of dropdpown
    const handleChange = (e) =>{
      setSelectedCustomerName(e);
      setDisabledSearch(false);
    }
    // handle/filter Search based upon dropdown value chosen - filter based on 'names' of customer
    const handleSearch = (selectedCustomerName) =>{
      const apiUrl = Literals.customerAPIbaseURL+"?name="+selectedCustomerName.value;
      axios.get(apiUrl)
      .then(res => {
        setCustomerAllData(res.data);
      })
    }
    return(
        <div className="root-container">
            <h2>{Literals.pageHeadings.customerPage}</h2>
            <label>{Literals.labels.name} <span>({Literals.labels.smallText})</span></label>
            <div className="search-filter">              
              <Select options={customerName} value={selectedCustomerName} onChange={(e)=>handleChange(e)} className="name-dropdown"
              isClearable={true}/>
              <button disabled={disabledSearch} onClick={()=>{handleSearch(selectedCustomerName)}}>{Literals.btn.searchBtn}</button>
            </div>
            <BootstrapTable bordered={true} striped  hover condensed defaultSorted={Literals.defaultSorted} 
            keyField='name' data={customerAllData} columns={Literals.columns} pagination={paginationFactory({sizePerPage:3,hideSizePerPage:true,hidePageListOnlyOnePage: true})}
            wrapperClasses="bootstrap-table"/>
            
        </div>
    );
}
export default Customer;