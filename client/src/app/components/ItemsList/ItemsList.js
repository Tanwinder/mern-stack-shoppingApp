import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactStrap';
import './ItemsList.scss';

const ItemsList = ({data, deleteItem}) => {
	return (
        <ListGroup>
            {data.length !== 0 ? data.map(item => {
            		return <ListGroupItem className="list-items" key={item.id}>
                    <span>{item.name}</span>
                    <Button onClick={() => deleteItem(item.id)}>
                        Del
                    </Button>
                    </ListGroupItem>
            	})
            		:
                <ListGroupItem>No items Found </ListGroupItem>
            }
        </ListGroup>    
	)
}

export default ItemsList;