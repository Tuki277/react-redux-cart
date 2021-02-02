import React, { Component } from 'react'
import Header from './components/Header';
import CartContainer from './container/CartContainer';
import ProductContainer from './container/ProductContainer';
import MessageContainer from './container/MessageContainer'

class App extends Component {
	render() {
		return (
			<div>
				{/* Header */}

				<Header />

				<main id="mainContainer">
					<div className="container">
						{/* Products ===> <ProductContainer/>*/}

						<ProductContainer />

						{/* Message */}

						{/* <Message /> ===> <MessageContainer /> */}
						<MessageContainer />

						{/* Cart ===> <CartContainer/> */}

						<CartContainer />
					</div>
				</main>
			</div>
		)
	}
}

export default App;
