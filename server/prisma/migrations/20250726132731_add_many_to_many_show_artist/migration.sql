/*
  Warnings:

  - You are about to drop the column `artist_id` on the `shows` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "shows" DROP CONSTRAINT "shows_artist_id_fkey";

-- AlterTable
ALTER TABLE "shows" DROP COLUMN "artist_id";

-- CreateTable
CREATE TABLE "show_artists" (
    "showId" UUID NOT NULL,
    "artistId" UUID NOT NULL,

    CONSTRAINT "show_artists_pkey" PRIMARY KEY ("showId","artistId")
);

-- AddForeignKey
ALTER TABLE "show_artists" ADD CONSTRAINT "show_artists_showId_fkey" FOREIGN KEY ("showId") REFERENCES "shows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "show_artists" ADD CONSTRAINT "show_artists_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
