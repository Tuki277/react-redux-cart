var initialState = [
    {
        id : 1,
        name : 'dien thoai 1',
        image : '',
        description : 'san pham do Apple san xuat',
        price : 100,
        inventory : 10
    },
    {
        id : 2,
        name : 'dien thoai 2',
        image : '',
        description : 'san pham do Samsung san xuat',
        price : 200,
        inventory : 20
    },
    {
        id : 3,
        name : 'dien thoai 1',
        image : '',
        description : 'san pham do VietNam san xuat',
        price : 300,
        inventory : 30
    },
]

// tao reducer

var product = (state = initialState, action) => {
    switch (action.type) {
        default : return [...state]
    }
}

export default product