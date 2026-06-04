import { ConfigService } from '@nestjs/config';
export interface RefreshJwtPayload {
    sub: number;
    email: string;
    type: 'refresh';
}
declare const RefreshJwtStrategy_base: any;
export declare class RefreshJwtStrategy extends RefreshJwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: RefreshJwtPayload): Promise<{
        id: number;
        email: string;
    }>;
}
export {};
