import React, {Component} from 'react';
import DropdownListItem from './DropdownListItem';

export default class DropdownList extends Component {
    render() {
        const filterText = this.props.filterText.toLowerCase();

        let compare = (a,b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        };

        const sortedDropdownListItems = this.props.countries.sort(compare);
        const filteredDropdownListItems = sortedDropdownListItems.filter(country => {
            return country.name.toLowerCase().indexOf(filterText) !== -1;

        });

        const filteredDropdownListItemsElements = filteredDropdownListItems.map(country =>
            <li key = {country.code}>
                <DropdownListItem country = {country} />
            </li>
        );

        return (
            <ul>
                {filteredDropdownListItemsElements}
            </ul>

        )
    }
}
