import fetchJsonp from 'fetch-jsonp';
import { camelizeKeys } from 'humps';

const FLICKR_FETCH_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any';
const camelizeJSON = json => camelizeKeys( json , ( key , convert ) => {
    return /^[A-Z0-9_]+$/.test( key ) ? key : convert( key );
} );
export default class flickrPhotoApi {
    static fetchJson (endpoint){
        
        return fetchJsonp( endpoint , {
            jsonpCallback : 'jsoncallback' , timeout : 3000
        } ).then( response => response.json() )
    }
    
    static getImagesByTags (tags) {
            let endpoint = FLICKR_FETCH_URL;
            if (tags) {
                endpoint = `${FLICKR_FETCH_URL}&tags=${tags}`;
            }
            return this.fetchJson(endpoint)
                .then(response => {
                    return camelizeJSON(response.items)
                })
                .catch(err => {
                    throw new Error(err);
                })
    }
}
