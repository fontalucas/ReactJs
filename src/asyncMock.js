
const burgers = [
    
    {id:"1", name: "Rey Arturo", stock: 15, price: 900, img: "imagenes/reyarturo.jpg", category: "lineaGolden"},
    {id:'2', name: 'Magnus', stock: 1, price: 500, img: '/imagenes/magnus.jpg', category: 'lineaGolden'},
    
    
    {id:"3", name: "Maxima", stock: 0, price: 850, img: '/imagenes/MAXIMA.jpg', category: 'lineaClasica'},
    {id:"4", name: "Isabel", stock: 0, price: 850, img: '/imagenes/isabel.jpg', category: 'lineaClasica'},
    {id:"5", name: "Victoria", stock: 0, price: 850, img: '/imagenes/victoria.jpg', category: 'lineaClasica'},
    
    
    {id:"6", name: "William", stock: 10, price: 500, img: '/imagenes/william.jpg', category: 'lineaCheese'},
    {id:"7", name: "Charlotte", stock: 10, price: 500, img: '/imagenes/isabel.jpg', category: 'lineaCheese'},
    
    
    {id:"8", name: "Smoke Shack", stock: 15, price: 1000, img: '/imagenes/smokeshacj.jpg', category: 'lineaHomenaje'},
    {id:"9", name: "Fried Onion", stock: 15, price: 900, img: '/imagenes/friedonion.jpg', category: 'lineaHomenaje'}

]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(burgers)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(burgers.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(burgers.filter(prod => prod.category === categoryId))
        }, 500)
    })
}