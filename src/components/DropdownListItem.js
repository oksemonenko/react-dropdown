import React, {Component} from 'react';

export default class DropdownListItem extends Component {
    render() {
        const {country} = this.props;
        return (
            <div>{country.name}</div>
        )
    }
}
