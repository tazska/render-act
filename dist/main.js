"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const app_module_1 = require("./modules/app.module");
const throttler_filter_1 = require("./common/filters/throttler.filter");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useWebSocketAdapter(new platform_socket_io_1.IoAdapter(app));
    app.setGlobalPrefix('api/v1');
    app.useGlobalFilters(new throttler_filter_1.ThrottlerExceptionFilter(), new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Leyder Figueroa')
        .setDescription('Sistema de Gestión de Inventarios — Caso Práctico 3')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
        .addTag('Auth', 'Registro, login y perfil')
        .addTag('Products', 'Gestión de productos')
        .addTag('Categories', 'Gestión de categorías')
        .addTag('Movements', 'Entradas y salidas de inventario')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: { persistAuthorization: true },
    });
    swagger_1.SwaggerModule.setup('/', app, document, {
        swaggerOptions: { persistAuthorization: true },
    });
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`\n🚀 StockMaster corriendo en: http://localhost:${port}/api/v1`);
    console.log(`📚 Swagger docs en:          http://localhost:${port}/api/docs\n`);
    console.log(`🔗 Swagger (root):          http://localhost:${port}/\n`);
}
void bootstrap();
//# sourceMappingURL=main.js.map