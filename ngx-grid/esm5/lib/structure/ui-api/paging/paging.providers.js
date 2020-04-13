/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesModule } from '@generic-ui/hermes';
import { PagingDispatcher } from '../../domain/paging/paging.dispatcher';
import { SetPagingCommandHandler } from '../../domain/paging/set/set-paging.command-handler';
import { NextPageCommandHandler } from '../../domain/paging/next-page/next-page.command-handler';
import { PrevPageCommandHandler } from '../../domain/paging/prev-page/prev-page.command-handler';
import { ChangePagesizeCommandHandler } from '../../domain/paging/change-pagesize/change-pagesize.command-handler';
import { PagingRepository } from '../../read/paging/paging.repository';
import { PagingManagerFactory } from '../../domain/paging/paging.manager-factory';
import { PagingConverter } from '../../read/paging/paging.converter';
import { StructurePagingCommandDispatcher } from './structure-paging.command-dispatcher';
import { StructurePagingWarehouse } from './structure-paging.warehouse';
import { StructurePagingEventRepository } from './structure-paging.event-repository';
/** @type {?} */
var commandProviders = [
    PagingDispatcher
];
/** @type {?} */
var readProviders = [
    PagingRepository
];
/** @type {?} */
export var pagingCommandHandlers = tslib_1.__spread(HermesModule.registerCommandHandler(SetPagingCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(NextPageCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(PrevPageCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(ChangePagesizeCommandHandler, 'StructureAggregate'));
/** @type {?} */
export var pagingProviders = tslib_1.__spread(commandProviders, readProviders, [
    PagingManagerFactory,
    PagingConverter,
    StructurePagingCommandDispatcher,
    StructurePagingWarehouse,
    StructurePagingEventRepository
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvcGFnaW5nL3BhZ2luZy5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDakcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDakcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDbkgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztJQUcvRSxnQkFBZ0IsR0FBRztJQUN4QixnQkFBZ0I7Q0FDaEI7O0lBRUssYUFBYSxHQUFHO0lBQ3JCLGdCQUFnQjtDQUNoQjs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLG9CQUM5QixZQUFZLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsRUFDbEYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLEVBQ2pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQyxFQUNqRixZQUFZLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsb0JBQW9CLENBQUMsQ0FDMUY7O0FBRUQsTUFBTSxLQUFPLGVBQWUsb0JBQ3hCLGdCQUFnQixFQUNoQixhQUFhO0lBRWhCLG9CQUFvQjtJQUNwQixlQUFlO0lBRWYsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4Qiw4QkFBOEI7RUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9wYWdpbmcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTZXRQYWdpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvc2V0L3NldC1wYWdpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IE5leHRQYWdlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL25leHQtcGFnZS9uZXh0LXBhZ2UuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFByZXZQYWdlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3ByZXYtcGFnZS9wcmV2LXBhZ2UuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENoYW5nZVBhZ2VzaXplQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL2NoYW5nZS1wYWdlc2l6ZS9jaGFuZ2UtcGFnZXNpemUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFBhZ2luZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL3BhZ2luZy9wYWdpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9yZWFkL3BhZ2luZy9wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuL3N0cnVjdHVyZS1wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vc3RydWN0dXJlLXBhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcblxuXG5jb25zdCBjb21tYW5kUHJvdmlkZXJzID0gW1xuXHRQYWdpbmdEaXNwYXRjaGVyXG5dO1xuXG5jb25zdCByZWFkUHJvdmlkZXJzID0gW1xuXHRQYWdpbmdSZXBvc2l0b3J5XG5dO1xuXG5leHBvcnQgY29uc3QgcGFnaW5nQ29tbWFuZEhhbmRsZXJzID0gW1xuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRQYWdpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihOZXh0UGFnZUNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFByZXZQYWdlQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpXG5dO1xuXG5leHBvcnQgY29uc3QgcGFnaW5nUHJvdmlkZXJzID0gW1xuXHQuLi5jb21tYW5kUHJvdmlkZXJzLFxuXHQuLi5yZWFkUHJvdmlkZXJzLFxuXG5cdFBhZ2luZ01hbmFnZXJGYWN0b3J5LFxuXHRQYWdpbmdDb252ZXJ0ZXIsXG5cblx0U3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIsXG5cdFN0cnVjdHVyZVBhZ2luZ1dhcmVob3VzZSxcblx0U3RydWN0dXJlUGFnaW5nRXZlbnRSZXBvc2l0b3J5XG5dO1xuIl19