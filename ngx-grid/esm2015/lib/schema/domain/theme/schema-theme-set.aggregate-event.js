/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from './schema-theme-set.event';
export class SchemaThemeSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} theme
     */
    constructor(schemaId, theme) {
        super(schemaId, 'SchemaThemeSetAggregateEvent');
        this.theme = theme;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SchemaThemeSetEvent(this.getAggregateId(), this.theme);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeSetAggregateEvent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFJakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0QsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGNBQXdCOzs7OztJQUV6RSxZQUFZLFFBQWtCLEVBQ1YsS0FBa0I7UUFDckMsS0FBSyxDQUFDLFFBQVEsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBRDdCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFFdEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0Q7Ozs7OztJQVBHLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFNjaGVtYUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBTY2hlbWFUaGVtZSkge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hVGhlbWVTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMudGhlbWUpO1xuXHR9XG59XG4iXX0=