/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PagingReadModelService } from '../../../ui-api/paging/paging-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { PagingRepository } from '../../../domain/paging/read/paging.repository';
import { Override } from '../../../../../common/cdk/decorators';
var LocalPagingReadModelService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalPagingReadModelService, _super);
    function LocalPagingReadModelService(structureId, pagingRepository) {
        var _this = _super.call(this, pagingRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalPagingReadModelService.prototype.onPaging = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onPaging.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingReadModelService.prototype.onSinglePaging = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onPaging.call(this, this.structureId)
            .pipe(take(1));
    };
    LocalPagingReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalPagingReadModelService.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalPagingReadModelService.prototype, "onPaging", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalPagingReadModelService.prototype, "onSinglePaging", null);
    return LocalPagingReadModelService;
}(PagingReadModelService));
export { LocalPagingReadModelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingReadModelService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUloRTtJQUNpRCx1REFBc0I7SUFFdEUscUNBQW9CLFdBQXdCLEVBQ3pDLGdCQUFrQztRQURyQyxZQUVDLGtCQUFNLGdCQUFnQixDQUFDLFNBQ3ZCO1FBSG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUc1QyxDQUFDOzs7O0lBR0QsOENBQVE7OztJQUFSO1FBQ0MsT0FBTyxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFHRCxvREFBYzs7O0lBQWQ7UUFDQyxPQUFPLGlCQUFNLFFBQVEsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ25DLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNOLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQU5GLFdBQVc7Z0JBQ1gsZ0JBQWdCOztJQWN4QjtRQURDLFFBQVE7OztnREFDRyxVQUFVOytEQUVyQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNTLFVBQVU7cUVBSzNCO0lBRUYsa0NBQUM7Q0FBQSxBQXJCRCxDQUNpRCxzQkFBc0IsR0FvQnRFO1NBcEJZLDJCQUEyQjs7Ozs7O0lBRTNCLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdpbmdSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3BhZ2luZy9wYWdpbmctcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9yZWFkL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFBhZ2luZ1JlYWRNb2RlbFNlcnZpY2UgZXh0ZW5kcyBQYWdpbmdSZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nUmVwb3NpdG9yeTogUGFnaW5nUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHBhZ2luZ1JlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUGFnaW5nKCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2luZ2xlUGFnaW5nKCk6IE9ic2VydmFibGU8UGFnaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHR0YWtlKDEpXG5cdFx0XHRcdFx0KTtcblx0fVxuXG59XG4iXX0=