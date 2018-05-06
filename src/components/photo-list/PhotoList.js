import React, { Component } from 'react';
import PhotoItem from '../photo-item/PhotoItem';
import PropTypes from 'prop-types';

class PhotoList extends Component {
	
	render() {
		return (
			<div>
				{this.props.photos.map((photo) =>
					<PhotoItem item={photo}/>
				)}
			</div>
		)
	}
}


PhotoList.propTypes = {
	photos: PropTypes.array.isRequired
}


export default PhotoList;
