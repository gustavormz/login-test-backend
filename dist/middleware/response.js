"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSuccessResponse = exports.buildErrorResponse = void 0;
const constants_1 = require("../constants");
const getErrorResponse = ({ errorCodeName }) => { var _a; return (_a = constants_1.MAP_ERROR_BY_CODE_NAME[errorCodeName]) !== null && _a !== void 0 ? _a : constants_1.MAP_ERROR_BY_CODE_NAME.DEFAULT; };
const getSuccessResponse = ({ successCodeName }) => { var _a; return (_a = constants_1.MAP_SUCCESS_BY_CODE_NAME[successCodeName]) !== null && _a !== void 0 ? _a : constants_1.MAP_SUCCESS_BY_CODE_NAME.DEFAULT; };
const buildErrorResponse = ({ codeName = '' }) => {
    const response = getErrorResponse({ errorCodeName: codeName });
    return response;
};
exports.buildErrorResponse = buildErrorResponse;
const buildSuccessResponse = ({ codeName = '', data = {} }) => {
    const response = getSuccessResponse({ successCodeName: codeName });
    return Object.assign(Object.assign({}, response), { data });
};
exports.buildSuccessResponse = buildSuccessResponse;
//# sourceMappingURL=response.js.map