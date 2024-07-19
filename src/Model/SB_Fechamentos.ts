import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { SolicitacaoBase } from "./SB_SolicitacaoBase";

@Entity("SB_Fechamentos")
export class Fechamento {
  @PrimaryGeneratedColumn()
  id_Fechamentos!: number;

  @Column()
  SB_DataFechamento!: Date;

  @Column()
  SB_HoraFechamento!: string;

  @Column({ length: 45 })
  SB_Status!: string;

  @Column({ length: 250 })
  SB_Observacoes!: string;

  @Column({ length: 25 })
  SB_Prioridade!: string;

  @Column({ type: "tinyint" })
  SB_ServicoAceito!: boolean;

  @Column({ type: "tinyint" })
  SB_HouveFechamento!: boolean;

  @Column({ length: 100 })
  SB_UltilizouMZ!: string;

  @Column({ length: 45 })
  SB_FechadoPor!: string;

  @Column({ length: 45 })
  SB_Rede!: string;

  @Column({ length: 250 })
  SB_HFSMotivo!: string;

  @Column({ length: 250 })
  SB_HSNObservacao!: string;

  @ManyToOne(() => SolicitacaoBase)
  @JoinColumn({ name: "SB_SolicitacaoBase_SB_Endereco_id_Endereco" })
  solicitacaoBase!: SolicitacaoBase;
}
