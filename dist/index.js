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
var pack = __importStar(__webpack_require__(80));
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
var express_1 = __importDefault(__webpack_require__(5));
var container_awilix_1 = __importDefault(__webpack_require__(9));
var router = express_1.default.Router();
var PubSubRouterType;
(function (PubSubRouterType) {
    PubSubRouterType["SEND_NOTIFICATION"] = "SEND_NOTIFICATION";
})(PubSubRouterType = exports.PubSubRouterType || (exports.PubSubRouterType = {}));
var notificationController = container_awilix_1.default.resolve('notificationController');
var pubSubRouter = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var type, logger, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                type = req.body.type;
                logger = req.appServices.logger;
                logger.log('Calling pubSubRouter body ==>', type);
                _a = type;
                switch (_a) {
                    case PubSubRouterType.SEND_NOTIFICATION: return [3 /*break*/, 1];
                }
                return [3 /*break*/, 3];
            case 1:
                logger.log('sending notification');
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
var node_service_base_1 = __webpack_require__(1);
var mailgun_1 = __importDefault(__webpack_require__(15));
var termii_1 = __importDefault(__webpack_require__(73));
var slack_1 = __importDefault(__webpack_require__(76));
var twillo_1 = __importDefault(__webpack_require__(77));
var bitly_1 = __importDefault(__webpack_require__(79));
node_service_base_1.container.register({
    notificationController: awilix_1.asClass(notification_1.NotificationController),
    notificationService: awilix_1.asClass(notification_1.NotificationService),
    emailProvider: awilix_1.asClass(mailgun_1.default),
    smsProvider: awilix_1.asClass(termii_1.default),
    whatsappProvider: awilix_1.asClass(twillo_1.default),
    slackProvider: awilix_1.asClass(slack_1.default),
    urlShortnerProvider: awilix_1.asClass(bitly_1.default),
});
exports.default = node_service_base_1.container;


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
                case common_enums_1.NOTIFICATION_CHANNEL.EMAIL:
                    return _this.emailProvider.sendMail(payload);
                case common_enums_1.NOTIFICATION_CHANNEL.SMS:
                    return _this.smsProvider.sendSms(payload);
                case common_enums_1.NOTIFICATION_CHANNEL.WHATSAPP:
                    return _this.whatsappProvider.sendWhatsapp(payload);
                case common_enums_1.NOTIFICATION_CHANNEL.SLACK:
                    return _this.slackProvider.sendSlackMessage(payload);
                default:
                    break;
            }
        };
        var emailProvider = props.emailProvider, smsProvider = props.smsProvider, whatsappProvider = props.whatsappProvider, slackProvider = props.slackProvider;
        this.emailProvider = emailProvider;
        this.smsProvider = smsProvider;
        this.whatsappProvider = whatsappProvider;
        this.slackProvider = slackProvider;
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
})(TEMPLATE_TYPE = exports.TEMPLATE_TYPE || (exports.TEMPLATE_TYPE = {}));
var Format;
(function (Format) {
    Format["HTML"] = "HTML";
    Format["SMS"] = "SMS";
    Format["SLACK"] = "SLACK";
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
                        node_service_base_1.logger.log('entering this block');
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
var common_enums_1 = __webpack_require__(13);
var htmlMessage_base_1 = __importDefault(__webpack_require__(18));
var constants_1 = __webpack_require__(72);
var MailgunProvider = /** @class */ (function (_super) {
    __extends(MailgunProvider, _super);
    function MailgunProvider(_a) {
        var env = _a.env;
        var _this = _super.call(this) || this;
        _this.apiKey = env._MAILGUN_API_KEY;
        _this.domain = env._MAILGUN_DOMAIN;
        _this.mailgun = new mailgun_js_1.default(__assign({ apiKey: _this.apiKey, domain: _this.domain }, (_this.isProductionEnvironment() && {
            host: 'api.eu.mailgun.net',
        })));
        return _this;
    }
    MailgunProvider.prototype.showEnvironment = function () {
        var currentEnvironmrnt = "development" || 0;
        return this.isProductionEnvironment() ? '' : "-" + currentEnvironmrnt.toUpperCase();
    };
    MailgunProvider.prototype.getAttachment = function (payload) {
        var attachmentType = payload.attachmentType, data = payload.data;
        var attachment;
        if (attachmentType === common_enums_1.AttachmentType.PAYMENT_AUDIT) {
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
        if (attachmentType === common_enums_1.AttachmentType.METRICS_CSV) {
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
                    if (error instanceof Error) {
                        node_service_base_1.logger.error('generateAccountMangerEmail', error.message);
                    }
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
    MailgunProvider.prototype.generateEmailRecipient = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var to, accountManagerId, _a, includeCC, _b, noReply, _c, partnerEmail, recipient, cc, isProduction, accountManagerMail, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        to = props.to, accountManagerId = props.accountManagerId, _a = props.includeCC, includeCC = _a === void 0 ? false : _a, _b = props.noReply, noReply = _b === void 0 ? false : _b, _c = props.partnerEmail, partnerEmail = _c === void 0 ? '' : _c;
                        recipient = process.env._DEV_TEST_EMAIL || '';
                        cc = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 4, , 5]);
                        isProduction = this.isProductionEnvironment();
                        if (!isProduction) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.generateAccountMangerEmail(accountManagerId)];
                    case 2:
                        accountManagerMail = _d.sent();
                        cc = this.getRecipients({
                            accountManagerMail: accountManagerMail,
                            includeCC: includeCC,
                            noReply: noReply,
                            partnerEmail: partnerEmail,
                        });
                        recipient = to;
                        _d.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _d.sent();
                        if (error_1 instanceof Error) {
                            node_service_base_1.logger.error('generateEmailRecipient', error_1.message);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, { cc: cc, recipient: recipient }];
                }
            });
        });
    };
    MailgunProvider.prototype.getSendOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var to, accountManagerId, _a, includeCC, _b, noReply, _c, partnerEmail, html, subject, data, attachmentType, attachment, recipient, cc, error_2;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        to = options.to, accountManagerId = options.accountManagerId, _a = options.includeCC, includeCC = _a === void 0 ? false : _a, _b = options.noReply, noReply = _b === void 0 ? false : _b, _c = options.partnerEmail, partnerEmail = _c === void 0 ? '' : _c, html = options.html, subject = options.subject, data = options.data, attachmentType = options.attachmentType;
                        attachment = this.getAttachment({
                            data: data,
                            attachmentType: attachmentType,
                        });
                        recipient = '';
                        cc = [];
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.generateEmailRecipient({
                                to: to,
                                accountManagerId: accountManagerId,
                                includeCC: includeCC,
                                noReply: noReply,
                                partnerEmail: partnerEmail,
                            })];
                    case 2:
                        (_d = _e.sent(), recipient = _d.recipient, cc = _d.cc);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _e.sent();
                        if (error_2 instanceof Error) {
                            node_service_base_1.logger.error('getSendOptions', error_2.message);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, {
                            cc: cc,
                            from: "Payhippo " + process.env._ADMIN_EMAIL,
                            html: html,
                            subject: subject,
                            to: recipient,
                            attachment: attachment,
                        }];
                }
            });
        });
    };
    MailgunProvider.prototype.sendMail = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var to, title, template, data, meta, _a, accountManagerId, _b, partnerEmail, _c, includeCC, _d, noReply, _e, attachmentType, subject, html, mailgunSendOptions, isProduction, isEmailValid, error_3;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        to = props.to, title = props.title, template = props.template, data = props.data, meta = props.meta;
                        _a = meta.accountManagerId, accountManagerId = _a === void 0 ? '' : _a, _b = meta.partnerEmail, partnerEmail = _b === void 0 ? '' : _b, _c = meta.includeCC, includeCC = _c === void 0 ? false : _c, _d = meta.noReply, noReply = _d === void 0 ? false : _d, _e = meta.attachmentType, attachmentType = _e === void 0 ? undefined : _e;
                        subject = "[Payhippo" + this.showEnvironment() + "] " + title;
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
                                attachmentType: attachmentType,
                            })];
                    case 1:
                        mailgunSendOptions = _f.sent();
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 5, , 6]);
                        isProduction = this.isProductionEnvironment();
                        isEmailValid = this.verifyEmail(to);
                        if (!(isProduction && isEmailValid)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.mailgun.messages().send(mailgunSendOptions)];
                    case 3:
                        _f.sent();
                        return [2 /*return*/];
                    case 4:
                        node_service_base_1.logger.log("Dev call sending email to " + to);
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _f.sent();
                        node_service_base_1.logger.error(error_3);
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
var common_enums_1 = __webpack_require__(13);
var templates_1 = __webpack_require__(20);
var dotenv_1 = __importDefault(__webpack_require__(2));
var types_1 = __webpack_require__(71);
dotenv_1.default.config();
/**
 * @TODO: we can have a different template for whatsapp,
 *  but for now the assumption here is that whatsapp and sms are same string sent across board;
 */
