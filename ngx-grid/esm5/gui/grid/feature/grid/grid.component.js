/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GridGateway } from './grid-gateway';
import { gridProviders } from './grid.providers';
import { structureParentComponent } from '../../../../lib/structure/feature/structure-parent-component';
import { GridIdGenerator } from './register/grid-id.generator';
import { GridRegister } from './register/grid.register';
import { GridConsoleApiProvider } from './console/grid.console.api';
/** @type {?} */
export var gridSelector = 'gui-grid';
var GridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GridComponent, _super);
    function GridComponent(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.gridRegister = gridRegister;
        _this.gridIdGenerator = gridIdGenerator;
        return _this;
    }
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var gridId = this.gridId;
        if (gridId === undefined) {
            gridId = this.gridIdGenerator.generateId();
        }
        this.localGridId = gridId;
        this.exposeGridId();
        // register
        this.gridRegister.register(gridId, this, this.structureRef.getStructureId());
        if (isPlatformBrowser(this.platformId)) {
            window['getGuiGrid'] = (/**
             * @param {?} gridId
             * @return {?}
             */
            function (gridId) {
                /** @type {?} */
                var gridConsoleConfig = _this.gridRegister.getValues(gridId);
                if (gridConsoleConfig) {
                    return new GridConsoleApiProvider(gridConsoleConfig.component, gridConsoleConfig.structureId).provide();
                }
                else {
                    return undefined;
                }
            });
        }
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.gridRegister.unregister(this.localGridId);
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.getGridId = /**
     * @return {?}
     */
    function () {
        return '';
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    GridComponent.prototype.exposeGridId = /**
     * @private
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.setAttribute('gui-grid-id', this.localGridId);
    };
    GridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-grid',
                    template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(horizontalGridChanged)=\"onHorizontalGrid($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(rowColoringChanged)=\"onRowColoring($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(themeChanged)=\"onTheme($event)\"\n\t(verticalGridChanged)=\"onVerticalGrid($event)\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditing\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[footerPanel]=\"footerPanel\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowDetail]=\"rowDetail\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelecting]=\"rowSelecting\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[summaries]=\"summaries\"\n\t[theme]=\"themeConfig\"\n\t[titlePanel]=\"titlePanel\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\"\n>\n</gui-structure>\n",
                    providers: tslib_1.__spread(gridProviders, [
                        {
                            provide: structureParentComponent,
                            useExisting: GridComponent
                        }
                    ]),
                    host: {
                        '[class.gui-grid]': "\"true\"",
                        '[style.height]': 'maxHeight'
                    },
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-grid{display:block;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    GridComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: GridRegister },
        { type: GridIdGenerator }
    ]; };
    GridComponent.propDecorators = {
        structureRef: [{ type: ViewChild, args: ['structure', { static: true },] }],
        gridId: [{ type: Input }]
    };
    return GridComponent;
}(GridGateway));
export { GridComponent };
if (false) {
    /** @type {?} */
    GridComponent.prototype.structureRef;
    /** @type {?} */
    GridComponent.prototype.gridId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.localGridId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.gridRegister;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.gridIdGenerator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzSSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRXhHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBRXBFLE1BQU0sS0FBTyxZQUFZLEdBQUcsVUFBVTtBQUV0QztJQW1CbUMseUNBQVc7SUFVN0MsdUJBQXlDLFVBQWUsRUFDN0MsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQ3BDLFlBQTBCLEVBQzFCLGVBQWdDO1FBSjNDLFlBS0MsaUJBQU8sU0FDUDtRQU53QyxnQkFBVSxHQUFWLFVBQVUsQ0FBSztRQUM3QyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjs7SUFFM0MsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtRQUFBLGlCQTJCQzs7WUF6QkksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRXhCLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixXQUFXO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFN0UsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7OztZQUFHLFVBQUMsTUFBYzs7b0JBRS9CLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFFN0QsSUFBSSxpQkFBaUIsRUFBRTtvQkFDdEIsT0FBTyxJQUFJLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDeEc7cUJBQU07b0JBQ04sT0FBTyxTQUFTLENBQUM7aUJBQ2pCO1lBQ0YsQ0FBQyxDQUFBLENBQUM7U0FDRjtJQUNGLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELHFDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQscUNBQWE7OztJQUFiO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU8sb0NBQVk7Ozs7SUFBcEI7UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3RSxDQUFDOztnQkFwRkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO29CQUNwQixnbERBQW9DO29CQUlwQyxTQUFTLG1CQUNMLGFBQWE7d0JBQ2hCOzRCQUNDLE9BQU8sRUFBRSx3QkFBd0I7NEJBQ2pDLFdBQVcsRUFBRSxhQUFhO3lCQUMxQjtzQkFDRDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0wsa0JBQWtCLEVBQUUsVUFBUTt3QkFDNUIsZ0JBQWdCLEVBQUUsV0FBVztxQkFDN0I7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUNyQzs7OztnREFXYSxNQUFNLFNBQUMsV0FBVztnQkEzQ08sVUFBVTtnQkFBeEMsaUJBQWlCO2dCQVNqQixZQUFZO2dCQURaLGVBQWU7OzsrQkEyQnRCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQUd2QyxLQUFLOztJQThEUCxvQkFBQztDQUFBLEFBdEZELENBbUJtQyxXQUFXLEdBbUU3QztTQW5FWSxhQUFhOzs7SUFFekIscUNBQ2tCOztJQUVsQiwrQkFDZTs7Ozs7SUFFZixvQ0FBNEI7Ozs7O0lBRWhCLG1DQUE0Qzs7Ozs7SUFDckQsbUNBQThCOzs7OztJQUM5QiwwQ0FBNEM7Ozs7O0lBQzVDLHFDQUFrQzs7Ozs7SUFDbEMsd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBQTEFURk9STV9JRCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHcmlkR2F0ZXdheSB9IGZyb20gJy4vZ3JpZC1nYXRld2F5JztcbmltcG9ydCB7IGdyaWRQcm92aWRlcnMgfSBmcm9tICcuL2dyaWQucHJvdmlkZXJzJztcblxuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi9yZWdpc3Rlci9ncmlkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBHcmlkUmVnaXN0ZXIgfSBmcm9tICcuL3JlZ2lzdGVyL2dyaWQucmVnaXN0ZXInO1xuaW1wb3J0IHsgR3JpZENvbnNvbGVBcGlQcm92aWRlciB9IGZyb20gJy4vY29uc29sZS9ncmlkLmNvbnNvbGUuYXBpJztcblxuZXhwb3J0IGNvbnN0IGdyaWRTZWxlY3RvciA9ICdndWktZ3JpZCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ncmlkJyxcblx0dGVtcGxhdGVVcmw6ICcuL2dyaWQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vZ3JpZC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uZ3JpZFByb3ZpZGVycyxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQsXG5cdFx0XHR1c2VFeGlzdGluZzogR3JpZENvbXBvbmVudFxuXHRcdH1cblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWdyaWRdJzogYFwidHJ1ZVwiYCxcblx0XHQnW3N0eWxlLmhlaWdodF0nOiAnbWF4SGVpZ2h0J1xuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgZXh0ZW5kcyBHcmlkR2F0ZXdheSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywgeyBzdGF0aWM6IHRydWUgfSlcblx0c3RydWN0dXJlUmVmOiBhbnk7XG5cblx0QElucHV0KClcblx0Z3JpZElkOiBzdHJpbmc7IC8vIGNhbiBiZSBzZXQgb25jZVxuXG5cdHByaXZhdGUgbG9jYWxHcmlkSWQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBncmlkUmVnaXN0ZXI6IEdyaWRSZWdpc3Rlcixcblx0XHRcdFx0cHJpdmF0ZSBncmlkSWRHZW5lcmF0b3I6IEdyaWRJZEdlbmVyYXRvcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdGxldCBncmlkSWQgPSB0aGlzLmdyaWRJZDtcblxuXHRcdGlmIChncmlkSWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Z3JpZElkID0gdGhpcy5ncmlkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpO1xuXHRcdH1cblxuXHRcdHRoaXMubG9jYWxHcmlkSWQgPSBncmlkSWQ7XG5cblx0XHR0aGlzLmV4cG9zZUdyaWRJZCgpO1xuXG5cdFx0Ly8gcmVnaXN0ZXJcblx0XHR0aGlzLmdyaWRSZWdpc3Rlci5yZWdpc3RlcihncmlkSWQsIHRoaXMsIHRoaXMuc3RydWN0dXJlUmVmLmdldFN0cnVjdHVyZUlkKCkpO1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHdpbmRvd1snZ2V0R3VpR3JpZCddID0gKGdyaWRJZDogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZ3JpZENvbnNvbGVDb25maWcgPSB0aGlzLmdyaWRSZWdpc3Rlci5nZXRWYWx1ZXMoZ3JpZElkKTtcblxuXHRcdFx0XHRpZiAoZ3JpZENvbnNvbGVDb25maWcpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IEdyaWRDb25zb2xlQXBpUHJvdmlkZXIoZ3JpZENvbnNvbGVDb25maWcuY29tcG9uZW50LCBncmlkQ29uc29sZUNvbmZpZy5zdHJ1Y3R1cmVJZCkucHJvdmlkZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5ncmlkUmVnaXN0ZXIudW5yZWdpc3Rlcih0aGlzLmxvY2FsR3JpZElkKTtcblx0fVxuXG5cdGdldEVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZjtcblx0fVxuXG5cdGdldEdyaWRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRwcml2YXRlIGV4cG9zZUdyaWRJZCgpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2d1aS1ncmlkLWlkJywgdGhpcy5sb2NhbEdyaWRJZCk7XG5cdH1cblxufVxuIl19