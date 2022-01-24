import { articles } from "./article";
import { Controller, Get, Render } from "@nestjs/common";

@Controller('articles')
export class ArticleController {
    @Get()
  index() {
    return { articles };
  }
}
