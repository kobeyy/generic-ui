import { ChangeDetectorRef, OnInit } from '@angular/core';
import { StructureSourceWarehouse } from '../../../../lib/structure/domain-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { ListViewTemplate } from './template/list-view-template';
import { ListViewTemplateArchive } from './template/list-view-template.archive';
export declare class ListViewSourceComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSourceWarehouse;
    private readonly containerTemplateArchive;
    source: Array<any>;
    template: ListViewTemplate;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureSourceWarehouse: StructureSourceWarehouse, containerTemplateArchive: ListViewTemplateArchive);
    ngOnInit(): void;
}
