/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../lib/structure/domain/structure/structure-aggregate.repository';
import { ToggleSortCommand } from './toggle-sort.command';
import { SortToggledEvent } from './sort-toggled.event';
var ToggleSortCommandHandler = /** @class */ (function () {
    function ToggleSortCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    ToggleSortCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return ToggleSortCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    ToggleSortCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    ToggleSortCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var aggregateId = command.getAggregateId();
        /** @type {?} */
        var compositionId = command.getCompositionId();
        /** @type {?} */
        var fieldId = command.getFieldId();
        /** @type {?} */
        var sorters = structure.toggleSort(fieldId);
        this.publishSortEvent(aggregateId, compositionId, fieldId, sorters);
    };
    /**
     * @private
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    ToggleSortCommandHandler.prototype.publishSortEvent = /**
     * @private
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    function (aggregateId, compositionId, fieldId, sorters) {
        /** @type {?} */
        var directions = sorters.map((/**
         * @param {?} sorter
         * @return {?}
         */
        function (sorter) {
            return {
                direction: sorter.hasDirection(),
                fieldId: sorter.getField().getId()
            };
        }));
        this.domainEventPublisher.publish(new SortToggledEvent(aggregateId, compositionId, directions));
    };
    ToggleSortCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToggleSortCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ToggleSortCommandHandler;
}());
export { ToggleSortCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vdG9nZ2xlL3RvZ2dsZS1zb3J0LmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDekgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJeEQ7SUFHQyxrQ0FBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQUR4QixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDckQsQ0FBQzs7OztJQUVELDZDQUFVOzs7SUFBVjtRQUNDLE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRUQsc0RBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQTBCO0lBQzdFLENBQUM7Ozs7OztJQUVELGtEQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBMEI7O1lBRWxFLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFOztZQUMzQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFOztZQUMxQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRTs7WUFFekIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBRTdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7Ozs7SUFFTyxtREFBZ0I7Ozs7Ozs7O0lBQXhCLFVBQXlCLFdBQXdCLEVBQUUsYUFBNEIsRUFBRSxPQUFnQixFQUFFLE9BQStCOztZQUUzSCxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQXVCO1lBQ3RELE9BQU87Z0JBQ04sU0FBUyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ2xDLENBQUM7UUFDSCxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7O2dCQW5DRCxVQUFVOzs7O2dCQVRGLDRCQUE0QjtnQkFGQyxvQkFBb0I7O0lBZ0QxRCwrQkFBQztDQUFBLEFBckNELElBcUNDO1NBcENZLHdCQUF3Qjs7Ozs7O0lBRXhCLGdFQUEyRTs7Ozs7SUFDcEYsd0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVG9nZ2xlU29ydENvbW1hbmQgfSBmcm9tICcuL3RvZ2dsZS1zb3J0LmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi4vc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi9zb3J0LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2dnbGVTb3J0Q29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFRvZ2dsZVNvcnRDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPFRvZ2dsZVNvcnRDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFRvZ2dsZVNvcnRDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlU29ydENvbW1hbmQpOiB2b2lkIHtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlU29ydENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0Y29tcG9zaXRpb25JZCA9IGNvbW1hbmQuZ2V0Q29tcG9zaXRpb25JZCgpLFxuXHRcdFx0ZmllbGRJZCA9IGNvbW1hbmQuZ2V0RmllbGRJZCgpO1xuXG5cdFx0Y29uc3Qgc29ydGVycyA9IHN0cnVjdHVyZS50b2dnbGVTb3J0KGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5wdWJsaXNoU29ydEV2ZW50KGFnZ3JlZ2F0ZUlkLCBjb21wb3NpdGlvbklkLCBmaWVsZElkLCBzb3J0ZXJzKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaFNvcnRFdmVudChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRlcnM6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRpcmVjdGlvbnMgPSBzb3J0ZXJzLm1hcCgoc29ydGVyOiBTdHJ1Y3R1cmVTb3J0ZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRpcmVjdGlvbjogc29ydGVyLmhhc0RpcmVjdGlvbigpLFxuXHRcdFx0XHRmaWVsZElkOiBzb3J0ZXIuZ2V0RmllbGQoKS5nZXRJZCgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTb3J0VG9nZ2xlZEV2ZW50KGFnZ3JlZ2F0ZUlkLCBjb21wb3NpdGlvbklkLCBkaXJlY3Rpb25zKSk7XG5cdH1cblxufVxuIl19