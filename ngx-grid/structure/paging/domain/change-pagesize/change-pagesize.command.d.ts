import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class ChangePagesizeCommand extends Command {
    private readonly pageSize;
    constructor(structureId: StructureId, pageSize: number);
    getPageSize(): number;
}
