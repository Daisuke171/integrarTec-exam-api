"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsService = void 0;
const common_1 = require("@nestjs/common");
const artists_repository_1 = require("../domain/repository/artists.repository");
const artists_entity_1 = require("../domain/entities/artists.entity");
let ArtistsService = class ArtistsService {
    artitsRepository;
    constructor(artitsRepository) {
        this.artitsRepository = artitsRepository;
    }
    findAll() {
        return this.artitsRepository.findAll();
    }
    findOne(id) {
        return this.artitsRepository.findOne(id);
    }
    create(data) {
        return this.artitsRepository.create(new artists_entity_1.Artist({
            name: data.name,
            members: data.members,
            origin: data.origin,
            genres: data.genres,
            image: data.image,
            status: data.status,
        }));
    }
    createMany(data) {
        return Promise.all(data.map((artistData) => this.artitsRepository.create(new artists_entity_1.Artist({
            name: artistData.name,
            members: artistData.members,
            origin: artistData.origin,
            genres: artistData.genres,
            image: artistData.image,
            status: artistData.status,
        }))));
    }
    update(id, data) {
        return this.artitsRepository.update(id, data);
    }
    delete(id) {
        return this.artitsRepository.delete(id);
    }
};
exports.ArtistsService = ArtistsService;
exports.ArtistsService = ArtistsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [artists_repository_1.ArtistRepository])
], ArtistsService);
//# sourceMappingURL=artists.service.js.map