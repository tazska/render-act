"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Throttle = void 0;
const common_1 = require("@nestjs/common");
const Throttle = (limit, ttl) => (0, common_1.SetMetadata)('throttler_limit', limit) && (0, common_1.SetMetadata)('throttler_ttl', ttl);
exports.Throttle = Throttle;
//# sourceMappingURL=throttle.decorator.js.map