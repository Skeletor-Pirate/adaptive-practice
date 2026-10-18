import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prismaInstance: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prismaInstance) {
    global.prismaInstance = new PrismaClient({
      log: ["warn", "error"],
    });
  }
  prisma = global.prismaInstance;
}

export { prisma };
