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
const response_1 = require("../middleware/response");
const getProfile = ({ headers, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = (0, auth_1.validateToken)(headers.authorization);
        const profile = yield (0, profiles_1.getProfileByEmail)(email);
        return (0, response_1.buildSuccessResponse)({ codeName: 'DEFAULT', data: profile });
    }
    catch (error) {
        return (0, response_1.buildErrorResponse)({ codeName: error.type || '' });
    }
});
exports.default = {
    getProfile,
};
//# sourceMappingURL=profile.js.map