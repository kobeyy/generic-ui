import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CellTemplateWithAccessor } from '../../../composition/domain-api/read/definition/cell-template-with-accessor';
import { StructureFormationDispatcher } from '../../domain-api/formation/structure-formation.dispatcher';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { StructureFormationWarehouse } from '../../domain-api/formation/structure-formation.warehouse';
import { ItemEntity } from '../../domain/source/item.entity';
import { VerticalFormationRepository } from '../../domain-api/vertical-formation/vertical-formation.repository';
import { StructureWarehouse } from '../../domain-api/structure.warehouse';
import { StructureRowSelectEnabledArchive } from './row/structure.row-select-enabled.archive';
import { StructureId } from '../../domain/structure.id';
import { SearchPhraseRepository } from '../../../../structure/search/domain-api/phrase/search-phrase.repository';
import { SearchHighlightArchive } from '../../../../structure/search/domain-api/highlight/search-highlight.archive';
import { StructureVerticalFormationWarehouse } from '../../domain-api/vertical-formation/structure-vertical-formation.warehouse';
export declare class StructureContentComponent extends SmartComponent implements OnInit {
    private readonly platformId;
    private readonly renderer;
    private readonly elementRef;
    private readonly changeDetectorRef;
    private readonly formationCommandService;
    private readonly structureCellEditArchive;
    private readonly structureEditModeArchive;
    private readonly formationReadModelService;
    private readonly structureWarehouse;
    private readonly structureVerticalFormationWarehouse;
    private readonly structureRowSelectEnabledArchive;
    private readonly verticalFormationRepository;
    private readonly structureId;
    private readonly structureSearchPhraseRepository;
    private readonly structureSearchHighlightArchive;
    source: Array<ItemEntity>;
    columns: Array<CellTemplateWithAccessor>;
    editMode: boolean;
    cellEditing: boolean;
    rowHeight: number;
    searchPhrase: string;
    highlighting: boolean;
    phrase: boolean;
    rowSelecting: boolean;
    rowDetailOpened: number;
    constructor(platformId: any, renderer: Renderer2, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, formationCommandService: StructureFormationDispatcher, structureCellEditArchive: StructureCellEditArchive, structureEditModeArchive: StructureEditModeArchive, formationReadModelService: StructureFormationWarehouse, structureWarehouse: StructureWarehouse, structureVerticalFormationWarehouse: StructureVerticalFormationWarehouse, structureRowSelectEnabledArchive: StructureRowSelectEnabledArchive, verticalFormationRepository: VerticalFormationRepository, structureId: StructureId, // REfactor
    structureSearchPhraseRepository: SearchPhraseRepository, structureSearchHighlightArchive: SearchHighlightArchive);
    ngOnInit(): void;
    trackByFn(): number;
    translateY(index: number): string;
    toggleSelectedRow(entity: ItemEntity): void;
    private clearSelectedRows;
}
