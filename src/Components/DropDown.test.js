import React from 'react';
import { shallow } from 'enzyme';
import { DropDown } from './DropDown';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('The DropDown component', () => {
	let mockFunc = jest.fn();
	const props = {
		arrayItem: [
			{
				label: '2000',
				value: '2000',
			},
			{
				label: '2001',
				value: '2001',
			},
			{
				label: '2002',
				value: '2002',
			}
		],
		onSelectItem: mockFunc,
		tag: 'Year'
	}
	const DropDownComponent = shallow(<DropDown {...props} />);

	it('should render component without any error', () => {
		expect(DropDownComponent.length).toBe(1);
	})

	it('should render the same amount of dropDownItem as the length of array passed from the props', () => {
		let len1 = props.arrayItem.length;
		let len2 = DropDownComponent.find('.dropDownItem').length;
		expect(len1).toEqual(len2)
	})

	it('should call the function(passed from partent component) when the dropDown Item is Clicked', () => {
		let dropDownItemArray = DropDownComponent.find('dropDownItem');
		dropDownItemArray.forEach((item) => {
			item.simulate('click');
			let callback = mockFunc.mock.calls.length;
			expect(callback).toBe(1);
		})
	})


})