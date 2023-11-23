import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapService } from './scrap/scrap.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb://0.0.0.0:27017/hackerNews',
      {
        connectionName: 'articles',
      },
    ),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ScrapService],
})
export class AppModule {}
