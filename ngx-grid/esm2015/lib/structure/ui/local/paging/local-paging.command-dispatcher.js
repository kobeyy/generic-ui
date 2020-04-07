/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { StructurePagingCommandDispatcher } from '../../../ui-api/paging/structure-paging.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { PagingManagerFactory } from '../../../domain/paging/paging.manager-factory';
import { PagingDispatcher } from '../../../domain/paging/paging.dispatcher';
export class LocalPagingCommandDispatcher extends StructurePagingCommandDispatcher {
    /**
     * @param {?} structureId
     * @param {?} aggregateFactory
     * @param {?} pagingDispatcher
     */
    constructor(structureId, aggregateFactory, pagingDispatcher) {
        super(pagingDispatcher);
        this.structureId = structureId;
        this.aggregateFactory = aggregateFactory;
    }
    /**
     * @return {?}
     */
    setDefaultPaging() {
        /** @type {?} */
        const defaultPaggingAggregate = this.aggregateFactory.createDefault();
        super.setPaging({
            page: defaultPaggingAggregate.getPage(),
            pageSize: defaultPaggingAggregate.getPageSize(),
            pageSizes: defaultPaggingAggregate.getPageSizes()
        }, this.structureId);
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    setPaging(paging) {
        super.setPaging(paging, this.structureId);
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        super.changePageSize(pageSize, this.structureId);
    }
    /**
     * @return {?}
     */
    nextPage() {
        super.nextPage(this.structureId);
    }
    /**
     * @return {?}
     */
    prevPage() {
        super.prevPage(this.structureId);
    }
}
LocalPagingCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: PagingManagerFactory },
    { type: PagingDispatcher }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "setPaging", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "changePageSize", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "nextPage", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "prevPage", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandDispatcher.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandDispatcher.prototype.aggregateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzlHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUs1RSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsZ0NBQWdDOzs7Ozs7SUFFakYsWUFBb0IsV0FBd0IsRUFDakMsZ0JBQXNDLEVBQzlDLGdCQUFrQztRQUNwQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUhMLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBc0I7SUFHakQsQ0FBQzs7OztJQUVELGdCQUFnQjs7Y0FFVCx1QkFBdUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFO1FBRXJFLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDZixJQUFJLEVBQUUsdUJBQXVCLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7WUFDL0MsU0FBUyxFQUFFLHVCQUF1QixDQUFDLFlBQVksRUFBRTtTQUNqRCxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUdELFNBQVMsQ0FBQyxNQUFvQjtRQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFHRCxjQUFjLENBQUMsUUFBZ0I7UUFDOUIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCxRQUFRO1FBQ1AsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUdELFFBQVE7UUFDUCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUF0Q0QsVUFBVTs7OztZQU5GLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsZ0JBQWdCOztBQXlCeEI7SUFEQyxRQUFROzs7OzZEQUdSO0FBR0Q7SUFEQyxRQUFROzs7O2tFQUdSO0FBR0Q7SUFEQyxRQUFROzs7OzREQUdSO0FBR0Q7SUFEQyxRQUFROzs7OzREQUdSOzs7Ozs7SUFuQ1csbURBQWdDOzs7OztJQUN6Qyx3REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9wYWdpbmcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL3BhZ2luZy1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIGFnZ3JlZ2F0ZUZhY3Rvcnk6IFBhZ2luZ01hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwYWdpbmdEaXNwYXRjaGVyOiBQYWdpbmdEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIocGFnaW5nRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRzZXREZWZhdWx0UGFnaW5nKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUgPSB0aGlzLmFnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlRGVmYXVsdCgpO1xuXG5cdFx0c3VwZXIuc2V0UGFnaW5nKHtcblx0XHRcdHBhZ2U6IGRlZmF1bHRQYWdnaW5nQWdncmVnYXRlLmdldFBhZ2UoKSxcblx0XHRcdHBhZ2VTaXplOiBkZWZhdWx0UGFnZ2luZ0FnZ3JlZ2F0ZS5nZXRQYWdlU2l6ZSgpLFxuXHRcdFx0cGFnZVNpemVzOiBkZWZhdWx0UGFnZ2luZ0FnZ3JlZ2F0ZS5nZXRQYWdlU2l6ZXMoKVxuXHRcdH0sIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFBhZ2luZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFBhZ2luZyhwYWdpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHRzdXBlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0c3VwZXIubmV4dFBhZ2UodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0c3VwZXIucHJldlBhZ2UodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19