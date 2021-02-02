import React, { Component } from 'react'
import { Provider } from 'react-redux'
import * as Message from '../constants/Message'

class CartItem extends Component {

	// tạo state để quản lý số lượng mua và bán
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		quantity : 1
	// 	}
	// } // lấy từ store về nên k cần state nữa

	showTotalPrice = (price, quantity) => {
		return price * quantity
	}

	onDeleteProductInCart = (product) => {
		console.log(product)
		var { onDeleteProductInCart, onChangeMessage } = this.props
		onDeleteProductInCart(product)
		onChangeMessage(Message.deleteProductInCartSuccess)
	}

	onUpdateQuantity = (product, quantity) => {
		var { onUpdateProductInCart, onChangeMessage } = this.props
		if (quantity > 0) {
			onUpdateProductInCart(product, quantity)
			onChangeMessage(Message.updateAddToCartSuccess)
		}
	}

	render() {
		var { item } = this.props
		var {quantity } = item
		console.log(quantity)
		// console.log(item)
		return (
			<tr>
				<th scope="row">
					<img src={ item.product.image } />
				</th>
				<td>
					<h5>
						<strong>{ item.product.name }</strong>
					</h5>
				</td>
				<td>{ item.product.price }$</td>
				<td className="center-on-small-only">
					<span className="qty"> { quantity } </span>
					<div className="btn-group radio-group" data-toggle="buttons">
						<label className="btn btn-sm btn-primary
								btn-rounded waves-effect waves-light"
								onClick = { () => this.onUpdateQuantity(item.product, item.quantity - 1)}
						>
							<a>—</a>
						</label>
						<label className="btn btn-sm btn-primary
								btn-rounded waves-effect waves-light"
								onClick = { () => this.onUpdateQuantity(item.product, item.quantity + 1)}
						>
							<a>+</a>
						</label>
					</div>
				</td>
				<td>{ this.showTotalPrice(item.product.price, item.quantity) }$</td>
				<td>
					<button 
						type="button" 
						className="btn btn-sm btn-primary waves-effect waves-light" 
						data-toggle="tooltip" data-placement="top" 
						title data-original-title="Remove item"
						onClick = { () => this.onDeleteProductInCart(item.product) }
					>
						X
					</button>
				</td>
			</tr>
		)
	}
}

export default CartItem;
