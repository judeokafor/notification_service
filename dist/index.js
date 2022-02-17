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
var middlewares_1 = __webpack_require__(3);
var routers_1 = __webpack_require__(4);
var pack = __importStar(__webpack_require__(26));
dotenv.config();
try {
    var apps = new node_service_base_1.default({
        description: pack.description,
        config: {
            env: "development",
            secretVersion: "1" || 0,
        },
        middlewares: [middlewares_1.exampleMiddleware],
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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exampleMiddleware = void 0;
var exampleMiddleware = function (req, res, next) {
    next();
};
exports.exampleMiddleware = exampleMiddleware;


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.message = exports.api = void 0;
var api_1 = __webpack_require__(5);
Object.defineProperty(exports, "api", ({ enumerable: true, get: function () { return __importDefault(api_1).default; } }));
var message_1 = __webpack_require__(9);
Object.defineProperty(exports, "message", ({ enumerable: true, get: function () { return __importDefault(message_1).default; } }));


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __importDefault(__webpack_require__(6));
var controllers_1 = __webpack_require__(7);
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
/* 6 */
/***/ ((module) => {

module.exports = require("express");;

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.example = void 0;
var example_1 = __webpack_require__(8);
Object.defineProperty(exports, "example", ({ enumerable: true, get: function () { return __importDefault(example_1).default; } }));


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var sayHello = function () { return 'Hello World'; };
exports.default = {
    sayHello: sayHello,
};


/***/ }),
/* 9 */
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
var express_1 = __importDefault(__webpack_require__(6));
var container_awilix_1 = __importDefault(__webpack_require__(10));
var router = express_1.default.Router();
var PubSubRouterType;
(function (PubSubRouterType) {
    PubSubRouterType["SEND_NOTIFICATION"] = "SEND_NOTIFICATION";
})(PubSubRouterType = exports.PubSubRouterType || (exports.PubSubRouterType = {}));
var notifyController = container_awilix_1.default.resolve('notifyController');
var pubSubRouter = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type, channels, data, logger;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, type = _a.type, channels = _a.channels, data = _a.data;
                logger = req.appServices.logger;
                return [4 /*yield*/, notifyController.notify(req, res)];
            case 1:
                _b.sent();
                logger.log('Calling pubSubRouter ==>', type);
                switch (type) {
                    case PubSubRouterType.SEND_NOTIFICATION:
                        logger.log('sending notification');
                        break;
                    default:
                }
                return [2 /*return*/];
        }
    });
}); };
router.post('/', pubSubRouter);
exports.default = router;


