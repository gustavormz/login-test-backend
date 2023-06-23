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
const response_1 = require("../middleware/response");
const registerNewProfile = ({ body }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, profiles_1.createProfile)(body);
        return (0, response_1.buildSuccessResponse)({ codeName: 'CREATED' });
    }
    catch (error) {
        console.error(error);
        return (0, response_1.buildErrorResponse)({ codeName: error.type || '' });
    }
});
exports.default = {
    registerNewProfile,
};
//# sourceMappingURL=register.js.map