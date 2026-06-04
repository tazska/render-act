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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const producto_entity_1 = require("../../modules/entities/producto.entity");
let Categoria = class Categoria {
    id;
    nombre;
    descripcion;
    productos;
};
exports.Categoria = Categoria;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID único de la categoría' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Categoria.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Electrónica',
        description: 'Nombre de la categoría',
    }),
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    __metadata("design:type", String)
], Categoria.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Productos electrónicos y tecnología',
        description: 'Descripción de la categoría',
    }),
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Categoria.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [producto_entity_1.Producto],
        description: 'Productos en esta categoría',
    }),
    (0, typeorm_1.OneToMany)(() => producto_entity_1.Producto, (producto) => producto.categoria),
    __metadata("design:type", Array)
], Categoria.prototype, "productos", void 0);
exports.Categoria = Categoria = __decorate([
    (0, typeorm_1.Entity)('categorias')
], Categoria);
//# sourceMappingURL=categoria.entity.js.map