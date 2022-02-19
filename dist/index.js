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
var routers_1 = __webpack_require__(26);
var pack = __importStar(__webpack_require__(37));
dotenv.config();
try {
    var apps = new node_service_base_1.default({
        description: pack.description,
        config: {
            env: "development",
            secretVersion: "1" || 0,
        },
        middlewares: [
            middlewares_1.emailProviderMiddleware,
            middlewares_1.whatsappProviderMiddleware,
            middlewares_1.smsProviderMiddleware,
            middlewares_1.slackProviderMiddleware,
        ],
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
exports.whatsappProviderMiddleware = exports.slackProviderMiddleware = exports.smsProviderMiddleware = exports.emailProviderMiddleware = void 0;
var emailProvider_1 = __webpack_require__(4);
Object.defineProperty(exports, "emailProviderMiddleware", ({ enumerable: true, get: function () { return __importDefault(emailProvider_1).default; } }));
var smsProvider_1 = __webpack_require__(17);
Object.defineProperty(exports, "smsProviderMiddleware", ({ enumerable: true, get: function () { return __importDefault(smsProvider_1).default; } }));
var slackProvider_1 = __webpack_require__(21);
Object.defineProperty(exports, "slackProviderMiddleware", ({ enumerable: true, get: function () { return __importDefault(slackProvider_1).default; } }));
var whatsappProvider_1 = __webpack_require__(23);
Object.defineProperty(exports, "whatsappProviderMiddleware", ({ enumerable: true, get: function () { return __importDefault(whatsappProvider_1).default; } }));


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mailgun_1 = __importDefault(__webpack_require__(5));
exports.default = (function (req, _, next) {
    var appSecrets = req.appSecrets;
    if (appSecrets === null || appSecrets === void 0 ? void 0 : appSecrets.mailgun) {
        var _a = appSecrets.mailgun, apiKey = _a.apiKey, domain = _a.domain;
        req.appServices.emailProvider = new mailgun_1.default({
            apiKey: apiKey,
            domain: domain,
        });
    }
    next();
});


/***/ }),
/* 5 */
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
var mailgun_js_1 = __importDefault(__webpack_require__(6));
var json2csv_1 = __webpack_require__(7);
var common_enums_1 = __webpack_require__(8);
var htmlMessage_base_1 = __importDefault(__webpack_require__(9));
var constants_1 = __webpack_require__(16);
var MailgunProvider = /** @class */ (function (_super) {
    __extends(MailgunProvider, _super);
    function MailgunProvider(_a) {
        var apiKey = _a.apiKey, domain = _a.domain;
        var _this = _super.call(this) || this;
        _this.apiKey = apiKey;
        _this.domain = domain;
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
                            from: "Payhippo " + process.env._GMAIL_ADMIN_EMAIL,
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
/* 6 */
/***/ ((module) => {

module.exports = require("mailgun-js");;

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("json2csv");;

/***/ }),
/* 8 */
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
/* 9 */
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
var Message_base_1 = __importDefault(__webpack_require__(10));
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
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
var common_enums_1 = __webpack_require__(8);
var templates_1 = __webpack_require__(11);
var dotenv_1 = __importDefault(__webpack_require__(2));
var types_1 = __webpack_require__(38);
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
    _a[common_enums_1.Format.SLACK] = {
        welcome: templates_1.EMAIL.welcomeEmail,
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
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMAIL = exports.SMS = void 0;
var sms_1 = __webpack_require__(12);
Object.defineProperty(exports, "SMS", ({ enumerable: true, get: function () { return __importDefault(sms_1).default; } }));
var email_1 = __webpack_require__(14);
Object.defineProperty(exports, "EMAIL", ({ enumerable: true, get: function () { return __importDefault(email_1).default; } }));


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var request_money_template_1 = __importDefault(__webpack_require__(13));
exports.default = {
    requestMoney: request_money_template_1.default,
};


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function default_1(data) {
    var customer_name = data.customer_name, payment_link = data.payment_link, business_name = data.business_name;
    return "Hello, " + customer_name + " \nThis is the link " + payment_link + " for the purchase from " + business_name;
}
exports.default = default_1;


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var welcome_email_template_1 = __importDefault(__webpack_require__(15));
exports.default = {
    welcomeEmail: welcome_email_template_1.default,
};


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function default_1(data) {
    var firstName = data.firstName;
    return 'Welcome Legend' + firstName;
}
exports.default = default_1;


/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var termii_1 = __importDefault(__webpack_require__(18));
exports.default = (function (req, _, next) {
    var appSecrets = req.appSecrets;
    if (appSecrets === null || appSecrets === void 0 ? void 0 : appSecrets.termii) {
        var apiKey = appSecrets.termii.apiKey;
        req.appServices.smsProvider = new termii_1.default({
            apiKey: apiKey,
        });
    }
    next();
});


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
var axios_1 = __importDefault(__webpack_require__(19));
var common_enums_1 = __webpack_require__(8);
var phoneNumberMessage_base_1 = __importDefault(__webpack_require__(20));
var TermiiProvider = /** @class */ (function (_super) {
    __extends(TermiiProvider, _super);
    function TermiiProvider(_a) {
        var apiKey = _a.apiKey;
        var _this = _super.call(this) || this;
        _this.apiKey = apiKey;
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
            var template, data, to, meta, _a, useDnd, message, receipient, canSendSms, sendData, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        template = props.template, data = props.data, to = props.to, meta = props.meta;
                        _a = meta.useDnd, useDnd = _a === void 0 ? false : _a;
                        message = this.getTemplate({ template: template, data: data, format: common_enums_1.Format.SMS });
                        receipient = this.formatPhoneNumber(to);
                        canSendSms = this.canSendSms(receipient) && this.isProductionEnvironment();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        if (!canSendSms) return [3 /*break*/, 3];
                        sendData = this.getSendOptions({
                            to: receipient,
                            message: message,
                            useDnd: useDnd,
                        });
                        return [4 /*yield*/, axios_1.default.post(process.env._TERMII_BASE_URL + "/sms/send", sendData)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                    case 3:
                        node_service_base_1.logger.log("Dev call sending sms to " + receipient);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        node_service_base_1.logger.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return TermiiProvider;
}(phoneNumberMessage_base_1.default));
exports.default = TermiiProvider;


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),
/* 20 */
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
var Message_base_1 = __importDefault(__webpack_require__(10));
var PhoneNumberBasedMessage = /** @class */ (function (_super) {
    __extends(PhoneNumberBasedMessage, _super);
    function PhoneNumberBasedMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return PhoneNumberBasedMessage;
}(Message_base_1.default));
exports.default = PhoneNumberBasedMessage;


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var slack_1 = __importDefault(__webpack_require__(22));
exports.default = (function (req, _, next) {
    var appSecrets = req.appSecrets;
    if (appSecrets === null || appSecrets === void 0 ? void 0 : appSecrets.slack) {
        var _a = appSecrets.slack, teamId = _a.teamId, channelId = _a.channelId, token = _a.token;
        req.appServices.slackProvider = new slack_1.default({
            teamId: teamId,
            channelId: channelId,
            token: token,
        });
    }
    next();
});


/***/ }),
/* 22 */
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
var axios_1 = __importDefault(__webpack_require__(19));
var common_enums_1 = __webpack_require__(8);
var Message_base_1 = __importDefault(__webpack_require__(10));
var SlackProvider = /** @class */ (function (_super) {
    __extends(SlackProvider, _super);
    function SlackProvider(constructorProps) {
        var _this = _super.call(this) || this;
        var teamId = constructorProps.teamId, channelId = constructorProps.channelId, token = constructorProps.token;
        _this.teamId = teamId;
        _this.channelId = channelId;
        _this.token = token;
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
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var twillo_1 = __importDefault(__webpack_require__(24));
exports.default = (function (req, _, next) {
    var appSecrets = req.appSecrets;
    if (appSecrets === null || appSecrets === void 0 ? void 0 : appSecrets.twillo) {
        var _a = appSecrets.twillo, accountSid = _a.accountSid, authToken = _a.authToken;
        req.appServices.whatsappProvider = new twillo_1.default({
            accountSid: accountSid,
            authToken: authToken,
        });
    }
    next();
});


/***/ }),
/* 24 */
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
var twilio_1 = __importDefault(__webpack_require__(25));
var node_service_base_1 = __webpack_require__(1);
var common_enums_1 = __webpack_require__(8);
var phoneNumberMessage_base_1 = __importDefault(__webpack_require__(20));
var TwilioProvider = /** @class */ (function (_super) {
    __extends(TwilioProvider, _super);
    function TwilioProvider(_a) {
        var accountSid = _a.accountSid, authToken = _a.authToken;
        var _this = _super.call(this) || this;
        _this.accountSid = accountSid;
        _this.authToken = authToken;
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
                                    : this.getWhatsappNumber(process.env._PAYHIPPO_WHATSAPP_NUMBER || ''),
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
/* 25 */
/***/ ((module) => {

module.exports = require("twilio");;

/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.message = exports.api = void 0;
var api_1 = __webpack_require__(27);
Object.defineProperty(exports, "api", ({ enumerable: true, get: function () { return __importDefault(api_1).default; } }));
var message_1 = __webpack_require__(31);
Object.defineProperty(exports, "message", ({ enumerable: true, get: function () { return __importDefault(message_1).default; } }));


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __importDefault(__webpack_require__(28));
var controllers_1 = __webpack_require__(29);
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
/* 28 */
/***/ ((module) => {

module.exports = require("express");;

/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.example = void 0;
var example_1 = __webpack_require__(30);
Object.defineProperty(exports, "example", ({ enumerable: true, get: function () { return __importDefault(example_1).default; } }));


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var sayHello = function () { return 'Hello World'; };
exports.default = {
    sayHello: sayHello,
};


/***/ }),
/* 31 */
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
var express_1 = __importDefault(__webpack_require__(28));
var container_awilix_1 = __importDefault(__webpack_require__(32));
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
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var notification_1 = __webpack_require__(33);
var node_service_base_1 = __webpack_require__(1);
var awilix_1 = __webpack_require__(36);
node_service_base_1.container.register({
    notificationController: awilix_1.asClass(notification_1.NotificationController),
    notificationService: awilix_1.asClass(notification_1.NotificationService),
});
exports.default = node_service_base_1.container;


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationController = exports.NotificationService = void 0;
var service_1 = __importDefault(__webpack_require__(34));
exports.NotificationService = service_1.default;
var controller_1 = __importDefault(__webpack_require__(35));
exports.NotificationController = controller_1.default;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var common_enums_1 = __webpack_require__(8);
var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.getNotificationChannel = function (props) {
            var channel = props.channel, payload = props.payload, appServices = props.appServices;
            var emailProvider = appServices.emailProvider, smsProvider = appServices.smsProvider, whatsappProvider = appServices.whatsappProvider, slackProvider = appServices.slackProvider;
            switch (channel) {
                case common_enums_1.NOTIFICATION_CHANNEL.EMAIL:
                    return emailProvider.sendMail(payload);
                case common_enums_1.NOTIFICATION_CHANNEL.SMS:
                    return smsProvider.sendSms(payload);
                case common_enums_1.NOTIFICATION_CHANNEL.WHATSAPP:
                    return whatsappProvider.sendWhatsapp(payload);
                case common_enums_1.NOTIFICATION_CHANNEL.SLACK:
                    return slackProvider.sendSlackMessage(payload);
                default:
                    break;
            }
        };
    }
    return NotificationService;
}());
exports.default = NotificationService;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var node_service_base_1 = __webpack_require__(1);
var NotificationController = /** @class */ (function () {
    function NotificationController(_a) {
        var _this = this;
        var notificationService = _a.notificationService;
        this.notify = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var appServices, body, _a, channels, promises, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        appServices = req.appServices, body = req.body;
                        _a = body.channels, channels = _a === void 0 ? [] : _a;
                        promises = [];
                        channels.forEach(function (channel) {
                            promises.push(_this.notificationService.getNotificationChannel({
                                channel: channel,
                                payload: body,
                                appServices: appServices,
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
/* 36 */
/***/ ((module) => {

module.exports = require("awilix");;

/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = JSON.parse('{"name":"notification-service","version":"1.0.1","description":"Handles payhippo notification","main":"./dist/index.js","types":"./dist/index.d.ts","files":["dist"],"author":"Jude Okafor","license":"ISC","scripts":{"start":"node ./dist/index.js","nodemon":"nodemon","dev":"npm-run-all --parallel nodemon build:dev","dev:debug":"nodemon --inspect src/index.ts","lint":"eslint --fix src/","build":"webpack --env ENVIRONMENT=production --config webpack.config.js --progress","build:dev":"webpack --watch --env ENVIRONMENT=development --config webpack.config.js","test":"mocha -r ts-node/register tests/**/*.test.ts","watch:test":"mocha -r ts-node/register --watch --watch-files src,tests tests/**/*.test.ts","artifactregistry-login":"npx google-artifactregistry-auth"},"devDependencies":{"@types/express":"4.17.12","@types/json2csv":"^5.0.3","@types/mailgun-js":"^0.22.12","@types/node":"15.9.0","@typescript-eslint/eslint-plugin":"4.26.0","@typescript-eslint/parser":"4.26.0","clean-webpack-plugin":"4.0.0-alpha.0","eslint":"7.27.0","eslint-config-prettier":"8.3.0","eslint-config-standard":"16.0.3","eslint-plugin-import":"2.23.4","eslint-plugin-node":"11.1.0","eslint-plugin-prettier":"3.4.0","eslint-plugin-promise":"5.1.0","moment-timezone-data-webpack-plugin":"1.5.0","prettier":"2.3.0","ts-loader":"9.2.3","ts-node-dev":"1.1.6","typescript":"4.3.2","webpack":"5.38.1","webpack-cli":"4.7.2","webpack-node-externals":"3.0.0"},"dependencies":{"@payhippo/node-service-base":"^1.2.13","@sendgrid/mail":"^7.6.1","awilix":"^6.1.0","dotenv":"8.2.0","express":"4.17.1","json2csv":"^5.0.6","mailgun-js":"^0.22.0","nodemon":"^2.0.15","npm-run-all":"^4.1.5","twilio":"^3.74.0"}}');

/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("@payhippo/node-service-base/dist/types");;

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