const {fileSystem_} = require('../fileSystem/fileSystem')

class photoController {
    
    constructor() {}
    
    async postPhoto(req, res, fun) {

        if(!req.files) {
            res.status(400).json({
                ok: false,
                mensaje: "No se subio ninguna imagen"
            })
        }

        const file = req.files.image
        
        if(!file) {
            res.status(400).json({
                ok: false,
                mensaje: "No se subio ninguna imagen"
            })
        }

        if(!file.mimetype.includes('image')) {
            res.status(400).json({
                ok: false,
                mensaje: "Lo que subio no es una imagen"
            })
        }

        const usIm = await fileSystem_.saveImage(file,"1")

        res.status(200).json({
            response: "saludos desde el servidor",
            name: usIm,
            file
        })

    }

}

const photoController_ = new photoController()

module.exports = {photoController_}