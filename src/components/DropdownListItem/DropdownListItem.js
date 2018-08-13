import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './DropdownListItem.module.styl'

export default class DropdownListItem extends Component {

    static propTypes = {
        option: PropTypes.shape({
            name: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired
        })
    };

    render() {
        const {option} = this.props;
        return (
            <div className={styles["dropdown-list__item"]}>{option.name}</div>
        )
    }
}
