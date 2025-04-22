import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Livro } from './entities/livro.entity';


@Injectable()
export class LivroService {
  constructor(private prisma: PrismaService) {}

  private maptoEntity (livro: any): Livro {
    return {
      id: livro.id,
      titulo:livro.titulo,
      autor:livro.autor,
      editora:livro.editora,
      publicacao:livro.publicacao,
      disponibilidade:livro.disponibilidade,
  };
  
}

  async create(createLivroDto: CreateLivroDto): Promise <Livro> {
    const livro = await this.prisma.livro.create({
      data: createLivroDto,
    });
    return this.maptoEntity(livro);
  }

  async findAll(): Promise <Livro[]> {
    const livro = await this.prisma.livro.findMany();
    return livro.map((livro) => this.maptoEntity(livro));
  }

  async findOne(id: number) {
    return await this.prisma.livro.findUnique({
    where: { id },
    });
  }

  async update(id: number, updateLivroDto: UpdateLivroDto): Promise <Livro> {
    return await this.prisma.livro.update({
      where: { id },
      data:updateLivroDto,
    });
  }

  async remove(id: number): Promise <Livro> {
   return await this.prisma.livro.delete({
    where: { id },
   }); 
  }
}
