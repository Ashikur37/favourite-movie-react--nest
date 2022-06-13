/*
  Warnings:

  - You are about to drop the column `category` on the `favourite_movies` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `favourite_movies` table. All the data in the column will be lost.
  - Added the required column `movieId` to the `favourite_movies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "favourite_movies" DROP CONSTRAINT "favourite_movies_userId_fkey";

-- AlterTable
ALTER TABLE "favourite_movies" DROP COLUMN "category",
DROP COLUMN "name",
ADD COLUMN     "movieId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "posterUrl" TEXT NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "favourite_movies" ADD CONSTRAINT "favourite_movies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favourite_movies" ADD CONSTRAINT "favourite_movies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
