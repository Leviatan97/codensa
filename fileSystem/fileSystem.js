const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid')

class fileSystem {

    constructor() {}

    saveImage(file, id) {

        return new Promise ((resolve, reject)=> {
            const pathU = this.createFolder(id)
            const nombre = this.generateName(file.name)

            file.mv(`${pathU}/${nombre}`,(err)=> {
                if(err) {
                    reject(err)
                }
                else {
                    resolve(nombre)
                }
            })
        })
        
    }

    
    generateName (nombreOrginal) {
        const nombreArr = nombreOrginal.split('.')
        const extencion = nombreArr[nombreArr.length-1]
        const nomUnico = uniqid()
        return `${nomUnico}.${extencion}`
    }

    createFolder(id) {
        const pathU = path.resolve(__dirname,'../images',id)
        const existe = fs.existsSync(pathU)
        
        if(!existe) {
            fs.mkdirSync(pathU)
        }

        return pathU
    }

    getPhotoUrl(usId, usIm) {
        const foto = path.resolve(__dirname,'../images',usId,usIm)
        const existe = fs.existsSync(foto)
        if(!existe) {
            return path.resolve(__dirname,'../images/default/default.png')
        }
        return foto
    }
}

const fileSystem_ = new fileSystem()
module.exports = {fileSystem_}