import React from 'react';

import { connect } from 'react-redux';

//import CollectionItem from '../../components/collection-item';

import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss';

const CollectionPage = ( {selectCollection, match} ) => {

   console.log(selectCollection);

    return (
        <div className='collection-page'>
            <h2> collection page </h2>
        </div>
    );
}

//mapStateToProps also have access to its own props
const mapStateToProps = (state, ownProps) => ({
    selectCollection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);