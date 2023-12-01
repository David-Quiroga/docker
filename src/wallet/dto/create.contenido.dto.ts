import { IsString } from "class-validator";

export class CreateContenidoDto{

    @IsString()
    datosPersonales: string

    @IsString()
    datosBancarios: string
    
}