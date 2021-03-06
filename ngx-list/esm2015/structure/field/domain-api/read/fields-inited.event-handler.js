/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldUiArchive } from './field.ui-archive';
import { FieldUiConverter } from './field.ui-converter';
import { FieldsInitedEvent } from '../../domain/init/fields-inited.event';
export class FieldsInitedEventHandler {
    /**
     * @param {?} fieldUiArchive
     * @param {?} fieldUiConverter
     */
    constructor(fieldUiArchive, fieldUiConverter) {
        this.fieldUiArchive = fieldUiArchive;
        this.fieldUiConverter = fieldUiConverter;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return FieldsInitedEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('FieldsInitedEvent')) {
            /** @type {?} */
            const fields = this.fieldUiConverter.convert(event.getFields());
            this.fieldUiArchive.next(event.getAggregateId(), fields);
        }
    }
}
FieldsInitedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldsInitedEventHandler.ctorParameters = () => [
    { type: FieldUiArchive },
    { type: FieldUiConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEventHandler.prototype.fieldUiArchive;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEventHandler.prototype.fieldUiConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9yZWFkL2ZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUlqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFLMUUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFFcEMsWUFBb0IsY0FBOEIsRUFDdkMsZ0JBQWtDO1FBRHpCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzdDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUF3QjtRQUU5QixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTs7a0JBRXZDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUUvRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekQ7SUFFRixDQUFDOzs7WUFwQkQsVUFBVTs7OztZQU5GLGNBQWM7WUFDZCxnQkFBZ0I7Ozs7Ozs7SUFRWixrREFBc0M7Ozs7O0lBQy9DLG9EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL2ZpZWxkLnVpLWFyY2hpdmUnO1xuaW1wb3J0IHsgRmllbGRVaUNvbnZlcnRlciB9IGZyb20gJy4vZmllbGQudWktY29udmVydGVyJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgRmllbGRzSW5pdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZpZWxkVWlBcmNoaXZlOiBGaWVsZFVpQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSBmaWVsZFVpQ29udmVydGVyOiBGaWVsZFVpQ29udmVydGVyKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBUeXBlPEZpZWxkc0luaXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIEZpZWxkc0luaXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0ZpZWxkc0luaXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZFVpQ29udmVydGVyLmNvbnZlcnQoZXZlbnQuZ2V0RmllbGRzKCkpO1xuXG5cdFx0XHR0aGlzLmZpZWxkVWlBcmNoaXZlLm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZmllbGRzKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=