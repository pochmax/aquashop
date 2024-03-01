/*
  Warnings:

  - You are about to drop the column `sails` on the `WindsurfSail` table. All the data in the column will be lost.
  - You are about to drop the column `sails` on the `WindsurfBoard` table. All the data in the column will be lost.
  - Added the required column `userId` to the `WindsurfSail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `WindsurfBoard` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WindsurfSail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "size" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "cumber" INTEGER,
    "mastSize" REAL,
    "wishSize" REAL,
    "imageUrl" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "WindsurfSail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WindsurfSail" ("brand", "cumber", "id", "imageUrl", "mastSize", "model", "size", "type", "wishSize") SELECT "brand", "cumber", "id", "imageUrl", "mastSize", "model", "size", "type", "wishSize" FROM "WindsurfSail";
DROP TABLE "WindsurfSail";
ALTER TABLE "new_WindsurfSail" RENAME TO "WindsurfSail";
CREATE TABLE "new_WindsurfBoard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "fins" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "volume" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "WindsurfBoard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WindsurfBoard" ("brand", "fins", "id", "imageUrl", "model", "type", "volume") SELECT "brand", "fins", "id", "imageUrl", "model", "type", "volume" FROM "WindsurfBoard";
DROP TABLE "WindsurfBoard";
ALTER TABLE "new_WindsurfBoard" RENAME TO "WindsurfBoard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
