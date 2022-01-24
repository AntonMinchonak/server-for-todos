import { Controller, Get, Redirect } from "@nestjs/common";

@Controller("fisting")
export class FistingController{
  @Get()
  getLol() {
    return "Asdasdasdasdasdas asd asd as d";
  }
  @Get("anal")
  getSuck() {
    return "anallll";
  }
    
    @Get('nahui')
        @Redirect('https://dota2.ru', 301)
    getOut() {
        return "wat?";
    }
}
