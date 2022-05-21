import app from "./app"
import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {

 app.listen(3300,()=> {

    console.log('server up On http:localhost:3300');
    
 })
}).catch(error => console.log(error))
