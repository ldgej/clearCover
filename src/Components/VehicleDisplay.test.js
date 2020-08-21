import React from 'react';
import { shallow } from 'enzyme';
import { VehicleDisplay } from './VehicleDisplay';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('The VehicleDisplay component', () => {
	const props = {
		vehicle: {
			year: 2018,
			make: "Acura",
			model: "ILX",
			body_style: "SEDAN 4D",
			vehicle_services_id: "v1_WzIwMTgsIkFjdXJhIiwiSUxYIiwiU0VEQU4gNEQiLCJKSDRERTJGOFx1MDAyNkoiXQ=="
		}
	}
	let VehicleDisplayComponent = shallow(<VehicleDisplay {...props} />);

	it('should render without error', () => {
		expect(VehicleDisplayComponent.length).toBe(1);
	})

	it('should render the same amuont of item as the keys of the vehicle object', () => {
		let len1 = Object.keys(props.vehicle).length;
		let len2 = VehicleDisplayComponent.find('.card-title').length;
		expect(len1).toBe(len2);
	})

})