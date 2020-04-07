/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldIdGenerator } from '../field-id.generator';
import { DataType } from './data-type';
import { UnknownField } from './fields/unknown-field';
import { NumberField } from './fields/number-field';
import { StringField } from './fields/string-field';
import { BooleanField } from './fields/boolean-field';
import { DateField } from './fields/date-field';
import { FieldMatchers } from '../matcher/field.matchers';
export class FieldFactory {
    /**
     * @param {?} fieldIdGenerator
     */
    constructor(fieldIdGenerator) {
        this.fieldIdGenerator = fieldIdGenerator;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    create(column) {
        /** @type {?} */
        const fieldMatchers = this.createMatchers(column);
        /** @type {?} */
        let columnType = column.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), fieldMatchers, column.aggregation);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), fieldMatchers, column.aggregation);
        }
        if (columnType === DataType.STRING) {
            return new StringField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), fieldMatchers);
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), fieldMatchers);
        }
        if (columnType === DataType.DATE) {
            return new DateField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), fieldMatchers);
        }
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    createMatchers(column) {
        /** @type {?} */
        let matcher = column.matcher;
        /** @type {?} */
        let sortMatcher;
        if (column.sorting) {
            sortMatcher = column.sorting.matcher;
        }
        return new FieldMatchers(matcher, sortMatcher);
    }
}
FieldFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldFactory.ctorParameters = () => [
    { type: FieldIdGenerator }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldFactory.prototype.fieldIdGenerator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLMUQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFeEIsWUFBNkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDL0QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBb0I7O2NBRXBCLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQzs7WUFFN0MsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJO1FBRTVCLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUM3QixVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUM3QjtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsbUJBQUEsTUFBTSxDQUFDLEtBQUssRUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkg7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RIO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDbEc7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNuRztRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDakMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsbUJBQUEsTUFBTSxDQUFDLEtBQUssRUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2hHO0lBRUYsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE1BQW9COztZQUV0QyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87O1lBQzNCLFdBQVc7UUFFWixJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBaERELFVBQVU7Ozs7WUFaRixnQkFBZ0I7Ozs7Ozs7SUFlWix3Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi9maWVsZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVW5rbm93bkZpZWxkIH0gZnJvbSAnLi9maWVsZHMvdW5rbm93bi1maWVsZCc7XG5pbXBvcnQgeyBOdW1iZXJGaWVsZCB9IGZyb20gJy4vZmllbGRzL251bWJlci1maWVsZCc7XG5pbXBvcnQgeyBTdHJpbmdGaWVsZCB9IGZyb20gJy4vZmllbGRzL3N0cmluZy1maWVsZCc7XG5pbXBvcnQgeyBCb29sZWFuRmllbGQgfSBmcm9tICcuL2ZpZWxkcy9ib29sZWFuLWZpZWxkJztcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJy4vZmllbGRzL2RhdGUtZmllbGQnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgQWxsRmllbGRUeXBlcyB9IGZyb20gJy4vYWxsLWZpZWxkLXR5cGVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWRHZW5lcmF0b3I6IEZpZWxkSWRHZW5lcmF0b3IpIHtcblx0fVxuXG5cdGNyZWF0ZShjb2x1bW46IENvbHVtbkNvbmZpZyk6IEFsbEZpZWxkVHlwZXMge1xuXG5cdFx0Y29uc3QgZmllbGRNYXRjaGVycyA9IHRoaXMuY3JlYXRlTWF0Y2hlcnMoY29sdW1uKTtcblxuXHRcdGxldCBjb2x1bW5UeXBlID0gY29sdW1uLnR5cGU7XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5UeXBlID0gRGF0YVR5cGUuU1RSSU5HO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5VTktOT1dOKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFVua25vd25GaWVsZCh0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLCBjb2x1bW4uZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzLCBjb2x1bW4uYWdncmVnYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiBuZXcgTnVtYmVyRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgY29sdW1uLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycywgY29sdW1uLmFnZ3JlZ2F0aW9uKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFN0cmluZ0ZpZWxkKHRoaXMuZmllbGRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksIGNvbHVtbi5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRyZXR1cm4gbmV3IEJvb2xlYW5GaWVsZCh0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLCBjb2x1bW4uZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuIG5ldyBEYXRlRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgY29sdW1uLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycyk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU1hdGNoZXJzKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogRmllbGRNYXRjaGVycyB7XG5cblx0XHRsZXQgbWF0Y2hlciA9IGNvbHVtbi5tYXRjaGVyLFxuXHRcdFx0c29ydE1hdGNoZXI7XG5cblx0XHRpZiAoY29sdW1uLnNvcnRpbmcpIHtcblx0XHRcdHNvcnRNYXRjaGVyID0gY29sdW1uLnNvcnRpbmcubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEZpZWxkTWF0Y2hlcnMobWF0Y2hlciwgc29ydE1hdGNoZXIpO1xuXHR9XG5cblxufVxuIl19