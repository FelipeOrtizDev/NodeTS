import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Endereco } from "./SB_Endereco";

@Entity("SB_Equipamento")
export class Equipamento {
  @PrimaryGeneratedColumn()
  id_Equipamento!: number;

  @Column({ length: 75 })
  SB_TipoEquipamento!: string;

  @Column({ length: 100 })
  SB_NomeEquipamento!: string;

  @Column()
  SB_DataRegistroEquipamento!: Date;

  @ManyToOne(() => Endereco)
  @JoinColumn({ name: "SB_Endereco_id_Endereco" })
  endereco!: Endereco;
}
