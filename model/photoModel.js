const {dataBase_} = require('../Data/bd');

class photoModel {

    constructor() {}

    registerData(data)
    {
        let con = dataBase_.dataBase()
        return new Promise(async (resolve,reject)=>{
            (await con).query('INSERT INTO registro set ?',[data]).then((result)=>{
                resolve ({
                    resultado:true,
                    respuesta:result
                })
            }, (error)=>{
                reject({
                    resultado:false,
                    respuesta:error
                })
            })
        })

    }

    registerView() {
        let con = dataBase_.dataBase()
        return new Promise(async (resolve, reject) => {
            (await con).query(`SELECT * FROM registro`,(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }
}

const photoModel_ = new photoModel()

module.exports = {photoModel_}