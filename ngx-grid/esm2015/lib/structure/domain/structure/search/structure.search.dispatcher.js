/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { structureGlobalId } from '../../../ui-api/structure.global-id';
import { StructureSetConfigSearchingCommand } from './config/structure.set-config-searching.command';
import { StructureSetSearchPhraseCommand } from './set-phrase/structure.set-search-phrase.command';
import { StructureSearchHighlightArchive } from '../../../read/structure/searching/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../read/structure/searching/placeholder/structure.search-placeholder.archive';
export class StructureSearchDispatcher {
    /**
     * @param {?} commandDispatcher
     * @param {?} structureSearchHighlightArchive
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) {
        this.commandDispatcher = commandDispatcher;
        this.structureSearchHighlightArchive = structureSearchHighlightArchive;
        this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId = structureGlobalId) {
        if (config.highlighting !== undefined && config.highlighting !== null) {
            this.structureSearchHighlightArchive.next(config.highlighting);
        }
        if (config.placeholder !== undefined && config.placeholder !== null) {
            this.structureSearchPlaceholderArchive.next(config.placeholder);
        }
        if (config.phrase !== undefined && config.phrase !== null) {
            this.search(config.phrase, structureId);
        }
        this.commandDispatcher.dispatch(new StructureSetConfigSearchingCommand(structureId, config));
    }
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    search(phrase, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new StructureSetSearchPhraseCommand(structureId, phrase));
    }
}
StructureSearchDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSearchDispatcher.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: StructureSearchHighlightArchive },
    { type: StructureSearchPlaceholderArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchDispatcher.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureSearchDispatcher.prototype.structureSearchHighlightArchive;
    /**
     * @type {?}
     * @private
     */
    StructureSearchDispatcher.prototype.structureSearchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc2VhcmNoL3N0cnVjdHVyZS5zZWFyY2guZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUNqSSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxvRkFBb0YsQ0FBQztBQUl2SSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUFFckMsWUFBb0IsaUJBQW9DLEVBQzdDLCtCQUFnRSxFQUNoRSxpQ0FBb0U7UUFGM0Qsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO1FBQ2hFLHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBb0IsRUFBRSxjQUEyQixpQkFBaUI7UUFFcEYsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDcEUsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBYyxFQUFFLGNBQTJCLGlCQUFpQjtRQUNsRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksK0JBQStCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7O1lBM0JELFVBQVU7Ozs7WUFYRixpQkFBaUI7WUFPakIsK0JBQStCO1lBQy9CLGlDQUFpQzs7Ozs7OztJQU03QixzREFBNEM7Ozs7O0lBQ3JELG9FQUF3RTs7Ozs7SUFDeEUsc0VBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kIH0gZnJvbSAnLi9zZXQtcGhyYXNlL3N0cnVjdHVyZS5zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3N0cnVjdHVyZS9zZWFyY2hpbmcvaGlnaGxpZ2h0L3N0cnVjdHVyZS5zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL3BsYWNlaG9sZGVyL3N0cnVjdHVyZS5zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmU6IFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlOiBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpIHtcblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblxuXHRcdGlmIChjb25maWcuaGlnaGxpZ2h0aW5nICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmhpZ2hsaWdodGluZyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlLm5leHQoY29uZmlnLmhpZ2hsaWdodGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5wbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5wbGFjZWhvbGRlciAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUubmV4dChjb25maWcucGxhY2Vob2xkZXIpO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcucGhyYXNlICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnBocmFzZSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zZWFyY2goY29uZmlnLnBocmFzZSwgc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFN0cnVjdHVyZVNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0c2VhcmNoKHBocmFzZTogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmQoc3RydWN0dXJlSWQsIHBocmFzZSkpO1xuXHR9XG5cbn1cbiJdfQ==