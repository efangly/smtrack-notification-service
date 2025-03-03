import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { InfluxdbModule } from './influxdb/influxdb.module';
import { HealthModule } from './health/health.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ConfigModule } from '@nestjs/config';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, InfluxdbModule, HealthModule, FirebaseModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
