import styles from './DropdownListItem.module.styl'
import React, {Component} from 'react';

export default class DropdownListItem extends Component {
    render() {
        const {option} = this.props;
        return (
            <div className={styles["dropdown-list__item"]}>{option.name}</div>
        )
    }
}
