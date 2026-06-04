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
exports.ProductoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const producto_service_1 = require("../../modules/services/producto.service");
const create_producto_dto_1 = require("../dto/create-producto.dto");
const update_producto_dto_1 = require("../../modules/dto/update-producto.dto");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const roles_guard_1 = require("../../common/guards/roles.guard");
const role_enum_1 = require("../../common/enums/role.enum");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let ProductoController = class ProductoController {
    productoService;
    constructor(productoService) {
        this.productoService = productoService;
    }
    create(createProductoDto) {
        return this.productoService.create(createProductoDto);
    }
    findAll() {
        return this.productoService.findAll();
    }
    findOne(id) {
        return this.productoService.findOne(id);
    }
    update(id, updateProductoDto) {
        return this.productoService.update(id, updateProductoDto);
    }
    remove(id) {
        return this.productoService.remove(id);
    }
};
exports.ProductoController = ProductoController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.BODEGUERO),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo producto (ADMIN, BODEGUERO)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Producto creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Categoría no encontrada' }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Ya existe un producto con ese nombre',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_producto_dto_1.CreateProductoDto]),
    __metadata("design:returntype", void 0)
], ProductoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.BODEGUERO, role_enum_1.Role.CONSULTOR),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos los productos (todos autenticados)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de productos obtenida exitosamente',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.BODEGUERO, role_enum_1.Role.CONSULTOR),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un producto por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID del producto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Producto encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un producto (ADMIN)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID del producto' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto actualizado exitosamente',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Producto o categoría no encontrada',
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Ya existe un producto con ese nombre',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_producto_dto_1.UpdateProductoDto]),
    __metadata("design:returntype", void 0)
], ProductoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un producto (ADMIN)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID del producto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Producto eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductoController.prototype, "remove", null);
exports.ProductoController = ProductoController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductoController);
//# sourceMappingURL=producto.controller.js.map