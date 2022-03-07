import { Injectable , Body} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product, ProductDocument } from "./schemas/product.shema";
import { Model } from "mongoose";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  private products = [];

  getAll() {
    return this.products;
  }

  async getAllDB(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  async getByIdDB(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  // create(@Body() productDto: CreateProductDto): string {
  //   return `${productDto.title} - Title. ${productDto.price + 1488} - Price`;
  // }

  // createL(productDto: CreateProductDto): void {
  //   this.products.push({
  //     ...productDto,
  //     id: Date.now().toString(),
  //   });
  // }

  async createDB(productDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(productDto);
    return newProduct.save();
  }

  async removeDB(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }
    
  async updateDB(id: string, productDto:UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, {new:true});
  }
}
