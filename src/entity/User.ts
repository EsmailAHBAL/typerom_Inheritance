import { ChildEntity } from 'typeorm';
import { Person } from "./Person";

@ChildEntity()
export class User extends Person{


}