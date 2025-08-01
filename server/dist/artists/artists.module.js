"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsModule = void 0;
const common_1 = require("@nestjs/common");
const artists_service_1 = require("./use-cases/artists.service");
const artists_controller_1 = require("./controllers/artists.controller");
const artists_repository_1 = require("./domain/repository/artists.repository");
const artist_prisma_repository_1 = require("./infrastructure/prisma/artist-prisma.repository");
let ArtistsModule = class ArtistsModule {
};
exports.ArtistsModule = ArtistsModule;
exports.ArtistsModule = ArtistsModule = __decorate([
    (0, common_1.Module)({
        controllers: [artists_controller_1.ArtistsController],
        providers: [
            artists_service_1.ArtistsService,
            {
                provide: artists_repository_1.ArtistRepository,
                useClass: artist_prisma_repository_1.ArtistPrismaRepository,
            },
        ],
        exports: [artists_service_1.ArtistsService],
    })
], ArtistsModule);
//# sourceMappingURL=artists.module.js.map