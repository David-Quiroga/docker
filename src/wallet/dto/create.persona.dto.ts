import { IsString } from "class-validator";

export class CreatePersonaDto {

    @IsString()
    nombre: string

    @IsString()
    apellido: string

    @IsString()
    email: string
    
}