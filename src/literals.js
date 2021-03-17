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
        sort: true,
        classes: 'wrapText',
        headerClasses: 'wrapText'
    },{
        dataField: 'username',
        text: 'User Name',
        sort: true,
        classes: 'wrapText',
        headerClasses: 'wrapText'
    },{
        dataField: 'email',
        text: 'Email ID',
        classes: 'wrapText',
        headerClasses: 'wrapText'
    },{
        dataField: 'address.street',
        text: 'Address',
        classes: 'wrapText',
        headerClasses: 'wrapText'
    },{
        dataField: 'phone',
        text: 'Contact Number',
        classes: 'wrapText',
        headerClasses: 'wrapText'
    },{
        dataField: 'website',
        text: 'WebSite',
        classes: 'wrapText',
        headerClasses: 'wrapText'
    }],
    defaultSorted : [{
        dataField: 'name',
        order: 'asc'
    }],
    customerAPIbaseURL: "http://jsonplaceholder.typicode.com/users"
}
export default Literals;