/***/ }),
/* 10 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var awilix = __importStar(__webpack_require__(11));
var notification_1 = __webpack_require__(12);
var mailgun_1 = __importDefault(__webpack_require__(15));
// import TermiiProvider from './providers/sms/termii';
// import TwilioProvider from './providers/whatsapp/twillo';
var container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});
container.register({
    // smsProvider: awilix.asClass(TermiiProvider),
    emailProvider: awilix.asClass(mailgun_1.default),
    // whatsapp: awilix.asClass(TwilioProvider),
    notifyController: awilix.asClass(notification_1.NotificationController),
});
exports.default = container;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("awilix");;

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationController = void 0;
// import NotificationService from './notification.service';
var notification_controller_1 = __importDefault(__webpack_require__(13));
exports.NotificationController = notification_controller_1.default;


/***/ }),
/* 13 */
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
var common_enums_1 = __webpack_require__(14);
var NotificationController = /** @class */ (function () {
    // private whatsappProvider: TwilioProvider;
    function NotificationController(_a) {
        var _this = this;
        var 
        // smsProvider,
        emailProvider = _a.emailProvider;
        this.notify = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log('entering this block');
                        return [4 /*yield*/, this.emailProvider.sendMail({
                                channel: common_enums_1.NOTIFICATION_CHANNEL.EMAIL,
                                data: {
                                    firstName: 'jude okafor',
                                },
                                type: common_enums_1.MessageType.METRICS_CSV,
                                to: 'jude.okafor@payhippo.ng',
                                title: 'Testing with Jude',
                                accountManagerId: 'managerId',
                                template: common_enums_1.TEMPLATE_TYPE.USER_CREATED,
                                partnerEmail: 'okaforjudechukwuebuka@gmail.com',
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.sendStatus(200)];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, res.sendStatus(500)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // this.smsProvider = smsProvider;
        this.emailProvider = emailProvider;
        // this.whatsappProvider = whatsappProvider;
    }
    return NotificationController;
}());
exports.default = NotificationController;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageType = exports.Format = exports.TEMPLATE_TYPE = exports.NOTIFICATION_CHANNEL = void 0;
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
    TEMPLATE_TYPE["USER_CREATED"] = "user_created";
})(TEMPLATE_TYPE = exports.TEMPLATE_TYPE || (exports.TEMPLATE_TYPE = {}));
var Format;
(function (Format) {
    Format["HTML"] = "HTML";
    Format["SMS"] = "SMS";
    Format["SLACK"] = "SLACK";
    Format["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
})(Format = exports.Format || (exports.Format = {}));
var MessageType;
(function (MessageType) {
    MessageType["PAYMENT_AUDIT"] = "PAYMENT_AUDIT";
    MessageType["METRICS_CSV"] = "METRICS_CSV";
})(MessageType = exports.MessageType || (exports.MessageType = {}));


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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var mailgun_js_1 = __importDefault(__webpack_require__(16));
var json2csv_1 = __webpack_require__(17);
var common_enums_1 = __webpack_require__(14);
var htmlMessage_base_1 = __importDefault(__webpack_require__(18));
var constants_1 = __webpack_require__(25);
var MailgunProvider = /** @class */ (function (_super) {
    __extends(MailgunProvider, _super);
    function MailgunProvider() {
        var _this = _super.call(this) || this;
        _this.apiKey = process.env._MAILGUN_API_KEY || '';
        _this.domain = process.env._MAILGUN_DOMAIN || '';
        _this.mailgun = new mailgun_js_1.default(__assign({ apiKey: _this.apiKey || '', domain: _this.domain || '' }, (_this.isProductionEnvironment() && {
            host: 'api.eu.mailgun.net',
        })));
        return _this;
    }
    MailgunProvider.prototype.showEnvironment = function () {
        var currentEnvironmrnt = "development" || 0;
        return this.isProductionEnvironment() ? '' : "-" + currentEnvironmrnt.toUpperCase();
    };
    MailgunProvider.prototype.getAttachment = function (payload) {
        var type = payload.type, data = payload.data;
        var attachment;
        if (type === common_enums_1.MessageType.PAYMENT_AUDIT) {
            var csvData = data.csvData, date = data.date;
            var fileName = "payment-audit-" + date + ".csv";
            var json2csvParser = new json2csv_1.Parser({
                fields: constants_1.paymentAuditFields,
            });
            var csv = json2csvParser.parse(csvData);
            var csvBuffer = Buffer.from(csv, 'utf8');
            attachment = new this.mailgun.Attachment({
                filename: fileName,
                data: csvBuffer,
            });
        }
        if (type === common_enums_1.MessageType.METRICS_CSV) {
            var buffer = data.buffer;
            attachment = new this.mailgun.Attachment({
                filename: 'metrics.csv',
                data: buffer,
            });
        }
        return attachment;
    };
    MailgunProvider.prototype.generateAccountMangerEmail = function (accountManagerId) {
        return __awaiter(this, void 0, void 0, function () {
            var email;
            return __generator(this, function (_a) {
                email = 'hello@payhippo.ng';
                try {
                    if (accountManagerId) {
                        // @TODO: make request to admin service to retrieve admin details;
                        // probably make it unauthenticated;
                        email = 'jude.okafor@payhippo.ng';
                    }
                }
                catch (error) {
                    node_service_base_1.logger.log(error);
                }
                node_service_base_1.logger.log('accountManager Email', email);
                return [2 /*return*/, email];
            });
        });
    };
    MailgunProvider.prototype.getRecipients = function (props) {
        var accountManagerMail = props.accountManagerMail, includeCC = props.includeCC, noReply = props.noReply, partnerEmail = props.partnerEmail;
        var recipients = [];
        var isProduction = this.isProductionEnvironment();
        if (isProduction && !noReply) {
            recipients.push(accountManagerMail);
            if (includeCC) {
                recipients.push(process.env._PAY_HIPPO_TEAM_EMAILS || '');
            }
            if (partnerEmail) {
                recipients.push(partnerEmail);
            }
        }
        else if (!isProduction) {
            recipients.push(process.env._DEV_TEST_EMAIL || '');
        }
        return recipients;
    };
    MailgunProvider.prototype.generateEmails = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var to, accountManagerId, _a, includeCC, _b, noReply, _c, partnerEmail, envBasedTo, emailsToSend, isProduction, accountManagerMail, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        to = props.to, accountManagerId = props.accountManagerId, _a = props.includeCC, includeCC = _a === void 0 ? false : _a, _b = props.noReply, noReply = _b === void 0 ? false : _b, _c = props.partnerEmail, partnerEmail = _c === void 0 ? '' : _c;
                        envBasedTo = process.env._DEV_TEST_EMAIL || '';
                        emailsToSend = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 4, , 5]);
                        isProduction = this.isProductionEnvironment();
                        if (!isProduction) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.generateAccountMangerEmail(accountManagerId)];
                    case 2:
                        accountManagerMail = _d.sent();
                        emailsToSend = this.getRecipients({
                            accountManagerMail: accountManagerMail,
                            includeCC: includeCC,
                            noReply: noReply,
                            partnerEmail: partnerEmail,
                        });
                        envBasedTo = to;
                        _d.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _d.sent();
                        if (error_1 instanceof Error) {
                            node_service_base_1.logger.error('generateEmails', error_1.message);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, { emailsToSend: emailsToSend, envBasedTo: envBasedTo }];
                }
            });
        });
    };
    MailgunProvider.prototype.getSendOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var to, accountManagerId, _a, includeCC, _b, noReply, _c, partnerEmail, html, subject, data, type, generateEmailOptions, _d, envBasedTo, emailsToSend, attachment;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        to = options.to, accountManagerId = options.accountManagerId, _a = options.includeCC, includeCC = _a === void 0 ? false : _a, _b = options.noReply, noReply = _b === void 0 ? false : _b, _c = options.partnerEmail, partnerEmail = _c === void 0 ? '' : _c, html = options.html, subject = options.subject, data = options.data, type = options.type;
                        generateEmailOptions = {
                            to: to,
                            accountManagerId: accountManagerId,
                            includeCC: includeCC,
                            noReply: noReply,
                            partnerEmail: partnerEmail,
                        };
                        return [4 /*yield*/, this.generateEmails(generateEmailOptions)];
                    case 1:
                        _d = _e.sent(), envBasedTo = _d.envBasedTo, emailsToSend = _d.emailsToSend;
                        attachment = this.getAttachment({
                            data: data,
                            type: type,
                        });
                        return [2 /*return*/, {
                                cc: emailsToSend,
                                from: "Payhippo " + process.env._GMAIL_ADMIN_EMAIL,
                                html: html,
                                subject: subject,
                                to: envBasedTo,
                                attachment: attachment,
                            }];
                }
            });
        });
    };
    MailgunProvider.prototype.sendMail = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var to, accountManagerId, partnerEmail, title, template, _a, includeCC, _b, noReply, data, type, subject, html, mailgunSendOptions, isProduction, isEmailValid, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        to = props.to, accountManagerId = props.accountManagerId, partnerEmail = props.partnerEmail, title = props.title, template = props.template, _a = props.includeCC, includeCC = _a === void 0 ? false : _a, _b = props.noReply, noReply = _b === void 0 ? false : _b, data = props.data, type = props.type;
                        subject = "[Payhippo" + this.showEnvironment() + "] " + title;
                        console.log('subject', subject);
                        html = this.getTemplate({ template: template, data: data, format: common_enums_1.Format.HTML });
                        return [4 /*yield*/, this.getSendOptions({
                                subject: subject,
                                to: to,
                                accountManagerId: accountManagerId,
                                html: html,
                                includeCC: includeCC,
                                noReply: noReply,
                                partnerEmail: partnerEmail,
                                data: data,
                                type: type,
                            })];
                    case 1:
                        mailgunSendOptions = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 5, , 6]);
                        isProduction = this.isProductionEnvironment();
                        isEmailValid = this.verifyEmail(to);
                        if (!(isProduction && isEmailValid)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.mailgun.messages().send(mailgunSendOptions)];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                    case 4:
                        node_service_base_1.logger.log("Dev call sending email to " + to);
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _c.sent();
                        node_service_base_1.logger.error(error_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return MailgunProvider;
}(htmlMessage_base_1.default));
exports.default = MailgunProvider;


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("mailgun-js");;

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("json2csv");;

