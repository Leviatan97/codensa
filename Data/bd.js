const mysql = require('promise-mysql');

class dataBase {
    
    constructor() {
        this.createConection()
        this.conectar()
    }

    async conectar(){
        (await this.BD).getConnection().then(async connection=>{
            (await this.BD).releaseConnection(connection)
            console.log('DB esta conectada');
        }).catch( (err) => {
            console.log( 'Error al Conectar DB\n', {
                ok:false,
                err: err.fatal,
                errCode: err.code,
                errSqlState: err.sqlState,
                errSqlMessage: err.sqlMessage
            })
        })
    }

    createConection() {
        this.BD = mysql.createPool({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'codensa',
            port: 3306
        })
    }

    dataBase() {
        return this.BD
    }
}

const dataBase_ = new dataBase()

module.exports = {dataBase_}