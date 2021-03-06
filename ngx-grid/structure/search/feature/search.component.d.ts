import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartComponent } from '../../../common/cdk/smart-component';
import { StructureWarehouse } from '../../../lib/structure/domain-api/structure.warehouse';
import { SearchPlaceholderArchive } from '../domain-api/placeholder/search-placeholder.archive';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { StructureVerticalFormationWarehouse } from '../../../lib/structure/domain-api/vertical-formation/structure-vertical-formation.warehouse';
import { SearchCommandDispatcher } from '../domain-api/search.command-dispatcher';
import { SearchWarehouse } from '../domain-api/search.warehouse';
import { Subscription } from 'rxjs';
export declare class SearchComponent extends SmartComponent implements OnInit, AfterViewInit {
    private readonly formBuilder;
    private readonly renderer2;
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly searchCommandDispatcher;
    private readonly structureWarehouse;
    private readonly searchWarehouse;
    private readonly verticalFormationWarehouse;
    private readonly structureSearchPlaceholderArchive;
    private static readonly FORM_SEARCH_NAME;
    formRef: ElementRef;
    searchForm: FormGroup;
    placeholder: string;
    searchingEnabled: boolean;
    searchInputSubscription: Subscription;
    constructor(formBuilder: FormBuilder, renderer2: Renderer2, changeDetectorRef: ChangeDetectorRef, structureId: StructureId, searchCommandDispatcher: SearchCommandDispatcher, structureWarehouse: StructureWarehouse, searchWarehouse: SearchWarehouse, verticalFormationWarehouse: StructureVerticalFormationWarehouse, structureSearchPlaceholderArchive: SearchPlaceholderArchive);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    clear(): void;
    private observeChanges;
    private stopObserveChanges;
}
