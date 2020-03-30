import { Table, Column, Model, AutoIncrement, PrimaryKey, AllowNull, DataType } from "sequelize-typescript";

interface ArticleInterface {
    id: number,
    title: string,
    description: string,
    imgUrl: string,
    body: string
}

@Table({
    tableName: 'articles',
    timestamps: true
})

export default class Article extends Model<ArticleInterface>{
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number;

    @AllowNull(false)
    @Column
    title!: string;

    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    description!: string;

    @AllowNull(false)
    @Column
    imgUrl!: string;

    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    body!: string;
}
