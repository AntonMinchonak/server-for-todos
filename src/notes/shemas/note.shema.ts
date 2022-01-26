import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop()
  importance: number;

  @Prop()
  date: string;

  @Prop()
  time: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
