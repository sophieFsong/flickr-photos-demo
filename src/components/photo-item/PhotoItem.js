import React, { Component } from 'react';
import './PhotoItem.css';

class PhotoItem extends Component {
 
    

	render() {
		return (
			<li className='flickr-img-item'>
				<h4 className='flickr-img-title'>{this.props.item.title}</h4>
				<img src={this.props.item.media.m} alt='' className='flickr-img'></img>
    
			</li>
		)
	}
}
export default PhotoItem;
