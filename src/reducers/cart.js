import * as Types from '../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('CART'))
// var initialState = [
//     {
//         product : {
//             id : 1,
//             name : 'dien thoai 1',
//             image : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
//             description : 'san pham do Apple san xuat',
//             price : 100,
//             inventory : 10,
//             rating : 1
//         },
//         quantity : 5
//     },
//     {
//         product : {
//             id : 2,
//             name : 'dien thoai 2',
//             image : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
//             description : 'san pham do Samsung san xuat',
//             price : 200,
//             inventory : 20,
//             rating : 2
//         },
//         quantity : 2
//     }
// ]

var initialState = data ? data : []

// tao reducer

var cart = (state = initialState, action) => {

    var { product, quantity } = action
    var index = -1 // tim san pham theo id
    switch (action.type) {
        case Types.ADD_TO_CART :
            index = findProductInCart(state, product)
            if (index !== -1 ) {
                state[index].quantity += quantity
            }
            else {
                state.push({
                    product : product,
                    quantity : quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            console.log(action);
            return [...state]
        case Types.DELETE_PRODUCT_IN_CART :
            index = findProductInCart(state, product)
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state))
            console.log(action);
            return [...state]
        case Types.UPDATE_PRODUCT_IN_CART :
            index = findProductInCart(state, product)
            if (index !== -1) {
                state[index].quantity = quantity
            }
            localStorage.setItem('CART', JSON.stringify(state))
            console.log(action);
            return [...state]
        default : return [...state]
    }
}

// tim san pham theo id
var findProductInCart = (cart, product) => {
    var index = -1 // = -1 là không tìm thấy
    if(cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i
                break
            }
        }
    }
    return index
}

export default cart