import { Module } from '@nestjs/common';
import { ArtistsService } from './use-cases/artists.service';
import { ArtistsController } from './controllers/artists.controller';
import { ArtistRepository } from './domain/repository/artists.repository';
import { ArtistPrismaRepository } from './infrastructure/prisma/artist-prisma.repository';

@Module({
  controllers: [ArtistsController],
  providers: [
    ArtistsService,
    {
      provide: ArtistRepository,
      useClass: ArtistPrismaRepository,
    },
  ],
  exports: [ArtistsService],
})
export class ArtistsModule {}
