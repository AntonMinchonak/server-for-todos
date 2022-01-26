import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FistingController } from './fisting/fisting.controller';
import { ProductsModule } from './products/products.module';
import { ArticleController } from './article.controller';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.l7lgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),
    NotesModule,
  ],
  controllers: [AppController, FistingController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
