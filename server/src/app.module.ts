import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsController } from './artists/controllers/artists.controller';
import { ArtistsModule } from './artists/artists.module';
import { ShowsModule } from './shows/shows.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ArtistsModule, ShowsModule, AuthModule],
  controllers: [AppController, ArtistsController],
  providers: [AppService],
})
export class AppModule {}
