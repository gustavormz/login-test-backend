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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const controllers_1 = require("./controllers");
const app = (0, express_1.default)();
const port = process.env.DEFAULT_PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*'
}));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post(`/api/${process.env.REGISTER_ENDPOINT}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield controllers_1.registerController.registerNewProfile(req);
    res.json(response);
}));
app.get(`/api/${process.env.PROFILE_ENDPOINT}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield controllers_1.profileController.getProfile(req);
    res.json(response);
}));
app.post(`/api/${process.env.LOGIN_ENDPOINT}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield controllers_1.loginController.login(req);
    res.json(response);
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map