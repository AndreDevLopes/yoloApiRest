
const Camera = require('../model/Camera');
module.exports ={
    async store(req,res){
            const {
                ip,
                quantidade,
            }= req.body;
            
            const camera = await Camera.findOne({where:{ip:ip}});
            if(camera){
                    
                const newCamera = await Camera.update({ip,quantidade},{where:{id:camera.id}});
                return res.json({
                    erro: false,
                    messagem: "operação realizada com sucesso",
                });
            }else{
                const newCamera = await Camera.create({ip,quantidade});
                return res.json(newCamera);
            }
       
            
    },
    async list(req,res){
        const cameras = await Camera.findAll();
        return res.json(cameras);
    }

}