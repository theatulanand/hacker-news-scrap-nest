import { InjectModel } from "@nestjs/mongoose";
import { Article, ArticleDocument } from "./article.schema";
import { Model } from 'mongoose';
import { CreateArticleDto } from "../dto/create-article.dto";
import {InternalServerErrorException} from '@nestjs/common';

export class ArticleEntity {
    constructor(
        @InjectModel(Article.name, 'articles')
        private readonly hospitalModel: Model<ArticleDocument>,
    ) { }

    async create(article: CreateArticleDto): Promise<ArticleDocument> {
        try {
            return await this.hospitalModel.create(article);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async find() {
        try {
            return await this.hospitalModel.find({});
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
