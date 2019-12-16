
import axios from "axios";

const index = (req, res, next) => {
    res.render('Index', { jjj: "holahola" })
}

const items = async (req, res, next) => {
    let param = req.query.search || false;
    let response = await axios.get(`http://localhost:8000/api/items?search=${encodeURIComponent(param)}`).then( data => data.data )
    .catch(function (error) {
        console.log(error);
    });
    response.search = param;
    res.render('Items', response)
}

const item = async (req, res, next) => {
    let param = req.params.id || false;
    let response = await axios.get(`http://localhost:8000/api/items/${encodeURIComponent(param)}`).then( data => data.data )
    .catch(function (error) {
        console.log(error);
    });
    res.render('Item', response)
}

export default {
    index,
    items,
    item
}