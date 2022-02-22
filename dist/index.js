/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var node_service_base_1 = __importStar(__webpack_require__(1));
var dotenv = __importStar(__webpack_require__(2));
var routers_1 = __webpack_require__(3);
var pack = __importStar(__webpack_require__(37));
dotenv.config();
try {
    var apps = new node_service_base_1.default({
        description: pack.description,
        config: {
            env: "development",
            secretVersion: "1" || 0,
        },
        middlewares: [],
        name: pack.name,
        routers: { api: routers_1.api, message: routers_1.message },
        version: pack.version,
    });
    apps.start();
}
catch (error) {
    if (error instanceof Error) {
        node_service_base_1.logger.error("Error occured: " + error.message);
    }
}


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("@payhippo/node-service-base");;

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.message = exports.api = void 0;
var api_1 = __webpack_require__(4);
Object.defineProperty(exports, "api", ({ enumerable: true, get: function () { return __importDefault(api_1).default; } }));
var message_1 = __webpack_require__(8);
Object.defineProperty(exports, "message", ({ enumerable: true, get: function () { return __importDefault(message_1).default; } }));


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __importDefault(__webpack_require__(5));
var controllers_1 = __webpack_require__(6);
var router = express_1.default.Router();
router.use('/', function (req, res) {
    var words = controllers_1.example.sayHello();
    res.send({
        data: { words: words },
        message: 'Succesfully said hello',
        status: 'SUCCESS',
    });
});
exports.default = router;


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("express");;

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.example = void 0;
var example_1 = __webpack_require__(7);
Object.defineProperty(exports, "example", ({ enumerable: true, get: function () { return __importDefault(example_1).default; } }));


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var sayHello = function () { return 'Hello World'; };
exports.default = {
    sayHello: sayHello,
};


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PubSubRouterType = void 0;
var node_service_base_1 = __webpack_require__(1);
var express_1 = __importDefault(__webpack_require__(5));
var container_awilix_1 = __importDefault(__webpack_require__(9));
var router = express_1.default.Router();
var PubSubRouterType;
(function (PubSubRouterType) {
    PubSubRouterType["SEND_NOTIFICATION"] = "SEND_NOTIFICATION";
})(PubSubRouterType = exports.PubSubRouterType || (exports.PubSubRouterType = {}));
var notificationController = container_awilix_1.default.resolve('notificationController');
var pubSubRouter = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var type, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                type = req.body.type;
                node_service_base_1.logger.log('Calling pubSubRouter body ==>', type);
                _a = type;
                switch (_a) {
                    case PubSubRouterType.SEND_NOTIFICATION: return [3 /*break*/, 1];
                }
                return [3 /*break*/, 3];
            case 1:
                node_service_base_1.logger.log('sending notification');
                return [4 /*yield*/, notificationController.notify(req, res)];
            case 2:
                _b.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
