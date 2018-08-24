import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../../components/Navbar/NavBar';
import action from '../../actions/shoppingactions';

class ShoppingApp extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(action.getListOfItems([{ name: 'tea', id: 'nm1' }, { name: 'milk', id: 'nm2' }]));
	}

	render() {
		return (
            <div>
                <NavBar />
            </div>
		);
	}
}

const mapStateToProps = state => ({
	list: state.list,
});

export default connect(mapStateToProps)(ShoppingApp);
