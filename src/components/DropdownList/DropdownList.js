import styles from './DropdownList.module.styl'
import React, {Component} from 'react';
import DropdownListItem from '../DropdownListItem/DropdownListItem';
import {helpers} from '../../helpers'

export default class DropdownList extends Component {

    handleChange = (event, option) => {
        event.stopPropagation();

        this.handleOptionChange(option);
    };

    handleOptionChange = (option) => {
        this.props.onOptionChange(option ? option.name : null);
    };

    render() {
        const {filterText, options, active, upward} = this.props;
        const formattedFilterText = filterText.toLowerCase();

        const sortedDropdownListItems = options.sort(helpers.compare);
        const filteredDropdownListItems = sortedDropdownListItems.filter(option => {
            return option.name.toLowerCase().indexOf(formattedFilterText) !== -1;

        });

        const filteredDropdownListItemsElements =
            filteredDropdownListItems.length ?
                filteredDropdownListItems.map(option =>
                    <li
                        key = {option.code}
                        onClick={event => this.handleChange(event, option)}
                        tabIndex='0'>
                        <DropdownListItem option = {option} />
                    </li>
                )
                :
                <li>
                    <DropdownListItem
                        option = {{
                            name: 'Result not found'
                        }} />
                </li>;


        let setDropdownListClassName = () => {
            if (!active) {
                return styles['dropdown-list'];
            }
            if (!upward) {
                return [styles['dropdown-list--visible'], styles['dropdown-list']].join(' ');
            }
            return [
                styles['dropdown-list--upward'],
                styles['dropdown-list--visible'],
                styles['dropdown-list']].join(' ')
        };

        const className = setDropdownListClassName();

        return (
            <ul
                className={className}
                id='dropdownList'>
                {filteredDropdownListItemsElements}
            </ul>

        )
    }
}
