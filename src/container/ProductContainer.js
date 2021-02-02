import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import Product from '../components/Product'
import { actionBuy, actionChangeMessage } from '../actions/index'

const mapStateToProps = state => {
	return {
		products : state.products
	}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actionBuy(product, 1));
		},
		onChangeMessage : (message) => {
			dispatch(actionChangeMessage(message))
		}
    }
}

class ProductContainer extends Component {

	showProducts = (products) => {
		var result = null
		var { onAddToCart, onChangeMessage } = this.props
		if ( products.length > 0 ) {
			result = products.map((product, index) => {
				return (
					<Product 
						key = {index} 
						product = { product }
						onAddToCart = { onAddToCart }
						onChangeMessage = {onChangeMessage}
					/>
				)
			})
		}
		return result
	}

	render() {

		var { products } = this.props

		return (
			<ProductList>
				{ this.showProducts(products) }
			</ProductList> // truyền vào components/product để lấy ra tên của từng sản phẩm
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);