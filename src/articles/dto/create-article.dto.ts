import { IsString, IsNumber, IsUrl, IsDateString, IsInt } from 'class-validator';

export class CreateArticleDto {
    @IsString()
    id: string;

    @IsString()
    title: string;

    @IsString()
    source: string;

    @IsNumber()
    @IsInt()
    points: number;

    @IsUrl()
    url: string;

    @IsDateString()
    publishedOn: string;

    @IsNumber()
    @IsInt()
    comments: number;
}