import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsModule } from './produits/produits.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeUsersModule } from './typeusers/typeusers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategorysModule } from './categorys/categorys.module';

@Module({
  imports: [TypeOrmModule.forRoot({
              "type": "mysql",
              "host":  "localhost",
              "port":  3306,
              "username": "root",
              "password": "",
              "database": "rest_api",
              "entities": ["dist/**/**.entity{.ts,.js}"],
              "synchronize": true
          }),
          ProduitsModule,
          TypeUsersModule,
          UsersModule,
          AuthModule,
          CategorysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
