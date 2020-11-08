const {fileSystem_} = require('../fileSystem/fileSystem')
const {photoModel_} = require('../model/photoModel')

class photoController {
    
    constructor() {}
    
    async postPhoto(req, res, fun) {

        let data = req.body

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

        const nameIm = await fileSystem_.saveImage(file,"1")

        const nameImage = `http://localhost:3000/image/1/${nameIm}`

        let register = {
            lat: data.lat,
            lon: data.lon,
            obsv: data.obsv,
            imagen: nameImage,
            estado: data.estado,
            rotulo: data.rotulo
        }

        try {
            let result = await photoModel_.registerData(register)

            res.status(200).json({
                ok: true,
                res: result
            })
        } catch (error) {
            res.status(200).json(error)
        }
        
    }

    async getImage(req, res, fun) {
        const usId = req.params.userId
        const usIm = req.params.img

        const pathFoto = fileSystem_.getPhotoUrl(usId, usIm)

        res.sendFile(pathFoto)
    }

    async registerView(req, res, fun) {
        try {
            let result = await photoModel_.registerView()
            res.status(200).json({
                ok: true,
                res: result
            })
        } catch (error) {
            res.status(200).json({
                ok: false,
                res: error
            })
        }
    }

}

const photoController_ = new photoController()

module.exports = {photoController_}