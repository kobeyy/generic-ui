import { GuiColumn } from '../../../domain-api/grid.api';
import { ColumnConfig } from '../../../../../lib/composition/domain/column/column.config';
export declare class GridColumnConverter {
    private readonly columnTypeConverter;
    private readonly columnSummariesConverter;
    private readonly columnViewConverter;
    private readonly columnSortingConverter;
    private readonly columnCellEditingConverter;
    private readonly columnAlignConverter;
    convert(config: Array<GuiColumn>): Array<ColumnConfig>;
    private convertColumn;
}
