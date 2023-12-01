import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityWallet } from "./wallet.entity";


@Entity('persona')
export class EntityPersona{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar")
    nombre: string
    
    @Column("varchar")
    apellido: string
    
    @Column("varchar", { nullable: true, unique: true})
    email: string

    //!RELACION Persona - Billetera
    @OneToMany(() => EntityWallet, (wallet) => wallet.persona)
    wallet: EntityWallet[];
}