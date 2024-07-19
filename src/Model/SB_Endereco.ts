import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("SB_Endereco")
export class Endereco {
  @PrimaryGeneratedColumn()
  id_Endereco!: number;

  @Column({ length: 150 })
  SB_Municipio!: string;

  @Column({ length: 150 })
  SB_Logradouro!: string;

  @Column()
  SB_Numero!: number;

  @Column({ length: 100 })
  SB_Complemento!: string;

  @Column({ length: 100 })
  SB_Bairro!: string;

  @Column({ length: 45 })
  SB_ZonaPressao!: string;

  @Column({ length: 75 })
  SB_Polo!: string;

  @Column({ length: 100 })
  SB_Referencia!: string;

  @Column({ length: 45 })
  SB_SetorAbastecimento!: string;
}
