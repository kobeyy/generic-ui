/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from '../field';
import { DataType } from '../data-type';
import { AggregationType } from '../../../aggregation/aggregation.type';
var StringField = /** @class */ (function (_super) {
    tslib_1.__extends(StringField, _super);
    function StringField(id, accessor, matchers, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.STRING, matchers, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    StringField.prototype.assignDefaultAggregations = /**
     * @return {?}
     */
    function () {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT;
    };
    /**
     * @return {?}
     */
    StringField.prototype.assignPossibleAggregations = /**
     * @return {?}
     */
    function () {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    StringField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        /** @type {?} */
        var value = this.getSearchValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    StringField.prototype.sort = /**
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    function (strOne, strTwo) {
        /** @type {?} */
        var sureStrOne = '' + strOne;
        /** @type {?} */
        var sureStrTwo = '' + strTwo;
        return sureStrOne.localeCompare(sureStrTwo);
    };
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    StringField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return value.toLowerCase().indexOf(filterPhrase.toLowerCase()) > -1;
    };
    return StringField;
}(Field));
export { StringField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2ZpZWxkcy9zdHJpbmctZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBS3hFO0lBQWlDLHVDQUFhO0lBRTdDLHFCQUFZLEVBQVcsRUFDcEIsUUFBYSxFQUNiLFFBQXVCLEVBQ3ZCLGlCQUEyQztlQUM3QyxrQkFBTSxFQUFFLEVBQ1AsUUFBUSxFQUNSLFFBQVEsQ0FBQyxNQUFNLEVBQ2YsUUFBUSxFQUNSLGlCQUFpQixDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCwrQ0FBeUI7OztJQUF6QjtRQUNDLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsaUNBQWlDO1FBQ2pDLDZCQUE2QjtJQUM5QixDQUFDOzs7O0lBRUQsZ0RBQTBCOzs7SUFBMUI7UUFDQyxPQUFPLGVBQWUsQ0FBQyxLQUFLO1lBQzNCLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsNEJBQU07Ozs7O0lBQU4sVUFBTyxJQUFzQixFQUFFLFlBQW9COztZQUM1QyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFFdkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsMEJBQUk7Ozs7O0lBQUosVUFBSyxNQUFjLEVBQUUsTUFBYzs7WUFDNUIsVUFBVSxHQUFHLEVBQUUsR0FBRyxNQUFNOztZQUM3QixVQUFVLEdBQUcsRUFBRSxHQUFHLE1BQU07UUFFekIsT0FBTyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELDRCQUFNOzs7OztJQUFOLFVBQU8sS0FBYSxFQUFFLFlBQW9CO1FBQ3pDLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUYsa0JBQUM7QUFBRCxDQUFDLEFBN0NELENBQWlDLEtBQUssR0E2Q3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1hZ2dyZWdhdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vYWdncmVnYXRpb24vYWdncmVnYXRpb24udHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdGaWVsZCBleHRlbmRzIEZpZWxkPHN0cmluZz4ge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0YWdncmVnYXRpb25Db25maWc/OiBDb2x1bW5BZ2dyZWdhdGlvbkNvbmZpZykge1xuXHRcdHN1cGVyKGlkLFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5TVFJJTkcsXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdGFnZ3JlZ2F0aW9uQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRBZ2dyZWdhdGlvbnMoKTogQWdncmVnYXRpb25UeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gQWdncmVnYXRpb25UeXBlLkNPVU5UIHxcblx0XHQvLyBcdEFnZ3JlZ2F0aW9uVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlQWdncmVnYXRpb25zKCk6IEFnZ3JlZ2F0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIEFnZ3JlZ2F0aW9uVHlwZS5DT1VOVCB8XG5cdFx0XHRBZ2dyZWdhdGlvblR5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U2VhcmNoVmFsdWUoaXRlbSk7XG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hQaHJhc2UudG9Mb3dlckNhc2UoKSkgPiAtMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHNvcnQoc3RyT25lOiBzdHJpbmcsIHN0clR3bzogc3RyaW5nKTogbnVtYmVyIHtcblx0XHRjb25zdCBzdXJlU3RyT25lID0gJycgKyBzdHJPbmUsXG5cdFx0XHRzdXJlU3RyVHdvID0gJycgKyBzdHJUd287XG5cblx0XHRyZXR1cm4gc3VyZVN0ck9uZS5sb2NhbGVDb21wYXJlKHN1cmVTdHJUd28pO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBzdHJpbmcsIGZpbHRlclBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJQaHJhc2UudG9Mb3dlckNhc2UoKSkgPiAtMTtcblx0fVxuXG59XG4iXX0=