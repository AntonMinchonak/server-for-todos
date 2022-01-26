import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note , NoteDocument} from './shemas/note.shema';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/create-note-dto';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async getAllDB(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  async createLohDB(noteDto: CreateNoteDto): Promise<Note> {
    const newProduct = new this.noteModel(noteDto);
    return newProduct.save();
  }

  async removeDB(id: string): Promise<Note> {
    return this.noteModel.findByIdAndRemove(id);
  }

  async updateDB(id: string, noteDto: CreateNoteDto): Promise<Note> {
    return this.noteModel.findByIdAndUpdate(id, noteDto, { new: true });
  }
}
