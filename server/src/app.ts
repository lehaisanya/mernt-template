import * as express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000

export class App {
    private app: express.Express

    constructor() {
        this.app = express()
    }

    public async start() {
        try {
            await this.init()
            await this.routes()
            this.app.listen(PORT, () => {
                console.log(`Server starting on port ${PORT}`)
            })
        } catch (err) {}
    }

    private async init() {
        this.app.use(express.json())
    }

    private async routes() {
        this.app.get('/api/data', async (req, res) => {
            res.json({
                title: 'Hello world!',
            })
        })
    }
}
