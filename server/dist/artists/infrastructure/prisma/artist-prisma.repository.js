"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const artists_entity_1 = require("../../domain/entities/artists.entity");
const prisma_1 = require("../../../../generated/prisma/index.js");
let ArtistPrismaRepository = class ArtistPrismaRepository {
    prisma = new prisma_1.PrismaClient();
    async findAll() {
        const artists = await this.prisma.artist.findMany();
        return artists.map((a) => new artists_entity_1.Artist({
            ...a,
            members: a.members ? a.members.split(',') : [],
        }));
    }
    async findOne(id) {
        const a = await this.prisma.artist.findUnique({ where: { id } });
        if (!a)
            return null;
        return new artists_entity_1.Artist({
            ...a,
            members: a.members ? a.members.split(',') : [],
        });
    }
    async create(artist) {
        const created = await this.prisma.artist.create({
            data: {
                ...artist,
                members: artist.members.join(','),
            },
        });
        return new artists_entity_1.Artist({
            ...created,
            members: created.members ? created.members.split(',') : [],
        });
    }
    async createMany(artists) {
        const createdArtists = [];
        for (const artist of artists) {
            const created = await this.prisma.artist.create({
                data: {
                    ...artist,
                    members: artist.members.join(','),
                },
            });
            createdArtists.push(new artists_entity_1.Artist({
                ...created,
                members: created.members ? created.members.split(',') : [],
            }));
        }
        return createdArtists;
    }
    async update(id, data) {
        const updated = await this.prisma.artist.update({
            where: { id },
            data: {
                ...data,
                members: data.members ? data.members.join(',') : undefined,
            },
        });
        return new artists_entity_1.Artist({
            ...updated,
            members: updated.members ? updated.members.split(',') : [],
        });
    }
    async delete(id) {
        const artist = await this.findOne(id);
        if (!artist)
            return false;
        await this.prisma.artist.delete({ where: { id } });
        return true;
    }
};
exports.ArtistPrismaRepository = ArtistPrismaRepository;
exports.ArtistPrismaRepository = ArtistPrismaRepository = __decorate([
    (0, common_1.Injectable)()
], ArtistPrismaRepository);
//# sourceMappingURL=artist-prisma.repository.js.map