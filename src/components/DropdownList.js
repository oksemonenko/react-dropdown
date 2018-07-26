import React, {Component} from 'react';
import DropdownListItem from './DropdownListItem';

export default class DropdownList extends Component {
    render() {
        const dropdownListItems = this.props.countries.map(country =>
            <li key = {country.code}>
                <DropdownListItem country = {country} />
            </li>
        );
        return (
            <ul>
                {dropdownListItems}
            </ul>

        )
    }
}
