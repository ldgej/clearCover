import React from 'react'
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';

export const ProgressBar = (props) => {
	const { progressValue } = props;
	return (
		<div>
			<div className="text-center">{progressValue}% of 100%</div>
			<Progress animated value={progressValue} max="100" />
		</div>
	)
}
ProgressBar.propTypes = {
	progressValue: PropTypes.number.isRequired
}