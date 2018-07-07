module.exports.send = function(res, data, err) {
    if (err) {
        res.json({
            'status' : 99,
            'message' : err.message
        });

        return;
    }

    res.json({
        'status' : 1,
        'data' : data
    });
};