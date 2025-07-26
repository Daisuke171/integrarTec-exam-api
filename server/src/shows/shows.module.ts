import { Module } from '@nestjs/common';
import { ShowController } from './controllers/shows.controller';
import { ShowService } from './use-cases/shows.service';
import { ShowRepository } from './domain/repositories/shows.repository';
import { ShowPrismaRepository } from './infrastructure/prisma/shows-prisma.repository';

@Module({
  controllers: [ShowController],
  providers: [
    ShowService,
    {
      provide: ShowRepository,
      useClass: ShowPrismaRepository,
    },
  ],
})
export class ShowsModule {}
