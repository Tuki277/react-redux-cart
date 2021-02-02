import * as Types from '../constants/ActionTypes'

// lưu các action ( mua hàng, thay đổi tin nhắn)

export const actionBuy = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART, //type
        product : product,
        quantity : quantity
    }
}

export const actionChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message : message
    }
}

export const actionRemoveProductInCart = (product) => { // xoa dua vao id
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        product : product
    }
}

export const actionUpdateProductInCart = (product, quantity) => {
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product : product,
        quantity : quantity
    }
}