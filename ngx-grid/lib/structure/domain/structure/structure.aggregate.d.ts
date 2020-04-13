import { Type } from '@angular/core';
import { AggregateEvent, AggregateRoot } from '@generic-ui/hermes';
import { PagingManager } from '../paging/paging.manager';
import { SourceManager } from '../source/source.manager';
import { VerticalFormation } from './vertical-formation/vertical-formation';
import { SummariesManager } from './summaries/summaries.manager';
import { SorterCollection } from './sort/sorter.collection';
import { FilterManager } from './filter/filter.manager';
import { FieldCollection } from './field/field.collection';
import { FormationAggregate } from '../formation/formation-aggregate';
import { StructureId } from '../structure.id';
import { StructureEditSourceItemParams } from '../source/origin/edit/structure.edit-source-item.params';
import { PagingConfig } from '../paging/paging-config';
import { OriginItemEntity } from '../source/origin/origin-item-entity';
import { ColumnConfig } from '../../../composition/domain/column/column.config';
import { SortingConfig } from '../../ui-api/sorting-config';
import { FieldId } from './field/data-type/field.id';
import { StructureSorter } from './sort/structure.sorter';
import { FilterConfig } from '../../ui-api/filter/filter-config';
import { QuickFiltersConfig } from '../../ui-api/filter/quick-filters.config';
import { SearchConfig } from '../../ui-api/search/search-config';
import { SearchManager } from './search/search.manager';
import { SortOrder } from '../../../composition/domain/column/sort/sort-order';
import { SchemaTheme } from '../../../schema/domain/schema-theme';
export declare class StructureAggregate extends AggregateRoot<StructureId> {
    private formationAggregate;
    private pagingManager;
    private sourceManager;
    private sorterCollection;
    private filterManager;
    private searchManager;
    private verticalFormation;
    private fieldCollection;
    private summariesManager;
    constructor(structureId: StructureId, pagingAggregate: PagingManager, formationAggregate: FormationAggregate, sourceManager: SourceManager, verticalFormation: VerticalFormation, summariesManager: SummariesManager, sorterCollection: SorterCollection, filterCollection: FilterManager, searchManager: SearchManager, fieldCollection: FieldCollection);
    createEvent(): Type<AggregateEvent<StructureId>>;
    init(): void;
    setVerticalFormationEnabled(enabled: boolean): void;
    getVerticalFormation(): VerticalFormation;
    setSummariesEnabled(enabled: boolean): ReadonlyArray<AggregateEvent<StructureId>>;
    setOrigin(items: Array<any>): ReadonlyArray<AggregateEvent<StructureId>>;
    editItem(editParams: StructureEditSourceItemParams): ReadonlyArray<AggregateEvent<StructureId>>;
    setHeight(height: number): void;
    setTheme(theme: SchemaTheme): void;
    setFormation(formation: FormationAggregate): void;
    setScrollPosition(position: number): void;
    getFormation(): FormationAggregate;
    getPaging(): PagingManager;
    changePaging(config: PagingConfig): void;
    setPaging(paging: PagingManager): void;
    nextPage(): void;
    prevPage(): void;
    changePageSize(pageSize: number): ReadonlyArray<AggregateEvent<StructureId>>;
    getEntities(): Array<OriginItemEntity>;
    getSource(): SourceManager;
    createFields(columns: Array<ColumnConfig>): ReadonlyArray<AggregateEvent<StructureId>>;
    setSortingConfig(config: SortingConfig): void;
    toggleSort(fieldId: FieldId): Array<StructureSorter>;
    setSortOrder(fieldId: FieldId, sortOrder: SortOrder): Array<StructureSorter>;
    setFilterConfig(config: FilterConfig): void;
    setSearchingConfig(config: SearchConfig): void;
    setQuickFiltersConfig(config: QuickFiltersConfig): void;
    toggleFilter(fieldId: FieldId, externalFilterId: string, filterValue: string): Array<AggregateEvent<StructureId>>;
    addSearchPhrase(phrase: string): Array<AggregateEvent<StructureId>>;
    removeSearchPhrase(): Array<AggregateEvent<StructureId>>;
    private calculateSource;
    private calculateSourceBasedOnVirtualScroll;
    private initTheme;
}
