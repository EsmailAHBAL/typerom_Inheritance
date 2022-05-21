import { Column, Entity } from "typeorm";
import { Device } from "./Device";

@Entity()
export class Screen extends Device{
     @Column()
     taille:number
}