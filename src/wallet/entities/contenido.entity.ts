import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//import { EntityWallet } from "./wallet.entity";

@Entity('contenido')
export class EntityContenido{

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column("varchar", { nullable: true})
    datosPersonales: string

    @Column("varchar", { nullable: true})
    datosBancarios: string


    //! RELACION Contenido - Billetera
    // @ManyToOne(() => EntityWallet, (wallet) => wallet.contenido)
    // wallet: EntityWallet
}