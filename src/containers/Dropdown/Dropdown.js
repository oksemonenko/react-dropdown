import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import SearchBar from '../../components/SearchBar/SearchBar'
import DropdownList from '../../components/DropdownList/DropdownList'
import * as dropdownListActions from '../../actions/DropdownListActions'
import * as searchBarActions from '../../actions/SearchBarActions'
import countries from '../../countries'
import {PlaceholderPosition} from '../../PlaceholderPosition'
import styles from './Dropdown.module.styl'

class Dropdown extends Component {

    handleFilterTextChange = (filterText) => {
        const searchBarActions = this.props.searchBarActions;
        searchBarActions.setFilterText(filterText);
    };

    handleOptionChange = (selectedOption) => {
        const dropdownListActions = this.props.dropdownListActions;

        dropdownListActions.setSelectedOption(selectedOption)
            .then(() => { this.close() });
    };

    toggle = () => {
        const dropdownList = this.props.dropdownList;

        (dropdownList.active ? this.close() : this.open());
    };

    open = () => {
        this.focusOnInput();
        this.showDropdownList();
        this.setDefaultFilter();
        this.setDefaultOption();
    };

    close = () => {
        const dropdownList = this.props.dropdownList;

        dropdownList.selectedOption ?
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
        const dropdownListActions = this.props.dropdownListActions;
        dropdownListActions.setActiveTrue();

        this.setOpenDirection();
    };

    hideDropdownList = () => {
        const dropdownListActions = this.props.dropdownListActions;
        dropdownListActions.setActiveFalse();
        dropdownListActions.setUpwardFalse();
    };

    setOpenDirection = () => {
        const upward  = this.isDropdownUpward();

        if (!upward !== !this.props.dropdownList.upward) {
            const dropdownListActions = this.props.dropdownListActions;
            dropdownListActions.setUpwardTrue();
            this.setPlaceholderPositionByState();
        }
        this.setPlaceholderPositionByState();
    };

    isDropdownUpward = () => {
        const dropdown = document.getElementById('dropdown');
        const dropdownList = document.getElementById('dropdownList');
        const dropdownRect = dropdown.getBoundingClientRect();
        const computedStyle = getComputedStyle(dropdownList);
        const dropdownHeight = Number(computedStyle.maxHeight.replace(/\D+/g,''));

        const spaceAtTheBottom =
            document.documentElement.clientHeight - dropdownRect.top - dropdownRect.height - dropdownHeight;
        const spaceAtTheTop = dropdownRect.top - dropdownHeight;

        return spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom;
    };

    setDefaultFilter = () => {
        const searchBarActions = this.props.searchBarActions;
        searchBarActions.setFilterText('');
    };

    setDefaultOption = () => {
        const dropdownListActions = this.props.dropdownListActions;
        dropdownListActions.setSelectedOption(null);
    };

    setPlaceholderPositionByState = () => {
        const searchBarActions = this.props.searchBarActions;
        const dropdownList = this.props.dropdownList;

        if (dropdownList.upward) {
            searchBarActions.setPlaceholderPosition(null);
        } else {
            searchBarActions.setPlaceholderPosition(PlaceholderPosition.top);
        }
    };

    setPlaceholderPosition = (position) => {
        const searchBarActions = this.props.searchBarActions;
        searchBarActions.setPlaceholderPosition(position);
    };

    render() {
        const {
            dropdownList,
            searchBar
        } = this.props;

        return (
            <div className={styles.dropdown} id='dropdown'>
                <SearchBar
                    active={dropdownList.active}
                    filterText={searchBar.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                    option={dropdownList.selectedOption}
                    placeholder={searchBar.placeholder}
                    placeholderPosition={searchBar.placeholderPosition}
                    upward={dropdownList.upward}
                    toggle={this.toggle}
                    open={this.open}
                    close={this.close}
                />
                <DropdownList
                    options={countries}
                    filterText={searchBar.filterText}
                    option={dropdownList.selectedOption}
                    onOptionChange={this.handleOptionChange}
                    active={dropdownList.active}
                    upward={dropdownList.upward}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dropdownList: state.dropdownList,
        searchBar: state.searchBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dropdownListActions: bindActionCreators(dropdownListActions, dispatch),
        searchBarActions: bindActionCreators(searchBarActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
