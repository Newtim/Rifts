import React from 'react';
import PropTypes from 'prop-types';

import SelectRating from '../SelectRatingComponent';

class MechModRowComponent extends React.PureComponent {
	updateRating(x) {
		console.log(x);
	}

	render() {
		const { mod } = this.props;
		return (
			<tr>
				<td>{mod.name}</td>
				<td>
					<SelectRating item={mod} updateRating={this.updateRating} />
				</td>
				<td>{mod.slot || 'N/A'}</td>
				<td>{mod.avail}</td>
				<td>{mod.cost}&yen;</td>
				<td>{mod.source} {mod.page}p</td>
			</tr>
		);
	}
}

MechModRowComponent.propTypes = {
	mod: PropTypes.shape({
		name: PropTypes.string.isRequired,
		rating: PropTypes.string.isRequired,
		slot: PropTypes.string,
		avail: PropTypes.string.isRequired,
		cost: PropTypes.string.isRequired,
		source: PropTypes.string.isRequired,
		page: PropTypes.string.isRequired
	}).isRequired
};

export default MechModRowComponent;