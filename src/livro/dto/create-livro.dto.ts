import {IsString, IsDate, IsBoolean} from 'class-validator'

export class CreateLivroDto {


    @IsString()
    titulo: string;

    @IsString()
    autor: string;

    @IsString()
    editora: string;

    @IsDate()
    publicacao:Date;

    @IsBoolean()
    disponibilidade:boolean;
}
