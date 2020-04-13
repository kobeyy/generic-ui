import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureWarehouse } from '../structure.warehouse';
import { StructureId } from '../../domain/structure.id';
export declare class FormationEventService {
    private readonly domainEventBus;
    private readonly structureReadModelService;
    constructor(domainEventBus: DomainEventBus, structureReadModelService: StructureWarehouse);
    onItemSelected(structureId: StructureId): Observable<Array<any>>;
}
