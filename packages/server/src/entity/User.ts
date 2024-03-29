import {
    Entity,
    Column,
    BeforeInsert,
    BaseEntity,
    PrimaryGeneratedColumn
} from 'typeorm';

import * as bcrypt from "bcryptjs";

@Entity("users")

export class User extends BaseEntity{
    @PrimaryGeneratedColumn("uuid") id: string;
    
    @Column("varchar", { length: 255}) email: string;

    @Column("varchar", { length: 255}) password: string;

    @Column("boolean", { default: false}) confirmed: boolean;

    @Column("boolean", { default: false }) locked: boolean;


    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
    
}