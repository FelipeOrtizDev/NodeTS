import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Endereco } from "./SB_Endereco";

@Entity("SB_Equipe")
export class Equipe {
  @PrimaryGeneratedColumn()
  id_Equipe!: number;

  @Column({ length: 150 })
  SB_NomeFuncionario!: string;

  @Column({ length: 115 })
  SB_NomeEmpresa!: string;

  @ManyToOne(() => Endereco)
  @JoinColumn({ name: "SB_Endereco_id_Endereco" })
  endereco!: Endereco;
}
