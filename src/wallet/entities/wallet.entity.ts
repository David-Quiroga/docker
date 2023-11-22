import { InjectRepository } from "@nestjs/typeorm";
import { text } from "stream/consumers";
import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity()
export class Wallet{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text')
    nombreBilletera: string
    nullable: false

    @Column('float',{
        default: 0,
        nullable: false
    })
    balance: number

    @Column({
        type: 'text',
        nullable: false
    })
    descrpcion: string

}

