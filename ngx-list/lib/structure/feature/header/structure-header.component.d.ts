import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../composition/domain-api/read/definition/cell-template-with-context';
import { StructureId } from '../../domain/structure.id';
import { StructureFilterWarehouse } from '../../domain-api/filter/structure-filter.warehouse';
import { CompositionWarehouse } from '../../../composition/domain-api/composition.warehouse';
import { StructureWarehouse } from '../../domain-api/structure.warehouse';
import { StructureVerticalFormationWarehouse } from '../../domain-api/vertical-formation/structure-vertical-formation.warehouse';
export declare class StructureHeaderComponent extends SmartComponent implements OnInit, AfterViewInit {
    private readonly changeDetectorRef;
    private readonly renderer;
    private readonly eventBus;
    private readonly structureId;
    private readonly structureFilterReadModelRepository;
    private readonly structureWarehouse;
    private readonly structureVerticalFormationWarehouse;
    private readonly compositionReadModelService;
    containerRef: ElementRef;
    filtersRef: ElementRef;
    headerColumns: Array<CellTemplateWithContext>;
    filterRowEnabled: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, eventBus: DomainEventBus, structureId: StructureId, structureFilterReadModelRepository: StructureFilterWarehouse, structureWarehouse: StructureWarehouse, structureVerticalFormationWarehouse: StructureVerticalFormationWarehouse, compositionReadModelService: CompositionWarehouse);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
