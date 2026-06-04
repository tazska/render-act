import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const dbCaCert = config.get<string>('DB_CA_CERT');

        let ca: string | undefined;
        if (dbCaCert) {
          const certPath = path.resolve(__dirname, '../../', dbCaCert);
          if (fs.existsSync(certPath)) {
            ca = fs.readFileSync(certPath, 'utf-8');
          } else {
            ca = dbCaCert;
          }
        }

        return {
          type: 'mysql',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USERNAME'),
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_DATABASE'),
          entities: ['dist/**/*.entity.js'],
          synchronize: config.get('NODE_ENV') !== 'production' || config.get('DB_SYNC') === 'true',
          logging: config.get('NODE_ENV') === 'production',
          ssl: ca
            ? {
                ca,
              }
            : undefined,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
