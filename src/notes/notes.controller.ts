import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note-dto';
import { NotesService } from './notes.service';
import { Note } from './shemas/note.shema';

@Controller("notes")
export class NotesController {
  constructor(private readonly productsService: NotesService) {}

  @Get()
  getH(): Promise<Note[]> {
    return this.productsService.getAllDB();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header("Control-Cache", "none")
  create(@Body() createProductDto: CreateNoteDto): Promise<Note> {
    return this.productsService.createLohDB(createProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Note> {
    return this.productsService.removeDB(id);
  }

  @Put(":id")
  update(@Body() updateProductDto: CreateNoteDto, @Param("id") id: string): Promise<Note> {
    return this.productsService.updateDB(id, updateProductDto);
  }
}
