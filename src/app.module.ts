import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.l7lgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