/***/ }),
/* 18 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var node_service_base_1 = __webpack_require__(1);
var Message_base_1 = __importDefault(__webpack_require__(19));
var HtmlMessage = /** @class */ (function (_super) {
    __extends(HtmlMessage, _super);
    function HtmlMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HtmlMessage.prototype.verifyEmail = function (email) {
        /**
         * @TODO: add email validation/verfication here
         * Possible suggestions, using send grid validation or mailgun,
         * or just a simple email validation to assert that the email is correct
         */
        node_service_base_1.logger.log('email is valid', email);
        return true;
    };
    return HtmlMessage;
}(Message_base_1.default));
exports.default = HtmlMessage;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
var common_enums_1 = __webpack_require__(14);
var templates_1 = __webpack_require__(20);
var dotenv_1 = __importDefault(__webpack_require__(2));
dotenv_1.default.config();
/**
 * @TODO: we can have a different template for whatsapp,
 *  but for now the assumption here is that whatsapp and sms are same string sent across board;
 */
var templates = (_a = {},
    _a[common_enums_1.Format.SMS] = {
        request_money: templates_1.SMS.requestMoney,
    },
    _a[common_enums_1.Format.HTML] = {
        welcome: templates_1.EMAIL.welcomeEmail,
    },
    _a);
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.isProductionEnvironment = function () {
        var environment = "development" || 0;
        return ['production'].includes(environment);
    };
    Message.prototype.getTemplate = function (props) {
        var format = props.format, template = props.template, data = props.data;
        return templates[format][template](data);
    };
    return Message;
}());
exports.default = Message;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMAIL = exports.SMS = void 0;
var sms_1 = __webpack_require__(21);
Object.defineProperty(exports, "SMS", ({ enumerable: true, get: function () { return __importDefault(sms_1).default; } }));
var email_1 = __webpack_require__(23);
Object.defineProperty(exports, "EMAIL", ({ enumerable: true, get: function () { return __importDefault(email_1).default; } }));


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var request_money_template_1 = __importDefault(__webpack_require__(22));
exports.default = {
    requestMoney: request_money_template_1.default,
};


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function default_1(data) {
    var customer_name = data.customer_name, payment_link = data.payment_link, business_name = data.business_name;
    return "Hello, " + customer_name + " \nThis is the link " + payment_link + " for the purchase from " + business_name;
}
exports.default = default_1;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var welcome_email_template_1 = __importDefault(__webpack_require__(24));
exports.default = {
    welcomeEmail: welcome_email_template_1.default,
};


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function default_1(data) {
    return 'Welcome';
}
exports.default = default_1;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paymentAuditFields = void 0;
exports.paymentAuditFields = [
    {
        label: 'Customer Name',
        value: 'customerName',
    },
    {
        label: 'Customer ID',
        value: 'customerId',
    },
    {
        label: 'Type',
        value: 'type',
    },
    {
        label: 'Verified',
        value: 'verified',
    },
    {
        label: 'Amount',
        value: 'amount',
    },
    {
        label: 'Date',
        value: 'date',
    },
    {
        label: 'Loan Status',
        value: 'status',
    },
];


