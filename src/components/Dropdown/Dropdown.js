import React, {Component} from 'react'

import SearchBar from '../SearchBar/SearchBar'
import DropdownList from '../DropdownList/DropdownList'
import countries from '../../countries'
import {PlaceholderPosition} from '../../PlaceholderPosition'
import styles from './Dropdown.module.styl'

export default class Dropdown extends Component {

    state = {
        filterText: '',
        selectedOption: null,
        placeholder: 'Select country',
        placeholderPosition: PlaceholderPosition.center,
        active: false,
        upward: false
    };

    handleFilterTextChange = (filterText) => {
        this.setState({
            filterText: filterText
        })
    };

    handleOptionChange = (selectedOption) => {
        this.setState({
            selectedOption: selectedOption
        }, () => { this.close() });
    };

    toggle = () => {
        console.log(this);
        (this.state.active ? this.close() : this.open());
    };

    open = () => {
        this.focusOnInput();
        this.showDropdownList();
        this.setDefaultFilter();
        this.setDefaultOption();
    };

    close = () => {
        this.state.selectedOption ?
            this.setPlaceholderPosition(null)
            : this.setPlaceholderPosition(PlaceholderPosition.center);
        this.hideDropdownList();
        this.setDefaultFilter();
    };

    focusOnInput = () => {
        const searchBarInput = document.getElementById('searchBarInput');
        searchBarInput.focus();
    };

    showDropdownList = () => {
        this.setState({
            active: true
        });

        this.setOpenDirection();
    };

    hideDropdownList = () => {
        this.setState({
            active: false
        });
    };

    setOpenDirection = () => {
        const dropdown = document.getElementById('dropdown');
        const dropdownList = document.getElementById('dropdownList');
        const dropdownRect = dropdown.getBoundingClientRect();
        const computedStyle = getComputedStyle(dropdownList);
        const dropdownHeight = Number(computedStyle.maxHeight.replace(/\D+/g,''));

        const spaceAtTheBottom =
            document.documentElement.clientHeight - dropdownRect.top - dropdownRect.height - dropdownHeight;
        const spaceAtTheTop = dropdownRect.top - dropdownHeight;

        const upward = spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom;

        if (!upward !== !this.state.upward) {
            this.setState({
                upward
            }, () => { this.setPlaceholderPositionByState() });
        }
        this.setPlaceholderPositionByState();
    };

    setDefaultFilter = () => {
        this.setState({
            filterText: ''
        });
    };

    setDefaultOption = () => {
        this.setState({
            selectedOption: null
        });
    };

    setPlaceholderPositionByState = () => {
        this.setState({
            placeholderPosition: (this.state.upward ? null : PlaceholderPosition.top)
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
                    placeholder={this.state.placeholder}
                    placeholderPosition={this.state.placeholderPosition}
                    upward={this.state.upward}
                    toggle={this.toggle}
                    open={this.open}
                    close={this.close}
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
