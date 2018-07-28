import React, {Component} from 'react';
import SearchBar from './SearchBar';
import DropdownList from './DropdownList';
import countries from '../countries';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}/>
                <DropdownList
                    countries = {countries}
                    filterText={this.state.filterText}
                />
            </div>
        )
    }
}
