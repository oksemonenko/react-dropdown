import styles from './App.module.styl'
import React, {Component} from 'react';
import Dropdown from '../Dropdown/Dropdown';

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <h1 className={styles['app__header']}>Dropdown list with search</h1>
                <Dropdown />
            </div>
        )
    }
}
