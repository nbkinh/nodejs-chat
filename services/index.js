const userServiceFactory = require('./userService');

module.exports = repositories => {
    const userService = userServiceFactory.create(repositories.userRepository);

    return {
        userService
    }
};