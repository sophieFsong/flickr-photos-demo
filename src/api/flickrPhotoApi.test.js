import flickrPhotoApi from './flickrPhotoApi';
import fetchJsonp from 'fetch-jsonp';

const mockResponse = require('./mockResponse.json');

jest.mock('fetch-jsonp');

fetchJsonp.mockImplementation(() =>
    Promise.resolve({ json: () => mockResponse })
);

describe('api service', () => {
    test('searches images in flickr feed API by tags', async () => {
        const photos = await flickrPhotoApi.getImagesByTags('cat');
        expect(fetchJsonp).toHaveBeenCalledWith(
            'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any&tags=cat',
            { jsonpCallback: 'jsoncallback', timeout: 3000 }
        );
        expect(photos).toHaveLength(20);
    });
    
    test('response is camelized', async () => {
        const images = await flickrPhotoApi.getImagesByTags('cat');
        
        expect(images[0].hasOwnProperty('dateTaken')).toBeTruthy();
    });
});
