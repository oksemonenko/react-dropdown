import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        const filterText = this.props.filterText;

        return (
            <form>
                <input
                    type='text'
                    placeholder='Выберите страну'
                    value={filterText}
                    onChange={this.handleFilterTextChange}/>
            </form>
        )
    }
}
