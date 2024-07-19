import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { SolicitacaoBase } from "./SB_SolicitacaoBase";
import { Endereco } from "./SB_Endereco";

@Entity("SB_Geofeamento")
export class Geofeamento {
  @PrimaryGeneratedColumn()
  id_Geofeamento!: number;

  @Column("bigint")
  SB_UploadArquivo!: number;

  @Column()
  SB_DataTime!: Date;

  @ManyToOne(() => SolicitacaoBase)
  @JoinColumn({ name: "SB_SolicitacaoBase_id_SolicitacaoBase" })
  solicitacaoBase!: SolicitacaoBase;

  @ManyToOne(() => Endereco)
  @JoinColumn({ name: "SB_SolicitacaoBase_SB_Endereco_id_Endereco" })
  endereco!: Endereco;
}
