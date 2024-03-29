const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports ={
    dest: path.resolve(__dirname,'..','..','tmp','uploads'),
    storage : multer.diskStorage({
        destination: (req , file , cb)=>{
            cb(null, path.resolve(__dirname,'..','..','tmp','uploads'));    
        },
        filename:( req , file , cb)=>{           
            const fileName = `${file.originalname}`;
            cb(null, fileName);
        },

    }),
    limitis:{
        fileSize: 5*1024*1024,
    },
    fileFilter: (req, file, cb)=>{
        const allowedMines = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif' 
        ];

        if(allowedMines.includes(file.mimetype)){
            cb(null , true);
        }else{
            cb( new Error("Invalid file type."));
        }

    },

};