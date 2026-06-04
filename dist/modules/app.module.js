"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const database_module_1 = require("../database/database.module");
const auth_module_1 = require("../modules/providers/auth.module");
const categoria_module_1 = require("../modules/providers/categoria.module");
const producto_module_1 = require("../modules/providers/producto.module");
const movements_module_1 = require("../modules/providers/movements.module");
const estudiante_module_1 = require("../modules/providers/estudiante.module");
const websocket_module_1 = require("../websocket/websocket.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            throttler_1.ThrottlerModule.forRoot({
                throttlers: [{ name: 'default', ttl: 60000, limit: 100 }],
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            categoria_module_1.CategoriaModule,
            producto_module_1.ProductoModule,
            movements_module_1.MovementsModule,
            estudiante_module_1.EstudianteModule,
            websocket_module_1.WebsocketModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map