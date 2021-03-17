let Literals = {
    pageHeading: "Our Customer Data",
    labels: {
        name: "Name",
        smallText: "search filter on name"
    },
    btn:{
        searchBtn: "Search"
    },
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