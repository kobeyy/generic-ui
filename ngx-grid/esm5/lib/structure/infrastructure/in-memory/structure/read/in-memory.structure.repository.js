/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureRepository } from '../../../../domain/structure/read/structure.repository';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureInitedEvent } from '../../../../domain/structure/command/init/structure-inited.event';
import { SetSourceLoadingEvent } from '../../../../domain/source/command/loading/set-source-loading.event';
import { SchemaSetEvent } from '../../../../domain/schema/command/set/schema-set.event';
import { SchemaThemeSetEvent } from '../../../../domain/schema/command/theme/schema-theme-set.event';
import { SchemaHorizontalGridSetEvent } from '../../../../domain/schema/command/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../../../domain/schema/command/grid/vertical/schema-vertical-grid-set.event';
import { SchemaTopHeaderChangedEvent } from '../../../../domain/schema/command/column-header/top/schema-top-header-changed.event';
import { SchemaBottomHeaderChangedEvent } from '../../../../domain/schema/command/column-header/bottom/schema-bottom-header-changed.event';
import { RowColoringSetEvent } from '../../../../domain/schema/command/coloring/set/row-coloring-set.event';
import { PagingSetEvent } from '../../../../domain/paging/command/set/paging-set.event';
import { PrevPageEvent } from '../../../../domain/paging/command/prev-page/prev-page.event';
import { NextPageEvent } from '../../../../domain/paging/command/next-page/next-page.event';
import { PagesizeChangedEvent } from '../../../../domain/paging/command/change-pagesize/pagesize-changed.event';
import { FormationSetEvent } from '../../../../domain/formation/command/set/formation-set.event';
import { SelectedRowToggledEvent } from '../../../../domain/formation/command/toggle/selected-row-toggled.event';
import { VerticalScrollEnabledSetEvent } from '../../../../domain/structure/command/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { ScrollPositionSetEvent } from '../../../../domain/structure/command/vertical-formation/scroll-position/scroll-position-set.event';
import { SortToggledEvent } from '../../../../domain/structure/command/sort/toggle/sort-toggled.event';
import { OriginSetEvent } from '../../../../domain/source/command/origin/set-origin/origin-set.event';
import { StructureFilterToggledEvent } from '../../../../domain/structure/command/filter/toggle/structure.filter-toggled.event';
import { StructureSearchPhraseSetDomainEvent } from '../../../../domain/structure/command/search/set-phrase/structure.search-phrase-set.domain-event';
import { SortOrderSetEvent } from '../../../../domain/structure/command/sort/order/sort-order-set.event';
import { RowHeightSetEvent } from '../../../../domain/structure/command/vertical-formation/set-row-height/row-height-set.event';
var InMemoryStructureRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryStructureRepository, _super);
    function InMemoryStructureRepository(domainEventBus, inMemoryStructureQueryStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryStructureQueryStore = inMemoryStructureQueryStore;
        _this.structureIdToStructure = new Map();
        _this.structure$ = new ReplaySubject(1);
        _this.unsubscribe$ = new Subject();
        _this.domainEventBus
            .ofEvent(StructureInitedEvent, SetSourceLoadingEvent, SchemaSetEvent, SchemaThemeSetEvent, SchemaHorizontalGridSetEvent, SchemaVerticalGridSetEvent, SchemaTopHeaderChangedEvent, SchemaBottomHeaderChangedEvent, RowColoringSetEvent, PagingSetEvent, PrevPageEvent, NextPageEvent, PagesizeChangedEvent, FormationSetEvent, SelectedRowToggledEvent, VerticalScrollEnabledSetEvent, ScrollPositionSetEvent, (/** @type {?} */ (SortToggledEvent)), StructureFilterToggledEvent, StructureSearchPhraseSetDomainEvent, (/** @type {?} */ (SortOrderSetEvent)), (/** @type {?} */ (OriginSetEvent)), RowHeightSetEvent)
            .pipe(takeUntil(_this.unsubscribe$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var aggregateId = event.aggregateId;
            /** @type {?} */
            var structure = _this.inMemoryStructureQueryStore.getById(aggregateId);
            /** @type {?} */
            var key = structure.getId().toString();
            _this.structureIdToStructure.set(key, structure);
            _this.structure$.next(_this.structureIdToStructure);
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    InMemoryStructureRepository.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStructureRepository.prototype.onStructure = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.structure$
            .asObservable()
            .pipe(filter((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        function (structureIdToStructure) {
            /** @type {?} */
            var key = aggregateId.getId();
            return structureIdToStructure.has(key);
        })), map((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        function (structureIdToStructure) { return structureIdToStructure.get(aggregateId.getId()); })));
    };
    InMemoryStructureRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryStructureRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: InMemoryStructureReadStore }
    ]; };
    return InMemoryStructureRepository;
}(StructureRepository));
export { InMemoryStructureRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.structureIdToStructure;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.structure$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.inMemoryStructureQueryStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9zdHJ1Y3R1cmUvcmVhZC9pbi1tZW1vcnkuc3RydWN0dXJlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBYyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBNEIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDeEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDM0csT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQ2xJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQzVILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQ2xJLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQzNJLE9BQU8sRUFBRSxtQkFBbUIsRUFB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SSxDQUFDLFVBQVU7YUFDaEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLHNCQUE4Qzs7Z0JBRS9DLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBRS9CLE9BQU8sc0JBQXNCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLHNCQUE4QyxJQUFLLE9BQUEsc0JBQXNCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUEvQyxDQUErQyxFQUFDLENBQ3hHLENBQUM7SUFDUixDQUFDOztnQkF2RUQsVUFBVTs7OztnQkE5QndCLGNBQWM7Z0JBSXhDLDBCQUEwQjs7SUFtR25DLGtDQUFDO0NBQUEsQUF6RUQsQ0FDaUQsbUJBQW1CLEdBd0VuRTtTQXhFWSwyQkFBMkI7Ozs7OztJQUV2Qyw2REFBdUU7Ozs7O0lBRXZFLGlEQUEyRTs7Ozs7SUFFM0UsbURBQThDOzs7OztJQUVsQyxxREFBc0M7Ozs7O0lBQy9DLGtFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2luaXQvc3RydWN0dXJlLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTZXRTb3VyY2VMb2FkaW5nRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc291cmNlL2NvbW1hbmQvbG9hZGluZy9zZXQtc291cmNlLWxvYWRpbmcuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc2NoZW1hL2NvbW1hbmQvc2V0L3NjaGVtYS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc2NoZW1hL2NvbW1hbmQvZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9jb21tYW5kL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVRvcEhlYWRlckNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9jb2x1bW4taGVhZGVyL3RvcC9zY2hlbWEtdG9wLWhlYWRlci1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUJvdHRvbUhlYWRlckNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9jb2x1bW4taGVhZGVyL2JvdHRvbS9zY2hlbWEtYm90dG9tLWhlYWRlci1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc2NoZW1hL2NvbW1hbmQvY29sb3Jpbmcvc2V0L3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvc2V0L3BhZ2luZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUHJldlBhZ2VFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9wcmV2LXBhZ2UvcHJldi1wYWdlLmV2ZW50JztcbmltcG9ydCB7IE5leHRQYWdlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9jaGFuZ2UtcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBGb3JtYXRpb25TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vY29tbWFuZC9zZXQvZm9ybWF0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vY29tbWFuZC90b2dnbGUvc2VsZWN0ZWQtcm93LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgVmVydGljYWxTY3JvbGxFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3ZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY3JvbGxQb3NpdGlvblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zY3JvbGwtcG9zaXRpb24vc2Nyb2xsLXBvc2l0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NvcnQvdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvdG9nZ2xlL3N0cnVjdHVyZS5maWx0ZXItdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zZWFyY2gvc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFNvcnRPcmRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NvcnQvb3JkZXIvc29ydC1vcmRlci1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93SGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0L3Jvdy1oZWlnaHQtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdHJ1Y3R1cmVSZXBvc2l0b3J5IGV4dGVuZHMgU3RydWN0dXJlUmVwb3NpdG9yeSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlID0gbmV3IE1hcDxzdHJpbmcsIFN0cnVjdHVyZT4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBTdHJ1Y3R1cmU+PigxKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlTdHJ1Y3R1cmVRdWVyeVN0b3JlOiBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0U3RydWN0dXJlSW5pdGVkRXZlbnQsXG5cdFx0XHRcdFNldFNvdXJjZUxvYWRpbmdFdmVudCxcblx0XHRcdFx0U2NoZW1hU2V0RXZlbnQsXG5cdFx0XHRcdFNjaGVtYVRoZW1lU2V0RXZlbnQsXG5cdFx0XHRcdFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQsXG5cdFx0XHRcdFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50LFxuXHRcdFx0XHRTY2hlbWFUb3BIZWFkZXJDaGFuZ2VkRXZlbnQsXG5cdFx0XHRcdFNjaGVtYUJvdHRvbUhlYWRlckNoYW5nZWRFdmVudCxcblx0XHRcdFx0Um93Q29sb3JpbmdTZXRFdmVudCxcblx0XHRcdFx0UGFnaW5nU2V0RXZlbnQsXG5cdFx0XHRcdFByZXZQYWdlRXZlbnQsXG5cdFx0XHRcdE5leHRQYWdlRXZlbnQsXG5cdFx0XHRcdFBhZ2VzaXplQ2hhbmdlZEV2ZW50LFxuXHRcdFx0XHRGb3JtYXRpb25TZXRFdmVudCxcblx0XHRcdFx0U2VsZWN0ZWRSb3dUb2dnbGVkRXZlbnQsXG5cdFx0XHRcdFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50LFxuXHRcdFx0XHRTY3JvbGxQb3NpdGlvblNldEV2ZW50LFxuXHRcdFx0XHRTb3J0VG9nZ2xlZEV2ZW50IGFzIGFueSxcblx0XHRcdFx0U3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50LFxuXHRcdFx0XHRTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCxcblx0XHRcdFx0U29ydE9yZGVyU2V0RXZlbnQgYXMgYW55LFxuXHRcdFx0XHRPcmlnaW5TZXRFdmVudCBhcyBhbnksXG5cdFx0XHRcdFJvd0hlaWdodFNldEV2ZW50XG5cdFx0XHQpXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5hZ2dyZWdhdGVJZDtcblxuXHRcdFx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLmluTWVtb3J5U3RydWN0dXJlUXVlcnlTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKSxcblx0XHRcdFx0XHRrZXkgPSBzdHJ1Y3R1cmUuZ2V0SWQoKS50b1N0cmluZygpO1xuXG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5zZXQoa2V5LCBzdHJ1Y3R1cmUpO1xuXG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlJC5uZXh0KHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0b25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmU+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZSRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICBjb25zdCBrZXkgPSBhZ2dyZWdhdGVJZC5nZXRJZCgpO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5oYXMoa2V5KTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmU6IE1hcDxzdHJpbmcsIFN0cnVjdHVyZT4pID0+IHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuZ2V0KGFnZ3JlZ2F0ZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==