/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateRoot } from '@generic-ui/hermes';
import { ListViewCreatedAggregateEvent } from './create/list-view-created.aggregate-event';
import { ListViewModeSetAggregateEvent } from './mode/list-view-mode-set.aggregate-event';
import { ListViewMode } from './mode/list-view-mode';
import { SelectorVisibility } from './mode/selector/selector-visibility';
import { ListViewSelectorToggledAggregateEvent } from './mode/selector/list-view-selector-toggled.aggregate-event';
export class ListViewAggregate extends AggregateRoot {
    /**
     * @param {?} listViewId
     */
    constructor(listViewId) {
        super(listViewId, 'ListViewAggregate');
        this.setMode(ListViewMode.LIST);
        this.initSelectorVisibility();
    }
    /**
     * @return {?}
     */
    createEvent() {
        return ListViewCreatedAggregateEvent;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        this.mode = mode;
        this.addEvent(new ListViewModeSetAggregateEvent(this.getId(), this.mode));
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    toggleModeSelector(enabled) {
        this.selectorVisibility.setEnabled(enabled);
        this.emitEventAfterSelectorVisibilityChange();
    }
    /**
     * @private
     * @return {?}
     */
    initSelectorVisibility() {
        this.selectorVisibility = new SelectorVisibility();
        this.emitEventAfterSelectorVisibilityChange();
    }
    /**
     * @private
     * @return {?}
     */
    emitEventAfterSelectorVisibilityChange() {
        this.addEvent(new ListViewSelectorToggledAggregateEvent(this.getId(), this.selectorVisibility.isVisible()));
    }
}
if (false) {
    /** @type {?} */
    ListViewAggregate.prototype.mode;
    /** @type {?} */
    ListViewAggregate.prototype.selectorVisibility;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluL2xpc3Qtdmlldy5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBa0IsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHbkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBR25ILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUF5Qjs7OztJQU0vRCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sNkJBQTZCLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBa0I7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLDZCQUE2QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE9BQWdCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTyxzQkFBc0I7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsc0NBQXNDLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVPLHNDQUFzQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUkscUNBQXFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0csQ0FBQztDQUNEOzs7SUFoQ0EsaUNBQW1COztJQUVuQiwrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3Q3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jcmVhdGUvbGlzdC12aWV3LWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IFNlbGVjdG9yVmlzaWJpbGl0eSB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci9zZWxlY3Rvci12aXNpYmlsaXR5JztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PExpc3RWaWV3SWQ+IHtcblxuXHRtb2RlOiBMaXN0Vmlld01vZGU7XG5cblx0c2VsZWN0b3JWaXNpYmlsaXR5OiBTZWxlY3RvclZpc2liaWxpdHk7XG5cblx0Y29uc3RydWN0b3IobGlzdFZpZXdJZDogTGlzdFZpZXdJZCkge1xuXHRcdHN1cGVyKGxpc3RWaWV3SWQsICdMaXN0Vmlld0FnZ3JlZ2F0ZScpO1xuXHRcdHRoaXMuc2V0TW9kZShMaXN0Vmlld01vZGUuTElTVCk7XG5cdFx0dGhpcy5pbml0U2VsZWN0b3JWaXNpYmlsaXR5KCk7XG5cdH1cblxuXHRjcmVhdGVFdmVudCgpOiBUeXBlPEFnZ3JlZ2F0ZUV2ZW50PExpc3RWaWV3SWQ+PiB7XG5cdFx0cmV0dXJuIExpc3RWaWV3Q3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50O1xuXHR9XG5cblx0c2V0TW9kZShtb2RlOiBMaXN0Vmlld01vZGUpOiB2b2lkIHtcblx0XHR0aGlzLm1vZGUgPSBtb2RlO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IExpc3RWaWV3TW9kZVNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5tb2RlKSk7XG5cdH1cblxuXHR0b2dnbGVNb2RlU2VsZWN0b3IoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0b3JWaXNpYmlsaXR5LnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cdFx0dGhpcy5lbWl0RXZlbnRBZnRlclNlbGVjdG9yVmlzaWJpbGl0eUNoYW5nZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0U2VsZWN0b3JWaXNpYmlsaXR5KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0b3JWaXNpYmlsaXR5ID0gbmV3IFNlbGVjdG9yVmlzaWJpbGl0eSgpO1xuXHRcdHRoaXMuZW1pdEV2ZW50QWZ0ZXJTZWxlY3RvclZpc2liaWxpdHlDaGFuZ2UoKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdEV2ZW50QWZ0ZXJTZWxlY3RvclZpc2liaWxpdHlDaGFuZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuc2VsZWN0b3JWaXNpYmlsaXR5LmlzVmlzaWJsZSgpKSk7XG5cdH1cbn1cbiJdfQ==