/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesModule } from '@generic-ui/hermes';
import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { SetFormationCommandHandler } from '../../domain/formation/set/set-formation.command-handler';
import { ToggleSelectedRowCommandHandler } from '../../domain/formation/toggle/toggle-selected-row.command-handler';
import { FormationRepository } from './read/formation-repository';
import { FormationAggregateFactory } from '../../domain/formation/formation.aggregate-factory';
import { FormationConverter } from './read/formation.converter';
import { FormationEventService } from './formation-event.service';
import { StructureFormationDispatcher } from './structure-formation.dispatcher';
import { StructureFormationWarehouse } from './structure-formation.warehouse';
/** @type {?} */
var commandProviders = [
    FormationDispatcher,
    FormationAggregateFactory
];
/** @type {?} */
var readProviders = [
    FormationRepository
];
/** @type {?} */
export var formationCommandHandlers = tslib_1.__spread(HermesModule.registerCommandHandler(SetFormationCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(ToggleSelectedRowCommandHandler, 'StructureAggregate'));
/** @type {?} */
export var formationProviders = tslib_1.__spread(commandProviders, readProviders, [
    FormationEventService,
    FormationConverter,
    StructureFormationDispatcher,
    StructureFormationWarehouse
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztJQUV4RSxnQkFBZ0IsR0FBRztJQUN4QixtQkFBbUI7SUFDbkIseUJBQXlCO0NBQ3pCOztJQUVLLGFBQWEsR0FBRztJQUNyQixtQkFBbUI7Q0FDbkI7O0FBRUQsTUFBTSxLQUFPLHdCQUF3QixvQkFDakMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixFQUFFLG9CQUFvQixDQUFDLEVBQ3JGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywrQkFBK0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUM3Rjs7QUFFRCxNQUFNLEtBQU8sa0JBQWtCLG9CQUMzQixnQkFBZ0IsRUFDaEIsYUFBYTtJQUVoQixxQkFBcUI7SUFFckIsa0JBQWtCO0lBRWxCLDRCQUE0QjtJQUM1QiwyQkFBMkI7RUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTZXRGb3JtYXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2V0L3NldC1mb3JtYXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3RvZ2dsZS90b2dnbGUtc2VsZWN0ZWQtcm93LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2Zvcm1hdGlvbi1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuL3JlYWQvZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFNlcnZpY2UgfSBmcm9tICcuL2Zvcm1hdGlvbi1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuL3N0cnVjdHVyZS1mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuL3N0cnVjdHVyZS1mb3JtYXRpb24ud2FyZWhvdXNlJztcblxuY29uc3QgY29tbWFuZFByb3ZpZGVycyA9IFtcblx0Rm9ybWF0aW9uRGlzcGF0Y2hlcixcblx0Rm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeVxuXTtcblxuY29uc3QgcmVhZFByb3ZpZGVycyA9IFtcblx0Rm9ybWF0aW9uUmVwb3NpdG9yeVxuXTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdGlvbkNvbW1hbmRIYW5kbGVycyA9IFtcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Rm9ybWF0aW9uQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpXG5dO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0aW9uUHJvdmlkZXJzID0gW1xuXHQuLi5jb21tYW5kUHJvdmlkZXJzLFxuXHQuLi5yZWFkUHJvdmlkZXJzLFxuXG5cdEZvcm1hdGlvbkV2ZW50U2VydmljZSxcblxuXHRGb3JtYXRpb25Db252ZXJ0ZXIsXG5cblx0U3RydWN0dXJlRm9ybWF0aW9uRGlzcGF0Y2hlcixcblx0U3RydWN0dXJlRm9ybWF0aW9uV2FyZWhvdXNlXG5dO1xuIl19