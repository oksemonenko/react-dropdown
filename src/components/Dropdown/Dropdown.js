import styles from './Dropdown.module.styl';
import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import DropdownList from '../DropdownList/DropdownList';
import countries from '../../countries';
import {PlaceholderPosition} from '../../PlaceholderPosition'

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            selectedOption: null,
            placeholder: 'Выберите страну',
            placeholderPosition: PlaceholderPosition.center,
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
        this.setPlaceholderPosition(PlaceholderPosition.center);
    };

    // toggle = e => (this.state.open ? this.close(e) : this.open(e));

    showDropdownList = () => {
        this.setState({
            active: true
        });

        this.setOpenDirection();
    };

    setOpenDirection = () => {
        const dropdown = document.getElementById('dropdown');
        const dropdownList = document.getElementById('dropdownList');
        const dropdownRect = dropdown.getBoundingClientRect();
        const computedStyle = getComputedStyle(dropdownList);
        const dropdownHeight = Number(computedStyle.height.replace(/\D+/g,''));

        const spaceAtTheBottom =
            document.documentElement.clientHeight - dropdownRect.top - dropdownRect.height - dropdownHeight;
        const spaceAtTheTop = dropdownRect.top - dropdownHeight;

        const upward = spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom;

        if (!upward !== !this.state.upward) {
            this.setState({
                upward
            });
            this.setPlaceholderPosition(null);
        }
        this.setPlaceholderPosition(PlaceholderPosition.top);
    };

    hideDropdownList = () => {
        this.setState({
            active: false
        });
    };

    setPlaceholderPosition = (position) => {
        this.setState({
            placeholderPosition: position
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
                    setPlaceholderPosition={this.setPlaceholderPosition}
                    placeholderPosition={this.state.placeholderPosition}
                />
                <DropdownList
                    options={countries}
                    filterText={this.state.filterText}
                    option={this.state.selectedOption}
                    onOptionChange={this.handleOptionChange}
                    active={this.state.active}
                    upward={this.state.upward}
                />
            </div>
        )
    }
}
