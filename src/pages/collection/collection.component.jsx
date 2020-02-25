import React from 'react';

import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss';

const CollectionPage = ( {mappingCollectionNamewithID} ) => {

    const { title, items } = mappingCollectionNamewithID;

    return (
        <div className='collection-page'>
            <h2 className='title'> {title} </h2>
            <div className='items'>
                { items.map ( item => 
                    <CollectionItem key={item.id} item={item} />
                ) } 
            </div>
        </div>
    );
}

//mapStateToProps also have access to its own props
const mapStateToProps = (state, ownProps) => ({
    mappingCollectionNamewithID: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);