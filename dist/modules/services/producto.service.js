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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("../../modules/entities/producto.entity");
const categoria_entity_1 = require("../../modules/entities/categoria.entity");
const websocket_gateway_1 = require("../../websocket/websocket.gateway");
let ProductoService = class ProductoService {
    productoRepository;
    categoriaRepository;
    stockGateway;
    constructor(productoRepository, categoriaRepository, stockGateway) {
        this.productoRepository = productoRepository;
        this.categoriaRepository = categoriaRepository;
        this.stockGateway = stockGateway;
    }
    async create(createProductoDto) {
        const categoria = await this.categoriaRepository.findOne({
            where: { id: createProductoDto.categoriaId },
        });
        if (!categoria) {
            throw new common_1.NotFoundException(`Categoría con ID ${createProductoDto.categoriaId} no encontrada`);
        }
        const existe = await this.productoRepository.findOne({
            where: { nombre: createProductoDto.nombre },
        });
        if (existe) {
            throw new common_1.ConflictException(`Ya existe un producto con el nombre "${createProductoDto.nombre}"`);
        }
        const producto = this.productoRepository.create({
            ...createProductoDto,
            categoria,
            stockMinimo: createProductoDto.stockMinimo ?? 0,
        });
        const savedProducto = await this.productoRepository.save(producto);
        this.stockGateway.emitProductCreated(savedProducto);
        return savedProducto;
    }
    async findAll() {
        return await this.productoRepository.find({
            order: { id: 'ASC' },
        });
    }
    async findOne(id) {
        const producto = await this.productoRepository.findOne({ where: { id } });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        return producto;
    }
    async update(id, updateProductoDto) {
        const producto = await this.findOne(id);
        if (updateProductoDto.categoriaId) {
            const categoria = await this.categoriaRepository.findOne({
                where: { id: updateProductoDto.categoriaId },
            });
            if (!categoria) {
                throw new common_1.NotFoundException(`Categoría con ID ${updateProductoDto.categoriaId} no encontrada`);
            }
            producto.categoria = categoria;
        }
        if (updateProductoDto.nombre) {
            const existe = await this.productoRepository.findOne({
                where: { nombre: updateProductoDto.nombre },
            });
            if (existe && existe.id !== id) {
                throw new common_1.ConflictException(`Ya existe un producto con el nombre "${updateProductoDto.nombre}"`);
            }
        }
        Object.assign(producto, updateProductoDto);
        const updatedProducto = await this.productoRepository.save(producto);
        this.stockGateway.emitProductUpdated(updatedProducto);
        return updatedProducto;
    }
    async remove(id) {
        const producto = await this.findOne(id);
        await this.productoRepository.remove(producto);
        this.stockGateway.emitProductDeleted(id);
    }
};
exports.ProductoService = ProductoService;
exports.ProductoService = ProductoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __param(1, (0, typeorm_1.InjectRepository)(categoria_entity_1.Categoria)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, websocket_gateway_1.WebsocketGateway])
], ProductoService);
//# sourceMappingURL=producto.service.js.map