import React, {Component} from 'react'
import PropTypes from 'prop-types'

import dropdownListStyles from '../DropdownList/DropdownList.module.styl'
import {PlaceholderPosition} from '../../PlaceholderPosition'
import styles from './SearchBar.module.styl'

export default class SearchBar extends Component {

    static propTypes = {
        filterText: PropTypes.string,
        active: PropTypes.bool,
        upward: PropTypes.bool,
        placeholder: PropTypes.string,
        placeholderPosition: PropTypes.string,
        option: PropTypes.shape({
            name: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired
        }),
        onFilterTextChange: PropTypes.func.isRequired,
        open: PropTypes.func.isRequired,
        close: PropTypes.func.isRequired,
        toggle: PropTypes.func.isRequired
    };

    static defaultProps = {
        filterText: '',
        selectedOption: null,
        placeholder: 'Select country',
        placeholderPosition: PlaceholderPosition.center,
        active: false,
        upward: false
    };

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    };

    handleFocus = () => {
        this.props.open();
    };

    handleBlur = (e) => {
        const target = e.relatedTarget;
        if (!target) {
            this.props.close();
            return;
        }
        if (target.classList.contains(styles["search-bar__icon"]) ||
            target.parentNode.classList.contains(dropdownListStyles['dropdown-list'])) {
            return;
        }
        this.props.close();
    };

    handleIconClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle();
    };

    render() {
        const {filterText, option, placeholder, placeholderPosition, upward, active} = this.props;
        const value = option ? option.name : filterText;

        let setPlaceholderClassName = () => {
            if (!placeholderPosition) {
                return styles['search-bar__placeholder--none'];
            }
            if (placeholderPosition === PlaceholderPosition.top) {
                return upward ?
                    styles['search-bar__placeholder--none']
                    : [styles['search-bar__placeholder--top'], styles["search-bar__placeholder"]].join(' ');
            }
            if (placeholderPosition === PlaceholderPosition.center) {
                return styles["search-bar__placeholder"];
            }
        };

        const placeholderClassName = setPlaceholderClassName();


        let setSearchBarClassName = () => {
            if (!active) {
                return styles['search-bar'];
            }
            if (!upward) {
                return [styles['search-bar--active'], styles["search-bar"]].join(' ');
            }
            return [styles['search-bar--active'], styles['search-bar--upward'], styles["search-bar"]].join(' ');
        };

        const searchBarClassName = setSearchBarClassName();

        return (
            <div className={searchBarClassName}>
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
                    <i
                        className={styles['search-bar__icon']}
                        onClick={this.handleIconClick}
                        tabIndex='0'
                        onBlur={this.handleBlur}
                    >{}</i>
                </label>
            </div>
        )
    }
}