var templates = (_a = {},
    _a[common_enums_1.Format.SMS] = {
        disbursalFailure: templates_1.SMS.disbursalFailure,
    },
    _a[common_enums_1.Format.HTML] = {
        disbursalFailure: templates_1.EMAIL.disbursalFailure,
    },
    _a[common_enums_1.Format.SLACK] = {
        serviceFailure: templates_1.SLACK.serviceFailure,
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
/* 20 */
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
exports.SLACK = exports.EMAIL = exports.SMS = void 0;
exports.SMS = __importStar(__webpack_require__(21));
exports.EMAIL = __importStar(__webpack_require__(40));
exports.SLACK = __importStar(__webpack_require__(69));


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.repaymentInvoice = exports.referenceAssociation = exports.otp = exports.offer = exports.reminder = exports.inviteCustomer = exports.guarantor = exports.disbursalFailure = exports.earlyRepaymentReminder = exports.consistentLoan = void 0;
var consistentLoan_1 = __webpack_require__(22);
Object.defineProperty(exports, "consistentLoan", ({ enumerable: true, get: function () { return __importDefault(consistentLoan_1).default; } }));
var earlyRepaymentReminder_1 = __webpack_require__(23);
Object.defineProperty(exports, "earlyRepaymentReminder", ({ enumerable: true, get: function () { return __importDefault(earlyRepaymentReminder_1).default; } }));
var disbursalFailure_1 = __webpack_require__(24);
Object.defineProperty(exports, "disbursalFailure", ({ enumerable: true, get: function () { return __importDefault(disbursalFailure_1).default; } }));
var guarantor_1 = __webpack_require__(28);
Object.defineProperty(exports, "guarantor", ({ enumerable: true, get: function () { return __importDefault(guarantor_1).default; } }));
var inviteCustomer_1 = __webpack_require__(29);
Object.defineProperty(exports, "inviteCustomer", ({ enumerable: true, get: function () { return __importDefault(inviteCustomer_1).default; } }));
var reminder_1 = __webpack_require__(30);
Object.defineProperty(exports, "reminder", ({ enumerable: true, get: function () { return __importDefault(reminder_1).default; } }));
var offer_1 = __webpack_require__(31);
Object.defineProperty(exports, "offer", ({ enumerable: true, get: function () { return __importDefault(offer_1).default; } }));
var otp_1 = __webpack_require__(37);
Object.defineProperty(exports, "otp", ({ enumerable: true, get: function () { return __importDefault(otp_1).default; } }));
var referenceAssociation_1 = __webpack_require__(38);
Object.defineProperty(exports, "referenceAssociation", ({ enumerable: true, get: function () { return __importDefault(referenceAssociation_1).default; } }));
var repaymentInvoice_1 = __webpack_require__(39);
Object.defineProperty(exports, "repaymentInvoice", ({ enumerable: true, get: function () { return __importDefault(repaymentInvoice_1).default; } }));


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var clientAppUrl = process.env._CLIENT_APP_URL || '';
var consistentLoan = function (props) {
    var businessOwnerName = props.businessOwnerName, dateDifferenceInDays = props.dateDifferenceInDays;
    return "Hi " + businessOwnerName + ",your business loan with Payhippo is now " + dateDifferenceInDays + " day" + (dateDifferenceInDays === 1 ? '' : 's') + " overdue and accumulating more interest costs for you.Login " + clientAppUrl + " to see new repayment amount.";
};
exports.default = consistentLoan;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var earlyRepaymentReminder = function (props) {
    var businessOwnerName = props.businessOwnerName;
    return "Hi " + businessOwnerName + ", here is a quick reminder,Repay early to unlock additional points to your credit score and increase your chances of getting an increase in your next offer. (Powered by Payhippo)";
};
exports.default = earlyRepaymentReminder;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(25);
var disbursalFailure = function (messageProps) {
    var businessName = messageProps.businessName, loanAmount = messageProps.loanAmount;
    return utils_1.formatCurrency(parseFloat(loanAmount)) + " disbursed to " + businessName + " has been reversed. (Powered by Payhippo)";
};
exports.default = disbursalFailure;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatCurrency = exports.toTitleCase = void 0;
var capitalize_1 = __importDefault(__webpack_require__(26));
var currency_formatter_1 = __importDefault(__webpack_require__(27));
var toTitleCase = function (str) { return str && capitalize_1.default.words(str === null || str === void 0 ? void 0 : str.trim()); };
exports.toTitleCase = toTitleCase;
var formatCurrency = function (amount) {
    return amount && currency_formatter_1.default.format(amount, { code: 'NGN' });
};
exports.formatCurrency = formatCurrency;


/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("capitalize");;

/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("currency-formatter");;

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var guarantor = function (props) {
    var businessOwnerName = props.businessOwnerName, firstName = props.firstName, lastName = props.lastName, url = props.url;
    return "Hi " + businessOwnerName + ", " + firstName + " " + lastName + " has requested you be a guarantor at PayHippo financing company.Sign in at " + url + " to accept.";
};
exports.default = guarantor;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var inviteCustomer = function (props) {
    var accountManagerName = props.accountManagerName, businessOwnerName = props.businessOwnerName, url = props.url;
    return "Hi " + businessOwnerName + ", " + accountManagerName + " is inviting you onboard Payhippo for a seamless SME loan today. Click here " + url + " to signup.";
};
exports.default = inviteCustomer;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var clientAppUrl = process.env._CLIENT_APP_URL || '';
var reminder = function (props) {
    var businessOwnerName = props.businessOwnerName, dateDifferenceInDays = props.dateDifferenceInDays;
    return "Hi " + businessOwnerName + ",your business loan with Payhippo is due " + (dateDifferenceInDays === 1 ? 'tomorrow' : 'in 7 days') + ".Sign in " + clientAppUrl + " to see adjusted repayment amount as of today.";
};
exports.default = reminder;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(25);
var sendOffer_1 = __webpack_require__(32);
var clientAppUrl = process.env._CLIENT_APP_URL || '';
var message = function (messageProps) {
    var businessOwnerName = messageProps.businessOwnerName, loanAmount = messageProps.loanAmount, opportunityType = messageProps.opportunityType;
    return "Hi " + businessOwnerName + ",your next Payhippo loan offer is " + utils_1.formatCurrency(parseFloat(loanAmount)) + ".Sign in at " + clientAppUrl + " to accept offer. " + (opportunityType === sendOffer_1.OpportunityType.NEW
        ? 'Please note, no processing fee(₦0) is required to access a loan from us.'
        : '');
};
exports.default = message;


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpportunityType = void 0;
var moment_1 = __importDefault(__webpack_require__(33));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var OpportunityType;
(function (OpportunityType) {
    OpportunityType["NEW"] = "NEW";
    OpportunityType["RETURNING"] = "RETURNING";
})(OpportunityType = exports.OpportunityType || (exports.OpportunityType = {}));
var sendOffer = function (props) {
    var addStatementFee = props.addStatementFee, actualLoanDuration = props.actualLoanDuration, availabilityDate = props.availabilityDate, bankAccountNumber = props.bankAccountNumber, businessBankName = props.businessBankName, businessName = props.businessName, businessOwnerName = props.businessOwnerName, loanOfferAmount = props.loanOfferAmount, repaymentAmount = props.repaymentAmount, repaymentDate = props.repaymentDate, _a = props.opportunityType, opportunityType = _a === void 0 ? OpportunityType.RETURNING : _a, pendingOverpaidLoans = props.pendingOverpaidLoans, totalPendingOverpaidAmount = props.totalPendingOverpaidAmount, statementProcessingFee = props.statementProcessingFee;
    var emailBody = "\n   <tr>\n   <td>\n     <div class=\"text-center\">\n       <img\n         class=\"hero-image\"\n         src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fwelcome.png?alt=media&token=9ca60252-57ab-4970-a9c4-787ff726b0aa\"\n       />\n     </div>\n   </td>\n </tr>\n <!-- Hero Image -->\n <tr>\n   <td class=\"email-content\" style=\"background-color: #ffffff\">\n     <table\n       align=\"center\"\n       border=\"0\"\n       cellpadding=\"0\"\n       cellspacing=\"0\"\n       style=\"width: 100%\"\n     >\n       <tbody>\n         <tr>\n           <td\n             class=\"email-content-block copy\"\n             style=\"padding-left: 25px; padding-right: 25px; padding-top: 50px\"\n           >\n             <h2\n               style=\"\n                 margin: 0 0 0.5rem 0;\n                 line-height: 1.25;\n                 font-size: 1.5rem;\n                 font-weight: 500;\n                 font-style: normal;\n               \"\n             >\n               Hello\n               <!---->\n               " + (businessOwnerName && utils_1.toTitleCase(businessOwnerName)) + ",\n             </h2>\n             <p\n               style=\"\n                 margin-bottom: 15px;\n                 font-weight: 400;\n                 font-size: 16px;\n                 line-height: 1.5;\n               \"\n             >\n               Here are the details of your loan offer\n             </p>\n             <div\n               class=\"padding-break\"\n               style=\"\n                 font-family:'Inter', 'Avenir Next', 'Avenir', 'Helvetica', sans-serif !important;\n                 margin-top: 20px;\n               \"\n             ></div>\n           </td>\n         </tr>\n \n         <!-- NewTable -->\n         <tr>\n           <td>\n             <div class=\"invoice-box\">\n             <table>\n                 <tr>\n                     <td>\n                         <table>\n                             <tr class=\"heading\">\n                               <td>Loan Details</td>\n                               <td>Unit/Value</td>\n                             </tr>\n                             <tr class=\"item\">\n                               <td>Amount</td>\n                               <td>" + loanOfferAmount + "</td>\n                             </tr>\n                             <tr class=\"item\">\n                               <td>Business Name</td>\n                               <td>" + businessName + "</td>\n                             </tr>\n                             <tr class=\"item\">\n                               <td>Bank Name</td>\n                               <td>" + businessBankName + "</td>\n                             </tr>\n                             <tr class=\"item\">\n                               <td>Account Number</td>\n                               <td>" + bankAccountNumber + "</td>\n                             </tr>\n                             <tr class=\"item\">\n                               <td>Availability Date</td>\n                               <td>" + availabilityDate + "</td>\n                             </tr>\n                             <tr class=\"item\">\n                               <td>Loan Duration</td>\n                               <td>" + actualLoanDuration + " days</td>\n                             </tr>\n                             <tr class=\"item last\">\n                               <td>Repayment Due Date</td>\n                               <td>" + repaymentDate + "</td>\n                             </tr>\n                             " + ((pendingOverpaidLoans === null || pendingOverpaidLoans === void 0 ? void 0 : pendingOverpaidLoans.length)
        ? "\n                        <tr class=\"item last\">\n                          <td>Previous Reimbursement Amount</td>\n                          <td> " + pendingOverpaidLoans
            .map(function (loan) {
            return utils_1.formatCurrency(loan.amount) + " repaid on " + moment_1.default
                .unix(loan.loanRepaidDate)
                .format('L') + " <br />";
        })
            .join('') + "\n                          </td>\n                        </tr>\n                        <tr class=\"item\">\n                          <td>Total Reimbursement Amount</td>\n                          <td>" + totalPendingOverpaidAmount + "</td>\n                        </tr>\n                    "
        : '') + "\n\n                \n                " + (addStatementFee
        ? " <tr class=\"item\">\n                              <td>Statement Processing Fee</td>\n                              <td>" + statementProcessingFee + "</td>\n                          </tr> "
        : '') + "\n                <tr class=\"item\">\n                  <td>Repayment Amount</td>\n                  <td>" + repaymentAmount + "</td>\n                </tr>\n                \n              </table>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </td>\n   </tr>\n \n         <!-- End of new Table -->\n         <tr>\n           <table\n             align=\"center\"\n             border=\"0\"\n             cellpadding=\"0\"\n             cellspacing=\"0\"\n             style=\"width: 100%\"\n           >\n             <tr>\n               <td>\n\n                   <p\n                     style=\"\n                       margin: 10px 30px;\n                       font-weight: 400;\n                       font-size: 16px;\n                       line-height: 1.5;\n                     \"\n                   >\n                     " + (actualLoanDuration < 30
        ? ''
        : 'Our system automatically readjusts repayment dates to give each customer the best opportunity to get a new loan before the weekend. We understand that the funds we give our customers is more effectively used during the weekdays.') + "\n                   </p>\n                   " + (opportunityType === OpportunityType.NEW
        ? "\n                   <p\n                     class=\"signout light-type\"\n                     style=\"\n                       margin: 15px;\n                       font-family:'Inter', 'Avenir Next', 'Avenir', 'Helvetica', sans-serif !important;\n                       font-weight: 400;\n                       font-size: 16px;\n                       line-height: 1.5;\n                       color: #1123ab;\n                     \"\n                   >\n                     Important: No processing fee(\u20A60) is required to access a loan\n                     from us.\n                   </p>\n                   "
        : '') + "\n                   <p\n                     style=\"\n                       margin: 20px 30px 30px;\n                        color: black;\n                       font-weight: 400;\n                       font-size: 16px;\n                       line-height: 1.5;\n                     \"\n                   >\n                     Please, click on the button below to Accept your offer. By\n                     clicking on this button you are deemed to have accepted the loan\n                     with the  <a\n                     href=\"https://app.payhippo.ng/terms\"\n                    \n                     target=\"_blank\"\n                     >Terms and Conditions</a\n                     >.\n                   </p>\n                   <p align=\"center\" class=\"btn btn-primary\">\n                     <a href=\"" + process.env._APP_URL + "\" target=\"_blank\"\n                       >Accept Offer</a\n                     >\n                   </p>\n               </td>\n           </tr>\n\n               <tr>\n \n               <td class=\"email-content-block copy\"\n               style=\"padding-left: 25px; padding-right: 25px; padding-top: 0px\" >\n                 <p\n                   style=\"\n                     margin: 15px 20px;\n                     font-weight: 400;\n                     font-size: 16px;\n                     line-height: 1.5;\n                     color: #333e48;\n                   \"\n                 >\n                   <u>\n                     <b> Terms and Conditions </b>\n                   </u>\n                 </p>\n                 <ul\n                   style=\"\n                     margin: 15px 20px;\n                     font-weight: 400;\n                     font-size: 16px;\n                     line-height: 1.6;\n                     font-weight: 400;\n                     font-size: 16px;\n                     line-height: 1.5;\n                     padding: 0;\n                   \"\n                 >\n                   <li style=\"margin-bottom: 0.5rem\">\n                     Payhippo will send you the funds directly to your stipulated\n                     bank.\n                   </li>\n                   <li style=\"margin-bottom: 0.5rem\">\n                     You will transfer the full repayment amount at the end of\n                     the loan.\n                   </li>\n                   <li style=\"margin-bottom: 0.5rem\">\n                     There will be additional late fees and charges if the loan\n                     is repaid after the stated due date.\n                   </li>\n                   <li style=\"margin-bottom: 0.5rem\">\n                     Interest will continue to accrue on the facility in the\n                     event that payment is received after the due date.\n                   </li>\n                   <li style=\"margin-bottom: 0.5rem\">\n                     The borrower is responsible for settling the additional\n                     interest charges in the event that payment is received after\n                     the due date.\n                   </li>\n                   <li style=\"margin-bottom: 0.5rem\">\n                     Interest will be prorated where the loan amount is paid\n                     before the due date. Note, one-time charges will not be\n                     prorated.\n                   </li>\n                   <li style=\"margin-bottom: 0.5rem\">\n                     Note that your Credit History will be evaluated by your\n                     commitment in making sure your payment is received on or\n                     before the due date.\n                   </li>\n                   <li style=\"margin-bottom: 0.5rem\">\n                     This loan is non-exclusive. If you are using any other\n                     lending services to finance your business, please continue\n                     to do so at your own discretion. We look forward to\n                     financing you alongside your other financial partners.\n                   </li>\n                   <li style=\"margin-bottom: 0.5rem\">\n                     You will only be disbursed the new loan once it is confirmed\n                     that the previous one has been paid off completely.\n                   </li>\n                 </ul>\n               <p\n                 class=\"signout light-type\"\n                 style=\"\n                   margin: 15px 30px;\n                   font-weight: 400;\n                   font-size: 16px;\n                   line-height: 1.5;\n                   color: #788991;\n                 \"\n               ></p>\n               </td>\n             </tr>\n           </table>\n         </tr>\n       </tbody>\n     </table>\n   </td>\n </tr>\n \n\t";
    return base_1.default(emailBody);
};
exports.default = sendOffer;


/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = require("moment");;

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var header_1 = __webpack_require__(35);
var footer_1 = __webpack_require__(36);
var baseTemplate = function (emailBody) {
    return "<!DOCTYPE html>\n    <html>\n        <head>\n            <meta charset=\"UTF-8\" />\n            <title>Hassle-Free SME Financing</title>\n        </head>\n    \n        <body>\n            <head>\n                <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n                <meta name=\"viewport\" content=\"width=device-width\" />\n                <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap\"\n\t\t        rel=\"preload\" as=\"style\" onload=\"this.onload=null;this.rel='stylesheet'\">\n                <title>Hassle-Free SME Financing</title>\n                <style type=\"text/css\">\n                body {\n                    font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica', sans-serif !important;\n                }\n\n               table, td, p, span, h2, h3, h4, h5, a {\n                    font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica', sans-serif !important;\n                }\n                \n                .table-main {\n                    background-color: #f2f2f2;\n                    height: 100%;\n                    padding-bottom: 25px;\n                    padding-left: 0;\n                    padding-right: 0;\n                    padding-top: 25px;\n                    width: 100%;\n                }\n                \n                .hero-image {\n                    width: 100%;\n                    max-width: 30% !important;\n                    position: relative;\n                    display: block;\n                    margin-left: auto;\n                    margin-right: auto;\n                    height: auto;\n                }\n                \n                .text-center {\n                    text-align: center;\n                }\n                \n                .bg-white {\n                    background-color: #ffffff\n                }\n                \n                table[class='body'] {\n                    padding-bottom: 25px !important;\n                    padding-top: 25px !important;\n                    font-family: 'Inter';\n                }\n                \n                .email-logo-masthead {\n                    display: inline !important;\n                    height: 35px !important;\n                    margin-left: 0 !important;\n                    margin-right: 0 !important;\n                }\n                \n                .signout {\n                    text-align: center;\n                }\n                \n                .center {\n                    text-align: left;\n                }\n                \n                .email-content-block {\n                    padding-left: 25px !important;\n                    padding-right: 25px !important;\n                    width: 100%;\n                    text-align: left!important;\n                }\n                \n                .email-social-bar-copy p,\n                .email-social-bar-copy a,\n                .email-social-bar-copy .ios-no-link {\n                    color: #011431 !important;\n                    text-decoration: none !important;\n                }\n                \n                .invoice-box {\n                    max-width: 800px;\n                    margin: auto;\n                    padding: 0px 30px;\n                    font-size: 16px;\n                    line-height: 24px;\n                    font-family: 'Inter', 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;\n                    color: #555;\n                }\n                \n                .watermark {\n                    color: transparent;\n                    visibility: hidden;\n                    display: none;\n                    opacity: 0;\n                    height: 0;\n                    width: 0;\n                    font-size: 0;\n                }\n                \n                .invoice-box table {\n                    width: 100%;\n                    line-height: inherit;\n                    text-align: left;\n                }\n                \n                .invoice-box table td {\n                    padding: 5px;\n                    vertical-align: top;\n                }\n                \n                .invoice-box table tr td:nth-child(2) {\n                    text-align: right;\n                }\n                \n                .invoice-box table tr.top table td {\n                    padding-bottom: 20px;\n                }\n                \n                .invoice-box table tr.top table td.title {\n                    font-size: 45px;\n                    line-height: 45px;\n                    color: #333;\n                }\n                \n                .invoice-box table tr.information table td {\n                    padding-bottom: 40px;\n                }\n                \n                .invoice-box table tr.heading td {\n                    background: rgba(10, 25, 142, 0.14);\n                    border-bottom: 1px solid #ddd;\n                    font-weight: bold;\n                    color: #011431;\n                }\n                \n                .invoice-box table tr.details td {\n                    padding-bottom: 20px;\n                }\n                \n                .invoice-box table tr.item td {\n                    border-bottom: 1px solid #eee;\n                }\n                \n                .invoice-box table tr.item.last td {\n                    border-bottom: none;\n                }\n                \n                .invoice-box table tr.total td:nth-child(2) {\n                    border-top: 2px solid #eee;\n                    font-weight: bold;\n                }\n                \n                .invoice-box table tr.top table td {\n                    width: 100%;\n                    display: block;\n                    text-align: center;\n                }\n                \n                .invoice-box table tr.information table td {\n                    width: 100%;\n                    display: block;\n                    text-align: center;\n                }\n                /** RTL **/\n                \n                .rtl {\n                    direction: rtl;\n                    font-family: 'Inter', Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;\n                }\n                \n                .rtl table {\n                    text-align: right;\n                }\n                \n                .rtl table tr td:nth-child(2) {\n                    text-align: left;\n                }\n                \n                .btn a {\n                    padding: 10px 20px;\n                    border: 1px solid #1123AB;\n                    border-radius: 4px;\n                    background-color: #1123AB;\n                    color: white;\n                    text-decoration: none;\n                    display: block;\n                    max-width: 100px;\n                }\n                \n                .payhippo_link {\n                    text-decoration: none;\n                }\n                \n                .btn {\n                    box-sizing: border-box;\n                    width: 100%;\n                }\n                \n                .btn>tbody>tr>td {\n                    padding-bottom: 15px;\n                }\n                \n                .btn table {\n                    width: auto;\n                }\n                \n                .btn table td {\n                    background-color: #ffffff;\n                    border-radius: 5px;\n                    text-align: center;\n                }\n                \n                .btn a {\n                    background-color: #1123AB;\n                    border: solid 1px #1123AB;\n                    border-radius: 5px;\n                    color: #ffffff;\n                    cursor: pointer;\n                    display: inline-block;\n                    font-size: 14px;\n                    font-weight: bold;\n                    margin: 0;\n                    padding: 10px 30px;\n                    text-decoration: none;\n                    text-transform: capitalize;\n                }\n                \n                .btn-primary table td {\n                    background-color: #1123AB;\n                }\n                \n                .btn-primary a {\n                    background-color: #1123AB;\n                    border-color: #1123AB;\n                    color: #ffffff;\n                }\n            </style>\n                <!--[if mso]><style type=\u201Dtext/css\u201D>span,td,table,div,p{font-family:Helvetica,sans-serif}</style><![endif]-->\n            </head>\n    \n            <body style=\"background-color: #f2f2f2; height: 100%; margin: 0; padding: 0\">\n                <span\n                    class=\"watermark copy\"\n                    >Seamless financing for small to medium sized African businesses.</span\n                >\n                <img\n                    src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/website-assets%2FPayhippoLogo.png?alt=media&token=08c78510-b7a8-4dd1-a24e-12b051c2d334\"\n                    style=\"border: 0; width: 1px; height: 1px\"\n                    width=\"1\"\n                    height=\"1\"\n                />\n                <table\n                    align=\"center\"\n                    border=\"0\"\n                    cellpadding=\"0\"\n                    cellspacing=\"0\"\n                    class=\"body table-main\"  \n                >\n                    <tbody>\n                        <tr>\n                            <td>\n                                <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                    <tbody\n                                    style=\"background-color: white;\"\n                                    >\n                                        <tr>\n                                            <td width=\"550\">\n                                                <table\n                                                    align=\"center\"\n                                                    border=\"0\"\n                                                    cellpadding=\"0\"\n                                                    cellspacing=\"0\"\n                                                    style=\"width: 100%\"\n                                                >\n                                                    <tbody>\n                                                       " + header_1.header + "\n                                                        <!-- individual template -->\n                                                        " + emailBody + "\n                                                        <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + footer_1.footer + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </tr>\n                                                    </tbody>\n                                                </table>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </body>\n        </body>\n    </html>\n    ";
};
exports.default = baseTemplate;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.header = void 0;
exports.header = "\n<tr>\n    <td>\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody>\n                <tr\n                style=\"text-align: center;\"\n                >\n                    <td>\n                        <a\n                            href=\"https://payhippo.ng\"\n                            style=\"\n                                color: #0d97ff;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                            \"\n                            target=\"_blank\"\n                        >\n                            <img\n                                class=\"email-logo-masthead\"\n                                height=\"35\"\n                                src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/website-assets%2FPayhippoLogo.png?alt=media&token=08c78510-b7a8-4dd1-a24e-12b051c2d334\"\n                                style=\"\n                                width: auto;\n                                max-width: 100% !important;\n                                display: block;\n                                height: 30px;\n                                margin-top: 30px;\n                                margin-bottom: 25px;\n                                margin-left: auto;\n                                margin-right: auto;\n                                \"\n                            />\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </td>\n</tr>\n";


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.footer = void 0;
exports.footer = "\n<td>\n    <table\n        align=\"center\"\n        border=\"0\"\n        cellpadding=\"0\"\n        cellspacing=\"0\"\n        class=\"email-social-bar\"\n        style=\"\n            background: white;\n            padding-bottom: 25px;\n            padding-left: 25px;\n            padding-right: 25px;\n            width: 100%;\n        \n        \"\n    >\n        <tbody\n            style=\"\n            color: #011431;\n            width: 100%;\n            \"\n        >\n        <tr\n        style=\"\n    border-top: 1px solid rgba(1, 20, 49, 0.2);\n    height: 20px!important;\n    width: 100%;\n    \"\n        >\n            <td \n            style=\"\n                border-top: 1px solid rgba(1, 20, 49, 0.2);\n            height: 20px!important;\n            width: 100%;\n            \"\n            >\n            </td>\n            <td \n            style=\"\n            border-top: 1px solid rgba(1, 20, 49, 0.2);\n            height: 20px!important;\n            width: 100%;\n            \"\n            >\n            </td>\n            <td \n            style=\"\n            border-top: 1px solid rgba(1, 20, 49, 0.2);\n            height: 20px!important;\n            width: 100%;\n            \"\n            >\n            </td>\n        \n\n        </tr>\n            <tr\n            >\n\n            \n                <td\n                    class=\"email-social-bar-copy copy\"\n                    style=\"\n                        font-family: 'Inter', 'Avenir Next',\n                            'Avenir',\n                            'Helvetica',\n                            sans-serif !important;\n                    \"\n                >\n                    <p\n                        class=\"ios-no-link\"\n                        style=\"\n                            margin-bottom: 10px;\n                            font-family: 'Inter', 'AvenirNext',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            font-weight: 400;\n                            font-size: 14px;\n                            line-height: 1.5;\n                            color: #011431;\n                            text-decoration: none !important;\n                        \"\n                    >\n                        \n                        Plot 174a, Corporation Drive, Dolphin Estate,\n                        <br\n                            style=\"\n                                font-family: 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                            \"\n                        />\n                        Lagos, Nigeria\n                  </p>       \n                </td>\n            </tr>\n            \n  <tr\n      >\n      <td\n      style=\"padding-bottom: 0.3rem;\"\n          \n          >\n            <table>\n               <tr>\n                   <td>\n                                    <a\n                                        class=\"email-social-bar-social-icon\"\n                                        href=\"https://web.facebook.com/PayhippoHQ\"\n                                        style=\"\n                                            display: inline;\n                                        \"\n                                        target=\"_blank\"\n                                        ><img\n                                            class=\"auto-width\"\n                                            height=\"13\"\n                                            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/website-assets%2Ffacebook.png?alt=media&token=54ef6135-fd3c-4f21-8133-c854816d8775\"\n                                            style=\"\n                                           \n                                                    width: auto;\n                                                border: 0;\n                                                \n                                            \"\n                                    /></a>\n                                      \n                                </td>\n              <td>\n                                    <a\n                                        class=\"email-social-bar-social-icon\"\n                                        href=\"https://www.instagram.com/payhippohq/\"\n                                        style=\"\n                                            display: inline;\n                                        \"\n                                        target=\"_blank\"\n                                        ><img\n                                            class=\"auto-width\"\n                                            height=\"13\"\n                                            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/website-assets%2Finstagram.png?alt=media&token=8907215e-d98b-42e8-b26d-f122702229a5\"\n                                            style=\"\n                                                margin-left: 0.6rem;\n                                                    width: auto;\n                                                border: 0;\n                                                \n                                            \"\n                                    /></a>\n                                      \n                                </td>\n  <td>                                        \n                                    <a\n                                        class=\"email-social-bar-social-icon\"\n                                        href=\"https://linkedin.com/company/payhippo/about/\"\n                                        style=\"\n                                        \n                                            display: inline;\n                                        \n                                            text-decoration: none;\n                                        \"\n                                        target=\"_blank\"\n                                        ><img\n                                            class=\"auto-width\"\n                                            height=\"13\"\n                                            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Flinkedin.png?alt=media&token=bb1b2f4b-a251-475a-8d7f-f62dc6517cc0\"\n                                            style=\"\n                                                margin-left: 0.6rem;\n                                      \n                                                width: auto;\n                                                border: 0;\n                                            \"\n                                    /></a>\n                </td>\n\n                                    <td>\n                                    <a\n                                        class=\"email-social-bar-social-icon\"\n                                        href=\"https://twitter.com/payhippohq?s=21\"\n                                        style=\"\n                                            display: inline;\n                                        \"\n                                        target=\"_blank\"\n                                        ><img\n                                            class=\"auto-width\"\n                                            height=\"13\"\n                                            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Ftwitter.png?alt=media&token=acf7c362-ac8d-4769-9673-21f075b62100\"\n                                            style=\"\n                                                margin-left: 0.6rem;\n                                                    width: auto;\n                                                border: 0;\n                                                \n                                            \"\n                                    /></a>\n                                      \n                                </td>\n                \n                            </tr>\n            </table> \n      </td>\n  </tr>\n  <tr\n      >\n      <td\n                            style=\"\n                                font-family: 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                            \"\n                        >\n                      <a href=\"https://app.payhippo.ng\" target=\"_blank\" style=\"margin-top: 0.6rem; font-size: 0.7rem; font-style: underline; color: #1123AB!important;\"><u>Unsubscribe</u></a>\n                    </td>\n  </tr>\n        </tbody>\n    </table>\n</td>\n";


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var otpMessage = function (props) {
    var otp = props.otp;
    return "Your Payhippo authentication code is " + otp + ".";
};
exports.default = otpMessage;


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var referenceAssociation = function (props) {
    var associationName = props.associationName, businessOwnerName = props.businessOwnerName, url = props.url;
    return "Hi " + businessOwnerName + " from " + associationName + " signed up with Payhippo has requested you give us details about their credit worthiness.Sign in " + url + " to accept.";
};
exports.default = referenceAssociation;


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(25);
var clientAppUrl = process.env._CLIENT_APP_URL || '';
var repaymentInvoice = function (props) {
    var businessOwnerName = props.businessOwnerName, totalPaymentAmount = props.totalPaymentAmount;
    return "Hi " + businessOwnerName + ",thanks for your repayment of " + utils_1.formatCurrency(parseFloat(totalPaymentAmount)) + " to Payhippo. Request a new loan at " + clientAppUrl + ".";
};
exports.default = repaymentInvoice;


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.statementReminder = exports.signupConfirmation = exports.returningOpportunity = exports.request = exports.repaymentInvoice = exports.reminder = exports.referral = exports.reference = exports.referenceAssociation = exports.recollectionPayment = exports.recollection = exports.paymentAudit = exports.passwordReset = exports.overdueNotice = exports.otp = exports.newOpportunity = exports.metricsCsv = exports.sendOffer = exports.guarantorRequest = exports.guarantorNotAccepted = exports.guarantorAccepted = exports.disbursalFailure = exports.earlyRepaymentReminder = exports.earlyRepayment = exports.disqualify = exports.consistentOverdueLoans = exports.confirmGuarantor = exports.associationRequirement = exports.agentInvitation = void 0;
var agentInvitation_1 = __webpack_require__(41);
Object.defineProperty(exports, "agentInvitation", ({ enumerable: true, get: function () { return __importDefault(agentInvitation_1).default; } }));
var associationRequirement_1 = __webpack_require__(42);
Object.defineProperty(exports, "associationRequirement", ({ enumerable: true, get: function () { return __importDefault(associationRequirement_1).default; } }));
var confirmGuarantor_1 = __webpack_require__(43);
Object.defineProperty(exports, "confirmGuarantor", ({ enumerable: true, get: function () { return __importDefault(confirmGuarantor_1).default; } }));
var consistentOverdueLoans_1 = __webpack_require__(44);
Object.defineProperty(exports, "consistentOverdueLoans", ({ enumerable: true, get: function () { return __importDefault(consistentOverdueLoans_1).default; } }));
var disqualify_1 = __webpack_require__(45);
Object.defineProperty(exports, "disqualify", ({ enumerable: true, get: function () { return __importDefault(disqualify_1).default; } }));
var earlyRepayment_1 = __webpack_require__(46);
Object.defineProperty(exports, "earlyRepayment", ({ enumerable: true, get: function () { return __importDefault(earlyRepayment_1).default; } }));
var earlyRepaymentReminder_1 = __webpack_require__(47);
Object.defineProperty(exports, "earlyRepaymentReminder", ({ enumerable: true, get: function () { return __importDefault(earlyRepaymentReminder_1).default; } }));
var disbursalFailure_1 = __webpack_require__(48);
Object.defineProperty(exports, "disbursalFailure", ({ enumerable: true, get: function () { return __importDefault(disbursalFailure_1).default; } }));
var guarantorAccepted_1 = __webpack_require__(49);
Object.defineProperty(exports, "guarantorAccepted", ({ enumerable: true, get: function () { return __importDefault(guarantorAccepted_1).default; } }));
var guarantorNotAccepted_1 = __webpack_require__(50);
Object.defineProperty(exports, "guarantorNotAccepted", ({ enumerable: true, get: function () { return __importDefault(guarantorNotAccepted_1).default; } }));
var guarantorRequest_1 = __webpack_require__(51);
Object.defineProperty(exports, "guarantorRequest", ({ enumerable: true, get: function () { return __importDefault(guarantorRequest_1).default; } }));
var sendOffer_1 = __webpack_require__(32);
Object.defineProperty(exports, "sendOffer", ({ enumerable: true, get: function () { return __importDefault(sendOffer_1).default; } }));
var metricsCsv_1 = __webpack_require__(52);
Object.defineProperty(exports, "metricsCsv", ({ enumerable: true, get: function () { return __importDefault(metricsCsv_1).default; } }));
var newOpportunity_1 = __webpack_require__(53);
Object.defineProperty(exports, "newOpportunity", ({ enumerable: true, get: function () { return __importDefault(newOpportunity_1).default; } }));
var otp_1 = __webpack_require__(54);
Object.defineProperty(exports, "otp", ({ enumerable: true, get: function () { return __importDefault(otp_1).default; } }));
var overdueNotice_1 = __webpack_require__(55);
Object.defineProperty(exports, "overdueNotice", ({ enumerable: true, get: function () { return __importDefault(overdueNotice_1).default; } }));
var passwordReset_1 = __webpack_require__(56);
Object.defineProperty(exports, "passwordReset", ({ enumerable: true, get: function () { return __importDefault(passwordReset_1).default; } }));
var paymentAudit_1 = __webpack_require__(57);
Object.defineProperty(exports, "paymentAudit", ({ enumerable: true, get: function () { return __importDefault(paymentAudit_1).default; } }));
var recollection_1 = __webpack_require__(58);
Object.defineProperty(exports, "recollection", ({ enumerable: true, get: function () { return __importDefault(recollection_1).default; } }));
var recollectionPayment_1 = __webpack_require__(59);
Object.defineProperty(exports, "recollectionPayment", ({ enumerable: true, get: function () { return __importDefault(recollectionPayment_1).default; } }));
var referenceAssociation_1 = __webpack_require__(60);
Object.defineProperty(exports, "referenceAssociation", ({ enumerable: true, get: function () { return __importDefault(referenceAssociation_1).default; } }));
var reference_1 = __webpack_require__(61);
Object.defineProperty(exports, "reference", ({ enumerable: true, get: function () { return __importDefault(reference_1).default; } }));
var referral_1 = __webpack_require__(62);
Object.defineProperty(exports, "referral", ({ enumerable: true, get: function () { return __importDefault(referral_1).default; } }));
var reminder_1 = __webpack_require__(63);
Object.defineProperty(exports, "reminder", ({ enumerable: true, get: function () { return __importDefault(reminder_1).default; } }));
var repaymentInvoice_1 = __webpack_require__(64);
Object.defineProperty(exports, "repaymentInvoice", ({ enumerable: true, get: function () { return __importDefault(repaymentInvoice_1).default; } }));
var request_1 = __webpack_require__(65);
Object.defineProperty(exports, "request", ({ enumerable: true, get: function () { return __importDefault(request_1).default; } }));
var returningOpportunity_1 = __webpack_require__(66);
Object.defineProperty(exports, "returningOpportunity", ({ enumerable: true, get: function () { return __importDefault(returningOpportunity_1).default; } }));
var signupConfirmation_1 = __webpack_require__(67);
Object.defineProperty(exports, "signupConfirmation", ({ enumerable: true, get: function () { return __importDefault(signupConfirmation_1).default; } }));
var statementReminder_1 = __webpack_require__(68);
Object.defineProperty(exports, "statementReminder", ({ enumerable: true, get: function () { return __importDefault(statementReminder_1).default; } }));


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var agentInvitationTemplate = function (_a) {
    var name = _a.name, url = _a.url;
    var emailBody = "\n\t<tr>\n\n\t<td>\n\t<div class=\"text-center\">\n\t<img\n\tclass=\"hero-image\"\n\tsrc=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Femail-sent.png?alt=media&token=e62bbb85-9ca0-484e-8057-3a6310ffe536\"\n/>\n   </div>\n\n   </td>\n\t</tr>\n\t\t<tr>\n\t\t\t<td\n\t\t\t\tclass=\"email-content bg-white\"\n\n\t\t\t>\n\t\t\t\t<table\n\t\t\t\t\talign=\"center\"\n\t\t\t\t\tborder=\"0\"\n\t\t\t\t\tcellpadding=\"0\"\n\t\t\t\t\tcellspacing=\"0\"\n\t\t\t\t\tstyle=\"width: 100%\"\n\t\t\t\t>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td\n\t\t\t\t\t\t\t\tclass=\"email-content-block copy\"\n\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\t\t\t\t\tpadding-top: 50px;\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<h2\n\t\t\t\t\t\t\t\tclass=\"center\"\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t\t\t\t0.5rem 0;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tHello\n\t\t\t\t\t\t\t\t\t<!---->\n\t\t\t\t\t\t\t\t\t" + (name && utils_1.toTitleCase(name)) + ",\n\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\tclass=\"center\"\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',\n\t\t\t\t\t  \t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tYou have been invited to the Payhippo Agent program, please\n\t\t\t\t\t\t\t\t\tclick on the button\n\t\t\t\t\t\t\t\t\tbelow to officially\n\t\t\t\t\t\t\t\t\tget started.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\talign=\"center\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\thref=\"" + url + "\"\n\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t\t\t\t\t\t>Get Started</a\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\tclass=\"padding-break\"\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin-top: 30px;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</tr>\n\n\t\t";
    return base_1.default(emailBody);
};
exports.default = agentInvitationTemplate;


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var associationRequirement = function (_a) {
    var businessOwnerName = _a.businessOwnerName, associationName = _a.associationName;
    var emailBody = "\n   <tr>\n   <td>\n   <div class=\"text-center\">\n         <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Freminder.png?alt=media&token=30a86ed6-25bd-4824-8205-3832406fb93c\"\n            />\n      </div>\n   </td>\n</tr>\n\n<tr>\n   <td\n      class=\"email-content\"\n      style=\"background-color: #ffffff\"\n      >\n      <table\n         align=\"center\"\n         border=\"0\"\n         cellpadding=\"0\"\n         cellspacing=\"0\"\n         style=\"width: 100%\"\n         >\n         <tbody class=\"center\">\n            <tr>\n               <td\n                  class=\"email-content-block copy\"\n                  style=\"\n                  padding-left: 25px;\n                  padding-right: 25px;\n                  padding-top: 50px;\n                  \"\n                  >\n                  <h2\n                     style=\"\n                     margin: 0 0\n                     0.5rem 0;\n                     line-height: 1.25;\n                     font-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n                     font-size: 1.5rem;\n                     font-weight: 500;\n                     font-style: normal;\n                     \"\n                     > \n                     Hello Payhippo SuperStar,\n                  </h2>\n                  <p\n                     style=\"\n                     margin-bottom: 15px;\n                     font-family: 'Inter', 'Avenir Next',\n                     'Avenir',\n                     'Helvetica',\n                     sans-serif !important;\n                     font-weight: 400;\n                     font-size: 16px;\n                     line-height: 1.5;\n                     color: #333e48;\n                     \"\n                     >\n                     " + (businessOwnerName && utils_1.toTitleCase(businessOwnerName)) + ", from " + (associationName && utils_1.toTitleCase(associationName)) + " has met the association requirements.\n                  </p>\n                  <p\n                     style=\"\n                     margin-bottom: 15px;\n           \n                     font-weight: 400;\n                     font-size: 16px;\n                     line-height: 1.5;\n                     color: #333e48;\n                     \"\n                     >\n                     Have questions about the Payhippo? We\u2019d love to help. <br />\n                     You can reach us at hello@payhippo.ng or visit us at \n                     <a\n                        href=\"https://payhippo.ng\"\n                       \n                        target=\"_blank\"\n                        >payhippo.ng</a\n                        >.\n                  </p>\n                 \n                  <div\n                     class=\"padding-break\"\n                     style=\"\n                  \n                    \n                     margin-top: 30px;\n                     \"\n                     ></div>\n               </td>\n            </tr>\n         </tbody>\n      </table>\n   </td>\n</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = associationRequirement;


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var confirmGuarantor = function (_a) {
    var guarantorName = _a.guarantorName, businessOwnerName = _a.businessOwnerName, businessName = _a.businessName, guarantorUrl = _a.guarantorUrl;
    var emailBody = "\n\t<tr>\n\t<td>\n\t  <div class=\"text-center\">\n\t   <img\n\t\t  class=\"hero-image\"\n\t\t  src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fguarantor_new.png?alt=media&token=0c60762c-93d8-47c9-a18a-4248aa9706ac\"\n\t\t  />\n\t  </div>\n\t</td>\n\t</tr>\n\t<tr>\n\t<td\n\t   class=\"email-content\"\n\t   style=\"background-color: #ffffff\"\n\t   >\n\t   <table\n\t\t  align=\"center\"\n\t\t  border=\"0\"\n\t\t  cellpadding=\"0\"\n\t\t  cellspacing=\"0\"\n\t\t  style=\"width: 100%\"\n\t\t  >\n\t\t  <tbody class=\"center\">\n\t\t\t <tr>\n\t\t\t\t<td\n\t\t\t\t   class=\"email-content-block copy\"\n\t\t\t\t   style=\"\n\t\t\t\t   font-family: 'Inter', 'Avenir Next',\n\t\t\t\t   'Avenir',\n\t\t\t\t   'Helvetica',\n\t\t\t\t   sans-serif !important;\n\t\t\t\t   padding-left: 25px;\n\t\t\t\t   padding-right: 25px;\n\t\t\t\t   padding-top: 50px;\n\t\t\t\t   \"\n\t\t\t\t   >\n\t\t\t\t   <h2\n\t\t\t\t\t  style=\"\n\t\t\t\t\t  margin: 0 0\n\t\t\t\t\t  0.5rem 0;\n\t\t\t\t\t  line-height: 1.25;\n\t\t\t\t\t  font-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t  'Avenir',\n\t\t\t\t\t  'Helvetica',\n\t\t\t\t\t  sans-serif !important;\n\t\t\t\t\t  font-size: 1.5rem;\n\t\t\t\t\t  font-weight: 500;\n\t\t\t\t\t  font-style: normal;\n\t\t\t\t\t  \"\n\t\t\t\t\t  >\n\t\t\t\t\t  Hello\n\t\t\t\t\t  <!---->\n\t\t\t\t\t  " + (guarantorName && utils_1.toTitleCase(guarantorName)) + ",\n\t\t\t\t   </h2>\n\t\t\t\t   <p\n\t\t\t\t\t  style=\"\n\t\t\t\t\t  margin-bottom: 15px;\n\t\t\t\t\t  font-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t  'Avenir',\n\t\t\t\t\t  'Helvetica',\n\t\t\t\t\t  sans-serif !important;\n\t\t\t\t\t  font-weight: 400;\n\t\t\t\t\t  font-size: 16px;\n\t\t\t\t\t  line-height: 1.5;\n\t\t\t\t\t  \"\n\t\t\t\t\t  >\n\t\t\t\t\t  " + businessOwnerName + "\n\t\t\t\t\t  from " + businessName + "\n\t\t\t\t\t  has requested for a new loan with\n\t\t\t\t\t  Payhippo. We will need you to consent that you still want to stand in as the guarantor.\n\t\t\t\t   </p>\n\t\t\t\t   <p\n\t\t\t\t\t  style=\"\n\t\t\t\t\t  margin-bottom: 15px;\n\t\t\t\t\t  font-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t  'Avenir',\n\t\t\t\t\t  'Helvetica',\n\t\t\t\t\t  sans-serif !important;\n\t\t\t\t\t  font-weight: 400;\n\t\t\t\t\t  font-size: 16px;\n\t\t\t\t\t  line-height: 1.5;\n\t\t\t\t\t  \"\n\t\t\t\t\t  >\n\t\t\t\t\t  If there is a\n\t\t\t\t\t  default and we\n\t\t\t\t\t  cannot contact\n\t\t\t\t\t  " + businessOwnerName + ",\n\t\t\t\t\t  we will contact you\n\t\t\t\t\t  to assist in the\n\t\t\t\t\t  loan repayment and recovery process.\n\t\t\t\t   </p>\n\t\t\t\t   <p\n\t\t\t\t\t  style=\"\n\t\t\t\t\t  margin-bottom: 10px;\n\t\t\t\t\t  font-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t  'Avenir',\n\t\t\t\t\t  'Helvetica',\n\t\t\t\t\t  sans-serif !important;\n\t\t\t\t\t  font-weight: 400;\n\t\t\t\t\t  font-size: 16px;\n\t\t\t\t\t  line-height: 1.5;\n\t\t\t\t\t  \"\n\t\t\t\t\t  >\n\t\t\t\t\t  Please note that you can either choose to accept or reject to be the guarantor. Please click the button to proceed and let us know your decision.\n\t\t\t\t   </p>\n\t\t\t\t   <p\n\t\t\t\t\t  align=\"center\"\n\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t  >\n\t\t\t\t\t  <a\n\t\t\t\t\t\t href=\"" + guarantorUrl + "\"\n\t\t\t\t\t\t target=\"_blank\"\n\t\t\t\t\t\t >Acknowledge</a\n\t\t\t\t\t\t >\n\t\t\t\t   </p>\n\t\t\t\t   <p\n\t\t\t\t   style=\"\n\t\t\t\t   margin-bottom: 15px;\n\t\t\t\t   font-weight: 400;\n\t\t\t\t   font-size: 16px;\n\t\t\t\t   line-height: 1.5;\n\t\t\t\t   color: #333e48;\n\t\t\t\t   \"\n\t\t\t\t   >\n\t\t\t\t   Have questions about the Payhippo? We\u2019d love to help. <br />\n\t\t\t\t   You can reach us at hello@payhippo.ng or visit us at \n\t\t\t\t   <a\n\t\t\t\t\t  href=\"https://payhippo.ng\"\n\t\t\t\t\t \n\t\t\t\t\t  target=\"_blank\"\n\t\t\t\t\t  >payhippo.ng</a\n\t\t\t\t\t  >.\n\t\t\t\t</p>\n\t\n\t\t\t<div class=\"padding-break\" style=\"\n\t\t\t\t\t  font-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t  'Avenir',\n\t\t\t\t\t  'Helvetica',\n\t\t\t\t\t  sans-serif !important;\n\t\t\t\t\t  margin-top: 30px;\n\t\t\t\t\t  \"></div>\n\t\t\t</td>\n\t\t\t</tr>\n\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t</td>\n\t\t\t</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = confirmGuarantor;


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var consistentOverdueLoans = function (props) {
    var businessOwnerName = props.businessOwnerName, dateDifferenceInDays = props.dateDifferenceInDays, loanAmount = props.loanAmount, newRepaymentAmount = props.newRepaymentAmount, referenceNumber = props.referenceNumber, repaymentDate = props.repaymentDate, repaymentBankAccountName = props.repaymentBankAccountName, repaymentBankAccountNumber = props.repaymentBankAccountNumber, repaymentBank = props.repaymentBank;
    var emailBody = "\n\t<tr>\n\t<td>\n\t\t\n\t\t<div class=\"text-center\">\n\t\t<img\n\t\t\tclass=\"hero-image\"\n\t\t\tsrc=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fgrowth.png?alt=media&token=c11d029a-7f44-4b03-bf9e-e025808aadbd\"\n\t\t/>\n\n\t   </div>\n\t</td>\n</tr>\n<tr>\n\t<td\n\t\tclass=\"email-content\"\n\t\tstyle=\"background-color: #ffffff\"\n\t>\n\t\t<table\n\t\t\talign=\"center\"\n\t\t\tborder=\"0\"\n\t\t\tcellpadding=\"0\"\n\t\t\tcellspacing=\"0\"\n\t\t\tstyle=\"width: 100%\"\n\t\t>\n\t\t\t<tbody\n\t\t\tstyle=\"text-align: center;\"\n\t\t\t>\n\t\t\t\t<tr>\n\t\t\t\t\t<td\n\t\t\t\t\t\tclass=\"email-content-block copy\"\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\t\t\tpadding-top: 30px;\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<h2\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t\t0.3rem 0;\n\t\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\t\tcolor: #011431;\n\t\t\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\tHi " + (businessOwnerName && utils_1.toTitleCase(businessOwnerName)) + ",\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tmargin-bottom: 1.5rem;\n\t\t\t\t\t\t\t\tmargin-top: 0.4rem;\n\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\tcolor: #011431;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\tYour Loan is now " + dateDifferenceInDays + " " + (dateDifferenceInDays > 1 ? 'days' : 'day') + " overdue and your loan is accumulating more interest costs for you.\n\n\t\t\t\t\t</p>\n\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t\t<!------------- Body Section ------------->\n\t\t\t\t\t<div class=\"invoice-box\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr class=\"heading\">\n\t\t\t\t\t\t\t\t<td>Loan Details</td>\n\n\t\t\t\t\t\t\t\t<td>Unit/Value</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t\t\t<td>Loan Amount</td>\n\n\t\t\t\t\t\t\t\t<td>" + loanAmount + "</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t\t\t<td>New Repayment Amount</td>\n\t\t\t\t\t\t\t\t<td>" + newRepaymentAmount + "</td>\n\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t<tr class=\"item last\">\n\t\t\t\t\t\t\t\t<td>Repayment Due Date</td>\n\t\t\t\t\t\t\t\t<td>" + repaymentDate + "</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t\t\t<td>Reference Number</td>\n\t\t\t\t\t\t\t\t<td>" + referenceNumber + "</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t<!------------- End of Body Section ------------->\n\t\t\t\t <!------------- Bottom Section ------------->\n\n\t\t\t\t\t<table\n\t\t\t\t\t>\n\n\t\t\t\t   <tr >\n\t\t\t\t\t<div\n\t\t\t\t\tstyle=\"\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\"\n\t\t\t\t\t>\n\n\t\t\t\t\t\t<p\n\t\t\t\t\t\talign=\"center\"\n\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\thref=" + process.env._APP_URL + "\n\t\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t\t\t>Sign In</a\n\t\t\t\t\t\t>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tmargin: 10px 30px;\n\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\tSign In now or use the dedicated account number below to repay and avoid more interest costs\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"invoice-box\">\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<tr class=\"heading\">\n\t\t\t\t\t\t\t\t\t<td>Repayment Account Details</td>\n\t\t\n\t\t\t\t\t\t\t\t\t<td>Value</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t\t\t\t<td>Account Name</td>\n\t\t\n\t\t\t\t\t\t\t\t\t<td>" + repaymentBankAccountName + "</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t\t\t\t<td>Account Number</td>\n\t\t\n\t\t\t\t\t\t\t\t\t<td>" + repaymentBankAccountNumber + "</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t\t\t\t<td>Bank Name</td>\n\t\t\n\t\t\t\t\t\t\t\t\t<td>" + repaymentBank + "</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<table/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t  \n\t\t\t\t\t<div\n\t\t\t\t\tclass=\"padding-break\"\n\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tmargin-top: 30px;\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t></div>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</table>\n\t\t</td>\n\t\t<!------------- End of Bottom Section ------------->\n</tr>\n";
    return base_1.default(emailBody);
};
exports.default = consistentOverdueLoans;


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var options = [
    {
        text: 'Incomplete documentation',
        value: 'INCOMPLETE_DOCUMENTATION',
    },
    {
        text: 'Insufficient Transactions',
        value: 'INSUFFICIENT_TRANSACTIONS',
    },
    {
        text: 'No response from guarantor',
        value: 'NO_GUARANTOR_RESPONSE',
    },
    {
        text: 'Bad Credit Report',
        value: 'NON_PERFORMING_CREDIT_REPORT',
    },
];
var generateTextFromValue = function (value) {
    if (value === void 0) { value = ''; }
    switch (value) {
        case options[0].value:
            return 'Your documents were incomplete or not verifiable.';
        case options[1].value:
            return "We encourage you to use your bank account more frequently,\n\t\t\tfor your business transactions,\n\t\t\tin order for us to offer you financing in the near future.\n\t\t\t";
        case options[2].value:
            return "We could not get any response from your guarantor.";
        case options[3].value:
            return "We encourage you to clear out your non performing \n            loans from other credit providers,\n\t\t\tin order for us to offer you financing in the near future.";
        default:
            return "We encourage you to use your bank account more frequently,\n\t\t\tfor your business transactions,\n\t\t\tin order for us to offer you financing in the near future.\n\t\t\t";
    }
};
var disqualify = function (_a) {
    var businessOwnerName = _a.businessOwnerName, reason = _a.reason;
    var value = (options.find(function (_a) {
        var value = _a.value;
        return value === reason;
    }) || { value: options[1].value }).value;
    var emailBody = "\n<tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Ferror.png?alt=media&token=1bfc3428-cf41-490c-94b1-1ea9f10ed8ac\"\n        />\n        </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: center;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                        Hello " + (businessOwnerName && utils_1.toTitleCase(businessOwnerName)) + ",\n\n                        \n                            <!---->\n                        </h2>\n                       \n                        <p\n                        style=\"\n                        margin-bottom: 1.5rem;\n                        margin-top: 0.4rem;\n                        font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                        font-weight: 400;\n                        font-size: 16px;\n                        line-height: 1.8;\n                    \"\n                        >\n\n                            Thank you for choosing Payhippo to finance your loan.\n                        </p>\n\n                        <p\n                        style=\"\n                        margin-bottom: 1.5rem;\n                        margin-top: 0.4rem;\n                        font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                        font-weight: 400;\n                        font-size: 16px;\n                        line-height: 1.4;\n                        \"\n                        >\n\n                            We are aware of your need for this loan but unfortunately we can not move forward with financing your loan at this moment.\n                        </p>\n                        \n                        \n                        <p\n                        style=\"\n                        margin-bottom: 1.5rem;\n                        margin-top: 0.4rem;\n                        font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                        font-weight: 400;\n                        font-size: 16px;\n                        line-height: 1.4;\n                        \"\n                        >\n                        \n                        " + generateTextFromValue(value) + "\n                    </p>\n                    <p\n                    style=\"\n                    margin-bottom: 30px;\n          \n                    font-weight: 400;\n                    font-size: 16px;\n                    line-height: 1.5;\n                    color: #333e48;\n                    \"\n                    >\n                    Have questions about the Payhippo? We\u2019d love to help. <br />\n                    You can reach us at hello@payhippo.ng or visit us at \n                    <a\n                       href=\"https://payhippo.ng\"\n                      \n                       target=\"_blank\"\n                       >payhippo.ng</a\n                       >.\n                 </p>\n                    \n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                    \n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n               \n                   <tr >\n\n                   <div\n                   style=\"\n                   text-align: center;\n                   \"\n                   >\n\n                       \n              \n                      \n                   </div>\n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n                            \"\n                        ></div>\n                </tr>\n        \n       \n    </td>\n</tr>\n\n";
    return base_1.default(emailBody);
};
exports.default = disqualify;


/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var earlyRepayment = function (_a) {
    var businessName = _a.businessName;
    var emailBody = "\n    <tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fwelcome.png?alt=media&token=9ca60252-57ab-4970-a9c4-787ff726b0aa\"\n        />\n        </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: left;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                        Dear " + (businessName && utils_1.toTitleCase(businessName)) + ",\n                            <!---->\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.5;\n                                color: #011431;\n                            \"\n                        >\n                        We have received your early loan repayment. We have added additional points to your credit score. An increase to your loan offer will be reflected in your next loan request.\n\n                        <br />\n                        <br />\n                        To get a new loan to fund your business click on the Request button below\n\n                        <p\n                        align=\"center\"\n                        class=\"btn btn-primary\"\n                    >\n                        <a\n                        href=" + process.env._APP_URL + "\n                            target=\"_blank\"\n                            >Request</a\n                        >\n                    </p>\n                 \n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                   \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n\n                   <div\n                   style=\"\n                   text-align: center;\n                   \"\n                   >\n\n                      \n                    \n                   </div>\n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n                            \"\n                        ></div>\n                </tr>\n            </table>\n    </td>\n</tr>\n\n";
    return base_1.default(emailBody);
};
exports.default = earlyRepayment;


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var earlyRepaymentReminder = function (props) {
    var businessName = props.businessName, repaymentBankAccountName = props.repaymentBankAccountName, repaymentBankAccountNumber = props.repaymentBankAccountNumber, repaymentBank = props.repaymentBank;
    var emailBody = "\n\t<tr>\n\t\n\t<td>\n    <div class=\"text-center\">\n\t\t<img\n\t\t\tclass=\"hero-image\"\n\t\t\tsrc=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Freminder.png?alt=media&token=30a86ed6-25bd-4824-8205-3832406fb93c\"\n\t\t/>\n\t\t</div>\n\t</td>\n</tr>\n<tr>\n\t<td\n\t\tclass=\"email-content\"\n\t\tstyle=\"background-color: #ffffff\"\n\t>\n\t\t<table\n\t\t\talign=\"center\"\n\t\t\tborder=\"0\"\n\t\t\tcellpadding=\"0\"\n\t\t\tcellspacing=\"0\"\n\t\t\tstyle=\"width: 100%\"\n\t\t>\n\t\t\t<tbody\n\t\t\tstyle=\"text-align: left;\"\n\t\t\t>\n\t\t\t\t<tr>\n\t\t\t\t\t<td\n\t\t\t\t\t\tclass=\"email-content-block copy\"\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\t\t\tpadding-top: 30px;\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<h2\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t\t0.3rem 0;\n\t\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\tcolor: #011431;\n\t\t\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tDear " + (businessName && utils_1.toTitleCase(businessName)) + ",\n\t\t\t\t\t\t\t<!---->\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tmargin-bottom: 1.5rem;\n\t\t\t\t\t\t\t\tmargin-top: 0.4rem;\n\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\tcolor: #011431;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\tHere is a quick\n\t\t\t\t\treminder, Repay\n\t\t\t\t\tearly to unlock\n\t\t\t\t\tadditional points to\n\t\t\t\t\tyour credit score\n\t\t\t\t\tand increase your\n\t\t\t\t\tchances of getting\n\t\t\t\t\tan increase in your\n\t\t\t\t\tnext offer. <br />\n\n\t\t\t\t\tCheers.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p\n\t\t\t\t\tstyle=\"\n\t\t\t\t\t\tmargin-bottom: 0.3rem;\n\t\t\t\t\t\tmargin-top: 1.5rem;\n\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\tcolor: #011431;\n\t\t\t\t\t\"\n\t\t\t\t>\n\t\t\t\tClick the button below to sign in and repay now, or repay using the dedicated account number above.\n\t\t\t\t</p>\n\t\t\t\t<p\n\t\t\t\talign=\"center\"\n\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t>\n\t\t\t\t<a\n\t\t\t\tstyle=\"margin-bottom: 1.5rem;\n\t\t\t\tmargin-top: 0.5rem\n\t\t\t\t\"\n\t\t\t\thref=" + process.env._APP_URL + "\n\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t>Sign In</a\n\t\t\t\t>\n\t\t\t</p>\n\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t\t<!------------- Body Section ------------->\n\t\t\t\t\t<div class=\"invoice-box\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr class=\"heading\">\n\t\t\t\t\t\t\t\t<td>Repayment Account Details</td>\n\t\n\t\t\t\t\t\t\t\t<td>Value</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t\t\t<td>Account Name</td>\n\t\n\t\t\t\t\t\t\t\t<td>" + repaymentBankAccountName + "</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t\t\t<td>Account Number</td>\n\t\n\t\t\t\t\t\t\t\t<td>" + repaymentBankAccountNumber + "</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t\t\t<td>Bank Name</td>\n\t\n\t\t\t\t\t\t\t\t<td>" + repaymentBank + "</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t<!------------- End of Body Section ------------->\n\t\t\t\t <!------------- Bottom Section ------------->\n\n\t\t\t\t\t<table\n\t\t\t\t\t>\n\n\t\t\t\t   <tr >\n\n\t\t\t\t   <div\n\t\t\t\t   style=\"\n\t\t\t\t   text-align: center;\n\t\t\t\t   \"\n\t\t\t\t   >\n\t\t\t\t\t \n\t\t\t\t   </div>\n\t\t\t\t\t\t<!------------- End of Bottom Section ------------->\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"padding-break\"\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\tmargin-top: 30px;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t></div>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t</td>\n</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = earlyRepaymentReminder;


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var disbursalFailure = function (_a) {
    var businessName = _a.businessName, loanAmount = _a.loanAmount;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Ferror.png?alt=media&token=1bfc3428-cf41-490c-94b1-1ea9f10ed8ac\"\n        />\n        </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: left;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                        Hello Payhippo SuperStar,\n\n\n                        \n                            <!---->\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.8;\n                                color: #011431;\n                            \"\n                        >\n                    \n\n                        " + loanAmount + " disbursed to " + businessName + " failed or is reversed\n                        </p>\n                             \n            \n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                    \n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n\n                   <div\n                   style=\"\n                   text-align: center;\n                   \"\n                   >\n\n                       \n              \n                 \n                   </div>\n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n                            \"\n                        ></div>\n                </tr>\n            </table>\n    </td>\n</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = disbursalFailure;


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var guarantorAccepted = function (_a) {
    var businessName = _a.businessName;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fwelcome.png?alt=media&token=9ca60252-57ab-4970-a9c4-787ff726b0aa\"\n        />\n        </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: center;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        \n                    <h3\n                    style=\"\n                        margin: 0 0\n                            0.3rem 0;\n                        line-height: 1.25;\n                        font-family: 'Inter', 'Avenir Next',\n                            'Avenir',\n                            'Helvetica',\n                            sans-serif !important;\n                        color: #011431;\n                        font-size: 1.3rem;\n                        font-weight: 500;\n                        font-style: normal;\n                    \"\n                >\n                Customer, " + businessName + " has met the guarantor requirement.\n                    <!---->\n                </h3>\n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                    \n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n\n                   <div\n                   style=\"\n                   text-align: center;\n                   \"\n                   >\n\n                   </div>\n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n                            \"\n                        ></div>\n                </tr>\n            </table>\n    </td>\n</tr>\n";
    return base_1.default(emailBody);
};
exports.default = guarantorAccepted;


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var guarantorNotAccepted = function (_a) {
    var businessName = _a.businessName, guarantorsNotSigned = _a.guarantorsNotSigned;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Ferror.png?alt=media&token=1bfc3428-cf41-490c-94b1-1ea9f10ed8ac\"\n        />\n        </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: left;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                               \n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                        Hello " + (businessName && utils_1.toTitleCase(businessName)) + ",\n\n                        \n                            <!---->\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.8;\n                                color: #011431;\n                            \"\n                        >\n                        <p\n                        style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.4;\n                            \"\n                        >\n\n                            " + guarantorsNotSigned + " has not responded to our message and hence delays your funds.\n                            <span\n                            style=\"\n                            margin-bottom: 1.5rem;\n                            margin-top: 0.4rem;\n                            font-family: 'Inter', 'Avenir Next',\n                                        'Avenir',\n                                        'Helvetica',\n                                        sans-serif !important;\n                            font-weight: 400;\n                            font-size: 16px;\n                            line-height: 1.4;\n                        \"\n                            >\n                                \n                                Please, reach out to them.\n                            </span>\n                        </p>\n                        \n\n                        \n                        <p\n                        style=\"\n                        margin-bottom: 15px;\n              \n                        font-weight: 400;\n                        font-size: 16px;\n                        line-height: 1.5;\n                        color: #333e48;\n                        \"\n                        >\n                        Have questions about the Payhippo? We\u2019d love to help. <br />\n                        You can reach us at hello@payhippo.ng or visit us at \n                        <a\n                           href=\"https://payhippo.ng\"\n                          \n                           target=\"_blank\"\n                           >payhippo.ng</a\n                           >.\n                     </p>\n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                    \n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n\n                   <div\n                   style=\"\n                   text-align: center;\n                   \"\n                   >\n\n                       \n              \n                      \n                   </div>\n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n                            \"\n                        ></div>\n                </tr>\n            </table>\n    </td>\n</tr>\n\t";
    return base_1.default(emailBody);
};
exports.default = guarantorNotAccepted;


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var guarantorRequest = function (props) {
    var guarantorName = props.guarantorName, businessOwnerName = props.businessOwnerName, businessName = props.businessName, guarantorUrl = props.guarantorUrl;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n    <img\n    class=\"hero-image\"\n    src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fguarantor_new.png?alt=media&token=0c60762c-93d8-47c9-a18a-4248aa9706ac\"\n/>\n   </div>\n     \n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: left;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n\t\t\t\t\t\tHello\n\t\t\t\t\t\t<!---->\n\t\t\t\t\t\t" + (guarantorName && utils_1.toTitleCase(guarantorName)) + ",\n\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.8;\n                                color: #011431;\n                            \"\n                        >\n                        <p\n                        style=\"line-height: 1.4; font-size: 16px;\"\n                        \n                        >\n\n                        " + businessOwnerName + " from " + businessName + " has asked you to be a Guarantor for his business loan request with Payhippo.\n                        </p>\n                        <p\n                        style=\"line-height: 1.4; font-size: 16px;\"\n                        >\n                        If there is a default and we cannot contact " + businessOwnerName + ", we will contact you\n                        to assist in the\n                        loan repayment and recovery process.\n                        </p>\n                        <p\n                        style=\"line-height: 1.4; font-size: 16px;\"\n                        >\n                        If you accept, please click on the button below to move forward with his request\n                        </p>\n                        \n                             \n                        <p\n                        align=\"center\"\n                        class=\"btn btn-primary\"\n                    >\n                        <a\n                        href=\"" + guarantorUrl + "\"\n                            target=\"_blank\"\n                            >Accept</a\n                        >\n                    </p>\n                        \n                    <p\n                     style=\"\n                     margin-bottom: 15px;\n           \n                     font-weight: 400;\n                     font-size: 16px;\n                     line-height: 1.5;\n                     color: #333e48;\n                     \"\n                     >\n                     Have questions about the Payhippo? We\u2019d love to help. <br />\n                     You can reach us at hello@payhippo.ng or visit us at \n                     <a\n                        href=\"https://payhippo.ng\"\n                       \n                        target=\"_blank\"\n                        >payhippo.ng</a\n                        >.\n                  </p>\n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                    \n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n\n                   <div\n                   style=\"\n                   text-align: center;\n                   \"\n                   >\n\n                       \n              \n                    \n                   </div>\n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n                            \"\n                        ></div>\n                </tr>\n            </table>\n    </td>\n</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = guarantorRequest;


/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var metricsCsv = function (date) {
    var emailBody = "\n\t<tr>\n\t<td>\n    <div class=\"text-center\">\n\t<img\n\t\tclass=\"hero-image\"\n\t\tsrc=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Femail-sent.png?alt=media&token=e62bbb85-9ca0-484e-8057-3a6310ffe536\"\n\t/>\n\t</div>\n</td>\n</tr>\n<tr>\n\t<td\n\t\tclass=\"email-content\"\n\t\tstyle=\"background-color: #ffffff\"\n\t>\n\t\t<table\n\t\t\talign=\"center\"\n\t\t\tborder=\"0\"\n\t\t\tcellpadding=\"0\"\n\t\t\tcellspacing=\"0\"\n\t\t\tstyle=\"width: 100%\"\n\t\t>\n\t\t\t<tbody\n\t\t\tclass=\"center\"\n\t\t\t>\n\t\t\t\t<tr>\n\t\t\t\t\t<td\n\t\t\t\t\t\tclass=\"email-content-block copy\"\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\t\t\tpadding-top: 50px;\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t<h1\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t0.9rem 0;\n\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\tfont-family:'Inter','Avenir Next',\n\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\tfont-size: 1.3rem;\n\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\tHello Fatou,\n\t\t\t\t\t</h1>\n\t\t\t\t\t<h2\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t0.5rem 0;\n\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\tfont-size: 1.3rem;\n\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\tAttached below,\n\t\t\t\t\t</h2>\n\t\t\t\t\t<p\n\t\t\t\t\tstyle=\"\n\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\"\n\t\t\t\t>Metrics Data for, " + date + ".\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"padding-break\"\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\tmargin-top: 50px;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t></div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</td>\n</tr>\n";
    return base_1.default(emailBody);
};
exports.default = metricsCsv;


/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var newOpportunity = function (_a) {
    var accountManagerName = _a.accountManagerName, name = _a.name, partnerName = _a.partnerName, url = _a.url;
    var emailBody = "\n   <tr>\n    <td>\n    <div class=\"text-center\">\n       <img\n          class=\"hero-image\"\n          src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fgoal.png?alt=media&token=d05ea004-b5ec-4838-9729-89ef3f87f2a7\"\n          />\n          </div>\n    </td>\n </tr>\n <tr>\n <td\n    class=\"email-content\"\n    style=\"background-color: #ffffff\"\n    >\n    <tr>\n        <td>\n\n            <table\n               align=\"center\"\n               border=\"0\"\n               cellpadding=\"0\"\n               cellspacing=\"0\"\n               style=\"width: 100%\"\n               >\n               <tbody\n                  style=\"text-align: justify;\"\n                  >\n                  <tr>\n                     <td\n                        class=\"email-content-block copy\"\n                        style=\"\n\n                        padding-left: 25px;\n                        padding-right: 25px;\n                        padding-top: 30px;\n                        \"\n                        >\n                        <h2\n                           style=\"\n                           margin: 0 0\n                           0.3rem 0;\n                           line-height: 1.25;\n\n                           color: #011431;\n                           font-size: 1.5rem;\n                           font-weight: 500;\n                           font-style: normal;\n                           \"\n                           >\n                           Hello\n                           <!---->\n                           " + (name && utils_1.toTitleCase(name)) + ",\n                        </h2>\n                        <p\n                           style=\"\n                           margin-bottom: 1.5rem;\n                           margin-top: 0.4rem;\n\n                           font-weight: 400;\n                           font-size: 16px;\n                           line-height: 1.5;\n                           color: #011431;\n                           \"\n                           >\n                           " + (partnerName
        ? "In\n                           partnership with\n                           " + partnerName + ", we"
        : accountManagerName + " has invited you to get onboard. We") + " are excited\n                           to provide your\n                           small business with\n                           the funds it needs\n                           to grow. Please\n                           click on the button\n                           below to officially\n                           get the process\n                           started.\n                        </p>\n                     </td>\n                  </tr>\n               </tbody>\n            </table>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <table\n            style=\"width: 100%\"\n               >\n\n              <tbody>\n               <tr >\n                  <td\n                     class=\"email-content-block copy\"\n                     style=\"\n                     text-align: center;\n                     width: 100%;\n                     \"\n                     >\n                     <p\n                        style=\"\n                        line-height: 1.5;\n                        color: #1123AB;\n                        font-size: 16px;\n                        \"\n                        >\n                        Important: No processing fee(\u20A60) is required to sign up with us.\n                     </p>\n                     <p\n                        align=\"center\"\n                        class=\"btn btn-primary\"\n                        >\n                        <a\n                           href=\"" + url + "\"\n                           target=\"_blank\"\n                           >Get Started</a\n                           >\n                     </p>\n\n                  </td>\n                  <!------------- End of Bottom Section ------------->\n\n               </tr>\n            </tbody>\n\n            </table>\n\n        </td>\n    </tr>\n    <tr>\n        <div\n        class=\"padding-break\"\n        style=\"\n\n        margin-top: 30px;\n        \"\n        ></div>\n    </tr>\n    <!------------- Body Section ------------->\n    <!------------- End of Body Section ------------->\n    <!------------- Bottom Section ------------->\n</td>\n</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = newOpportunity;


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var otpTemplate = function (_a) {
    var otp = _a.otp, receiverName = _a.receiverName;
    var emailBody = "\n\t<tr>\n     <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Femail-sent.png?alt=media&token=e62bbb85-9ca0-484e-8057-3a6310ffe536\"\n        />\n        </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: center;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                            Hello \t" + (receiverName && utils_1.toTitleCase(receiverName)) + ",\n                            <!---->\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.5;\n                                color: #011431;\n                            \"\n                        >\n                        Here is your One Time Password\n                            <b\n                                ><h2\n                                    style=\"\n                                        margin: 0\n                                            0\n                                            0.8rem\n                                            0;\n                                        line-height: 1.25;\n                                        font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                        color: #0A198E;\n                                        font-size: 3rem;\n                                        font-weight: bold;\n                                        font-style: normal;\n                                    \"\n                                >\n\t\t\t\t\t\t\t\t" + otp + "\n                                </h2></b\n                            >\n                        </p>\n\n                        <p\n                            style=\"\n                                margin-bottom: 0.3rem;\n                                margin-top: 1.5rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.5;\n                                color: #011431;\n                            \"\n                        >\n                            Please note that it\n                            will expire in 5\n                            minutes.\n                        </p>\n                       \n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n                            \"\n                        ></div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </td>\n</tr>\n\n";
    return base_1.default(emailBody);
};
exports.default = otpTemplate;


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var overdueNotice = function (props) {
    var businessName = props.businessName, firstName = props.firstName, loanAmount = props.loanAmount, lastName = props.lastName, referenceNumber = props.referenceNumber, repaymentAmount = props.repaymentAmount, repaymentDate = props.repaymentDate;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Foverdue-2.png?alt=media&token=cd2b9431-b622-4032-b0f1-f4afbccaabf6\"\n        />\n    </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: left;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                        Hello Payhippo SuperStar,\n                            <!---->\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.5;\n                                color: #011431;\n                            \"\n                        >\n                        " + (firstName + " " + lastName || businessName) + "'s loan is over due.\n\n                        <br />\n                        <br />\n                        Below is the loan detail\n                    </p>\n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                    <div class=\"invoice-box\">\n                        <table>\n                            <tr class=\"heading\">\n                                <td>Loan Details</td>\n\n                                <td>Unit/Value</td>\n                            </tr>\n                            <tr class=\"item\">\n                                <td>Amount</td>\n\n                                <td>" + loanAmount + "</td>\n                            </tr>\n                        \n                            <tr class=\"item\">\n                                <td>Repayment Amount</td>\n\n                                <td>" + repaymentAmount + "</td>\n                            </tr>\n\n                            <tr class=\"item last\">\n                                <td>Repayment Due Date</td>\n\n                                <td>" + repaymentDate + "</td>\n                            </tr>\n                            <tr class=\"item\">\n                                <td>Reference Number</td>\n\n                                <td>" + referenceNumber + "</td>\n                            </tr>\n                    </div>\n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n\n                  \n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n;\n                            \"\n                        ></div>\n                </tr>\n            </table>\n        </table>\n    </td>\n</tr>\n\t";
    return base_1.default(emailBody);
};
exports.default = overdueNotice;


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var passwordReset = function (props) {
    var firstName = props.firstName, lastName = props.lastName, email = props.email, url = props.url;
    var emailBody = "\n\t\t<tr>\n\t\t<td>\n\t\t<div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Femail-sent.png?alt=media&token=e62bbb85-9ca0-484e-8057-3a6310ffe536\"\n        />\n\t\t</div>\n    </td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td\n\t\t\t\tclass=\"email-content\"\n\t\t\t\tstyle=\"background-color: #ffffff\"\n\t\t\t>\n\t\t\t\t<table\n\t\t\t\t\talign=\"center\"\n\t\t\t\t\tborder=\"0\"\n\t\t\t\t\tcellpadding=\"0\"\n\t\t\t\t\tcellspacing=\"0\"\n\t\t\t\t\tstyle=\"width: 100%\"\n\t\t\t\t>\n\t\t\t\t\t<tbody\n\t\t\t\t\tclass=\"center\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td\n\t\t\t\t\t\t\t\tclass=\"email-content-block copy\"\n\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\tfont-family: 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\t\t\t\t\tpadding-top: 50px;\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<h2\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t\t\t\t0.5rem 0;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tHello\n\t\t\t\t\t\t\t\t\t<!---->\n\t\t\t\t\t\t\t\t\t" + (firstName && utils_1.toTitleCase(firstName)) + " " + (lastName && utils_1.toTitleCase(lastName)) + ",\n\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>\n                                    For security sake, password reset is requested every 3 months.\n                                    Please click to reset your Payhippo password for your " + email + " account.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\talign=\"center\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\thref=\"" + url + "\"\n\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t\t\t\t\t\t>Reset Password</a\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\t\t\t\t\tfont-family:'Inter' 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tCheers.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tclass=\"padding-break\"\n\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\tmargin-top: 30px;\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = passwordReset;


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var paymentAudit = function (_a) {
    var date = _a.date;
    var emailBody = "\n\t<tr>\n\t<td>\n    <div class=\"text-center\">\n\t<img\n\t\tclass=\"hero-image\"\n\t\tsrc=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Femail-sent.png?alt=media&token=e62bbb85-9ca0-484e-8057-3a6310ffe536\"\n\t/>\n\t</div>\n</td>\n</tr>\n<tr>\n\t<td\n\t\tclass=\"email-content\"\n\t\tstyle=\"background-color: #ffffff\"\n\t>\n\t\t<table\n\t\t\talign=\"center\"\n\t\t\tborder=\"0\"\n\t\t\tcellpadding=\"0\"\n\t\t\tcellspacing=\"0\"\n\t\t\tstyle=\"width: 100%\"\n\t\t>\n\t\t\t<tbody\n\t\t\tclass=\"center\"\n\t\t\t>\n\t\t\t\t<tr>\n\t\t\t\t\t<td\n\t\t\t\t\t\tclass=\"email-content-block copy\"\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\t\t\tpadding-top: 50px;\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t<h1\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t0.9rem 0;\n\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\tfont-family:'Inter','Avenir Next',\n\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\tfont-size: 1.3rem;\n\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\tHello Engineering,\n\t\t\t\t\t</h1>\n\t\t\t\t\t<h2\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t0.5rem 0;\n\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\tfont-size: 1.3rem;\n\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\tAttached below,\n\t\t\t\t\t</h2>\n\t\t\t\t\t<p\n\t\t\t\t\tstyle=\"\n\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\"\n\t\t\t\t>Payment Audit for, " + date + ".\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"padding-break\"\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\tmargin-top: 50px;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t></div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</td>\n</tr>\n";
    return base_1.default(emailBody);
};
exports.default = paymentAudit;


/***/ }),
/* 58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var recollection = function (_a) {
    var businessOwnerName = _a.businessOwnerName;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Foverdue-2.png?alt=media&token=cd2b9431-b622-4032-b0f1-f4afbccaabf6\"\n        />\n    </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: center;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                        Dear " + (businessOwnerName && utils_1.toTitleCase(businessOwnerName)) + ",\n                            <!---->\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.5;\n                                color: #011431;\n                            \"\n                        >\n                        Your loan is currently overdue. We are sending you this mail to notify you that our recollections team will contact you soon on how to begin the repayment of your loan.\n\n                    \n                    </p>\n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                   \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n\n                   <div\n                   style=\"\n                   text-align: center;\n                   \"\n                   >\n\n                   </div>\n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 20px;\n                            \"\n                        ></div>\n                </tr>\n            </table>\n        </table>\n    </td>\n</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = recollection;


/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var recollectionPayment = function (props) {
    var businessName = props.businessName, loanAmount = props.loanAmount, paymentAmount = props.paymentAmount, remainingPrincipal = props.remainingPrincipal, repaymentDate = props.repaymentDate, paymentDate = props.paymentDate;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Foverdue-2.png?alt=media&token=cd2b9431-b622-4032-b0f1-f4afbccaabf6\"\n        />\n    </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: left;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                        Hello Payhippo SuperStar,\n                            <!---->\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.5;\n                                color: #011431;\n                            \"\n                        >\n                        " + businessName + "'s has made payment for their loan in recollection.\n\n                        <br />\n                        <br />\n                        Below is the loan detail\n                    </p>\n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                    <div class=\"invoice-box\">\n                        <table>\n                            <tr class=\"heading\">\n                                <td>Loan Details</td>\n\n                                <td>Unit/Value</td>\n                            </tr>\n                            <tr class=\"item\">\n                                <td>Amount</td>\n\n                                <td>" + utils_1.formatCurrency(loanAmount) + "</td>\n                            </tr>\n                        \n                            <tr class=\"item\">\n                                <td>Payment Amount</td>\n\n                                <td>" + utils_1.formatCurrency(paymentAmount) + "</td>\n                            </tr>\n                        \n                            <tr class=\"item\">\n                                <td>Payment Date</td>\n\n                                <td>" + paymentDate + "</td>\n                            </tr>\n                        \n                            <tr class=\"item\">\n                                <td>Remaining Principal</td>\n\n                                <td>" + utils_1.formatCurrency(remainingPrincipal) + "</td>\n                            </tr>\n\n                            <tr class=\"item last\">\n                                <td>Repayment Due Date</td>\n\n                                <td>" + repaymentDate + "</td>\n                            </tr>\n                    </div>\n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n\n                  \n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n;\n                            \"\n                        ></div>\n                </tr>\n            </table>\n        </table>\n    </td>\n</tr>\n\t";
    return base_1.default(emailBody);
};
exports.default = recollectionPayment;


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var referenceAssociation = function (props) {
    var associationMemberName = props.associationMemberName, businessOwnerName = props.businessOwnerName, businessName = props.businessName, associationName = props.associationName, referenceUrl = props.referenceUrl;
    var emailBody = "\n\t<tr>\n\t<td>\n    <div class=\"text-center\">\n\t   <img\n\t\t   class=\"hero-image\"\n\t\t   src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Femail-sent.png?alt=media&token=e62bbb85-9ca0-484e-8057-3a6310ffe536\"\n\t   />\n\t</div>\n   </td>\n</tr>\n\t\t<tr>\n\t\t\t<td\n\t\t\t\tclass=\"email-content\"\n\t\t\t\tstyle=\"background-color: #ffffff\"\n\t\t\t>\n\t\t\t\t<table\n\t\t\t\t\talign=\"center\"\n\t\t\t\t\tborder=\"0\"\n\t\t\t\t\tcellpadding=\"0\"\n\t\t\t\t\tcellspacing=\"0\"\n\t\t\t\t\tstyle=\"width: 100%\"\n\t\t\t\t>\n\t\t\t\t\t<tbody\n\t\t\t\t\tclass=\"center\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td\n\t\t\t\t\t\t\t\tclass=\"email-content-block copy\"\n\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\t\t\t\t\tpadding-top: 50px;\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<h2\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t\t\t\t0.5rem 0;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tHello\n\t\t\t\t\t\t\t\t\t<!---->\n\t\t\t\t\t\t\t\t\t" + (associationMemberName && utils_1.toTitleCase(associationMemberName)) + ",\n\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t" + (businessOwnerName && utils_1.toTitleCase(businessOwnerName)) + "\n\t\t\t\t\t\t\t\t\tfrom " + (businessName && utils_1.toTitleCase(businessName)) + " is part of your association " + (associationName && utils_1.toTitleCase(associationName)) + "\n\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>\n                                We will like you to tell us about their personality, credit worthiness and contributions towards your association growth.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\talign=\"center\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\thref=\"" + referenceUrl + "\"\n\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t\t\t\t\t\t>Accept</a\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tHave questions about the Payhippo? We\u2019d love to help. </br>\n\t\t\t\t\t\t\t\tYou can reach us at hello@payhippo.ng or visit us at \n\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\thref=\"https://payhippo.ng\"\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t\t\t\t\t\t>payhippo.ng</a\n\t\t\t\t\t\t\t\t\t>.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\tclass=\"padding-break\"\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tmargin-top: 50px;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = referenceAssociation;


/***/ }),
/* 61 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var reference = function (_a) {
    var businessOwnerName = _a.businessOwnerName, firstName = _a.firstName, referenceUrl = _a.referenceUrl;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n    <img\n    class=\"hero-image\"\n    src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fguarantor_new.png?alt=media&token=0c60762c-93d8-47c9-a18a-4248aa9706ac\"\n/>\n   </div>\n     \n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: left;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n\t\t\t\t\t\tHello\n\t\t\t\t\t\t<!---->\n\t\t\t\t\t\t" + (firstName && utils_1.toTitleCase(firstName)) + ",\n\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.8;\n                                color: #011431;\n                            \"\n                        >\n                        <p\n                        style=\"line-height: 1.4; font-size: 16px;\"\n                        \n                        >\n\n                        " + businessOwnerName + " has submitted your details as a referee with Payhippo.\n                        </p>\n                        <p\n                        style=\"line-height: 1.4; font-size: 16px;\"\n                        >\n                        We would like your to confirm if the details submitted are accurate.\n                        </p>\n                        <p\n                        style=\"line-height: 1.4; font-size: 16px;\"\n                        >\n                        If you accept, please click on the button below to move forward with this request\n                        </p>\n                        \n                             \n                        <p\n                        align=\"center\"\n                        class=\"btn btn-primary\"\n                    >\n                        <a\n                        href=\"" + referenceUrl + "\"\n                            target=\"_blank\"\n                            >Accept</a\n                        >\n                    </p>\n                        \n                    <p\n                     style=\"\n                     margin-bottom: 15px;\n           \n                     font-weight: 400;\n                     font-size: 16px;\n                     line-height: 1.5;\n                     color: #333e48;\n                     \"\n                     >\n                     Have questions about the Payhippo? We\u2019d love to help. <br />\n                     You can reach us at hello@payhippo.ng or visit us at \n                     <a\n                        href=\"https://payhippo.ng\"\n                       \n                        target=\"_blank\"\n                        >payhippo.ng</a\n                        >.\n                  </p>\n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                    \n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n\n                   <div\n                   style=\"\n                   text-align: center;\n                   \"\n                   >\n\n                       \n              \n                    \n                   </div>\n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n                            \"\n                        ></div>\n                </tr>\n            </table>\n    </td>\n</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = reference;


/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var referral = function (props) {
    var _a = props.referralName, referralName = _a === void 0 ? 'there' : _a, signUpUrl = props.signUpUrl, invitedBy = props.invitedBy, invitedByFullName = props.invitedByFullName, referralCode = props.referralCode;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Femail-sent.png?alt=media&token=e62bbb85-9ca0-484e-8057-3a6310ffe536\"\n        />\n    </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: center;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                            Hello " + (referralName && utils_1.toTitleCase(referralName)) + ",\n                            <!---->\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.5;\n                                color: #011431;\n                            \"\n                        >\n\n\t\t\t\t\t\t" + invitedByFullName + " from " + invitedBy + " has referred you for \n                        \n                        <span style=\"\">\n\n                    \n                            \n                            <a href=\"https://payhippo.ng\"\n                            target=\"_blank\"\n                            >\n                            \n                                Payhippo\n                            </a>\n                        </span>\n\n                        </p>\n\n                         <p\n                            style=\"\n                                margin-bottom: 1rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.5;\n                                color: #011431;\n                            \"\n                        >\n                        You can use " + referralName + "'s referral code below to signup \n                            <b\n                                ><h2\n                                    style=\"\n                                        margin: 0\n                                            0\n                                            0.8rem\n                                            0;\n                                        line-height: 1.25;\n                                        font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                        color: #0A198E;\n                                        font-size: 3rem;\n                                        font-weight: bold;\n                                        font-style: normal;\n                                    \"\n                                >\n\t\t\t\t\t\t\t\t" + referralCode + "\n                                </h2></b\n                            >\n                        </p>\n\n                        <p>\n                        or Click on the button below to get started\n                        </p>\n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                   \n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    width=\"100%\"\n                    >\n\n                   <tr >\n\n                   <div\n                   style=\"\n                   text-align: center;\n                   \"\n                   >\n\n                       <p\n                       align=\"center\"\n                       class=\"btn btn-primary\"\n                       style=\"margin-top:1rem\"\n                   >\n                       <a\n                       href=\"" + signUpUrl + "\"\n                           target=\"_blank\"\n                           >Get Started</a\n                       >\n                   </p>\n\n            \n                   </div>\n                        <!------------- End of Bottom Section ------------->\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n                            \"\n                        ></div>\n                </tr>\n            </table>\n        </table>\n    </td>\n</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = referral;


/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var reminder = function (props) {
    var referenceNumber = props.referenceNumber, businessOwnerName = props.businessOwnerName, dateDifferenceInDays = props.dateDifferenceInDays, loanAmount = props.loanAmount, repaymentAmount = props.repaymentAmount, repaymentDate = props.repaymentDate, repaymentBankAccountName = props.repaymentBankAccountName, repaymentBankAccountNumber = props.repaymentBankAccountNumber, repaymentBank = props.repaymentBank;
    var emailBody = "\n    <tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Freminder.png?alt=media&token=30a86ed6-25bd-4824-8205-3832406fb93c\"\n        />\n        </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: center;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                            Hello " + (businessOwnerName && utils_1.toTitleCase(businessOwnerName)) + ",\n\n                            <!---->\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.5;\n                                color: #011431;\n                            \"\n                        >\n\t\t\t\t\t\t\n                        This is a gentle reminder that your business loan with Payhippo is due " + (dateDifferenceInDays === 1
        ? ' tomorrow'
        : ' on ' +
            repaymentDate +
            (", which is " + dateDifferenceInDays + " days from today.")) + "\n\n                        <br />\n                        <br />\n                        Below is your outstanding loan details.\n                    </p>\n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                    <div class=\"invoice-box\">\n                        <table>\n                            <tr class=\"heading\">\n                                <td>Loan Details</td>\n\n                                <td>Unit/Value</td>\n                            </tr>\n                            <tr class=\"item\">\n                                <td>Amount</td>\n\n                                <td>" + loanAmount + "</td>\n                            </tr>\n                          \n                            <tr class=\"item\">\n                                <td>Repayment Amount</td>\n\n                                <td>" + repaymentAmount + "</td>\n                            </tr>\n\n                            <tr class=\"item last\">\n                                <td>Repayment Due Date</td>\n\n                                <td>" + repaymentDate + "</td>\n                            </tr>\n                            <tr class=\"item\">\n                                <td>Reference Number</td>\n\n                                <td>" + referenceNumber + "</td>\n                            </tr>\n                            </table>\n                    </div>\n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n\n                   <td\n                   class=\"email-content-block\"\n                       \n                   style=\"\n                   text-align: center;\n                   \"\n                   >\n\n                       <p\n                       align=\"center\"\n                       class=\"btn btn-primary\"\n                   >\n                       <a\n\t\t\t\t\t   href=" + process.env._APP_URL + "\n                           target=\"_blank\"\n                           >Sign In</a\n                       >\n                   </p>\n\n                   <p\n                      \n                   style=\"\n                       margin-bottom:1.5rem;\n                       margin-top: 1.5rem;\n                       font-family: 'Inter', 'Avenir Next',\n                                   'Avenir',\n                                   'Helvetica',\n                                   sans-serif !important;\n                       font-weight: 400;\n                       font-size: 16px;\n                       line-height: 1.5;\n                       color: #011431;\n                   \"\n               >\n               Sign In today and repay to get a discount and bonus points added to your credit score allowing you access more money from Payhippo this month.\n               </p>\n\t\t\t   <div class=\"invoice-box\"\n               style=\"margin-top: 0.5rem;\n                    padding-left: 0;\n                      padding-right: 0;\n                      \"\n               >\n\t\t\t\t<table>\n\t\t\t\t\t<tr class=\"heading\">\n\t\t\t\t\t\t<td>Repayment Account Details</td>\n\t\t\t\t\t\t<td>Value</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t<td>Account Name</td>\n\t\t\t\t\t\t<td>" + repaymentBankAccountName + "</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t<td>Account Number</td>\n\t\t\t\t\t\t<td>" + repaymentBankAccountNumber + "</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"item\">\n\t\t\t\t\t\t<td>Bank Name</td>\n\t\t\t\t\t\t<td>" + repaymentBank + "</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n                     \n                   </td>\n                        <!------------- End of Bottom Section ------------->\n                     \n                </tr>\n            </table>\n            <div\n            class=\"padding-break\"\n            style=\"\n                font-family: 'Inter', 'Avenir Next',\n                    'Avenir',\n                    'Helvetica',\n                    sans-serif !important;\n                margin-top: 30px;\n            \"\n        ></div>\n    </td>\n</tr>\n";
    return base_1.default(emailBody);
};
exports.default = reminder;


/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var repaymentInvoice = function (props) {
    var _a = props.addStatementFee, addStatementFee = _a === void 0 ? false : _a, actualLoanDuration = props.actualLoanDuration, businessName = props.businessName, businessAddress = props.businessAddress, disbursementDate = props.disbursementDate, duration = props.duration, repaymentDate = props.repaymentDate, loanAmount = props.loanAmount, repaymentAmount = props.repaymentAmount, totalPaymentAmount = props.totalPaymentAmount, originalFeeAmount = props.originalFeeAmount, referenceNumber = props.referenceNumber, disbursedOverpaidAmount = props.disbursedOverpaidAmount, statementProcessingFee = props.statementProcessingFee, lateFees = props.lateFees;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Frepayment.png?alt=media&token=9b5ddca0-4e7f-47ba-a7be-1e65862d0360\"\n        />\n    </div>\n    </td>\n</tr>\n<tr>\n    <td\n        class=\"email-content\"\n        style=\"background-color: #ffffff\"\n    >\n        <table\n            align=\"center\"\n            border=\"0\"\n            cellpadding=\"0\"\n            cellspacing=\"0\"\n            style=\"width: 100%\"\n        >\n            <tbody\n            style=\"text-align: center;\"\n            >\n                <tr>\n                    <td\n                        class=\"email-content-block copy\"\n                        style=\"\n                            font-family: 'Inter', 'Avenir Next',\n                                'Avenir',\n                                'Helvetica',\n                                sans-serif !important;\n                            padding-left: 25px;\n                            padding-right: 25px;\n                            padding-top: 30px;\n                        \"\n                    >\n                        <h2\n                            style=\"\n                                margin: 0 0\n                                    0.3rem 0;\n                                line-height: 1.25;\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                color: #011431;\n                                font-size: 1.5rem;\n                                font-weight: 500;\n                                font-style: normal;\n                            \"\n                        >\n                            Hello \t" + (businessName && utils_1.toTitleCase(businessName)) + ",\n                            <!---->\n                        </h2>\n                        <p\n                            style=\"\n                                margin-bottom: 1.5rem;\n                                margin-top: 0.4rem;\n                                font-family: 'Inter', 'Avenir Next',\n                                            'Avenir',\n                                            'Helvetica',\n                                            sans-serif !important;\n                                font-weight: 400;\n                                font-size: 16px;\n                                line-height: 1.5;\n                                color: #011431;\n                            \"\n                        >\n                        Your loan repayment has been received. Below is the loan repayment detail\n                    </p>\n                </td>\n                </tr>\n                </tbody>\n                </table>\n                    <!------------- Body Section ------------->\n                    <div class=\"invoice-box\"\n                    >\n                        <table\n                        >\n                            <tr class=\"heading\">\n                                <td>Loan Details</td>\n\n                                <td>Unit/Value</td>\n                            </tr>\n                           \n                            <tr class=\"item\">\n                                <td>Reference Number</td>\n\n                                <td>" + referenceNumber + "</td>\n                            </tr>\n                            <tr class=\"item\">\n                                <td>Disbursed Date</td>\n\n                                <td>" + disbursementDate + "</td>\n                            </tr>\n                            <tr class=\"item\">\n                                <td>Address</td>\n\n                                <td>" + businessAddress + "</td>\n                            </tr>\n\n                            <tr class=\"item\">\n                                <td>Duration</td>\n\n                                <td>\n                                    " + Math.abs(duration) + "\n                                    days\n                                </td>\n                            </tr>\n                            <tr class=\"item\">\n                                <td>\n                                    Actual Loan Duration\n                                </td>\n\n                                <td>\n                                    " + Math.abs(actualLoanDuration) + "\n                                    days\n                                </td>\n                            </tr>\n\n                            <tr class=\"item\">\n                                <td>Amount</td>\n\n                                <td>" + loanAmount + "</td>\n                            </tr>\n\n                            <tr class=\"item\">\n                                <td>Fees and Interest</td>\n                                <td>" + originalFeeAmount + "</td>\n                            </tr>\n\n                            <tr class=\"item\">\n\t\t\t\t\t\t\t\t<td>Reimbursement Amount</td>\n\t\t\t\t\t\t        <td>" + disbursedOverpaidAmount + "</td>\n\t\t\t\t\t\t\t</tr>\n\n                            <tr class=\"item\">\n\t\t\t\t\t\t\t\t<td>Late Fees</td>\n\t\t\t\t\t\t        <td>" + lateFees + "</td>\n\t\t\t\t\t\t\t</tr>\n\n                            \n\n                            " + (addStatementFee
        ? " <tr class=\"item\">\n                            <td>Statement Processing Fee</td>\n                            <td>" + statementProcessingFee + "</td>\n                        </tr> "
        : '') + "\n\n\n\t\t\t\t\t\t    <tr class=\"item\">\n\t\t\t\t\t\t\t\t<td>Revised Repayment Amount</td>\n\t\t\t\t\t\t\t\t<td>" + repaymentAmount + "</td>\n\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t<tr class=\"item last\">\n\t\t\t\t\t\t\t\t<td>Repayment Date</td>\n\t\t\t\t\t\t\t\t<td>" + repaymentDate + "</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\n\t\t\t\t\t\t\t<tr class=\"total\">\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTotal Amount Repaid:\n\t\t\t\t\t\t\t\t\t" + totalPaymentAmount + "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n                    </div>\n                    \n                <!------------- End of Body Section ------------->\n                 <!------------- Bottom Section ------------->\n\n                    <table\n                    >\n\n                   <tr >\n                        <td\n                        class=\"email-content-block copy\"\n                        >\n                        <div\n                   style=\"\n                   text-align: left;\n                   \"\n                   >\n\n                   \n\n                       <p\n                           style=\"\n                               margin-bottom: 0.3rem;\n                               margin-top: 1.5rem;\n                               font-family: 'Inter', 'Avenir Next',\n                                           'Avenir',\n                                           'Helvetica',\n                                           sans-serif !important;\n                               font-weight: 400;\n                               font-size: 16px;\n                               line-height: 1.5;\n                               color: #011431;\n                           \"\n                       >\n                       We are excited to\n                       continue fulfilling your\n                       business's financing\n                       needs. Click the request button below to apply for a new loan.\n                       </p>\n                       <p\n                       align=\"center\"\n                       class=\"btn btn-primary\"\n                   >\n                       <a\n\t\t\t\t\t   href=" + process.env._APP_URL + "\n                           target=\"_blank\"\n                           >Request</a\n                       >\n                   </p>\n                    \n                   </div>\n                        </td>\n                   \n                        <!------------- End of Bottom Section ------------->\n                        </tr>\n                        <tr>\n                        <td>\n                        <div\n                            class=\"padding-break\"\n                            style=\"\n                                font-family: 'Inter', 'Avenir Next',\n                                    'Avenir',\n                                    'Helvetica',\n                                    sans-serif !important;\n                                margin-top: 30px;\n                            \"\n                        ></div>\n                        </td>\n                        </tr>\n            </table>\n        </table>\n    </td>\n</tr>\n\t";
    return base_1.default(emailBody);
};
exports.default = repaymentInvoice;


/***/ }),
/* 65 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var request = function (_a) {
    var name = _a.name, isReturning = _a.isReturning;
    var emailBody = "\n\t<tr>\n    <td>\n    <div class=\"text-center\">\n        <img\n            class=\"hero-image\"\n            src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fgrowth.png?alt=media&token=c11d029a-7f44-4b03-bf9e-e025808aadbd\"\n        />\n    </div>\n    </td>\n</tr>\n<tr>\n\t<td class=\"email-content\" style=\"background-color: #ffffff\">\n\t  <tr>\n\t\t<td>\n\t\t  <table\n\t\t\talign=\"center\"\n\t\t\tborder=\"0\"\n\t\t\tcellpadding=\"0\"\n\t\t\tcellspacing=\"0\"\n\t\t\tstyle=\"width: 100%\"\n\t\t  >\n\t\t\t<tbody style=\"text-align: center\">\n\t\t\t  <tr>\n\t\t\t\t<td\n\t\t\t\t  class=\"email-content-block copy\"\n\t\t\t\t  style=\"\n\t\t\t\t\tfont-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',\n\t\t\t\t\t  sans-serif !important;\n\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\tpadding-top: 30px;\n\t\t\t\t  \"\n\t\t\t\t>\n\t\t\t\t  <h2\n\t\t\t\t\tstyle=\"\n\t\t\t\t\t  margin: 0 0 0.3rem 0;\n\t\t\t\t\t  line-height: 1.25;\n\t\t\t\t\t  font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',\n\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t  color: #011431;\n\t\t\t\t\t  font-size: 1.5rem;\n\t\t\t\t\t  font-weight: 500;\n\t\t\t\t\t  font-style: normal;\n\t\t\t\t\t\"\n\t\t\t\t  >\n                  Hello " + (name && utils_1.toTitleCase(name)) + ",\n\t\t\t\t\t<!---->\n\t\t\t\t  </h2>\n\t\t\t\t  <p\n\t\t\t\t\tstyle=\"\n\t\t\t\t\t  margin-bottom: 1.5rem;\n\t\t\t\t\t  margin-top: 0.4rem;\n\t\t\t\t\t  font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',\n\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t  font-weight: 400;\n\t\t\t\t\t  font-size: 16px;\n\t\t\t\t\t  line-height: 1.5;\n\t\t\t\t\t  color: #011431;\n\t\t\t\t\t\"\n\t\t\t\t  >\n                  We are excited to " + (isReturning ? 'continue providing' : 'provide') + " \n                  your small business with the funds it needs to grow.\n                  Please click on the button below to officially get the process started.\n\t\t\t\t  </p>\n\t\t\t\t</td>\n\t\t\t  </tr>\n\t\t\t</tbody>\n\t\t  </table>\n\t\t</td>\n\t  </tr>\n  \n\t  <tr>\n\t\t<td>\n\t\t  <div style=\"text-align: center\">\n\t\t\t<p align=\"center\" class=\"btn btn-primary\">\n\t\t\t  <a href=" + process.env._APP_URL + " target=\"_blank\">Get Started</a>\n\t\t\t</p>\n\t\t  </div>\n\t\t</td>\n\t  </tr>\n\t  <tr>\n\t\t<td>\n\t\t  <div\n\t\t\tclass=\"padding-break\"\n\t\t\tstyle=\"\n\t\t\t  font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',\n\t\t\t\tsans-serif !important;\n\t\t\t  margin-top: 30px;\n\t\t\t\"\n\t\t  ></div>\n\t\t</td>\n\t  </tr>\n\t  <!------------- Body Section ------------->\n  \n\t  <!------------- End of Body Section ------------->\n\t  <!------------- Bottom Section ------------->\n  \n\t  <!------------- End of Bottom Section ------------->\n\t</td>\n  </tr>\n\t";
    return base_1.default(emailBody);
};
exports.default = request;


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var returningOpportnity = function (_a) {
    var businessOwnerName = _a.businessOwnerName, newOpportunityLink = _a.newOpportunityLink;
    var emailBody = "\n\t<tr>\n\t<td>\n\t  <div class=\"text-center\">\n\t\t<img\n\t\t  class=\"hero-image\"\n\t\t  src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fgrowth.png?alt=media&token=c11d029a-7f44-4b03-bf9e-e025808aadbd\"\n\t\t/>\n\t  </div>\n\t</td>\n  </tr>\n  <tr>\n\t<td class=\"email-content\" style=\"background-color: #ffffff\">\n\t  <tr>\n\t\t<td>\n\t\t  <table\n\t\t\talign=\"center\"\n\t\t\tborder=\"0\"\n\t\t\tcellpadding=\"0\"\n\t\t\tcellspacing=\"0\"\n\t\t\tstyle=\"width: 100%\"\n\t\t  >\n\t\t\t<tbody style=\"text-align: center\">\n\t\t\t  <tr>\n\t\t\t\t<td\n\t\t\t\t  class=\"email-content-block copy\"\n\t\t\t\t  style=\"\n\t\t\t\t\tfont-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',\n\t\t\t\t\t  sans-serif !important;\n\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\tpadding-top: 30px;\n\t\t\t\t  \"\n\t\t\t\t>\n\t\t\t\t  <h2\n\t\t\t\t\tstyle=\"\n\t\t\t\t\t  margin: 0 0 0.3rem 0;\n\t\t\t\t\t  line-height: 1.25;\n\t\t\t\t\t  font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',\n\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t  color: #011431;\n\t\t\t\t\t  font-size: 1.5rem;\n\t\t\t\t\t  font-weight: 500;\n\t\t\t\t\t  font-style: normal;\n\t\t\t\t\t\"\n\t\t\t\t  >\n\t\t\t\t\tHello " + (businessOwnerName && utils_1.toTitleCase(businessOwnerName)) + ",\n\t\t\t\t\t<!---->\n\t\t\t\t  </h2>\n\t\t\t\t  <p\n\t\t\t\t\tstyle=\"\n\t\t\t\t\t  margin-bottom: 1.5rem;\n\t\t\t\t\t  margin-top: 0.4rem;\n\t\t\t\t\t  font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',\n\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t  font-weight: 400;\n\t\t\t\t\t  font-size: 16px;\n\t\t\t\t\t  line-height: 1.5;\n\t\t\t\t\t  color: #011431;\n\t\t\t\t\t\"\n\t\t\t\t  >\n\t\t\t\t\tWe are excited to provide your small business with the funds\n\t\t\t\t\tit needs to grow. Please click on the button below to\n\t\t\t\t\tofficially get the process started.\n\t\t\t\t  </p>\n\t\t\t\t</td>\n\t\t\t  </tr>\n\t\t\t</tbody>\n\t\t  </table>\n\t\t</td>\n\t  </tr>\n\n\t  <tr>\n\t\t<td>\n\t\t  <div style=\"text-align: center\">\n\t\t\t<p align=\"center\" class=\"btn btn-primary\">\n\t\t\t  <a href=\"" + newOpportunityLink + "\" target=\"_blank\">Request</a>\n\t\t\t</p>\n\t\t  </div>\n\t\t</td>\n\t  </tr>\n\t  <tr>\n\t\t<td>\n\t\t  <div\n\t\t\tclass=\"padding-break\"\n\t\t\tstyle=\"\n\t\t\t  font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',\n\t\t\t\tsans-serif !important;\n\t\t\t  margin-top: 30px;\n\t\t\t\"\n\t\t  ></div>\n\t\t</td>\n\t  </tr>\n\t  <!------------- Body Section ------------->\n\n\t  <!------------- End of Body Section ------------->\n\t  <!------------- Bottom Section ------------->\n\n\t  <!------------- End of Bottom Section ------------->\n\t</td>\n  </tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = returningOpportnity;


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var signupConfirmation = function (_a) {
    var businessOwnerName = _a.businessOwnerName;
    var emailBody = "\n\t<tr>\n\t<td>\n\t<div class=\"text-center\">\n\t\t<img\n\t\t\tclass=\"hero-image\"\n\t\t\tsrc=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fwelcome.png?alt=media&token=9ca60252-57ab-4970-a9c4-787ff726b0aa\"\n\t\t/>\n\t</div>\n\t</td>\n</tr>\n<tr>\n\t<td\n\t\tclass=\"email-content\"\n\t\tstyle=\"background-color: #ffffff\"\n\t>\n\t\t<table\n\t\t\talign=\"center\"\n\t\t\tborder=\"0\"\n\t\t\tcellpadding=\"0\"\n\t\t\tcellspacing=\"0\"\n\t\t\tstyle=\"width: 100%\"\n\t\t>\n\t\t\t<tbody\n\t\t\tstyle=\"text-align:center;\"\n\t\t\t>\n\t\t\t\t<tr>\n\t\t\t\t\t<td\n\t\t\t\t\t\tclass=\"email-content-block copy\"\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tfont-family: 'Avenir Next',\n\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\t\t\tpadding-top: 50px;\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<h2\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t\t0.5rem 0;\n\t\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\t\tfont-family: 'Inter,', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\tfont-size: 1.3rem;\n\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\tWelcome aboard Payhippo,\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t" + (businessOwnerName && utils_1.toTitleCase(businessOwnerName)) + ", your account has\n\t\t\t\t\t\t\tbeen activated. To\n\t\t\t\t\t\t\tget your business\n\t\t\t\t\t\t\tthe credit required\n\t\t\t\t\t\t\tto take it to the\n\t\t\t\t\t\t\tnext level, please\n\t\t\t\t\t\t\tclick on the button\n\t\t\t\t\t\t\tbelow.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p\n\t\t\t\t\t\t\talign=\"center\"\n\t\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\thref=" + process.env._APP_URL + "\n\t\t\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t\t\t\t>Sign In</a\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<p\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tPayhippo unlocks\n\t\t\t\t\t\t\tcredit by removing\n\t\t\t\t\t\t\tstringent collateral\n\t\t\t\t\t\t\trequirements. We do\n\t\t\t\t\t\t\tthis with our\n\t\t\t\t\t\t\tdata-driven credit\n\t\t\t\t\t\t\tscoring system to\n\t\t\t\t\t\t\tprovide same-day\n\t\t\t\t\t\t\t\uFB01nancing for SMEs.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p\n\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t  \n\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\tHave questions about the Payhippo? We\u2019d love to help. <br />\n\t\t\t\t\t\tYou can reach us at hello@payhippo.ng or visit us at \n\t\t\t\t\t\t<a\n\t\t\t\t\t\t   href=\"https://payhippo.ng\"\n\t\t\t\t\t\t  \n\t\t\t\t\t\t   target=\"_blank\"\n\t\t\t\t\t\t   >payhippo.ng</a\n\t\t\t\t\t\t   >.\n\t\t\t\t\t </p>\n\t\t\t\t\t\t<p\n\t\t\t\t\t\t\tclass=\"signout light-type\"\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\tmargin-bottom:15px;font-family:'Inter','Avenir Next','Avenir','Helvetica',sans-serif!important;font-weight:300;font-size:15px;line-height:1.5;color: #1123AB; text-align: left\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tImportant: No processing fee(\u20A60) is required to sign up with us.\n\t\t\t\t\t\t</p>\n\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"padding-break\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-top: 30px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</td>\n</tr>\n";
    return base_1.default(emailBody);
};
exports.default = signupConfirmation;


/***/ }),
/* 68 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __importDefault(__webpack_require__(34));
var utils_1 = __webpack_require__(25);
var statementReminder = function (_a) {
    var businessName = _a.businessName;
    var emailBody = "\n\t<tr>\n\t<td>\n\t<div class=\"text-center\">\n\t   <img\n\t\t   class=\"hero-image\"\n\t\t   src=\"https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fgoal.png?alt=media&token=d05ea004-b5ec-4838-9729-89ef3f87f2a7\"\n\t   />\n\t</div>\n   </td>\n</tr>\n\t\t<tr>\n\t\t\t<td\n\t\t\t\tclass=\"email-content\"\n\t\t\t\tstyle=\"background-color: #ffffff\"\n\t\t\t>\n\t\t\t\t<table\n\t\t\t\t\talign=\"center\"\n\t\t\t\t\tborder=\"0\"\n\t\t\t\t\tcellpadding=\"0\"\n\t\t\t\t\tcellspacing=\"0\"\n\t\t\t\t\tstyle=\"width: 100%\"\n\t\t\t\t>\n\t\t\t\t\t<tbody\n\t\t\t\t\tstyle=\"text-align:center\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td\n\t\t\t\t\t\t\t\tclass=\"email-content-block copy\"\n\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\tfont-family: 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\tpadding-left: 25px;\n\t\t\t\t\t\t\t\t\tpadding-right: 25px;\n\t\t\t\t\t\t\t\t\tpadding-top: 50px;\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<h2\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin: 0 0\n\t\t\t\t\t\t\t\t\t\t\t0.5rem 0;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.25;\n\t\t\t\t\t\t\t\t\t\tfont-family: 'Inter', 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tcolor: #333e48;\n\t\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tDear\n\t\t\t\t\t\t\t\t\t<!---->\n\t\t\t\t\t\t\t\t\t" + (businessName && utils_1.toTitleCase(businessName)) + ",\n\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\t\t\t\t\t\tfont-family: 'Avenir Next',\n\t\t\t\t\t\t\t\t\t\t\t'Avenir',\n\t\t\t\t\t\t\t\t\t\t\t'Helvetica',\n\t\t\t\t\t\t\t\t\t\t\tsans-serif !important;\n\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t>Kindly prepare your bank statement for your next loan application as your present loan is due in 3 days. This is to ensure the fast disbursal of your next loan\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</tr>\n\t\t";
    return base_1.default(emailBody);
};
exports.default = statementReminder;


/***/ }),
/* 69 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serviceFailure = void 0;
var serviceFailure_1 = __webpack_require__(70);
Object.defineProperty(exports, "serviceFailure", ({ enumerable: true, get: function () { return __importDefault(serviceFailure_1).default; } }));


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var serviceFailure = function (messageProps) {
    var serviceName = messageProps.serviceName, failedMethod = messageProps.failedMethod, errorMessage = messageProps.errorMessage, errorTitle = messageProps.errorTitle;
    return " \n    Service: " + serviceName + ",\n    Title: " + errorTitle + "\n    Failed Method: " + failedMethod + ",\n    Error Message: " + errorMessage + ",\n    ";
};
exports.default = serviceFailure;


/***/ }),
/* 71 */
/***/ ((module) => {

module.exports = require("@payhippo/node-service-base/dist/types");;

/***/ }),
/* 72 */
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
/* 73 */
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
var axios_1 = __importDefault(__webpack_require__(74));
var common_enums_1 = __webpack_require__(13);
var phoneNumberMessage_base_1 = __importDefault(__webpack_require__(75));
var TermiiProvider = /** @class */ (function (_super) {
    __extends(TermiiProvider, _super);
    function TermiiProvider(_a) {
        var env = _a.env, urlShortnerProvider = _a.urlShortnerProvider;
        var _this = _super.call(this, { urlShortnerProvider: urlShortnerProvider }) || this;
        _this.apiKey = env._TERMI_API_KEY;
        return _this;
    }
    TermiiProvider.prototype.getSendOptions = function (props) {
        var to = props.to, message = props.message, useDnd = props.useDnd;
        return {
            to: to,
            from: useDnd ? 'N-Alert' : 'Payhippo',
            sms: message,
            type: 'plain',
            channel: useDnd ? 'dnd' : 'generic',
            api_key: this.apiKey,
        };
    };
    TermiiProvider.prototype.sendSms = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var template, data, to, meta, _a, useDnd, modifiedData, message, receipient, canSendSms, sendData, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        template = props.template, data = props.data, to = props.to, meta = props.meta;
                        _a = meta.useDnd, useDnd = _a === void 0 ? false : _a;
                        return [4 /*yield*/, this.modifyData(data)];
                    case 1:
                        modifiedData = _b.sent();
                        message = this.getTemplate({ template: template, data: modifiedData, format: common_enums_1.Format.SMS });
                        receipient = this.formatPhoneNumber(to);
                        canSendSms = this.canSendSms(receipient) && this.isProductionEnvironment();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 5, , 6]);
                        if (!canSendSms) return [3 /*break*/, 4];
                        sendData = this.getSendOptions({
                            to: receipient,
                            message: message,
                            useDnd: useDnd,
                        });
                        return [4 /*yield*/, axios_1.default.post(process.env._TERMII_BASE_URL + "/sms/send", sendData)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                    case 4:
                        node_service_base_1.logger.log("Dev call sending sms to " + receipient);
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        node_service_base_1.logger.error(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return TermiiProvider;
}(phoneNumberMessage_base_1.default));
exports.default = TermiiProvider;


