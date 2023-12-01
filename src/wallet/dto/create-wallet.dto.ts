import { Type } from "class-transformer"
import { IsInt, IsOptional, IsPositive, IsString } from "class-validator"

export class CreateWalletDto {
    @IsInt()
    id: number

    @IsString()
    @IsOptional()
    nombreBilletera?: string

    @IsString()
    @IsOptional()
    descripcion?: string
    
    @IsInt()
    @IsPositive()
    @IsOptional()
    @Type( () => Number )
    balance?: number
}
