import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Toast,ToastHeader, Card, CardTitle, CardText } from 'reactstrap';

export const VehicleDisplay = (props) => {
	const { vehicle } = props;
	const [show, setShow] = useState(false);
	const toggle = () => setShow(!show);
	return (
		<React.Fragment>
			<Button color="primary" onClick={toggle}>{'Result Found~!Click To See Result'}</Button>
			<br/>
			<Toast isOpen={show}>
				<ToastHeader toggle={toggle}>Toast title</ToastHeader>
				<Card body inverse color="info">
					<CardTitle className='card-title font-weight-bold text-muted text-left'>Service_Id:</CardTitle>
					<CardText>{vehicle.vehicle_services_id}</CardText>
					<CardTitle className='card-title font-weight-bold text-muted text-left'>Year:</CardTitle>
					<CardText>{vehicle.year}</CardText>
					<CardTitle className='card-title font-weight-bold text-muted text-left'>Make:</CardTitle>
					<CardText>{vehicle.make}</CardText>
					<CardTitle className='card-title font-weight-bold text-muted text-left'>Model:</CardTitle>
					<CardText>{vehicle.model}</CardText>
					<CardTitle className='card-title font-weight-bold text-muted text-left'>Body_Style:</CardTitle>
					<CardText>{vehicle.body_style}</CardText>
				</Card>
			</Toast>
		</React.Fragment>
	)
}

VehicleDisplay.propTypes={
	vehicle:PropTypes.shape({
		id: PropTypes.string,
		year: PropTypes.number,
		make: PropTypes.string,
		model: PropTypes.string,
		body_style: PropTypes.string,
		partial_vin: PropTypes.string,
		vehicle_services_id: PropTypes.string	
	}).isRequired
}