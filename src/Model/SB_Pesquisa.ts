import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Endereco } from "./SB_Endereco";

@Entity("SB_Pesquisa")
export class Pesquisa {
  @PrimaryGeneratedColumn()
  id_Pesquisa!: number;

  @Column({ length: 45 })
  SB_Pde!: string;

  @Column()
  SB_DateReclamacao!: Date;

  @Column({ length: 100 })
  SB_Os!: string;

  @Column({ length: 100 })
  SB_DMC!: string;

  @Column({ length: 75 })
  SB_TipoReclamacao!: string;

  @Column({ length: 100 })
  SB_VRP!: string;

  @Column({ length: 100 })
  SB_PassadoPara!: string;

  @Column({ length: 250 })
  SB_HistoricoReclamcao!: string;

  @Column({ length: 250 })
  SB_ObservacoesEquipe!: string;

  @Column({ length: 250 })
  SB_ObservacoesCliente!: string;

  @ManyToOne(() => Endereco)
  @JoinColumn({ name: "SB_Endereco_id_Endereco" })
  endereco!: Endereco;
}
