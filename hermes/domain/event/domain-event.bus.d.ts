import { Observable, Operator } from 'rxjs';
import { DomainEvent } from './domain-event';
import { DomainEventStream } from './domain-event.stream';
import { AggregateId } from '../aggregate-id';
import { DomainEventHandlerImpl } from './handler/domain-event-handler-impl';
export declare class DomainEventBus<E = DomainEvent<AggregateId>> extends Observable<E> {
    constructor(eventStream?: DomainEventStream);
    lift<R>(operator: Operator<E, R>): Observable<R>;
    ofEvent<E2 extends E>(...events: Array<typeof DomainEvent>): Observable<any>;
    ofEventHandler<E2 extends E>(...handlers: Array<DomainEventHandlerImpl<AggregateId, DomainEvent<AggregateId>>>): any;
    private createEventInstance;
}
