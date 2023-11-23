import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleEntity } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    private articleEntity: ArticleEntity,
  ) { }
  create(createArticleDto: CreateArticleDto) {
    return this.articleEntity.create(createArticleDto);
  }

  async sortByComments() {
    let articles = await this.articleEntity.find();
    return articles.sort((a, b) => a.comments - b.comments);
  }

  async sortByPoints() {
    let articles = await this.articleEntity.find();
    return articles.sort((a, b) => a.points - b.points);
  }

  async sortsByPublishedOn() {
    let articles = await this.articleEntity.find();
    // Latest article show on top
    return articles.sort((a, b) => new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime());
  }

  async findAll() {
    return await this.articleEntity.find()
  }
}
