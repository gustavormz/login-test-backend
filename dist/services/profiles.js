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
exports.getProfileByEmail = exports.createProfile = void 0;
const profiles_1 = __importDefault(require("../repositories/profiles"));
const validation_1 = __importDefault(require("../middleware/validation"));
const crypto_1 = require("../middleware/crypto");
const constants_1 = require("../constants");
const createProfile = (profile) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        validation_1.default.validateProfile(profile);
        const newProfile = Object.assign({}, profile);
        newProfile.password = yield (0, crypto_1.encryptPassword)(profile.password);
        yield profiles_1.default.createNewProfile(newProfile);
    }
    catch (error) {
        if (error.code === 11000) {
            throw constants_1.MAP_ERROR_BY_CODE_NAME.DUPLICATED_PROFILE;
        }
        throw error;
    }
});
exports.createProfile = createProfile;
const getProfileByEmail = (email, returnPassword = false) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield profiles_1.default.getProfileByEmail(email);
        if (!profile) {
            throw constants_1.MAP_ERROR_BY_CODE_NAME.NOT_FOUND;
        }
        const response = {
            name: profile.name,
            email: profile.email
        };
        if (returnPassword) {
            response.password = profile.password;
        }
        return response;
    }
    catch (error) {
        throw error;
    }
});
exports.getProfileByEmail = getProfileByEmail;
//# sourceMappingURL=profiles.js.map