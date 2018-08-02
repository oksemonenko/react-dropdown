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
        this.props.setPlaceholderPosition(PlaceholderPosition.top);
        this.props.showDropdownList();
    };

    handleBlur = (e) => {
        const target = e.relatedTarget;
        if (!target) {
            this.props.hideDropdownList();
            this.props.setPlaceholderPosition(PlaceholderPosition.center);
            return;
        }
        if (target.parentNode.classList.contains(dropdownListStyles['dropdown-list'])) {
            this.props.setPlaceholderPosition(null);
            return;
        }
        this.props.hideDropdownList();
        this.props.setPlaceholderPosition(null);
    };

    render() {
        const {filterText, option, placeholder, placeholderPosition, upward} = this.props;
        const value = option || filterText;

        let setPlaceholderClassName = () => {
            if (!placeholderPosition) {
                return styles['placeholder--none'];
            }
            if (placeholderPosition === PlaceholderPosition.top) {
                return upward ? styles['placeholder--none'] : [styles['placeholder--top'], styles.placeholder].join(' ');
            }
            if (placeholderPosition === PlaceholderPosition.center) {
                return styles.placeholder;
            }
        };

        const placeholderClassName = setPlaceholderClassName();

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
                    <span className={placeholderClassName}>{placeholder}</span>
                    <i className={styles['search-bar__icon']}>{}</i>
                </label>
            </div>
        )
    }
}
