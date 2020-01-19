/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Paging } from './read/paging';
export class PagingConverter {
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        return new Paging(aggregate.isEnabled(), aggregate.getPage(), aggregate.getPageSize(), aggregate.getPageSizes(), aggregate.isPagerTop(), aggregate.isPagerBottom(), aggregate.isNextPageDisabled(), aggregate.isPrevPageDisabled(), aggregate.calculateStart(), aggregate.calculateEnd(), aggregate.getSourceSize());
    }
}
PagingConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL3BhZ2luZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl2QyxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFFM0IsT0FBTyxDQUFDLFNBQTBCO1FBQ2pDLE9BQU8sSUFBSSxNQUFNLENBQ2hCLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFDckIsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUNuQixTQUFTLENBQUMsV0FBVyxFQUFFLEVBQ3ZCLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFDeEIsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUN0QixTQUFTLENBQUMsYUFBYSxFQUFFLEVBQ3pCLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUM5QixTQUFTLENBQUMsa0JBQWtCLEVBQUUsRUFDOUIsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUMxQixTQUFTLENBQUMsWUFBWSxFQUFFLEVBQ3hCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FDekIsQ0FBQztJQUNILENBQUM7OztZQWpCRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdBZ2dyZWdhdGUgfSBmcm9tICcuL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuL3JlYWQvcGFnaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogUGFnaW5nQWdncmVnYXRlKTogUGFnaW5nIHtcblx0XHRyZXR1cm4gbmV3IFBhZ2luZyhcblx0XHRcdGFnZ3JlZ2F0ZS5pc0VuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0UGFnZVNpemUoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5pc1BhZ2VyVG9wKCksXG5cdFx0XHRhZ2dyZWdhdGUuaXNQYWdlckJvdHRvbSgpLFxuXHRcdFx0YWdncmVnYXRlLmlzTmV4dFBhZ2VEaXNhYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlLmlzUHJldlBhZ2VEaXNhYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlLmNhbGN1bGF0ZVN0YXJ0KCksXG5cdFx0XHRhZ2dyZWdhdGUuY2FsY3VsYXRlRW5kKCksXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0U291cmNlU2l6ZSgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=