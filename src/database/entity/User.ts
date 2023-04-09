import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number

    @Column('text', { nullable: false })
    public firstName: string

    @Column('text')
    public lastName: string

    @Column('integer')
    public age: number

}
