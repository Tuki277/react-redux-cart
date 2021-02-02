import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import * as Message from '../constants/Message'
import cart from '../reducers/cart';
import CartResult from '../components/CartResult'
import { actionChangeMessage, actionRemoveProductInCart, actionUpdateProductInCart } from '../actions/index'

class CartContainer extends Component {

	showCartItem = (cart) => {
		var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props
		var result = <tr>
			<td>
				{ Message.cartEmpty }
			</td>
		</tr>
		if (cart.length > 0) {
			result = cart.map((item, index) => {
				return (
					<CartItem
						key = {index}
						item = { item }
						index = {index}
						onDeleteProductInCart = { onDeleteProductInCart }
						onChangeMessage = { onChangeMessage }
						onUpdateProductInCart = { onUpdateProductInCart }
					/>
				)
			})
		}
		return result
	}

	showTotal = (cart) => {
		var result = null
		if (cart.length > 0) {
			result = <CartResult cart = { cart } />
		}
		return result
	}

	render() {
		var { cart } = this.props
		console.log(cart);
		return (
			<Cart>
				{ this.showCartItem(cart) }
				{ this.showTotal(cart) }
			</Cart>
		)
	}
}

const mapStateToProps = state => {
	return {
		cart : state.cart // state.cart ở reducers/index, sau khi combine
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onDeleteProductInCart : (product) => {
			dispatch(actionRemoveProductInCart(product))
		},
		onChangeMessage : (message) => {
			dispatch(actionChangeMessage(message))
		},
		onUpdateProductInCart : (product, quantity) => {
			dispatch(actionUpdateProductInCart(product, quantity))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);