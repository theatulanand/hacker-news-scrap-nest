import { Controller, Get, Query } from '@nestjs/common';
import { ArticlesService } from './articles.service';



@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('/sort-article')
  async sortBy(@Query() query: {sortBy: string}) {
    
    const  {sortBy}  = query;

    // Validate sortBy parameter
    const validSortByOptions = ['comments', 'points', 'postingDate'];
    if (!validSortByOptions.includes(sortBy as string)) {
      return "Invalid sortBy parameter"
    }

    let sortedArticles: any;
    switch (sortBy) {
      case 'comments':
        sortedArticles = await this.articlesService.sortByComments()
        break;
      case 'points':
        sortedArticles = await this.articlesService.sortByPoints()
        break;
      case 'postingDate':
        sortedArticles = await this.articlesService.sortsByPublishedOn()
        break;
      default:
        break;
    }
    return sortedArticles
  }
}
