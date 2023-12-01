import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityPersona } from "./persona.entity";
//import { EntityContenido } from "./contenido.entity";

@Entity('wallet')
export class EntityWallet {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    nombreBilletera: string
    nullable: false

    @Column('float', {
        default: 0,
        nullable: false
    })
    balance: number

    @Column({
        type: 'text',
        nullable: false
    })
    descrpcion: string


    //! RELACION Billetera - Persona
    @ManyToOne(() => EntityPersona, (persona) => persona.wallet)
    persona: EntityPersona


    // //! RELACION Billerta - Contenido
    // @OneToMany(() => EntityContenido, (contenido) => contenido.wallet)
    // contenido: EntityContenido
}

