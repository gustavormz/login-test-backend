"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
});
const Profile = (0, mongoose_1.model)('profilestest', profileSchema);
exports.default = Profile;
//# sourceMappingURL=profiles.js.map