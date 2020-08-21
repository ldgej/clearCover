import React from 'react';
import { shallow } from 'enzyme';
import { ProgressBar } from './ProgressBar';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('The ProgressBar component', () => {
	const props = {
		progressValue: 25,
	}
	const ProgressBarComponent = shallow(<ProgressBar {...props} />);

	it('should render without error', () => {
		expect(ProgressBarComponent.length).toBe(1);
	})

	it('should render corrent number', () => {
		const text = ProgressBarComponent.find('div.text-center').at(0).text();
		expect(text).toEqual(`${props.progressValue}% of 100%`);
	})
})