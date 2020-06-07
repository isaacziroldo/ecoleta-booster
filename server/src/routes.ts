import express, { response } from 'express'

const app =  express();

const routes = express.Router()

app.use(express.json())


 
routes.get('/', (request, response)=>{
    return response.json({message: 'Hello World'})
})

export default routes