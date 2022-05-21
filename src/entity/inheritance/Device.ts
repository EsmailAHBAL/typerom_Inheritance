import { Column, PrimaryGeneratedColumn } from "typeorm"

export abstract class  Device {
    @PrimaryGeneratedColumn()
     num_device :number
    @Column()
     count :number
}