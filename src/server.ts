import express, { Request, Response } from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import mythical_weapon_routes from './handlers/mythical_weapons';

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

const corsOptions = {
    origin: 'http://someotherdomain.com',
    optionSuccesStatus: 200 //some legacy browser
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

/* app.get('/test-cors', cors(), function (req, res, next) {
    res.json({msg: 'this is CORS_enabled with middleware'})
}) */

mythical_weapon_routes(app);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
