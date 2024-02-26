/*
  Warnings:

  - Added the required column `model` to the `WindsurfBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `WindsurfSail` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WindsurfBoard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "fins" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "volume" INTEGER NOT NULL
);
INSERT INTO "new_WindsurfBoard" ("brand", "fins", "id", "type", "volume") SELECT "brand", "fins", "id", "type", "volume" FROM "WindsurfBoard";
DROP TABLE "WindsurfBoard";
ALTER TABLE "new_WindsurfBoard" RENAME TO "WindsurfBoard";
CREATE TABLE "new_WindsurfSail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "size" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "cumber" INTEGER,
    "mastSize" REAL,
    "wishSize" REAL
);
INSERT INTO "new_WindsurfSail" ("brand", "cumber", "id", "mastSize", "size", "type", "wishSize") SELECT "brand", "cumber", "id", "mastSize", "size", "type", "wishSize" FROM "WindsurfSail";
DROP TABLE "WindsurfSail";
ALTER TABLE "new_WindsurfSail" RENAME TO "WindsurfSail";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
