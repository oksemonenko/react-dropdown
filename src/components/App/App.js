import React, {Component} from 'react'
import {connect} from 'react-redux'

import Dropdown from '../Dropdown/Dropdown'
import styles from './App.module.styl'

class App extends Component {
    render() {
        console.log('appState', this.props.appState);
        return (
            <div className={styles.app}>
                <h1 className={styles['app__header']}>Dropdown list with search</h1>
                <Dropdown />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        appState: state
    }
}

export default connect(mapStateToProps)(App)
