import React, {useState,useEffect} from 'react'
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// functional component named - 'App'
const App = () => {
    // setting up hooks for 'Customer' Data and initialize it with blank array
    const [customerData,setCustomerData] = useState([]);
    // on useEffect(on page load) hit the api for 'Customer' Data and populate table based upon it using hooks(useEffect)
    useEffect(()=>{
      const apiUrl = 'http://jsonplaceholder.typicode.com/users';
      axios.get(apiUrl)
      .then(res => {
        setCustomerData(res.data);
      })
    },[]);

    // setting up columns for table
    const columns = [{
      dataField: 'name',
      text: 'Name',
      sort: true
    }, {
      dataField: 'username',
      text: 'User Name',
      sort: true
    }, {
      dataField: 'email',
      text: 'Email ID'
    },
    {
      dataField: 'address.street',
      text: 'Address'
    },
    {
      dataField: 'phone',
      text: 'Contact Number'
    },
    {
      dataField: 'website',
      text: 'WebSite'
    }];
    return (
      <div className="container">
        <h2>Our Customer Data</h2>
        <BootstrapTable sort={true} bordered={true} keyField='name' data={customerData} columns={columns} 
        pagination={paginationFactory({sizePerPage:4,hideSizePerPage:true})}/>
      </div>
    );
}
export default App;
