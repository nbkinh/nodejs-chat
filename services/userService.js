function create(userRepository) {
    async function getAllUser() {
        return await userRepository.getAll();
    }

    return {
        getAllUser
    }
}

module.exports.create = create;