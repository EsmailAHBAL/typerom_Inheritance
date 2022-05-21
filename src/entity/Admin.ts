import { Person } from './Person';
import { ChildEntity, Column } from "typeorm";

@ChildEntity()
export class Admin extends Person
{
   @Column()
   password :string
}