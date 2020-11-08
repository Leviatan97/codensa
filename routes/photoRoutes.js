const Routes = require('express');
const {photoController_} = require("../controller/photoController")

class photoRoutes {

    constructor() {
        this.routes = Routes()
        this.postPhoto()
        this.getImage()
        this.getData()
    }

    postPhoto() {
        this.routes.route('/data').post(photoController_.postPhoto)
    }

    getImage() {
        this.routes.get('/image/:userId/:img',photoController_.getImage)
    }

    getData() {
        this.routes.get('/data',photoController_.registerView)
    }

    getRoutes()
    {
        return this.routes
    }
}

const photoRoutes_ = new photoRoutes()
const photoRoutes_1 = photoRoutes_.getRoutes()
module.exports = {photoRoutes_1}