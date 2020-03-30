import { Table, Column, Model, AutoIncrement, PrimaryKey, AllowNull, DataType } from "sequelize-typescript";

interface UserInterface {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

@Table({
  tableName: 'users',
  timestamps: false  
})

export default class User extends Model<UserInterface>{
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number;

    @AllowNull(false)
    @Column
    first_name!: string;

    @AllowNull(false)
    @Column
    last_name!: string;

    @AllowNull(false)
    @Column
    email!: string;

    @AllowNull(false)
    @Column
    password!: string;
}
