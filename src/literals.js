let Literals = {
    pageHeading: "Our Customer Data",
    columns: [{
        dataField: 'name',
        text: 'Name',
        sort: true
    },{
        dataField: 'username',
        text: 'User Name',
        sort: true
    },{
        dataField: 'email',
        text: 'Email ID',
        classes: 'wrapText'
    },{
        dataField: 'address.street',
        text: 'Address'
    },{
        dataField: 'phone',
        text: 'Contact Number'
    },{
        dataField: 'website',
        text: 'WebSite'
    }],
    defaultSorted : [{
        dataField: 'name',
        order: 'asc'
    }],
    customerAPIbaseURL: "http://jsonplaceholder.typicode.com/users"
}
export default Literals;