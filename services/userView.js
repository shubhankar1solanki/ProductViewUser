"use strict";

const UserView = require('../models/UserView');

exports.addViewProduct = function(payload) {
    return new Promise(function(resolve, reject) {
        UserView.create(payload, function(err, data) {
            if (err) {
                console.log(err);
                reject(null);
            } else {
                resolve(data);
            }
        });
    });
};

exports.getUserViewProduct = function (startDate, endDate) {
    return new Promise(function(resolve, reject) {
        UserView.aggregate([
            {
                $match:  {'viewDate': {$gte:startDate, $lt:endDate}}
            },
            {
                $group:
                    {
                        _id:'$productId',
                        uniqueUsers:{$addToSet:"$userId"}, // add unique userId
                        users:{$push:"$userId"},          // add all userId
                    }
            },
            {
                $addFields:
                {
                    totalUniqueUser:{$size:'$uniqueUsers'},  // count total unique user
                    totalUser:{$size:"$users"}               // count total user
                }
            }
        ]).collation({ locale: "en_US", strength: 1 })
            .exec(function (err, data) {
                if (err) {
                    console.log("err", err);
                    reject(err);
                } else {
                    resolve(data);
                }
            });
    })
};