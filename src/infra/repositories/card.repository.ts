import { Repository, EntityRepository } from "typeorm";
import { Card } from "src/model/entities/card.entity";

@EntityRepository(Card)
export class CardRepository extends Repository<Card> {}