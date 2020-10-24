"use strict";

const Common = require("../config/common");
const userView = require('../services/userView');

exports.addViewProduct = async(req, res) => {
    try {
        let payload = req.body;
        const saveRecord = await userView.addViewProduct(payload);
        if(saveRecord)
            return res.send(Common.createdResponse(`View product saved successfully.`));
    } catch(e) {
        return res.send(Common.errorResponse('badImplementation', e));
    }
};

exports.getUserViewProduct = async(req, res) => {
    try {
        let startDate = req.query.startDate ? new Date(req.query.startDate) : new Date();
        let endDate = req.query.endDate ? new Date(req.query.endDate) : new Date();
        let getUsers = await userView.getUserViewProduct(startDate, endDate);
        return res.send(Common.successResponse(`view product list retrieved successfully.`, getUsers))
    } catch(e) {
        return res.send(Common.errorResponse('badImplementation', e));
    }
};