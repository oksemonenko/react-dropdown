import React, {Component} from 'react';

export default class DropdownListItem extends Component {
    render() {
        const {option} = this.props;
        return (
            <div>{option.name}</div>
        )
    }
}
