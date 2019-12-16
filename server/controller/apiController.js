import axios from "axios"
import parser from "../parser/index"

const items = async (req, res, next) => {
    let param = req.query.search || false;
    let response = await axios.get(`http://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(param)}&limit=4`).then(data => data.data);
    res.json(parser.items(response, res))
}

const item = async (req, res, next) => {
    let param = req.params.id || false;
    let resData = await axios.get(`http://api.mercadolibre.com/items/${encodeURIComponent(param)}`).then(data => data.data);
    let resDescription = await axios.get(`http://api.mercadolibre.com/items/${encodeURIComponent(param)}/description`).then(data => data.data);
    let resCategorias = await axios.get(`https://api.mercadolibre.com/categories/${encodeURIComponent(resData.category_id)}`).then(data => data.data);
    res.json(parser.item(resData, resDescription, resCategorias, res))
}

export default {
    items,
    item
}