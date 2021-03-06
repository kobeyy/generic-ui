import { Type } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSummariesRepository } from './structure.summaries.repository';
import { StructureSummariesEnabledSetEvent } from '../../../domain/structure/summaries/set/structure.summaries-enabled-set.event';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureSummariesEnabledSetEventHandler implements DomainEventHandler<StructureId, StructureSummariesEnabledSetEvent> {
    private structureSummariesRepository;
    constructor(structureSummariesRepository: StructureSummariesRepository);
    forEvent(): Type<StructureSummariesEnabledSetEvent>;
    handle(event: StructureSummariesEnabledSetEvent): void;
}
