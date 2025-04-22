-- CreateTable
CREATE TABLE "livro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "publicacao" TIMESTAMP(3) NOT NULL,
    "disponibilidade" BOOLEAN NOT NULL,

    CONSTRAINT "livro_pkey" PRIMARY KEY ("id")
);