/***/ }),
/* 74 */
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),
/* 75 */
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
var Message_base_1 = __importDefault(__webpack_require__(19));
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
        if (!to || to.trim().length < 11) {
            node_service_base_1.logger.error("phone number \"" + to + "\" cannot be empty and must be at least 11 characters!");
            isValid = false;
        }
        return isValid;
    };
    PhoneNumberBasedMessage.prototype.formatPhoneNumber = function (phoneNumber) {
        if (phoneNumber) {
            if (phoneNumber.startsWith('0')) {
                return "+234" + phoneNumber.slice(1);
            }
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
/* 76 */
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
var axios_1 = __importDefault(__webpack_require__(74));
var common_enums_1 = __webpack_require__(13);
var Message_base_1 = __importDefault(__webpack_require__(19));
var SlackProvider = /** @class */ (function (_super) {
    __extends(SlackProvider, _super);
    function SlackProvider(_a) {
        var env = _a.env;
        var _this = _super.call(this) || this;
        _this.teamId = env._SLACK_TEAM_ID;
        _this.channelId = env._SLACK_CHANNEL_ID;
        _this.token = env._SLACK_TOKEN;
        return _this;
    }
    SlackProvider.prototype.sendSlackMessage = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var template, data, message, isProduction, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        template = props.template, data = props.data;
                        message = this.getTemplate({ template: template, data: data, format: common_enums_1.Format.SLACK });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        isProduction = this.isProductionEnvironment();
                        if (!isProduction) return [3 /*break*/, 3];
                        return [4 /*yield*/, axios_1.default.post("/" + this.teamId + "/" + this.channelId + "/" + this.token, {
                                text: message,
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        node_service_base_1.logger.log("Dev call sending slack template" + template + ", message => " + message);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        if (error_1 instanceof Error) {
                            node_service_base_1.logger.error(error_1.message);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return SlackProvider;
}(Message_base_1.default));
exports.default = SlackProvider;


/***/ }),
/* 77 */
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
var twilio_1 = __importDefault(__webpack_require__(78));
var node_service_base_1 = __webpack_require__(1);
var common_enums_1 = __webpack_require__(13);
var phoneNumberMessage_base_1 = __importDefault(__webpack_require__(75));
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
        return "whatsapp:" + number;
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
/* 78 */
/***/ ((module) => {

module.exports = require("twilio");;

/***/ }),
/* 79 */
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
var axios_1 = __importDefault(__webpack_require__(74));
var node_service_base_1 = __webpack_require__(1);
var BitlyProvider = /** @class */ (function () {
    function BitlyProvider(_a) {
        var env = _a.env;
        this.token = env._BITLY_TOKEN;
    }
    BitlyProvider.prototype.shortenUrl = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var shortenUrl, isProduction, bearer, dataToSend, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shortenUrl = url;
                        isProduction = "development" === 'production';
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
/* 80 */
/***/ ((module) => {

module.exports = JSON.parse('{"name":"notification-service","version":"1.0.1","description":"Handles payhippo notification","main":"./dist/index.js","types":"./dist/index.d.ts","files":["dist"],"author":"Jude Okafor","license":"ISC","scripts":{"start":"node ./dist/index.js","nodemon":"nodemon","dev":"npm-run-all --parallel nodemon build:dev","dev:debug":"nodemon --inspect src/index.ts","lint":"eslint --fix src/","build":"webpack --env ENVIRONMENT=production --config webpack.config.js --progress","build:dev":"webpack --watch --env ENVIRONMENT=development --config webpack.config.js","test":"mocha -r ts-node/register tests/**/*.test.ts","watch:test":"mocha -r ts-node/register --watch --watch-files src,tests tests/**/*.test.ts","artifactregistry-login":"npx google-artifactregistry-auth"},"devDependencies":{"@types/capitalize":"^2.0.0","@types/currency-formatter":"^1.5.1","@types/express":"4.17.12","@types/json2csv":"^5.0.3","@types/mailgun-js":"^0.22.12","@types/node":"15.9.0","@typescript-eslint/eslint-plugin":"4.26.0","@typescript-eslint/parser":"4.26.0","clean-webpack-plugin":"4.0.0-alpha.0","eslint":"7.27.0","eslint-config-prettier":"8.3.0","eslint-config-standard":"16.0.3","eslint-plugin-import":"2.23.4","eslint-plugin-node":"11.1.0","eslint-plugin-prettier":"3.4.0","eslint-plugin-promise":"5.1.0","moment-timezone-data-webpack-plugin":"1.5.0","prettier":"2.3.0","ts-loader":"9.2.3","ts-node-dev":"1.1.6","typescript":"4.3.2","webpack":"5.38.1","webpack-cli":"4.7.2","webpack-node-externals":"3.0.0"},"dependencies":{"@payhippo/node-service-base":"^1.2.13","@sendgrid/mail":"^7.6.1","awilix":"^6.1.0","capitalize":"^2.0.4","currency-formatter":"^1.5.9","dotenv":"8.2.0","express":"4.17.1","json2csv":"^5.0.6","mailgun-js":"^0.22.0","nodemon":"^2.0.15","npm-run-all":"^4.1.5","twilio":"^3.74.0"}}');

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