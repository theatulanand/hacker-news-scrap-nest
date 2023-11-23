import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString, IsNumber, IsUrl, IsDateString, IsInt } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema({
    timestamps: true
})
export class Article{
    @Prop({ required: true })
    @IsString()
    id: string;

    @Prop({ required: true })
    @IsString()
    title: string;

    @Prop({ required: true })
    @IsString()
    source: string;

    @Prop({ required: true })
    @IsNumber()
    @IsInt()
    points: number;

    @Prop({ required: true })
    @IsUrl()
    url: string;

    @Prop({ required: true })
    @IsDateString()
    publishedOn: string;

    @Prop({ required: true })
    @IsNumber()
    @IsInt()
    comments: number;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);