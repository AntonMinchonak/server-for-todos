import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var ip = require("ip");
let addressIP = '127.0.0.1';
if (ip.address() === "10.20.5.50") addressIP = "10.20.5.50";
if (ip.address() === "192.168.56.1") addressIP = "192.168.0.100";

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(3000, addressIP);
  }
bootstrap();
