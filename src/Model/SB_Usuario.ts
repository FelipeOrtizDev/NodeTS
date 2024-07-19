import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("SB_Usuario")
export class Cliente {
  @PrimaryGeneratedColumn()
  id_Usuario!: number;

  @Column({ length: 150 })
  SB_NomeCompleto!: string;

  @Column({ length: 100 })
  SB_Login!: string;

  @Column({ length: 250 })
  SB_Senha!: string;

  @Column({ length: 250 })
  SB_Email!: string;

  @Column({ length: 50 })
  SB_Matricula!: string;

  @Column({ length: 45 })
  SB_Perfil!: string;

  @Column({ type: "tinyint" })
  SB_Status!: number;

  @Column({ length: 100 })
  SB_Unidade!: string;
}
