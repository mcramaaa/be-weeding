import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'src/database/typeorm-config.service';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from 'src/shared/config/database.config';
import appConfig from 'src/shared/config/app.config';
import authConfig from 'src/shared/config/auth.config';
import mailConfig from 'src/shared/config/mail.config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserCLientModules } from 'src/app-client/module';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions } from 'redis';
import { AllConfigType } from 'src/shared/interfaces/config.type';
import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [databaseConfig, appConfig, authConfig, mailConfig],
    }),
    EventEmitterModule.forRoot({
      global: true,
      verboseMemoryLeak: true,
    }),
    CacheModule.registerAsync<RedisClientOptions>({
      isGlobal: true,
      useFactory: (configService: ConfigService<AllConfigType>) => ({
        isGlobal: true,
        store: redisStore,
        host: configService.get('cache.host', { infer: true }),
        max: configService.get('cache.max', { infer: true }),
        ttl: configService.get('cache.ttl', { infer: true }),
        port: configService.get('cache.port', { infer: true }),
        // auth_pass: configService.get('cache.auth_pass', { infer: true }),
        db: configService.get('cache.db', { infer: true }),
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),

    ...UserCLientModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
