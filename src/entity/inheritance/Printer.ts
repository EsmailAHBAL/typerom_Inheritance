import { Column, Entity } from 'typeorm';
import { Device } from './Device';
@Entity()
export class Printer extends Device {
   
    @Column()
    type_p:string
}