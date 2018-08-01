import styles from './App.module.styl'
import React, {Component} from 'react';
import Dropdown from '../Dropdown/Dropdown';

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <h1>Dropdown list with search</h1>
                <Dropdown />
            </div>
        )
    }
}
