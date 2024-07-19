import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Endereco } from "./SB_Endereco";

@Entity("SB_SolicitacaoBase")
export class SolicitacaoBase {
  @PrimaryGeneratedColumn()
  id_SolicitacaoBase!: number;

  @Column()
  SB_DataSolicitacao!: Date;

  @Column()
  SB_HoraSolicitacao!: string;

  @Column({ length: 50 })
  SB_NumeroOS!: string;

  @Column({ length: 100 })
  SB_TipoServico!: string;

  @Column({ length: 250 })
  SB_Observacoes!: string;

  @Column({ type: "tinyint" })
  SB_Microzona!: boolean;

  @Column({ length: 100 })
  SB_Solicitante!: string;

  @Column({ length: 250 })
  SB_Observacao!: string;

  @ManyToOne(() => Endereco)
  @JoinColumn({ name: "SB_Enderecos_id_Endereco" })
  endereco!: Endereco;
}
