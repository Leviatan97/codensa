const Routes = require('express');
const {photoController_} = require("../controller/photoController")

class photoRoutes {

    constructor() {
        this.routes = Routes()
        this.postPhoto()
    }

    postPhoto() {
        this.routes.route('/data').post(photoController_.postPhoto)
    }

    getRoutes()
    {
        return this.routes
    }
}

const photoRoutes_ = new photoRoutes()
const photoRoutes_1 = photoRoutes_.getRoutes()
module.exports = {photoRoutes_1}