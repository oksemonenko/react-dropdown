import styles from './SearchBar.module.styl';
import dropdownListStyles from '../DropdownList/DropdownList.module.styl';
import React, {Component} from 'react';
import {PlaceholderPosition} from '../../PlaceholderPosition'

export default class SearchBar extends Component {

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    };

    handleFocus = () => {
        this.props.onOptionChange(null);
        this.props.onFilterTextChange('');
        this.props.showDropdownList();
        console.log(this.props);
        this.setPlaceholderPosition();
    };

    handleBlur = (e) => {
        const target = e.relatedTarget;
        if (!target) {
            this.props.hideDropdownList();
            this.setPlaceholderPosition();
            return;
        }
        if (target.parentNode.classList.contains(dropdownListStyles['dropdown-list'])) {
            this.setPlaceholderPosition();
            return;
        }
        this.props.hideDropdownList();
        this.setPlaceholderPosition();
    };

    setPlaceholderPosition = () => {
        const placeholderPosition = this.props.placeholderPosition;
        if (!placeholderPosition) {
            this.removePlaceholder();
            return
        }
        if (placeholderPosition === PlaceholderPosition.top) {
            this.animatePlaceholder();
            return;
        }
        if (placeholderPosition === PlaceholderPosition.center) {
            this.deAnimatePlaceholder();
        }
    };

    animatePlaceholder = () => {
        const inputWrapper = document.getElementById('searchBarInputWrapper');

        const classSelected = styles['search-bar__input-wrapper--selected'];
        if (inputWrapper.classList.contains(classSelected)) {
            inputWrapper.classList.remove(classSelected);
        }
        const classActive = styles['search-bar__input-wrapper--active'];
        inputWrapper.classList.add(classActive);
    };

    deAnimatePlaceholder = () => {
        const inputWrapper = document.getElementById('searchBarInputWrapper');
        const classActive = styles['search-bar__input-wrapper--active'];

        if (inputWrapper.classList.contains(classActive)) {
            inputWrapper.classList.remove(classActive);
        }
    };

    removePlaceholder = () => {
        const inputWrapper = document.getElementById('searchBarInputWrapper');
        const classSelected = styles['search-bar__input-wrapper--selected'];

        if (!inputWrapper.classList.contains(classSelected)) {
            inputWrapper.classList.add(classSelected);
        }
    };

    render() {
        const {filterText, option, placeholder} = this.props;
        const value = option || filterText;

        return (
            <div className={styles['search-bar']}>
                <label
                    htmlFor='searchBarInput'
                    className={styles['search-bar__input-wrapper']}
                    id='searchBarInputWrapper'>
                    <input
                        className={styles['search-bar__input']}
                        type='text'
                        value={value}
                        onChange={this.handleFilterTextChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        id='searchBarInput' />
                    <span className={styles.placeholder}>{placeholder}</span>
                    <i className={styles['search-bar__icon']}>{}</i>
                </label>
            </div>
        )
    }
}
