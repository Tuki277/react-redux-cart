import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import Products from '../components/Product'

const mapStateToProps = state => {
	return {
		products : state.products
	}
}

class ProductContainer extends Component {

	showProducts = (products) => {
		var result = null
		if ( products.length > 0 ) {
			result = products.map((product, index) => {
				return (
					<Products>
						{ this.showProducts(products) }
					</Products> // truyền vào components/product để lấy ra tên của từng sản phẩm
				)
			})
		}
		return result
	}

	render() {

		var { products } = this.props

		return (
			<ProductList products = { products } />
		)
	}
}

export default connect(mapStateToProps, null)(ProductContainer);