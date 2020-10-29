
const Camera = require('../model/Camera');
module.exports ={
    async store(req,res){
            const {
                nome,
                quantidade,
            }= req.body;
            const newCamera = Camera.create({nome,quantidade});

            return res.json(newCamera);
    },
    async list(req,res){
        const cameras = Camera.findAll();
        return res.json(cameras);
    }

}