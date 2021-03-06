import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetVerticalScrollEnabledCommand } from './set-vertical-scroll-enabled.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class SetVerticalScrollEnabledCommandHandler implements CommandHandler<StructureAggregate, SetVerticalScrollEnabledCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetVerticalScrollEnabledCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetVerticalScrollEnabledCommand): void;
    handleAggregate(structure: StructureAggregate, command: SetVerticalScrollEnabledCommand): void;
}
