import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddItems } from '../../actions/shoppingactions';
import { Form, FormGroup, Button, Input, Label} from 'reactstrap';
import ItemsList from '../../components/ItemsList/ItemsList';
import './ShoppingApp.scss';

class ShoppingApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: '',
		}
	}

	OnValueChange = (e) => {
		this.setState({
			newItem: e.target.value,
		})
	}

	AddItem = () => {
		const item = {
			name: this.state.newItem,
			id: this.state.newItem,
		};
		this.props.dispatch(AddItems(item));
	}

	render() {
		const { items } = this.props;
		console.log('item prop', items);
		return (
            <div>
                <Form className="list-form">
					<FormGroup>
						<Label for="NewItem"></Label>
						<Input 
							value={this.state.newItem} 
							onChange={(e) => this.OnValueChange(e)} 
							type="text" 
							id="NewItem" 
							placeholder="Add Items..." />
					</FormGroup>
					<Button color="primary" onClick={this.AddItem}>Add Items</Button>
				</Form>
				<ItemsList data={items}/>
            </div>
		);
	}
}

const mapStateToProps = state => ({
	items: state.shopping.items,
});

export default connect(mapStateToProps)(ShoppingApp);
