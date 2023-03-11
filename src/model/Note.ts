import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Note.NOTE_TABLE_NAME,
})
export class Note extends Model {
  public static NOTE_TABLE_NAME = "note" as string;
  public static NOTE_ID = "id" as string;
  public static NOTE_NAME = "name" as string;
  public static NOTE_DESCRIPTION = "description" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Note.NOTE_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Note.NOTE_NAME,
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    field: Note.NOTE_DESCRIPTION,
  })
  description!: string;
}
