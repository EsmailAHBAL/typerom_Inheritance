import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';


@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })


export abstract class Person {

    @PrimaryGeneratedColumn()
    id : number
    @Column()
    name:string

    @Column()
    email:string

}

function DiscriminatorColumn(arg0: { name: string; type: string; }) {
    throw new Error('Function not implemented.');
}
