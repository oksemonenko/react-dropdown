import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleOptionChange(option) {
        this.props.onOptionChange(option ? option.name : null);
    }

    handleFocus() {
        console.log('focus');
        console.log('props', this.props);

        if (this.props.option) {
            this.props.onOptionChange(null);
            this.props.onFilterTextChange('');
            this.props.onPlaceholderChange();
        }
    }

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
