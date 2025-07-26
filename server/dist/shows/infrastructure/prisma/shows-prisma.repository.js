"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const shows_entity_1 = require("../../domain/entities/shows.entity");
const prisma_1 = require("../../../../generated/prisma/index.js");
let ShowPrismaRepository = class ShowPrismaRepository {
    prisma = new prisma_1.PrismaClient();
    async findAll() {
        const shows = await this.prisma.show.findMany({
            include: {
                artists: {
                    include: {
                        artist: true,
                    },
                },
            },
        });
        return shows.map((s) => new shows_entity_1.Show({
            ...s,
            artistId: s.artists.map((sa) => sa.artistId),
        }));
    }
    async findOne(id) {
        const show = await this.prisma.show.findUnique({
            where: { id },
            include: {
                artists: {
                    include: {
                        artist: true,
                    },
                },
            },
        });
        if (!show)
            return null;
        return new shows_entity_1.Show({
            ...show,
            artistId: show.artists.map((sa) => sa.artistId),
        });
    }
    async create(show) {
        const created = await this.prisma.show.create({
            data: {
                id: show.id,
                name: show.name,
                location: show.location,
                date: show.date,
                artists: {
                    create: show.artistId.map((artistId) => ({
                        artist: {
                            connect: { id: artistId },
                        },
                    })),
                },
            },
            include: {
                artists: true,
            },
        });
        return new shows_entity_1.Show({
            ...created,
            artistId: created.artists.map((sa) => sa.artistId),
        });
    }
    async createMany(shows) {
        const createdShows = [];
        for (const show of shows) {
            const created = await this.prisma.show.create({
                data: {
                    id: show.id,
                    name: show.name,
                    location: show.location,
                    date: show.date,
                    artists: {
                        create: show.artistId.map((artistId) => ({
                            artist: {
                                connect: { id: artistId },
                            },
                        })),
                    },
                },
                include: {
                    artists: true,
                },
            });
            createdShows.push(new shows_entity_1.Show({
                ...created,
                artistId: created.artists.map((sa) => sa.artistId),
            }));
        }
        return createdShows;
    }
    async update(id, show) {
        await this.prisma.showArtist.deleteMany({ where: { showId: id } });
        const updated = await this.prisma.show.update({
            where: { id },
            data: {
                name: show.name,
                location: show.location,
                date: show.date,
                artists: show.artistId
                    ? {
                        create: show.artistId.map((artistId) => ({
                            artist: {
                                connect: { id: artistId },
                            },
                        })),
                    }
                    : undefined,
            },
            include: {
                artists: true,
            },
        });
        return new shows_entity_1.Show({
            ...updated,
            artistId: updated.artists.map((sa) => sa.artistId),
        });
    }
    async delete(id) {
        return await this.prisma.show
            .delete({ where: { id } })
            .then(() => true)
            .catch(() => false);
    }
};
exports.ShowPrismaRepository = ShowPrismaRepository;
exports.ShowPrismaRepository = ShowPrismaRepository = __decorate([
    (0, common_1.Injectable)()
], ShowPrismaRepository);
//# sourceMappingURL=shows-prisma.repository.js.map