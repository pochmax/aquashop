/*
  Warnings:

  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserExample";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "WindsurfBoard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "fins" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "volume" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "WindsurfSail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "size" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "cumber" INTEGER,
    "mastSize" REAL,
    "wishSize" REAL
);
