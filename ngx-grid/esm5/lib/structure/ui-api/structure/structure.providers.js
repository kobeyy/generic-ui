/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { COMMAND_HANDLERS, DOMAIN_EVENT_HANDLERS } from '@generic-ui/hermes';
import { inMemoryStructureCommandProviders, inMemoryStructureProviders, inMemoryStructureReadProviders } from '../../infrastructure/in-memory/structure/in-memory.structure.providers';
import { InitStructureCommandHandler } from '../../domain/structure/command/init/init-structure.command-handler';
import { SetVerticalScrollEnabledCommandHandler } from '../../domain/structure/command/vertical-formation/set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetScrollPositionCommandHandler } from '../../domain/structure/command/vertical-formation/scroll-position/set-scroll-position.command-handler';
import { InitFieldsCommandHandler } from '../../domain/structure/command/field/init/init-fields.command-handler';
import { ToggleSortCommandHandler } from '../../domain/structure/command/sort/toggle/toggle-sort.command-handler';
import { SetSortingCommandHandler } from '../../domain/structure/command/sort/set-config/set-sorting.command-handler';
import { StructureSetConfigFilterCommandHandler } from '../../domain/structure/command/filter/config/structure.set-config-filter.command-handler';
import { StructureSetConfigSearchingCommandHandler } from '../../domain/structure/command/search/config/structure.set-config-searching.command-handler';
import { StructureSetConfigQuickFilterCommandHandler } from '../../domain/structure/command/filter/quick/structure.set-config-quick-filter.command-handler';
import { StructureToggleFilterCommandHandler } from '../../domain/structure/command/filter/toggle/structure.toggle-filter.command-handler';
import { StructureSetAggregationEnabledCommandHandler } from '../../domain/structure/command/aggregation/set/structure.set-aggregation-enabled.command-handler';
import { VerticalFormationFactory } from '../../domain/structure/command/vertical-formation/vertical-formation.factory';
import { FieldCollectionFactory } from '../../domain/structure/command/field/field-collection.factory';
import { FilterManagerFactory } from '../../domain/structure/command/filter/filter.manager-factory';
import { FieldIdGenerator } from '../../domain/structure/command/field/field-id.generator';
import { StructureFilterCommandService } from './filter/structure.filter.command.service';
import { FieldFactory } from '../../domain/structure/command/field/data-type/field.factory';
import { aggregationProviders } from '../../domain/structure/command/aggregation/aggregation.providers';
import { StructureConfigFilterSetEventHandler } from '../../domain/structure/read/filter/structure.config-filter-set.event-handler';
import { StructureConfigSearchingSetEventHandler } from '../../domain/structure/read/searching/structure.config-searching-set.event-handler';
import { StructureConfigQuickFilterSetEventHandler } from '../../domain/structure/read/filter/structure.config-quick-filter-set.event-handler';
import { StructureFieldsInitedEventHandler } from './field/structure.fields-inited.event-handler';
import { VerticalFormationConverter } from '../../domain/structure/read/vertical-formation/vertical-formation.converter';
import { StructureFilterReadModelRepository } from './filter/structure.filter.read-model.repository';
import { StructureFilterRepository } from '../../domain/structure/read/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../domain/structure/read/filter/structure.quick-filter.repository';
import { StructureSearchingRepository } from '../../domain/structure/read/searching/structure.searching.repository';
import { StructureSearchReadModelRepository } from './search/structure-search.read-model.repository';
import { StructureFieldUiArchive } from './field/structure.field.ui-archive';
import { StructureFieldUiConverter } from './field/structure.field.ui-converter';
import { StructureFieldUiRepository } from './field/structure.field.ui-repository';
import { StructureAggregationCommandService } from './aggregation/structure.aggregation.command-service';
import { StructureAggregationUiEventsRepository } from './aggregation/structure.aggregation.ui-events-repository';
import { StructureCommandService } from './structure-command.service';
import { StructureConverter } from '../../domain/structure/structure.converter';
import { StructureAggregateFactory } from '../../domain/structure/command/structure.aggregate-factory';
import { StructureReadModelService } from './structure-read-model.service';
import { pagingProviders } from '../paging/paging.providers';
import { schemaProviders } from '../schema/schema.providers';
import { formationProviders } from '../formation/formation.providers';
import { sourceProviders } from '../source/source.providers';
import { StructureSetSearchPhraseCommandHandler } from '../../domain/structure/command/search/set/structure.set-search-phrase.command-handler';
import { SearchManagerFactory } from '../../domain/structure/command/search/search.manager-factory';
import { SetSortOrderCommandHandler } from '../../domain/structure/command/sort/order/set-sort-order.command-handler';
import { VerticalFormationRepository } from '../../domain/structure/read/vertical-formation/vertical-formation.repository';
import { SetRowHeightCommandHandler } from '../../domain/structure/command/vertical-formation/set-row-height/set-row-height.command-handler';
/** @type {?} */
var commandProviders = tslib_1.__spread(inMemoryStructureCommandProviders, [
    {
        provide: COMMAND_HANDLERS,
        useClass: InitStructureCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetVerticalScrollEnabledCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetScrollPositionCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: InitFieldsCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: ToggleSortCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetSortingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigSearchingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigQuickFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureToggleFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetAggregationEnabledCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetSearchPhraseCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetSortOrderCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetRowHeightCommandHandler,
        multi: true
    },
    VerticalFormationFactory,
    FieldCollectionFactory,
    FilterManagerFactory,
    SearchManagerFactory,
    FieldIdGenerator,
    StructureFilterCommandService,
    FieldFactory
], aggregationProviders);
/** @type {?} */
var readProviders = tslib_1.__spread([
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigSearchingSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigQuickFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureFieldsInitedEventHandler,
        multi: true
    }
], inMemoryStructureReadProviders, [
    VerticalFormationConverter,
    VerticalFormationRepository,
    StructureFilterReadModelRepository,
    StructureFilterRepository,
    StructureQuickFilterRepository,
    StructureSearchingRepository,
    StructureSearchReadModelRepository,
    StructureFieldUiArchive,
    StructureFieldUiConverter,
    StructureFieldUiRepository
]);
/** @type {?} */
export var structureProviders = tslib_1.__spread(inMemoryStructureProviders, commandProviders, readProviders, [
    StructureAggregationCommandService,
    StructureAggregationUiEventsRepository,
    StructureAggregateFactory,
    StructureConverter,
    StructureReadModelService,
    StructureCommandService
], pagingProviders, schemaProviders, formationProviders, sourceProviders);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RSxPQUFPLEVBQ04saUNBQWlDLEVBQ2pDLDBCQUEwQixFQUMxQiw4QkFBOEIsRUFDOUIsTUFBTSx3RUFBd0UsQ0FBQztBQUNoRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwyR0FBMkcsQ0FBQztBQUNuSyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1R0FBdUcsQ0FBQztBQUN4SixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwRkFBMEYsQ0FBQztBQUNsSixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2RkFBNkYsQ0FBQztBQUN4SixPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSwrRkFBK0YsQ0FBQztBQUM1SixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUMzSSxPQUFPLEVBQUUsNENBQTRDLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUNoSyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN2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QUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsb0NBQW9DO1FBQzlDLEtBQUssRUFBRSxJQUFJO0tBQ1gsRUFBRTtRQUNGLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsUUFBUSxFQUFFLHVDQUF1QztRQUNqRCxLQUFLLEVBQUUsSUFBSTtLQUNYLEVBQUU7UUFDRixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFFBQVEsRUFBRSx5Q0FBeUM7UUFDbkQsS0FBSyxFQUFFLElBQUk7S0FDWCxFQUFFO1FBQ0YsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsaUNBQWlDO1FBQzNDLEtBQUssRUFBRSxJQUFJO0tBQ1g7R0FDRSw4QkFBOEI7SUFDakMsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMEJBQTBCO0VBQzFCOztBQUVELE1BQU0sS0FBTyxrQkFBa0Isb0JBQzNCLDBCQUEwQixFQUUxQixnQkFBZ0IsRUFDaEIsYUFBYTtJQUVoQixrQ0FBa0M7SUFDbEMsc0NBQXNDO0lBRXRDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFFbEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtHQUVwQixlQUFlLEVBQ2YsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixlQUFlLENBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUywgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7XG5cdGluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVycyxcblx0aW5NZW1vcnlTdHJ1Y3R1cmVQcm92aWRlcnMsXG5cdGluTWVtb3J5U3RydWN0dXJlUmVhZFByb3ZpZGVyc1xufSBmcm9tICcuLi8uLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvc3RydWN0dXJlL2luLW1lbW9yeS5zdHJ1Y3R1cmUucHJvdmlkZXJzJztcbmltcG9ydCB7IEluaXRTdHJ1Y3R1cmVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9pbml0L2luaXQtc3RydWN0dXJlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zY3JvbGwtcG9zaXRpb24vc2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NvcnQvc2V0LWNvbmZpZy9zZXQtc29ydGluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL2NvbmZpZy9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9jb25maWcvc3RydWN0dXJlLnNldC1jb25maWctc2VhcmNoaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9xdWljay9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL3NldC9zdHJ1Y3R1cmUuc2V0LWFnZ3JlZ2F0aW9uLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgRmlsdGVyTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL2ZpbHRlci5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9maWVsZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLmNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgYWdncmVnYXRpb25Qcm92aWRlcnMgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vYWdncmVnYXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9maWx0ZXIvc3RydWN0dXJlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9zdHJ1Y3R1cmUuY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9maWx0ZXIvc3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9maWVsZC9zdHJ1Y3R1cmUuZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlYWQtbW9kZWwucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUucXVpY2stZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvc3RydWN0dXJlLnNlYXJjaGluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuL3NlYXJjaC9zdHJ1Y3R1cmUtc2VhcmNoLnJlYWQtbW9kZWwucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSB9IGZyb20gJy4vZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUNvbnZlcnRlciB9IGZyb20gJy4vZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSB9IGZyb20gJy4vZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4vYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLmNvbW1hbmQtc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4vYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLnVpLWV2ZW50cy1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IHBhZ2luZ1Byb3ZpZGVycyB9IGZyb20gJy4uL3BhZ2luZy9wYWdpbmcucHJvdmlkZXJzJztcbmltcG9ydCB7IHNjaGVtYVByb3ZpZGVycyB9IGZyb20gJy4uL3NjaGVtYS9zY2hlbWEucHJvdmlkZXJzJztcbmltcG9ydCB7IGZvcm1hdGlvblByb3ZpZGVycyB9IGZyb20gJy4uL2Zvcm1hdGlvbi9mb3JtYXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IHNvdXJjZVByb3ZpZGVycyB9IGZyb20gJy4uL3NvdXJjZS9zb3VyY2UucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9zZXQvc3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZWFyY2hNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zZWFyY2gvc2VhcmNoLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTZXRTb3J0T3JkZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L29yZGVyL3NldC1zb3J0LW9yZGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtcm93LWhlaWdodC9zZXQtcm93LWhlaWdodC5jb21tYW5kLWhhbmRsZXInO1xuXG5cbmNvbnN0IGNvbW1hbmRQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVycyxcblx0e1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IEluaXRTdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IEluaXRGaWVsZHNDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogVG9nZ2xlU29ydENvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTZXRTb3J0aW5nQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZVNldENvbmZpZ0ZpbHRlckNvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0U29ydE9yZGVyQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sXG5cdFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSxcblx0RmllbGRDb2xsZWN0aW9uRmFjdG9yeSxcblx0RmlsdGVyTWFuYWdlckZhY3RvcnksXG5cdFNlYXJjaE1hbmFnZXJGYWN0b3J5LFxuXHRGaWVsZElkR2VuZXJhdG9yLFxuXHRTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSxcblx0RmllbGRGYWN0b3J5LFxuXG5cdC4uLmFnZ3JlZ2F0aW9uUHJvdmlkZXJzXG5dO1xuXG5jb25zdCByZWFkUHJvdmlkZXJzID0gW1xuXHR7XG5cdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnMsXG5cdFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLFxuXHRWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlRmllbGRVaUFyY2hpdmUsXG5cdFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIsXG5cdFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5XG5dO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVByb3ZpZGVycyxcblxuXHQuLi5jb21tYW5kUHJvdmlkZXJzLFxuXHQuLi5yZWFkUHJvdmlkZXJzLFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5LFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFN0cnVjdHVyZUNvbnZlcnRlcixcblxuXHRTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlLFxuXHRTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSxcblxuXHQuLi5wYWdpbmdQcm92aWRlcnMsXG5cdC4uLnNjaGVtYVByb3ZpZGVycyxcblx0Li4uZm9ybWF0aW9uUHJvdmlkZXJzLFxuXHQuLi5zb3VyY2VQcm92aWRlcnNcbl07XG4iXX0=