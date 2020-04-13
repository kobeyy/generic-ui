/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOMAIN_EVENT_HANDLERS } from '@generic-ui/hermes';
import { inMemoryCompositionCommandProviders, inMemoryCompositionProviders, inMemoryCompositionReadModelProviders } from '../infrastructure/in-memory/in-memory.composition.providers';
import { CompositionDispatcher } from '../domain/composition.dispatcher';
import { ColumnEntityFactory } from '../domain/column/column-entity.factory';
import { CompositionEventConverter } from '../domain/composition.event-converter';
import { ColumnFieldFactory } from '../domain/column/field/colum-field.factory';
import { CompositionEventRepository } from './composition.event-repository';
import { CompositionWarehouse } from './composition.warehouse';
import { CompositionCommandDispatcher } from './composition.command-dispatcher';
import { CompositionReadModelRootConverter } from '../read/composition.read-model-root-converter';
import { EditTemplateRepository } from '../read/edit/edit-template.repository';
import { EditTemplateFactory } from '../read/edit/edit-template.factory';
import { ViewTemplateFactory } from '../read/view/view-template.factory';
import { ViewTemplateRepository } from '../read/view/view-template.repository';
import { ColumnDefinitionFactory } from '../read/definition/column-definition.factory';
import { CompositionChangeSortStatusEventHandler } from '../domain/column/sort/composition-change-sort-status.event-handler';
import { CompositionFieldsInitedEventHandler } from '../domain/column/set-columns/composition-fields-inited.event-handler';
import { ColumnPresentationConverter } from '../domain/column/presentation/column.presentation.converter';
/** @type {?} */
const commandProviders = [
    ...inMemoryCompositionCommandProviders,
    CompositionDispatcher,
    ColumnEntityFactory,
    ColumnPresentationConverter,
    CompositionEventConverter,
    ColumnFieldFactory
];
/** @type {?} */
const readProviders = [
    ...inMemoryCompositionReadModelProviders,
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: CompositionFieldsInitedEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: CompositionChangeSortStatusEventHandler,
        multi: true
    },
    ColumnDefinitionFactory,
    ViewTemplateRepository,
    ViewTemplateFactory,
    EditTemplateFactory,
    EditTemplateRepository
];
/** @type {?} */
export const compositionProviders = [
    ...inMemoryCompositionProviders,
    ...commandProviders,
    ...readProviders,
    CompositionReadModelRootConverter,
    CompositionCommandDispatcher,
    CompositionWarehouse,
    CompositionEventRepository
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUNOLG1DQUFtQyxFQUNuQyw0QkFBNEIsRUFDNUIscUNBQXFDLEVBQ3JDLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDM0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkRBQTZELENBQUM7O01BR3BHLGdCQUFnQixHQUFHO0lBQ3hCLEdBQUcsbUNBQW1DO0lBQ3RDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixrQkFBa0I7Q0FDbEI7O01BRUssYUFBYSxHQUFHO0lBQ3JCLEdBQUcscUNBQXFDO0lBQ3hDO1FBQ0MsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsbUNBQW1DO1FBQzdDLEtBQUssRUFBRSxJQUFJO0tBQ1gsRUFBRTtRQUNGLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsUUFBUSxFQUFFLHVDQUF1QztRQUNqRCxLQUFLLEVBQUUsSUFBSTtLQUNYO0lBQ0QsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtDQUN0Qjs7QUFFRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUc7SUFDbkMsR0FBRyw0QkFBNEI7SUFDL0IsR0FBRyxnQkFBZ0I7SUFDbkIsR0FBRyxhQUFhO0lBRWhCLGlDQUFpQztJQUVqQyw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtDQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQge1xuXHRpbk1lbW9yeUNvbXBvc2l0aW9uQ29tbWFuZFByb3ZpZGVycyxcblx0aW5NZW1vcnlDb21wb3NpdGlvblByb3ZpZGVycyxcblx0aW5NZW1vcnlDb21wb3NpdGlvblJlYWRNb2RlbFByb3ZpZGVyc1xufSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5ldmVudC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlciB9IGZyb20gJy4uL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vcmVhZC92aWV3L3ZpZXctdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVhZC92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSB9IGZyb20gJy4uL3JlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24tZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24uY29udmVydGVyJztcblxuXG5jb25zdCBjb21tYW5kUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeUNvbXBvc2l0aW9uQ29tbWFuZFByb3ZpZGVycyxcblx0Q29tcG9zaXRpb25EaXNwYXRjaGVyLFxuXHRDb2x1bW5FbnRpdHlGYWN0b3J5LFxuXHRDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIsXG5cdENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIsXG5cdENvbHVtbkZpZWxkRmFjdG9yeVxuXTtcblxuY29uc3QgcmVhZFByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlDb21wb3NpdGlvblJlYWRNb2RlbFByb3ZpZGVycyxcblx0e1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogQ29tcG9zaXRpb25GaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sXG5cdENvbHVtbkRlZmluaXRpb25GYWN0b3J5LFxuXHRWaWV3VGVtcGxhdGVSZXBvc2l0b3J5LFxuXHRWaWV3VGVtcGxhdGVGYWN0b3J5LFxuXHRFZGl0VGVtcGxhdGVGYWN0b3J5LFxuXHRFZGl0VGVtcGxhdGVSZXBvc2l0b3J5XG5dO1xuXG5leHBvcnQgY29uc3QgY29tcG9zaXRpb25Qcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMsXG5cdC4uLmNvbW1hbmRQcm92aWRlcnMsXG5cdC4uLnJlYWRQcm92aWRlcnMsXG5cblx0Q29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyLFxuXG5cdENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIsXG5cdENvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeVxuXTtcbiJdfQ==