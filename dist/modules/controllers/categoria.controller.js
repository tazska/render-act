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
exports.CategoriaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const categoria_service_1 = require("../../modules/services/categoria.service");
const create_categoria_dto_1 = require("../../modules/dto/create-categoria.dto");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const roles_guard_1 = require("../../common/guards/roles.guard");
const role_enum_1 = require("../../common/enums/role.enum");
let CategoriaController = class CategoriaController {
    categoriaService;
    constructor(categoriaService) {
        this.categoriaService = categoriaService;
    }
    create(createCategoriaDto) {
        return this.categoriaService.create(createCategoriaDto);
    }
    findAll() {
        return this.categoriaService.findAll();
    }
    findOne(id) {
        return this.categoriaService.findOne(id);
    }
};
exports.CategoriaController = CategoriaController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva categoría (solo ADMIN)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Categoría creada exitosamente' }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'No autorizado (se requiere rol ADMIN)',
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Ya existe una categoría con ese nombre',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_categoria_dto_1.CreateCategoriaDto]),
    __metadata("design:returntype", void 0)
], CategoriaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.BODEGUERO, role_enum_1.Role.CONSULTOR),
    (0, swagger_1.ApiOperation)({
        summary: 'Listar todas las categorías (todos los roles autenticados)',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de categorías obtenida exitosamente',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.BODEGUERO, role_enum_1.Role.CONSULTOR),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una categoría por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID de la categoría' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Categoría encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Categoría no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoriaController.prototype, "findOne", null);
exports.CategoriaController = CategoriaController = __decorate([
    (0, swagger_1.ApiTags)('Categories'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Controller)('categorias'),
    __metadata("design:paramtypes", [categoria_service_1.CategoriaService])
], CategoriaController);
//# sourceMappingURL=categoria.controller.js.map