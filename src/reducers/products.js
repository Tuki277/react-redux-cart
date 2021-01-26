var initialState = [
    {
        id : 1,
        name : 'dien thoai 1',
        image : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description : 'san pham do Apple san xuat',
        price : 100,
        inventory : 10,
        rating : 1
    },
    {
        id : 2,
        name : 'dien thoai 2',
        image : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description : 'san pham do Samsung san xuat',
        price : 200,
        inventory : 20,
        rating : 2
    },
    {
        id : 3,
        name : 'dien thoai 3',
        image : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description : 'san pham do VietNam san xuat',
        price : 300,
        inventory : 30,
        rating : 3
    },
]

// tao reducer

var products = (state = initialState, action) => {
    switch (action.type) {
        default : return [...state]
    }
}

export default products