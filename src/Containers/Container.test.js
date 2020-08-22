import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Containers/Container';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });
//123
describe('The Container component', () => {
	let ContainerComponent = shallow(<Container />);
	it('should render without error', () => {
		expect(ContainerComponent.length).toBe(1);
	})

	it('should render ProgressBar without error', () => {
		let ProgressBar = ContainerComponent.find('.progressBar')
		expect(ProgressBar.length).toBe(1);
	})

	it('should render years-dropDown without error', () => {
		let yearsdropDown = ContainerComponent.find('.years-dropDown')
		expect(yearsdropDown.length).toBe(1);
	})

	it('should render makes-dropDown without error', () => {
		let makes = [
			{
				"label": "Acura",
				"value": "Acura"
			},
			{
				"label": "Alfa Romeo",
				"value": "Alfa Romeo"
			}
		]
		ContainerComponent.setState({ makes })
		let makesdropDown = ContainerComponent.find('.makes-dropDown')
		expect(makesdropDown.length).toBe(1);
	})

	it('should render models-dropDown without error', () => {
		let models = [
			{
				"label": "ILX",
				"value": "ILX"
			},
			{
				"label": "MDX",
				"value": "MDX"
			}
		]
		ContainerComponent.setState({ models })
		let modelsdropDown = ContainerComponent.find('.models-dropDown')
		expect(modelsdropDown.length).toBe(1);
	})

	it('should render models-dropDown without error', () => {
		let bodyStyles = [
			{
				"label": "4-Door Sedan",
				"value": "SEDAN 4D",
			}
		]
		ContainerComponent.setState({ bodyStyles })
		let bodyStylesdropDown = ContainerComponent.find('.bodyStyles-dropDown')
		expect(bodyStylesdropDown.length).toBe(1);
	})

	it('should render vehicle information without error', () => {
		let vehicle = {
			"id": "foo",
			"year": 2018,
			"make": "Acura",
			"model": "ILX",
			"body_style": "SEDAN 4D",
			"partial_vin": "JH4DE2F8&J",
			"vehicle_services_id": "v1_WzIwMTgsIkFjdXJhIiwiSUxYIiwiU0VEQU4gNEQiLCJKSDRERTJGOFx1MDAyNkoiXQ=="
		}
		ContainerComponent.setState({ vehicle })
		let vehicleDisplay = ContainerComponent.find('.vehicle-display')
		expect(vehicleDisplay.length).toBe(1);
	})

})