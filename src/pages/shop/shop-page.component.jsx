import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CategoryPage from '../category/category.component';

//since this component is rendered through ROUTE which is in app.js,
//it has access to match, history and loaction props
const ShopPage = ( {match} ) =>	(
	<div className="shop-page">
		<Route exact path={`${match.path}`}  component={CollectionOverview} />
		<Route path={`${match.path}/:categoryId`} component={CategoryPage} />
	</div> 
);

export default ShopPage;