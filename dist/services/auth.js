"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../constants");
const validateToken = (token) => {
    try {
        const [type, tokenValue] = token.split(' ');
        if (type !== 'Bearer') {
            throw constants_1.MAP_ERROR_BY_CODE_NAME.AUTH_ERROR;
        }
        const tokenDecoded = jsonwebtoken_1.default.verify(tokenValue, process.env.AUTH_SECRET_KEY_VALUE);
        if (!tokenDecoded) {
            throw constants_1.MAP_ERROR_BY_CODE_NAME.AUTH_ERROR;
        }
        console.log('TOKEN DECODED', tokenDecoded);
        return tokenDecoded;
    }
    catch (error) {
        throw error;
    }
};
exports.validateToken = validateToken;
const signToken = (email) => {
    try {
        const token = jsonwebtoken_1.default.sign({ email }, process.env.AUTH_SECRET_KEY_VALUE);
        return token;
    }
    catch (error) {
        throw error;
    }
};
exports.signToken = signToken;
//# sourceMappingURL=auth.js.map