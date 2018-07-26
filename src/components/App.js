import React, {Component} from 'react';
import Dropdown from './Dropdown';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Dropdown list with search</h1>
                <Dropdown />
            </div>
        )
    }
}
