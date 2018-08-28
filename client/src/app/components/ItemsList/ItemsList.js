import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactStrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ItemsList.scss';

const ItemsList = ({data, deleteItem}) => {
	return (
        <ListGroup>
            {data.length !== 0 ? data.map(item => {
            		return (
                    <ListGroupItem className="list-items" key={item._id}>
                        <span>{item.name}</span>
                        <FontAwesomeIcon
                        	onClick={() => deleteItem(item._id)}
                        	icon="times-circle"
                        	color="red"
                        	size="1x" />
                    </ListGroupItem>
            	);
            	})
            		:
                <ListGroupItem>No items Found </ListGroupItem>
            }
        </ListGroup>    
	)
}

export default ItemsList;