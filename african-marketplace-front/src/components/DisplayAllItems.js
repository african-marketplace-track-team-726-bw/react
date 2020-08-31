import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllItems } from '../actions/itemActions';
import './itemcard.css';

function DisplayAllItems(props) {
	useEffect(() => {
		props.getAllItems();
		// console.log(props);
	}, []);

	return (
		<div className='item-card-container'> {/* added classname to div --sam */}
			{props.items.map((item) => {
				return (
					<div key={item.id} className='item-card'>
						<h3>Item: {item.product}</h3>
						<br />
						<p>Description: {item.description}</p>
						<br />
						{/* <p>Category: {item.category}</p>
						<br /> */}
						<span>Price: ${item.price}</span>
						<br />
						<br />
					</div>
				);
			})}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		items: state.item.allItems,
	};
};

export default connect(mapStateToProps, { getAllItems })(DisplayAllItems);
