import flickrPhotoApi from '../api/flickrPhotoApi';
export function loadPhotoSuccess(photos) {
	return {	type: 'SEARCH_PHOTO', photos};
}

export function loadPhotos( tags ) {
	return function( dispatch ) {
		return flickrPhotoApi.getImagesByTags(tags).then(
			photos => {
				dispatch(loadPhotoSuccess(photos))
			}
		).catch(error => {
			throw(error);
		})
	}
}
