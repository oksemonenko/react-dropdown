import styles from './App.styl'
import React, {Component} from 'react';
import Dropdown from '../Dropdown';
// import '../../App.css';

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <h1 className='app'>Dropdown list with search</h1>
                <Dropdown />
            </div>
        )
    }
}
