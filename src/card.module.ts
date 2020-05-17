import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CardRepository } from "./infra/repositories/card.repository";

@Module({
    imports:[TypeOrmModule.forFeature([CardRepository])],
    exports:[TypeOrmModule]
})
export class CardModule {}