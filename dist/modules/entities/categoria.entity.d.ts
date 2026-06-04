import { Producto } from '../../modules/entities/producto.entity';
export declare class Categoria {
    id: number;
    nombre: string;
    descripcion?: string;
    productos: Producto[];
}
