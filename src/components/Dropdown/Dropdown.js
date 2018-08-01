import styles from './Dropdown.module.styl';
import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import DropdownList from '../DropdownList/DropdownList';
import countries from '../../countries';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            selectedOption: null,
            placeholder: 'Выберите страну',
            active: false,
            upward: false
        };
    }

    handleFilterTextChange = (filterText) => {
        this.setState({
            filterText: filterText
        })
    };

    handleOptionChange = (selectedOption) => {
        this.setState({
            selectedOption: selectedOption
        });
        this.hideDropdownList();
    };

    showDropdownList = () => {
        this.setState({
            active: true
        });

        this.setOpenDirection();
    };

    setOpenDirection = () => {
        const dropdown = document.getElementById('dropdown');
        const dropdownRect = dropdown.getBoundingClientRect();
        const dropdownHeight = 200;

        const spaceAtTheBottom =
            document.documentElement.clientHeight - dropdownRect.top - dropdownRect.height - dropdownHeight;
        const spaceAtTheTop = dropdownRect.top - dropdownHeight;

        const upward = spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom;

        if (!upward !== !this.state.upward) {
            this.setState({
                upward
            })
        }
    };

    hideDropdownList = () => {
        this.setState({
            active: false
        });
    };

    render() {
        return (
            <div className={styles.dropdown} id='dropdown'>
                <SearchBar
                    active={this.state.active}
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                    option={this.state.selectedOption}
                    onOptionChange={this.handleOptionChange}
                    placeholder={this.state.placeholder}
                    onPlaceholderChange={this.handlePlaceholderChange}
                    showDropdownList={this.showDropdownList}
                    hideDropdownList={this.hideDropdownList}
                    setDefaultState={this.setDefaultState}
                />
                <DropdownList
                    options={countries}
                    filterText={this.state.filterText}
                    option={this.state.selectedOption}
                    onOptionChange={this.handleOptionChange}
                    active={this.state.active}
                />
            </div>
        )
    }
}
