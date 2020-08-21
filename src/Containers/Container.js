import React, { Component } from 'react';
import { DropDown } from '../Components/DropDown';
import { VehicleDisplay } from '../Components/VehicleDisplay';
import { ProgressBar } from '../Components/ProgressBar';
import {
	getYears,
	getMakesByYear,
	getModelsByMakeYear,
	getBodyStylesByModelYearMake,
	getVehicle,
} from '../Services/vehicle';

export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			progressValue: 0,
			// years: null,
			// year: null,
			// makes: null,
			// make: null,
			// models: null,
			// model: null,
			// bodyStyles: null,
			// bodyStyle: null,
			// vehicle: null
		}
	}
	//use this lifecycle method to the call the service and put all the year data in the dropDown
	componentDidMount() {
		getYears().then((years) => { this.setState({ years }) })
	}

	onSelectItem = (param, tag) => {
		const { year, make, model } = this.state;
		//if user had selected the year, then the next step is use the selected year to get the vehicle Make	
		if (tag === 'Year') {
			this.setState({ year: param })
			getMakesByYear(param).then((makes) => { this.setState({ makes, progressValue: 25 }) });
		}
		//if user had selected the make, then the next step is use the selected make&year to get the vehicle Model
		else if (tag === 'Make') {
			this.setState({ make: param })
			getModelsByMakeYear(year, param).then((models) => { this.setState({ models, progressValue: 50 }) });
		}
		//if user had selected model, then the next step is use the selected make&year&model to get the vehicle BodyStyle
		else if (tag === 'Model') {
			this.setState({ model: param })
			getBodyStylesByModelYearMake(year, make, param).then((bodyStyles) => { this.setState({ bodyStyles, progressValue: 75 }) });
		}
		//if user had selected bodyStyle, then the next step is use the selected make&year&model&bodystyle to get the vehicle info
		else if (tag === 'bodyStyle') {
			this.setState({ bodyStyle: param })
			getVehicle(year, make, model, param).then((vehicle) => { this.setState({ vehicle, progressValue: 100 }) });
		}
	}
	render() {
		const { progressValue, years, makes, models, bodyStyles, vehicle } = this.state;
		return (
			<React.Fragment>
				<ProgressBar
					className='progressBar'
					progressValue={progressValue} />

				<DropDown
					className='years-dropDown'
					arrayItem={years}
					onSelectItem={this.onSelectItem}
					tag={'Year'} />

				{makes && <DropDown
					className='makes-dropDown'
					arrayItem={makes}
					onSelectItem={this.onSelectItem}
					tag={'Make'} />}

				{models && <DropDown
					className='models-dropDown'
					arrayItem={models}
					onSelectItem={this.onSelectItem}
					tag={'Model'} />}

				{bodyStyles && <DropDown
					className='bodyStyles-dropDown'
					arrayItem={bodyStyles}
					onSelectItem={this.onSelectItem}
					tag={'bodyStyle'} />}

				{vehicle && <VehicleDisplay
					className='vehicle-display'
					vehicle={vehicle} />}
			</React.Fragment>
		)
	}
}