router.post('/', pubSubRouter);
exports.default = router;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var awilix_1 = __webpack_require__(10);
var notification_1 = __webpack_require__(11);
var twillo_1 = __importDefault(__webpack_require__(15));
var bitly_1 = __importDefault(__webpack_require__(35));
var container = awilix_1.createContainer({
    injectionMode: awilix_1.InjectionMode.PROXY,
});
container.register({
    env: awilix_1.asValue(process.env),
});
container.register({
    notificationController: awilix_1.asClass(notification_1.NotificationController),
    notificationService: awilix_1.asClass(notification_1.NotificationService),
    whatsappProvider: awilix_1.asClass(twillo_1.default),
    urlShortnerProvider: awilix_1.asClass(bitly_1.default),
});
exports.default = container;


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("awilix");;

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationController = exports.NotificationService = void 0;
var service_1 = __importDefault(__webpack_require__(12));
exports.NotificationService = service_1.default;
var controller_1 = __importDefault(__webpack_require__(14));
exports.NotificationController = controller_1.default;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var common_enums_1 = __webpack_require__(13);
var NotificationService = /** @class */ (function () {
    function NotificationService(props) {
        var _this = this;
        this.getNotificationChannel = function (props) {
            var channel = props.channel, payload = props.payload;
            switch (channel) {
                case common_enums_1.NOTIFICATION_CHANNEL.WHATSAPP:
                    return _this.whatsappProvider.sendWhatsapp(payload);
                default:
                    break;
            }
        };
        var whatsappProvider = props.whatsappProvider;
        this.whatsappProvider = whatsappProvider;
    }
    return NotificationService;
}());
exports.default = NotificationService;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttachmentType = exports.Format = exports.TEMPLATE_TYPE = exports.NOTIFICATION_CHANNEL = void 0;
var NOTIFICATION_CHANNEL;
(function (NOTIFICATION_CHANNEL) {
    NOTIFICATION_CHANNEL["WHATSAPP"] = "WHATSAPP";
    NOTIFICATION_CHANNEL["SLACK"] = "SLACK";
    NOTIFICATION_CHANNEL["EMAIL"] = "EMAIL";
    NOTIFICATION_CHANNEL["SMS"] = "SMS";
    NOTIFICATION_CHANNEL["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
    NOTIFICATION_CHANNEL["TELEGRAM"] = "TELEGRAM";
})(NOTIFICATION_CHANNEL = exports.NOTIFICATION_CHANNEL || (exports.NOTIFICATION_CHANNEL = {}));
var TEMPLATE_TYPE;
(function (TEMPLATE_TYPE) {
    TEMPLATE_TYPE["WELCOME_EMAIL"] = "user_created";
    TEMPLATE_TYPE["CONSISTENT_LOAN"] = "consistentLoan";
    TEMPLATE_TYPE["EARLY_REPAYMENT_REMINDER"] = "earlyRepaymentReminder";
    TEMPLATE_TYPE["DISBURSAL_FAILURE"] = "disbursalFailure";
    TEMPLATE_TYPE["GUARANTOR"] = "guarantor";
    TEMPLATE_TYPE["INVITE_CUSTOMER"] = "inviteCustomer";
    TEMPLATE_TYPE["REMINDER"] = "reminder";
    TEMPLATE_TYPE["OFFER"] = "offer";
    TEMPLATE_TYPE["OTP"] = "otp";
    TEMPLATE_TYPE["REPAYMENT_INVOICE"] = "repaymentInvoice";
})(TEMPLATE_TYPE = exports.TEMPLATE_TYPE || (exports.TEMPLATE_TYPE = {}));
var Format;
(function (Format) {
    Format["SMS"] = "SMS";
})(Format = exports.Format || (exports.Format = {}));
var AttachmentType;
(function (AttachmentType) {
    AttachmentType["PAYMENT_AUDIT"] = "PAYMENT_AUDIT";
    AttachmentType["METRICS_CSV"] = "METRICS_CSV";
})(AttachmentType = exports.AttachmentType || (exports.AttachmentType = {}));


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var node_service_base_1 = __webpack_require__(1);
var NotificationController = /** @class */ (function () {
    function NotificationController(_a) {
        var _this = this;
        var notificationService = _a.notificationService;
        this.notify = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var body, _a, channels, promises, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = req.body;
                        _a = body.channels, channels = _a === void 0 ? [] : _a;
                        promises = [];
                        channels.forEach(function (channel) {
                            promises.push(_this.notificationService.getNotificationChannel({
                                channel: channel,
                                payload: body,
                            }));
                        });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all(promises)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.sendStatus(200)];
                    case 3:
                        error_1 = _b.sent();
                        node_service_base_1.logger.error(error_1);
                        return [2 /*return*/, res.sendStatus(500)];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.notificationService = notificationService;
    }
    return NotificationController;
}());
exports.default = NotificationController;


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var twilio_1 = __importDefault(__webpack_require__(16));
var node_service_base_1 = __webpack_require__(1);
var common_enums_1 = __webpack_require__(13);
var phoneNumberMessage_base_1 = __importDefault(__webpack_require__(17));
var TwilioProvider = /** @class */ (function (_super) {
    __extends(TwilioProvider, _super);
    function TwilioProvider(_a) {
        var urlShortnerProvider = _a.urlShortnerProvider, env = _a.env;
        var _this = _super.call(this, { urlShortnerProvider: urlShortnerProvider }) || this;
        _this.accountSid = env._TWILLO_ACCOUNT_SID;
        _this.authToken = env._TWILLO_ACCOUNT_AUTH_TOKEN;
        _this.payhippoWhatsappNumber = env._PAYHIPPO_WHATSAPP_NUMBER;
        _this.twiloClient = twilio_1.default(_this.accountSid, _this.authToken, {
            lazyLoading: true,
        });
        return _this;
    }
    TwilioProvider.prototype.getWhatsappNumber = function (number) {
        if (number) {
            return "whatsapp:" + number;
        }
        return '';
    };
    TwilioProvider.prototype.sendWhatsapp = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var to, data, from, template, isProduction, message, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        to = props.to, data = props.data, from = props.from, template = props.template;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        isProduction = this.isProductionEnvironment();
                        if (!isProduction) return [3 /*break*/, 3];
                        message = this.getTemplate({
                            template: template,
                            data: data,
                            format: common_enums_1.Format.SMS,
                        });
                        return [4 /*yield*/, this.twiloClient.messages.create({
                                body: message,
                                from: from
                                    ? this.getWhatsappNumber(this.formatPhoneNumber(from))
                                    : this.getWhatsappNumber(this.payhippoWhatsappNumber),
                                to: this.getWhatsappNumber(this.formatPhoneNumber(to)),
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        node_service_base_1.logger.log("Dev call sending whatsapp to " + to);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        node_service_base_1.logger.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TwilioProvider.prototype.sendSms = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var to, template, data, isProduction, message, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        to = props.to, template = props.template, data = props.data;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        isProduction = this.isProductionEnvironment();
                        if (!isProduction) return [3 /*break*/, 3];
                        message = this.getTemplate({
                            template: template,
                            data: data,
                            format: common_enums_1.Format.SMS,
                        });
                        return [4 /*yield*/, this.twiloClient.messages.create({
                                to: this.formatPhoneNumber(to),
                                body: message,
                                from: 'Payhippo',
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        node_service_base_1.logger.log("Dev call sending to " + to);
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        node_service_base_1.logger.error(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return TwilioProvider;
}(phoneNumberMessage_base_1.default));
exports.default = TwilioProvider;


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("twilio");;

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var node_service_base_1 = __webpack_require__(1);
var Message_base_1 = __importDefault(__webpack_require__(18));
var PhoneNumberBasedMessage = /** @class */ (function (_super) {
    __extends(PhoneNumberBasedMessage, _super);
    function PhoneNumberBasedMessage(_a) {
        var urlShortnerProvider = _a.urlShortnerProvider;
        var _this = _super.call(this) || this;
        _this.abbreviateName = function (businessOwnerName) {
            var abbreviatedName = '';
            if (businessOwnerName) {
                // convert name to array at every space between names
                var arrayOfNames_1 = businessOwnerName.split(' ');
                arrayOfNames_1.forEach(function (name, i) {
                    // if the name is not the last name add the first letter to the abbrevated name initails
                    if (i < arrayOfNames_1.length - 1) {
                        abbreviatedName = abbreviatedName + (name.charAt(0) + ".");
                    }
                });
                // make abbreviatedName the initials and the last name/item in the name array
                // ie. if name is 'Jude Okafor' abbreviatedName would be J. Okafor
                abbreviatedName = abbreviatedName + (" " + arrayOfNames_1[arrayOfNames_1.length - 1]);
            }
            return abbreviatedName;
        };
        _this.urlShortnerProvider = urlShortnerProvider;
        return _this;
    }
    PhoneNumberBasedMessage.prototype.canSendSms = function (to) {
        var isValid = true;
        // check phone number valid length
        if (!to || to.trim().length < 11) {
            node_service_base_1.logger.error("phone number \"" + to + "\" cannot be empty and must be at least 11 characters!");
            isValid = false;
        }
        // @TODO: put support for country code validation check
        return isValid;
    };
    PhoneNumberBasedMessage.prototype.formatPhoneNumber = function (phoneNumber) {
        if (phoneNumber) {
            // strips leading zero and replaces with apprioriate country code.
            if (phoneNumber.startsWith('0')) {
                return "+234" + phoneNumber.slice(1);
            }
            // add + to 234
            if (phoneNumber.startsWith('234')) {
                return "+" + phoneNumber;
            }
        }
        node_service_base_1.logger.error('Invalid phone number passed', phoneNumber);
        return '';
    };
    PhoneNumberBasedMessage.prototype.modifyData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!data.url) return [3 /*break*/, 2];
                        _a = data;
                        return [4 /*yield*/, this.urlShortnerProvider.shortenUrl(data.url)];
                    case 1:
                        _a.url = _b.sent();
                        _b.label = 2;
                    case 2:
                        // abbrievates businessOwnerName is one exist
                        if (data.businessOwnerName) {
                            data.businessOwnerName = this.abbreviateName(data.businessOwnerName);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return PhoneNumberBasedMessage;
}(Message_base_1.default));
exports.default = PhoneNumberBasedMessage;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
var common_enums_1 = __webpack_require__(13);
var templates_1 = __webpack_require__(19);
var dotenv_1 = __importDefault(__webpack_require__(2));
var types_1 = __webpack_require__(34);
dotenv_1.default.config();
/**
 * @TODO: we can have a different template for whatsapp,
 *  but for now the assumption here is that whatsapp and sms are same string sent across board;
 */
var templates = (_a = {},
    _a[common_enums_1.Format.SMS] = {
        consistentLoan: templates_1.SMS.consistentLoan,
        earlyRepaymentReminder: templates_1.SMS.earlyRepaymentReminder,
        disbursalFailure: templates_1.SMS.disbursalFailure,
        guarantor: templates_1.SMS.guarantor,
        inviteCustomer: templates_1.SMS.inviteCustomer,
        reminder: templates_1.SMS.reminder,
        offer: templates_1.SMS.offer,
        otp: templates_1.SMS.otp,
        repaymentInvoice: templates_1.SMS.repaymentInvoice,
    },
    _a);
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.isProductionEnvironment = function () {
        var environment = ("development" || 0).toUpperCase();
        return [types_1.Environment.PRODUCTION].includes(environment);
    };
    Message.prototype.getTemplate = function (props) {
        var format = props.format, template = props.template, data = props.data;
        return templates[format][template](data);
    };
    return Message;
}());
exports.default = Message;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SMS = void 0;
exports.SMS = __importStar(__webpack_require__(20));


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.repaymentInvoice = exports.referenceAssociation = exports.otp = exports.offer = exports.reminder = exports.inviteCustomer = exports.guarantor = exports.disbursalFailure = exports.earlyRepaymentReminder = exports.consistentLoan = void 0;
var consistentLoan_1 = __webpack_require__(21);
Object.defineProperty(exports, "consistentLoan", ({ enumerable: true, get: function () { return __importDefault(consistentLoan_1).default; } }));
var earlyRepaymentReminder_1 = __webpack_require__(22);
Object.defineProperty(exports, "earlyRepaymentReminder", ({ enumerable: true, get: function () { return __importDefault(earlyRepaymentReminder_1).default; } }));
var disbursalFailure_1 = __webpack_require__(23);
Object.defineProperty(exports, "disbursalFailure", ({ enumerable: true, get: function () { return __importDefault(disbursalFailure_1).default; } }));
var guarantor_1 = __webpack_require__(27);
Object.defineProperty(exports, "guarantor", ({ enumerable: true, get: function () { return __importDefault(guarantor_1).default; } }));
var inviteCustomer_1 = __webpack_require__(28);
Object.defineProperty(exports, "inviteCustomer", ({ enumerable: true, get: function () { return __importDefault(inviteCustomer_1).default; } }));
var reminder_1 = __webpack_require__(29);
Object.defineProperty(exports, "reminder", ({ enumerable: true, get: function () { return __importDefault(reminder_1).default; } }));
var offer_1 = __webpack_require__(30);
Object.defineProperty(exports, "offer", ({ enumerable: true, get: function () { return __importDefault(offer_1).default; } }));
var otp_1 = __webpack_require__(31);
Object.defineProperty(exports, "otp", ({ enumerable: true, get: function () { return __importDefault(otp_1).default; } }));
var referenceAssociation_1 = __webpack_require__(32);
Object.defineProperty(exports, "referenceAssociation", ({ enumerable: true, get: function () { return __importDefault(referenceAssociation_1).default; } }));
var repaymentInvoice_1 = __webpack_require__(33);
Object.defineProperty(exports, "repaymentInvoice", ({ enumerable: true, get: function () { return __importDefault(repaymentInvoice_1).default; } }));


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var clientAppUrl = process.env._CLIENT_APP_URL || '';
var consistentLoan = function (props) {
    var businessOwnerName = props.businessOwnerName, dateDifferenceInDays = props.dateDifferenceInDays;
    return "Hi " + businessOwnerName + ",your business loan with Payhippo is now " + dateDifferenceInDays + " day" + (dateDifferenceInDays === 1 ? '' : 's') + " overdue and accumulating more interest costs for you.Login " + clientAppUrl + " to see new repayment amount.";
};
exports.default = consistentLoan;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var earlyRepaymentReminder = function (props) {
    var businessOwnerName = props.businessOwnerName;
    return "Hi " + businessOwnerName + ", here is a quick reminder,Repay early to unlock additional points to your credit score and increase your chances of getting an increase in your next offer. (Powered by Payhippo)";
};
exports.default = earlyRepaymentReminder;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(24);
var disbursalFailure = function (messageProps) {
    var businessName = messageProps.businessName, loanAmount = messageProps.loanAmount;
    return utils_1.formatCurrency(parseFloat(loanAmount)) + " disbursed to " + businessName + " has been reversed. (Powered by Payhippo)";
};
exports.default = disbursalFailure;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatCurrency = exports.toTitleCase = void 0;
var capitalize_1 = __importDefault(__webpack_require__(25));
var currency_formatter_1 = __importDefault(__webpack_require__(26));
var toTitleCase = function (str) { return str && capitalize_1.default.words(str === null || str === void 0 ? void 0 : str.trim()); };
exports.toTitleCase = toTitleCase;
var formatCurrency = function (amount) {
    return amount && currency_formatter_1.default.format(amount, { code: 'NGN' });
};
exports.formatCurrency = formatCurrency;


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("capitalize");;

/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("currency-formatter");;

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var guarantor = function (props) {
    var businessOwnerName = props.businessOwnerName, firstName = props.firstName, lastName = props.lastName, url = props.url;
    return "Hi " + businessOwnerName + ", " + firstName + " " + lastName + " has requested you be a guarantor at PayHippo financing company.Sign in at " + url + " to accept.";
};
exports.default = guarantor;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var inviteCustomer = function (props) {
    var accountManagerName = props.accountManagerName, businessOwnerName = props.businessOwnerName, url = props.url;
    return "Hi " + businessOwnerName + ", " + accountManagerName + " is inviting you onboard Payhippo for a seamless SME loan today. Click here " + url + " to signup.";
};
exports.default = inviteCustomer;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var clientAppUrl = process.env._CLIENT_APP_URL || '';
var reminder = function (props) {
    var businessOwnerName = props.businessOwnerName, dateDifferenceInDays = props.dateDifferenceInDays;
    return "Hi " + businessOwnerName + ",your business loan with Payhippo is due " + (dateDifferenceInDays === 1 ? 'tomorrow' : 'in 7 days') + ".Sign in " + clientAppUrl + " to see adjusted repayment amount as of today.";
};
exports.default = reminder;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpportunityType = void 0;
var utils_1 = __webpack_require__(24);
var clientAppUrl = process.env._CLIENT_APP_URL || '';
var OpportunityType;
(function (OpportunityType) {
    OpportunityType["RETRUNING"] = "RETURNING";
    OpportunityType["NEW"] = "NEW";
})(OpportunityType = exports.OpportunityType || (exports.OpportunityType = {}));
var message = function (messageProps) {
    var businessOwnerName = messageProps.businessOwnerName, loanAmount = messageProps.loanAmount, opportunityType = messageProps.opportunityType;
    return "Hi " + businessOwnerName + ",your next Payhippo loan offer is " + utils_1.formatCurrency(parseFloat(loanAmount)) + ".Sign in at " + clientAppUrl + " to accept offer. " + (opportunityType === OpportunityType.NEW
        ? 'Please note, no processing fee(₦0) is required to access a loan from us.'
        : '');
};
exports.default = message;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var otpMessage = function (props) {
    var otp = props.otp;
    return "Your Payhippo authentication code is " + otp + ".";
};
exports.default = otpMessage;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var referenceAssociation = function (props) {
    var associationName = props.associationName, businessOwnerName = props.businessOwnerName, url = props.url;
    return "Hi " + businessOwnerName + " from " + associationName + " signed up with Payhippo has requested you give us details about their credit worthiness.Sign in " + url + " to accept.";
};
exports.default = referenceAssociation;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(24);
var clientAppUrl = process.env._CLIENT_APP_URL || '';
var repaymentInvoice = function (props) {
    var businessOwnerName = props.businessOwnerName, totalPaymentAmount = props.totalPaymentAmount;
    return "Hi " + businessOwnerName + ",thanks for your repayment of " + utils_1.formatCurrency(parseFloat(totalPaymentAmount)) + " to Payhippo. Request a new loan at " + clientAppUrl + ".";
};
exports.default = repaymentInvoice;


/***/ }),
/* 34 */
/***/ ((module) => {

module.exports = require("@payhippo/node-service-base/dist/types");;

/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var axios_1 = __importDefault(__webpack_require__(36));
var node_service_base_1 = __webpack_require__(1);
var BitlyProvider = /** @class */ (function () {
    function BitlyProvider(_a) {
        var env = _a.env;
        this.token = env._BITLY_TOKEN;
    }
    BitlyProvider.prototype.isProduction = function () {
        return "development" === 'production';
    };
    BitlyProvider.prototype.shortenUrl = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var shortenUrl, isProduction, bearer, dataToSend, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shortenUrl = url;
                        isProduction = this.isProduction();
                        if (!isProduction) {
                            return [2 /*return*/, shortenUrl];
                        }
                        bearer = "Bearer " + this.token;
                        dataToSend = JSON.stringify({
                            long_url: url,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.post(process.env._BITLY_API_URL + "/shorten", dataToSend, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: bearer,
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        shortenUrl = response.data.link;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1 instanceof Error) {
                            node_service_base_1.logger.error('shortenUrl', error_1.message);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, shortenUrl];
                }
            });
        });
    };
    return BitlyProvider;
}());
exports.default = BitlyProvider;


/***/ }),
/* 36 */
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = JSON.parse('{"name":"notification-service","version":"1.0.1","description":"Handles payhippo notification","main":"./dist/index.js","types":"./dist/index.d.ts","files":["dist"],"author":"Jude Okafor","license":"ISC","scripts":{"start":"node ./dist/index.js","nodemon":"nodemon","dev":"npm-run-all --parallel nodemon build:dev","dev:debug":"nodemon --inspect src/index.ts","lint":"eslint --fix src/","build":"webpack --env ENVIRONMENT=production --config webpack.config.js --progress","build:dev":"webpack --watch --env ENVIRONMENT=development --config webpack.config.js","test:watch":"jest --watchAll","test":"jest","test:coverage":"jest --coverage","artifactregistry-login":"npx google-artifactregistry-auth"},"devDependencies":{"@types/capitalize":"^2.0.0","@types/currency-formatter":"^1.5.1","@types/express":"4.17.12","@types/jest":"^27.4.0","@types/json2csv":"^5.0.3","@types/mailgun-js":"^0.22.12","@types/node":"15.9.0","@typescript-eslint/eslint-plugin":"4.26.0","@typescript-eslint/parser":"4.26.0","axios-mock-adapter":"^1.20.0","clean-webpack-plugin":"4.0.0-alpha.0","eslint":"7.27.0","eslint-config-prettier":"8.3.0","eslint-config-standard":"16.0.3","eslint-plugin-import":"2.23.4","eslint-plugin-node":"11.1.0","eslint-plugin-prettier":"3.4.0","eslint-plugin-promise":"5.1.0","jest":"^27.5.1","moment-timezone-data-webpack-plugin":"1.5.0","prettier":"2.3.0","ts-jest":"^27.1.3","ts-loader":"9.2.3","ts-node-dev":"1.1.6","typescript":"^4.3.2","webpack":"5.38.1","webpack-cli":"4.7.2","webpack-node-externals":"3.0.0"},"dependencies":{"@payhippo/node-service-base":"^1.2.13","@sendgrid/mail":"^7.6.1","awilix":"^6.1.0","capitalize":"^2.0.4","currency-formatter":"^1.5.9","dotenv":"8.2.0","express":"4.17.1","jest-mock-extended":"^2.0.4","json2csv":"^5.0.6","mailgun-js":"^0.22.0","nodemon":"^2.0.15","npm-run-all":"^4.1.5","twilio":"^3.74.0"}}');

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;