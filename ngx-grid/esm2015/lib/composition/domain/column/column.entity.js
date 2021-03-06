/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortOrder } from './sort/sort-order';
import { ViewEntity } from './view.entity';
import { AbstractColumnEntity } from './abstract-column.entity';
export class ColumnEntity extends AbstractColumnEntity {
    /**
     * @param {?} columnId
     * @param {?} columnField
     * @param {?} columnConfig
     * @param {?} enabled
     * @param {?} presentation
     * @param {?} header
     * @param {?} align
     * @param {?} view
     * @param {?} width
     */
    constructor(columnId, columnField, columnConfig, enabled, presentation, header, align, view, width) {
        super(columnId, columnField, columnConfig, presentation, header, align, view, width);
        this.sortStatus = SortOrder.NONE;
        this.enabled = true;
        this.enabled = enabled;
        if (view === undefined) {
            this.view = new ViewEntity(this.presentation.getDefaultView());
        }
        if (align === undefined) {
            this.align = this.presentation.getDefaultAlign(this.view);
        }
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    getSortStatus() {
        return this.sortStatus;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setSortStatus(status) {
        this.sortStatus = status;
    }
}
if (false) {
    /** @type {?} */
    ColumnEntity.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJaEUsTUFBTSxPQUFPLFlBQWEsU0FBUSxvQkFBb0I7Ozs7Ozs7Ozs7OztJQVFyRCxZQUFZLFFBQWtCLEVBQzNCLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLE9BQWdCLEVBQ2hCLFlBQWdDLEVBQ2hDLE1BQStCLEVBQy9CLEtBQWtCLEVBQ2xCLElBQWdCLEVBQ2hCLEtBQWE7UUFDZixLQUFLLENBQ0osUUFBUSxFQUNSLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsSUFBSSxFQUNKLEtBQUssQ0FDTCxDQUFDO1FBdEJLLGVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBRTVCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFzQi9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxRDtJQUNGLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQWlCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7Q0FFRDs7O0lBckRBLGdDQUFtQjs7Ozs7SUFFbkIsa0NBQW9DOzs7OztJQUVwQywrQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBIZWFkZXJUZW1wbGF0ZSB9IGZyb20gJy4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IEFic3RyYWN0Q29sdW1uRW50aXR5IH0gZnJvbSAnLi9hYnN0cmFjdC1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5FbnRpdHkgZXh0ZW5kcyBBYnN0cmFjdENvbHVtbkVudGl0eSB7XG5cblx0c29ydGFibGU/OiBib29sZWFuO1xuXG5cdHByaXZhdGUgc29ydFN0YXR1cyA9IFNvcnRPcmRlci5OT05FO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoY29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRjb2x1bW5GaWVsZDogQ29sdW1uRmllbGQsXG5cdFx0XHRcdGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnLFxuXHRcdFx0XHRlbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcmVzZW50YXRpb246IENvbHVtblByZXNlbnRhdGlvbixcblx0XHRcdFx0aGVhZGVyOiBzdHJpbmcgfCBIZWFkZXJUZW1wbGF0ZSxcblx0XHRcdFx0YWxpZ246IENvbHVtbkFsaWduLFxuXHRcdFx0XHR2aWV3OiBWaWV3RW50aXR5LFxuXHRcdFx0XHR3aWR0aDogbnVtYmVyKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjb2x1bW5JZCxcblx0XHRcdGNvbHVtbkZpZWxkLFxuXHRcdFx0Y29sdW1uQ29uZmlnLFxuXHRcdFx0cHJlc2VudGF0aW9uLFxuXHRcdFx0aGVhZGVyLFxuXHRcdFx0YWxpZ24sXG5cdFx0XHR2aWV3LFxuXHRcdFx0d2lkdGhcblx0XHQpO1xuXG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblxuXHRcdGlmICh2aWV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMudmlldyA9IG5ldyBWaWV3RW50aXR5KHRoaXMucHJlc2VudGF0aW9uLmdldERlZmF1bHRWaWV3KCkpO1xuXHRcdH1cblxuXHRcdGlmIChhbGlnbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmFsaWduID0gdGhpcy5wcmVzZW50YXRpb24uZ2V0RGVmYXVsdEFsaWduKHRoaXMudmlldyk7XG5cdFx0fVxuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0Z2V0U29ydFN0YXR1cygpOiBTb3J0T3JkZXIge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXM7XG5cdH1cblxuXHRzZXRTb3J0U3RhdHVzKHN0YXR1czogU29ydE9yZGVyKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gc3RhdHVzO1xuXHR9XG5cbn1cbiJdfQ==