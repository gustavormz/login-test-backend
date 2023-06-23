"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const validateProfile = (profile) => {
    try {
        if (!profile.name || !profile.password || !profile.email) {
            throw constants_1.MAP_ERROR_BY_CODE_NAME.VALIDATION;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(profile.email)) {
            throw constants_1.MAP_ERROR_BY_CODE_NAME.VALIDATION;
        }
        return Object.assign({}, profile);
    }
    catch (error) {
        throw error;
    }
};
exports.default = {
    validateProfile,
};
//# sourceMappingURL=validation.js.map