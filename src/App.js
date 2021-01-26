import React, { Component } from 'react'
import Cart from './components/Cart';
import Header from './components/Header';
import Message from './components/Message';
import ProductList from './components/ProductList';
import ProductContainer from './container/ProductContainer';

class App extends Component {
	render() {
		return (
			<div>
				{/* Header */}

				<Header />

				<main id="mainContainer">
					<div className="container">
						{/* Products */}

						<ProductContainer />

						{/* Message */}

						<Message />

						{/* Cart */}

						<Cart />
					</div>
				</main>
			</div>
		)
	}
}

export default App;
