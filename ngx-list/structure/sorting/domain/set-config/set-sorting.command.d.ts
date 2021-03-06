import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { SortingConfig } from '../../domain-api/sorting-config';
export declare class SetSortingCommand extends Command {
    private readonly sortingConfig;
    constructor(structureId: StructureId, sortingConfig: SortingConfig);
    getSortingConfig(): SortingConfig;
}
