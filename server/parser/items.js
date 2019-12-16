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
    "city": ""
}

let searchTemplate = {
    categories: [],
    items: []
}

const items = (data, res) => {
    let searchObject = Object.assign({ author: res.locals.author }, searchTemplate);
    searchObject.items = [];
    
    data.results.forEach((item) => {
        searchObject.items.push(generateItem(item))
    })

    return searchObject;
}

const generateItem = (data) => {
    let itemObject = Object.assign({}, itemTemplate);
    itemObject.id = data.id;
    itemObject.title = data.title;
    itemObject.picture = data.thumbnail;
    itemObject.condition = data.condition;
    itemObject.price.currency = data.currency_id;
    itemObject.price.amount = data.price;
    itemObject.free_shipping = data.shipping.free_shipping;
    itemObject.city = data.address.state_name;
    return itemObject
}

export default items;