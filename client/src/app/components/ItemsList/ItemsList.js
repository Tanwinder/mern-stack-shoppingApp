import React from 'react';
import { ListGroup, ListGroupItem } from 'reactStrap';

const ItemsList = ({data}) => {
	return (
        <ListGroup>
            {data.length !== 0 ? data.map(item => {
            		return <ListGroupItem key={item.id}>{item.name}</ListGroupItem>
            	})
            		:
                <ListGroupItem>No items Found </ListGroupItem>
            }
        </ListGroup>    
	)
}

export default ItemsList;