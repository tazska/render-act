"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const movements_service_1 = require("../../modules/services/movements.service");
const create_movement_dto_1 = require("../../modules/dto/create-movement.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
let MovementsController = class MovementsController {
    movementsService;
    constructor(movementsService) {
        this.movementsService = movementsService;
    }
    create(dto, req) {
        return this.movementsService.create(dto, req.user);
    }
    findAll() {
        return this.movementsService.findAll();
    }
    findOne(id) {
        return this.movementsService.findOne(id);
    }
    findByProduct(productId) {
        return this.movementsService.findByProduct(productId);
    }
};
exports.MovementsController = MovementsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.BODEGUERO),
    (0, swagger_1.ApiOperation)({
        summary: 'Registrar entrada o salida de inventario (solo BODEGUERO)',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Movimiento registrado exitosamente',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Stock insuficiente para realizar la salida',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'No autorizado — se requiere rol BODEGUERO',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movement_dto_1.CreateMovementDto, Object]),
    __metadata("design:returntype", void 0)
], MovementsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.BODEGUERO),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos los movimientos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de movimientos obtenida exitosamente',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovementsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.BODEGUERO),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un movimiento por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Movimiento encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Movimiento no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovementsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('product/:productId'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.BODEGUERO, role_enum_1.Role.CONSULTOR),
    (0, swagger_1.ApiOperation)({ summary: 'Listar movimientos por producto' }),
    (0, swagger_1.ApiParam)({ name: 'productId', type: Number }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Movimientos del producto obtenidos exitosamente',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado' }),
    __param(0, (0, common_1.Param)('productId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovementsController.prototype, "findByProduct", null);
exports.MovementsController = MovementsController = __decorate([
    (0, swagger_1.ApiTags)('Movements'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('movements'),
    __metadata("design:paramtypes", [movements_service_1.MovementsService])
], MovementsController);
//# sourceMappingURL=movements.controller.js.map