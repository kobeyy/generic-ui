/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../../domain-api/read/structure.read-model-repository';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureCreatedEvent } from '../../../domain/structure/create-structure/structure-created.event';
import { SetSourceLoadingEvent } from '../../../domain/source/loading/set-source-loading.event';
import { PagingSetEvent } from '../../../../../structure/paging/domain/set/paging-set.event';
import { PrevPageEvent } from '../../../../../structure/paging/domain/prev-page/prev-page.event';
import { NextPageEvent } from '../../../../../structure/paging/domain/next-page/next-page.event';
import { PagesizeChangedEvent } from '../../../../../structure/paging/domain/change-pagesize/pagesize-changed.event';
import { FormationSetEvent } from '../../../domain/formation/set/formation-set.event';
import { SelectedRowToggledEvent } from '../../../domain/formation/toggle/selected-row-toggled.event';
import { VerticalScrollEnabledSetEvent } from '../../../domain/structure/vertical-formation/set-enabled/vertical-scroll-enabled-set.event';
import { ScrollPositionSetEvent } from '../../../domain/structure/vertical-formation/scroll-position/scroll-position-set.event';
import { SortToggledEvent } from '../../../../../structure/sorting/domain/toggle/sort-toggled.event';
import { OriginSetEvent } from '../../../domain/source/origin/set-origin/origin-set.event';
import { StructureFilterToggledEvent } from '../../../domain/structure/filter/toggle/structure.filter-toggled.event';
import { SearchPhraseSetDomainEvent } from '../../../../../structure/search/domain/set-phrase/search-phrase-set.domain-event';
import { SortOrderSetEvent } from '../../../../../structure/sorting/domain/order/sort-order-set.event';
import { RowHeightSetEvent } from '../../../domain/structure/vertical-formation/set-row-height/row-height-set.event';
import { StructureHeightSetEvent } from '../../../domain/structure/vertical-formation/container/set-height/structure-height-set.event';
import { RowHeightSetBasedOnThemeEvent } from '../../../domain/structure/vertical-formation/set-row-height-theme/row-height-set-based-on-theme.event';
export class InMemoryStructureRepository extends StructureReadModelRepository {
    /**
     * @param {?} domainEventBus
     * @param {?} inMemoryStructureReadStore
     */
    constructor(domainEventBus, inMemoryStructureReadStore) {
        super(domainEventBus);
        this.inMemoryStructureReadStore = inMemoryStructureReadStore;
        this.structureIdToStructure = new Map();
        this.structure$ = new ReplaySubject(1);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    onStructure(aggregateId) {
        return this.structure$
            .asObservable()
            .pipe(filter((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        (structureIdToStructure) => {
            /** @type {?} */
            const key = aggregateId.getId();
            return structureIdToStructure.has(key);
        })), map((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        (structureIdToStructure) => structureIdToStructure.get(aggregateId.getId()))));
    }
    /**
     * @protected
     * @return {?}
     */
    forEvents() {
        return [
            StructureCreatedEvent,
            SetSourceLoadingEvent,
            PagingSetEvent,
            PrevPageEvent,
            NextPageEvent,
            PagesizeChangedEvent,
            FormationSetEvent,
            SelectedRowToggledEvent,
            VerticalScrollEnabledSetEvent,
            ScrollPositionSetEvent,
            (/** @type {?} */ (SortToggledEvent)),
            StructureFilterToggledEvent,
            SearchPhraseSetDomainEvent,
            (/** @type {?} */ (SortOrderSetEvent)),
            (/** @type {?} */ (OriginSetEvent)),
            RowHeightSetEvent,
            StructureHeightSetEvent,
            RowHeightSetBasedOnThemeEvent
        ];
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    subs(event) {
        /** @type {?} */
        const aggregateId = event.getAggregateId();
        /** @type {?} */
        const optStructure = this.inMemoryStructureReadStore.getById(aggregateId);
        optStructure.ifPresent((/**
         * @param {?} structureReadModelRoot
         * @return {?}
         */
        (structureReadModelRoot) => {
            /** @type {?} */
            const key = structureReadModelRoot.getId().toString();
            this.structureIdToStructure.set(key, structureReadModelRoot);
            this.structure$.next(this.structureIdToStructure);
        }));
    }
}
InMemoryStructureRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: InMemoryStructureReadStore }
];
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
    InMemoryStructureRepository.prototype.inMemoryStructureReadStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9mZWF0dXJlLWFwaS9pbi1tZW1vcnkuc3RydWN0dXJlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBNEIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFeEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDM0csT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDaEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNqRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDckgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNEZBQTRGLENBQUM7QUFDM0ksT0FB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J0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFNldFNvdXJjZUxvYWRpbmdFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvbG9hZGluZy9zZXQtc291cmNlLWxvYWRpbmcuZXZlbnQnO1xuaW1wb3J0IHsgUGFnaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2RvbWFpbi9zZXQvcGFnaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4vcHJldi1wYWdlL3ByZXYtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBOZXh0UGFnZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4vbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluL2NoYW5nZS1wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IEZvcm1hdGlvblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZXQvZm9ybWF0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vdG9nZ2xlL3NlbGVjdGVkLXJvdy10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjcm9sbFBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zY3JvbGwtcG9zaXRpb24vc2Nyb2xsLXBvc2l0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvcnRpbmcvZG9tYWluL3RvZ2dsZS9zb3J0LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvdG9nZ2xlL3N0cnVjdHVyZS5maWx0ZXItdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFNvcnRPcmRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvcnRpbmcvZG9tYWluL29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd0hlaWdodFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3Jvdy1oZWlnaHQtc2V0LWJhc2VkLW9uLXRoZW1lLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RydWN0dXJlUmVwb3NpdG9yeSBleHRlbmRzIFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWRUb1N0cnVjdHVyZSA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+PigxKTtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmU6IEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmUkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmU6IE1hcDxzdHJpbmcsIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGtleSA9IGFnZ3JlZ2F0ZUlkLmdldElkKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBzdHJ1Y3R1cmVJZFRvU3RydWN0dXJlLmhhcyhrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlSWRUb1N0cnVjdHVyZTogTWFwPHN0cmluZywgU3RydWN0dXJlUmVhZE1vZGVsUm9vdD4pID0+IHN0cnVjdHVyZUlkVG9TdHJ1Y3R1cmUuZ2V0KGFnZ3JlZ2F0ZUlkLmdldElkKCkpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U3RydWN0dXJlQ3JlYXRlZEV2ZW50LFxuXHRcdFx0U2V0U291cmNlTG9hZGluZ0V2ZW50LFxuXHRcdFx0UGFnaW5nU2V0RXZlbnQsXG5cdFx0XHRQcmV2UGFnZUV2ZW50LFxuXHRcdFx0TmV4dFBhZ2VFdmVudCxcblx0XHRcdFBhZ2VzaXplQ2hhbmdlZEV2ZW50LFxuXHRcdFx0Rm9ybWF0aW9uU2V0RXZlbnQsXG5cdFx0XHRTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudCxcblx0XHRcdFZlcnRpY2FsU2Nyb2xsRW5hYmxlZFNldEV2ZW50LFxuXHRcdFx0U2Nyb2xsUG9zaXRpb25TZXRFdmVudCxcblx0XHRcdFNvcnRUb2dnbGVkRXZlbnQgYXMgYW55LFxuXHRcdFx0U3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50LFxuXHRcdFx0U2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQsXG5cdFx0XHRTb3J0T3JkZXJTZXRFdmVudCBhcyBhbnksXG5cdFx0XHRPcmlnaW5TZXRFdmVudCBhcyBhbnksXG5cdFx0XHRSb3dIZWlnaHRTZXRFdmVudCxcblx0XHRcdFN0cnVjdHVyZUhlaWdodFNldEV2ZW50LFxuXHRcdFx0Um93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnRcblx0XHRdO1xuXHR9XG5cblx0cHJvdGVjdGVkIHN1YnMoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPik6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0Y29uc3Qgb3B0U3RydWN0dXJlID0gdGhpcy5pbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdG9wdFN0cnVjdHVyZS5pZlByZXNlbnQoKHN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblxuXHRcdFx0Y29uc3Qga2V5ID0gc3RydWN0dXJlUmVhZE1vZGVsUm9vdC5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlSWRUb1N0cnVjdHVyZS5zZXQoa2V5LCBzdHJ1Y3R1cmVSZWFkTW9kZWxSb290KTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmUkLm5leHQodGhpcy5zdHJ1Y3R1cmVJZFRvU3RydWN0dXJlKTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=