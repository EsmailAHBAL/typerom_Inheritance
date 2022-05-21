import * as express from 'express'
import adminService from '../service/adminService'
const deviceRoute =express.Router()
deviceRoute.get("/screen/update/:id",(req,res)=>{
     const {id}=req.params
    try {
        
        adminService.updateScreen(parseInt(id)).then(result=>{

            res.json({result})
        }).catch(er=>{
            res.json({er})
        })

    } catch (error) {
        res.json({error})

    }
})
deviceRoute.get("/screen/:id",(req,res)=>{
   
    const {id}=req.params
    try {
        adminService.getScreenById(parseInt(id)).then(result=>{

            res.json({data:result})
        }).catch(err=>{
            res.json(err)
        })
    } catch (error) {
        res.json({error})
    }
})

deviceRoute.get('/screen',(req,res)=>{
    try {
        adminService.getScreens().then(result=>{
            res.json({all:result})
        }).catch(err=>{
            res.json({err})
        })
    } catch (error) {
        res.json({error})
    }
})

export default deviceRoute