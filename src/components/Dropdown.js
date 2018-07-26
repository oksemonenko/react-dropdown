import React, {Component} from 'react';
import SearchBar from './SearchBar';
import DropdownList from './DropdownList';
import countries from '../countries';

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <DropdownList countries = {countries} />
            </div>
        )
    }
}