/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = JSON.parse('{"name":"notification-service","version":"1.0.1","description":"Handles payhippo notification","main":"./dist/index.js","types":"./dist/index.d.ts","files":["dist"],"author":"Jude Okafor","license":"ISC","scripts":{"start":"node ./dist/index.js","nodemon":"nodemon","dev":"npm-run-all --parallel nodemon build:dev","dev:debug":"nodemon --inspect src/index.ts","lint":"eslint --fix src/","build":"webpack --env ENVIRONMENT=production --config webpack.config.js --progress","build:dev":"webpack --watch --env ENVIRONMENT=development --config webpack.config.js","test":"mocha -r ts-node/register tests/**/*.test.ts","watch:test":"mocha -r ts-node/register --watch --watch-files src,tests tests/**/*.test.ts","artifactregistry-login":"npx google-artifactregistry-auth"},"devDependencies":{"@types/express":"4.17.12","@types/json2csv":"^5.0.3","@types/mailgun-js":"^0.22.12","@types/node":"15.9.0","@typescript-eslint/eslint-plugin":"4.26.0","@typescript-eslint/parser":"4.26.0","clean-webpack-plugin":"4.0.0-alpha.0","eslint":"7.27.0","eslint-config-prettier":"8.3.0","eslint-config-standard":"16.0.3","eslint-plugin-import":"2.23.4","eslint-plugin-node":"11.1.0","eslint-plugin-prettier":"3.4.0","eslint-plugin-promise":"5.1.0","moment-timezone-data-webpack-plugin":"1.5.0","prettier":"2.3.0","ts-loader":"9.2.3","ts-node-dev":"1.1.6","typescript":"4.3.2","webpack":"5.38.1","webpack-cli":"4.7.2","webpack-node-externals":"3.0.0"},"dependencies":{"@payhippo/node-service-base":"^1.2.13","@sendgrid/mail":"^7.6.1","awilix":"^6.1.0","dotenv":"8.2.0","express":"4.17.1","json2csv":"^5.0.6","mailgun-js":"^0.22.0","nodemon":"^2.0.15","npm-run-all":"^4.1.5","twilio":"^3.74.0"}}');

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