let itemTemplate = {
    "id": "",
    "title": "",
    "price": {
        "currency": "",
        "amount": 0,
        "decimals": 0
    },
    picture: "",
    "condition": "",
    "free_shipping": false,
    "sold_quantity": 0,
    "description": "",
    "sold_quantity": 0,
    "categorias": []
}

const item = (data, descripcion, categorias, res) => {
    let searchObject = Object.assign({ author: res.locals.author }, itemTemplate);
    
    searchObject.id = data.id
    searchObject.title = data.title
    searchObject.picture = data.thumbnail
    searchObject.condition = (data.condition === 'new') ? 'Nuevo' : 'Usado'
    searchObject.price.currency = data.currency_id
    searchObject.price.amount = data.price
    searchObject.free_shipping = data.shipping.free_shipping
    searchObject.sold_quantity = data.sold_quantity
    searchObject.description = descripcion.plain_text

    searchObject.categorias = []
    searchObject.categorias = categorias.path_from_root

    return searchObject;
}

export default item;