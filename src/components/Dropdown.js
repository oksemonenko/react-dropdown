import React, {Component} from 'react';
import SearchBar from './SearchBar';
import DropdownList from './DropdownList';
import countries from '../countries';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            selectedOption: null,
            placeholder: 'Выберите страну',
            active: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handlePlaceholderChange = this.handlePlaceholderChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    handleOptionChange(selectedOption) {
        this.setState({
            selectedOption: selectedOption,
            active: false
        })
    }

    handlePlaceholderChange() {
        this.setState({
            placeholder: ''
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                    option={this.state.selectedOption}
                    onOptionChange={this.handleOptionChange}
                    placeholder={this.state.placeholder}
                    onPlaceholderChange={this.handlePlaceholderChange}
                />
                <DropdownList
                    options={countries}
                    filterText={this.state.filterText}
                    option={this.state.selectedOption}
                    onOptionChange={this.handleOptionChange}
                />
            </div>
        )
    }
}
