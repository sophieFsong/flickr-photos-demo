export default function photos(state = [], action ) {
	switch(action.type) {
		case 'SEARCH_PHOTO':
		    console.log(action);
			return action.photos;
		default:
			return state;
	}
}
