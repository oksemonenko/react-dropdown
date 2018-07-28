import React, {Component} from 'react';
import DropdownListItem from './DropdownListItem';

export default class DropdownList extends Component {
    render() {
        const filterText = this.props.filterText;

        const dropdownListItems = this.props.countries.filter(country => {
            return country.name.indexOf(filterText) !== -1;

        });

        const filteredDropdownListItems = dropdownListItems.map(country =>
            <li key = {country.code}>
                <DropdownListItem country = {country} />
            </li>
        );

        return (
            <ul>
                {filteredDropdownListItems}
            </ul>

        )
    }
}
