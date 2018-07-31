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

    };

    render() {
        const {filterText, option, placeholder} = this.props;
        const value = option || filterText || placeholder;

        return (
            <form>
                <input
                    type='text'
                    value={value}
                    onChange={this.handleFilterTextChange}
                    onFocus={this.handleFocus}/>
            </form>
        )
    }
}
