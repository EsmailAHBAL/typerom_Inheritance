import { Column ,Entity} from "typeorm";
import { Device } from "./Device";

@Entity()
export class keyboard extends Device
{
    @Column()
    type:string

}