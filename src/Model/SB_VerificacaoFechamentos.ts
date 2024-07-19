import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { SolicitacaoBase } from "./SB_SolicitacaoBase";

@Entity("SB_VerificacaoFechamentos")
export class VerificacaoFechamentos {
  @PrimaryGeneratedColumn()
  id_VerificacaoFechamentos!: number;

  @Column({ length: 250 })
  SB_EstadoAbastecimento!: string;

  @Column({ type: "tinyint" })
  SB_Motivo!: boolean;

  @ManyToOne(() => SolicitacaoBase)
  @JoinColumn({ name: "SB_SolicitacaoBase_SB_Endereco_id_Endereco" })
  solicitacaoBase!: SolicitacaoBase;
}
