import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import PhotoList from './PhotoList';
import PhotoItem from '../photo-item/PhotoItem';

describe('<PhotoList />', () => {
    test('render one <PhotoItem /> per image', () => {
        const photos = [
            { title: 'Image 1', media: {m : 'testURL1'}},
            { title: 'Image 2', media: {m : 'testURL2'} }
        ];
        
        const wrapper = shallow(<PhotoList photos={photos} />);
        
        expect(wrapper.find(PhotoItem)).toHaveLength(2);
    });
});
