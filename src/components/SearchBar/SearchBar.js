import styles from './SearchBar.module.styl';
import dropdownListStyles from '../DropdownList/DropdownList.module.styl';
import React, {Component} from 'react';

export default class SearchBar extends Component {

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    };

    handleFocus = () => {
        console.log('focus');
        console.log('props', this.props);
        this.props.onOptionChange(null);
        this.props.onFilterTextChange('');
        this.props.onPlaceholderChange();
        this.animatePlaceholder();
    };

    handleBlur = (e) => {
        const target = e.relatedTarget;
        if (!target) {
            this.props.hideDropdownList();
            this.deAnimatePlaceholder();
            return;
        }
        if (target.parentNode.classList.contains(dropdownListStyles["dropdown-list"])) {
            return false;
        }
        this.props.hideDropdownList();
        this.deAnimatePlaceholder();
    };

    animatePlaceholder = () => {
        const inputWrapper = document.getElementById('searchBarInputWrapper');
        const input = document.getElementById('searchBarInput');
        const placeholder = document.createElement('span');
        placeholder.innerHTML = this.props.placeholder;
        placeholder.classList.add(styles.placeholder);
        input.parentNode.insertBefore(placeholder, input.nextSibling);
        input.setAttribute('placeholder', '');

        const classActive = styles["search-bar__input-wrapper--active"];
        inputWrapper.classList.add(classActive);
    };

    deAnimatePlaceholder = () => {
        const inputWrapper = document.getElementById('searchBarInputWrapper');
        const classActive = styles["search-bar__input-wrapper--active"];

        if (inputWrapper.classList.contains(classActive)) {
            inputWrapper.classList.remove(classActive);
        }
    };

    render() {
        const {filterText, option, placeholder} = this.props;
        const value = option || filterText || placeholder;

        return (
            <div className={styles["search-bar"]}>
                <label
                    htmlFor="searchBarInput"
                    className={styles["search-bar__input-wrapper"]}
                    id='searchBarInputWrapper'>
                <input
                    className={styles["search-bar__input"]}
                    type='text'
                    value={value}
                    onChange={this.handleFilterTextChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    id="searchBarInput" />
                </label>
            </div>
        )
    }
}
