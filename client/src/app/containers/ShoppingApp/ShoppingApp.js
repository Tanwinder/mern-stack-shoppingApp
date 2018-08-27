import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getListOfItems, AddItems, deleteItem } from '../../actions/shoppingactions';
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

	componentDidMount() {
		this.props.dispatch(getListOfItems())
	}

	OnValueChange = (e) => {
		this.setState({
			newItem: e.target.value,
		})
	}

	// save = () => {
	// 	this.props.dispatch(SaveItems())
	// }

	AddItem = (event) => {
		event.preventDefault();
		const checkDuplicate = this.props.items.some(ac => ac.name == this.state.newItem);
		if(!!this.state.newItem && !checkDuplicate) {
			const item = {
				name: this.state.newItem,
				id: this.state.newItem,
			};
			this.props.dispatch(AddItems(item));
			this.setState({
				newItem: '',
			})
		}
	}

	deleteItem = (id) => {
		this.props.dispatch(deleteItem(id));
	}

	render() {
		const { items } = this.props;
		return (
            <div className="shopping-app">
                <Form className="list-form" onSubmit={this.AddItem}>
					<FormGroup>
						<Label for="NewItem"></Label>
						<Input 
							value={this.state.newItem} 
							onChange={(e) => this.OnValueChange(e)}
							type="text" 
							id="NewItem" 
							placeholder="Add Items..." />
					</FormGroup>
					<Button color="primary" type="submit">Add Items</Button>
				</Form>
				<ItemsList data={items} deleteItem={this.deleteItem}/>
				{/* <Button className="save-button" type="button" color="success" onClick={this.save}>Save</Button> */}
            </div>
		);
	}
}

const mapStateToProps = state => ({
	items: state.shopping.items,
});

export default connect(mapStateToProps)(ShoppingApp);
