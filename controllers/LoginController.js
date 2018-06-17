module.exports.index = function(req, res) {
    res.render('index');
};

module.exports.register = function(req, res) {
    res.redirect('/groups?u=' + req.body.user_name);
};