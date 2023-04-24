import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, } from "typeorm";

@Entity("category")
export class CategoryEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;
    
    @Column({ length: 250 })
    description: string;

}
