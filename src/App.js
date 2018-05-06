import React , { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as photoActions from './actions/photosActions';
import PhotoList from './components/photo-list/PhotoList'

class App extends Component {
    constructor( props , context ) {
        super( props , context );
        this.searchImageByTags = this.searchImageByTags.bind(this);
        this.changeTags = this.changeTags.bind(this);
    }
    
    changeTags( event ) {
        this.setState( { tags : event.target.value } );
    }
    
    searchImageByTags( event ) {
        this.props.actions.loadPhotos(this.state.tags);
    }
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Flickr photos demo</h1>
                    <div>
                        <input
                            type='text'
                            placeholder='Please input your search tags separated by comma'
                            className='search-text'
                            onChange={this.changeTags} />
                        <input
                            type='submit'
                            className='search-button'
                            value='Search'
                            onClick={this.searchImageByTags} />
                    </div>
                </header>
                <div className='photo-list'>
                    <PhotoList photos={this.props.photos}/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    actions : PropTypes.object.isRequired ,
    photos : PropTypes.array.isRequired
}

function mapStateToProps( state , ownProps ) {
    return {
        photos : state.photos
    }
}

function mapDispatchToProps( dispatch ) {
    return {
        actions : bindActionCreators( photoActions , dispatch )
    }
}

export default connect( mapStateToProps , mapDispatchToProps )( App );
