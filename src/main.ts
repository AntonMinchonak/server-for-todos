import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var ip = require("ip");
let addressIP = '127.0.0.1';
// if (ip.address() === "192.168.56.1" || ip.address() === "26.223.200.91"  ) addressIP = "192.168.0.100";

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(3000, addressIP);
    // console.log(ip.address());
    
  }
bootstrap();
