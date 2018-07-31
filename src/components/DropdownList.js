import React, {Component} from 'react';
import DropdownListItem from './DropdownListItem';

export default class DropdownList extends Component {
    constructor(props) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(option) {
        this.props.onOptionChange(option ? option.name : null);
    }

    // componentWillMount() {
    //     this.updateOption(this.props);
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     this.updateOption(nextProps);
    // }
    //
    // updateOption = ({options, name}) => {
    //     const option = options.find(item => item.name === name);
    //
    //     this.setState({
    //         option: option || null
    //     })
    // };

    handleChange(event, option) {
        event.stopPropagation();

        this.handleOptionChange(option);
    }

    render() {
        const {options} = this.props;
        const filterText = this.props.filterText.toLowerCase();

        let compare = (a,b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        };

        const sortedDropdownListItems = options.sort(compare);
        const filteredDropdownListItems = sortedDropdownListItems.filter(option => {
            return option.name.toLowerCase().indexOf(filterText) !== -1;

        });

        const filteredDropdownListItemsElements = filteredDropdownListItems.map(option =>
            <li
                key = {option.code}
                onClick={event => this.handleChange(event, option)}>
                <DropdownListItem option = {option} />
            </li>
        );

        return (
            <ul>
                {filteredDropdownListItemsElements}
            </ul>

        )
    }
}
