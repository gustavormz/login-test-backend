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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.encryptPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const constants_1 = require("../constants");
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saltRounds = 8;
        return yield bcrypt_1.default.hash(password, saltRounds);
    }
    catch (error) {
        throw error;
    }
});
exports.encryptPassword = encryptPassword;
const comparePassword = (userPassword, password) => {
    try {
        console.log(userPassword, password);
        const isMatch = bcrypt_1.default.compareSync(userPassword, password);
        if (!isMatch) {
            throw constants_1.MAP_ERROR_BY_CODE_NAME.AUTH_ERROR;
        }
    }
    catch (error) {
        throw error;
    }
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=crypto.js.map