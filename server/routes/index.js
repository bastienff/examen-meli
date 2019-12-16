import React from "react"
import ReactDOMServer from 'react-dom/server';

import author from "../middleware/author"
import apiRoutes from "./apiRoutes"
import appRoutes from "./siteRoutes"

const load = (app) => {

    app.use('/api', author, apiRoutes)
    app.use('/site', appRoutes)

}

export default load;
