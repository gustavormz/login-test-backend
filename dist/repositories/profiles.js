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
const mongoose_1 = __importDefault(require("mongoose"));
const profiles_1 = __importDefault(require("../models/profiles"));
mongoose_1.default.connect(process.env.DATABASE_BASE_URL, {});
const createNewProfile = (profile) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProfile = new profiles_1.default(profile);
        yield newProfile.save();
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
const getProfileByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield profiles_1.default.findOne({ email });
        return profile;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
exports.default = {
    createNewProfile,
    getProfileByEmail,
};
//# sourceMappingURL=profiles.js.map