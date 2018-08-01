import styles from './DropdownList.module.styl'
import React, {Component} from 'react';
import DropdownListItem from '../DropdownListItem/DropdownListItem';

export default class DropdownList extends Component {

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

    handleChange = (event, option) => {
        event.stopPropagation();

        this.handleOptionChange(option);
    };

    handleOptionChange = (option) => {
        this.props.onOptionChange(option ? option.name : null);
    };

    render() {
        const {filterText, options, active} = this.props;
        const formattedFilterText = filterText.toLowerCase();

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
            return option.name.toLowerCase().indexOf(formattedFilterText) !== -1;

        });

        const filteredDropdownListItemsElements = filteredDropdownListItems.map(option =>
            <li
                key = {option.code}
                onClick={event => this.handleChange(event, option)}>
                <DropdownListItem option = {option} />
            </li>
        );

        const className = active ?
            [styles["dropdown-list--visible"], styles["dropdown-list"]].join(' ')
            : styles["dropdown-list"];

        return (
            <ul
                className={className}>
                {filteredDropdownListItemsElements}
            </ul>

        )
    }
}
