import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function runIt(query) {
    axios.defaults.headers.common['Authorization'] = 'Bearer abc123';
    return axios.post('https://pr0vely.oglocal/graphql', {
        "query": `query { ${query} }`
});
}
class App extends React.Component {


    componentDidMount() {
        runIt(`
     users {
            email
        }

  `
    )
    .then(function (response) {
            console.log('from axios: ', response.data.data.users);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">

            </div>
    );
    }
}

export default App;
