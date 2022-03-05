import { Controller, Delete, Get, Param , Post, Put, Body, HttpCode, HttpStatus, Header} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.shema';

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getH(): Promise<Product[]>{
    return this.productsService.getAllDB();
  }

  @Get(":id")
  getP(@Param("id") id: string): Promise<Product> {
    return this.productsService.getByIdDB(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header("Control-Cache", "none")
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    // return `${createProductDto.title} - Title. ${createProductDto.price + 228} - Price`;
    return this.productsService.createLohDB(createProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Product> {
    // return `Remove id: ${id}`;
    return this.productsService.removeDB(id);
  }

  @Put(":id")
  update(@Body() updateProductDto: UpdateProductDto, @Param("id") id: string): Promise<Product> {
    // return "Update" + id;
    return this.productsService.updateDB(id, updateProductDto);
  }
}
