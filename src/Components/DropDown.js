import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const DropDown = (props) => {
	const { arrayItem, onSelectItem, tag } = props;
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [currentValue, setCurrentValue] = useState(tag);
	const toggle = () => setDropdownOpen(prevState => !prevState);
	const handldOnClick = (currentValue) => {
		setCurrentValue(currentValue);
		onSelectItem(currentValue, tag);
	}
	const renderItem = () => {
		if (!arrayItem) {
			return <DropdownItem></DropdownItem>
		}
		else {
			return arrayItem.map((item, index) => {
				return <DropdownItem
					className='dropDownItem'
					key={index}
					onClick={() => handldOnClick(item.value)}>
					{item.value}
				</DropdownItem>
			})
		}
	}
	return (
		<React.Fragment>
			<Dropdown className='m-2' isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle className='title' caret>
					{currentValue}
				</DropdownToggle>
				<DropdownMenu>
					{renderItem()}
				</DropdownMenu>
			</Dropdown>
		</React.Fragment>
	)
}

DropDown.propTypes = {
	arrayItem: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
	})),
	onSelectItem: PropTypes.func.isRequired,
	tag: PropTypes.string.isRequired
}