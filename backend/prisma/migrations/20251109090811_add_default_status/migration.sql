/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `leadId` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_leadId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "createdAt",
DROP COLUMN "leadId",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "createdAt",
ALTER COLUMN "status" SET DEFAULT 'new';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- DropEnum
DROP TYPE "Role";
