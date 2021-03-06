import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
export declare class StructureSetSummariesEnabledCommand extends Command {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
