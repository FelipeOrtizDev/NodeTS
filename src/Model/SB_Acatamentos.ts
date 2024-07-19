import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Fechamento } from "./SB_Fechamentos";

@Entity("SB_Acatamentos")
export class Acatamentos {
  @PrimaryGeneratedColumn()
  id_Acatamentos!: number;

  @Column()
  SB_DataAcatamento!: Date;

  @Column()
  SB_PrvisãoAcatamento!: string;

  @Column({ length: 75 })
  SB_EquipeResponsavel!: string;

  @ManyToOne(() => Fechamento)
  @JoinColumn({ name: "SB_Fechamentos_id_Fechamentos" })
  fechamento!: Fechamento;
}
