import { Optional } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../domain/structure/structure-aggregate.repository';
import { StructureAggregate } from '../../../domain/structure/structure.aggregate';
import { InMemoryStructureAggregateStore } from './in-memory.structure.aggregate-store';
import { StructureId } from '../../../domain/structure.id';
export declare class InMemoryStructureAggregateRepository extends StructureAggregateRepository {
    private inMemoryStructureAggregateStore;
    constructor(inMemoryStructureAggregateStore: InMemoryStructureAggregateStore);
    getById(aggregateId: StructureId): Optional<StructureAggregate>;
    save(aggregate: StructureAggregate): void;
}
