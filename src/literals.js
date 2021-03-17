let Literals = {
    pageHeadings: {
        homePage: "Home Page",
        customerPage: "Our Customer Data",
        aboutPage: "About Page"
    },
    labels: {
        name: "Name",
        smallText: "search filter on name",
        aboutContent: "Please find below the points to be taken care in this assignment application"
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