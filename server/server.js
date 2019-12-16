import express from "express"
import path from "path"
import routes from "./routes/index"
import compression from "compression"

// constantes
const app = express()
const PORT = 8000

// setup views and engine
app.set('views', path.resolve(__dirname, "..", "src/views"));
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine({ transformViews: false }));

// setup compression
app.use(compression({ level: 6 }))

// setup assets static path
app.use(express.static(path.resolve(__dirname, "../dist"))) 

// setup routes
routes(app) 

// setup server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`server up on localhost:${PORT}`)
})