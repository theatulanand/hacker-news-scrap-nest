import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { ArticleEntity } from './entities/article.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './entities/article.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Article.name, schema: ArticleSchema }],
      'articles',
    ),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticleEntity],
  exports: [ArticlesService]
})
export class ArticlesModule {}
