import { Categoria } from '../../modules/entities/categoria.entity';
export declare class Producto {
    id: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    stockActual: number;
    stockMinimo: number;
    categoria: Categoria;
}
