import React from "react"
import ReactDOMServer from 'react-dom/server';

import author from "../middleware/author"
import apiRoutes from "./apiRoutes"
import siteRoutes from "./siteRoutes"

const load = (app) => {

    
    app.get('/', (req, res) => {
        res.redirect('/site');
    })

    app.use('/api', author, apiRoutes)
    app.use('/site', siteRoutes)

}

export default load;
