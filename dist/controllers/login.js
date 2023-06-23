"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const profiles_1 = require("../services/profiles");
const auth_1 = require("../services/auth");
const crypto_1 = require("../middleware/crypto");
const response_1 = require("../middleware/response");
const login = ({ query }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield (0, profiles_1.getProfileByEmail)(query.email.toString(), true);
        (0, crypto_1.comparePassword)(query.password.toString(), profile.password);
        const token = (0, auth_1.signToken)(profile.email);
        return (0, response_1.buildSuccessResponse)({ codeName: 'DEFAULT', data: { token } });
    }
    catch (error) {
        console.error(error);
        const errorResponse = (0, response_1.buildErrorResponse)({ codeName: error.type || '' });
        console.log('ERROR FORMAT', errorResponse);
        return errorResponse;
    }
});
exports.default = {
    login,
};
//# sourceMappingURL=login.js.map