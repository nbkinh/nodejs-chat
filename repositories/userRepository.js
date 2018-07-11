function create({User}) {
    async function getAll() {
        return await User.find({}, (err, data) => {
            return data;
        });
    }

    return {
        getAll
    };
}

module.exports.create = create;