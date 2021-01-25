import React, { Component } from 'react'
import Products from './Product'

class ProductList extends Component {
	render() {
		return (
			<section className="section">
				<h1 className="section-heading">Danh Sách Sản Phẩm</h1>
				<div className="row">
					{/* Product */}
					
					<Products />
					<Products />
					<Products />

				</div>
			</section>
		)
	}
}

export default ProductList;
