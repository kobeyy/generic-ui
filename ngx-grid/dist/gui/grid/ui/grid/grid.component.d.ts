import { ElementRef } from '@angular/core';
import { StructureBase } from '../../../../lib/structure/ui/structure-base';
import { StructureComponent } from '../../../../lib/structure/ui/structure/structure.component';
export declare const gridSelector = "gui-grid";
export declare class GridComponent extends StructureBase {
    private elementRef;
    structureRef: StructureComponent;
    constructor(elementRef: ElementRef);
    getElementRef(): ElementRef;
}
