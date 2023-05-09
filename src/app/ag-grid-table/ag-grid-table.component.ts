import { Component } from "@angular/core";
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from "ag-grid-community";

interface RowDataItem {
  [key: string]: string;
}

@Component({
  selector: "app-ag-grid-table",
  templateUrl: "./ag-grid-table.component.html",
})
export class AgGridTableComponent {
  // Column definitions for the ag-grid table
  columnDefs: ColDef[] = [];

  // Row data for the ag-grid table
  rowData: RowDataItem[] = [];

  // GridApi and ColumnApi instances for the ag-grid table
  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;

  constructor() {
    // Generate the column definitions and row data for the ag-grid table
    this.generateColumnDefs();
    this.generateRowData();
  }

  /**
   * @param params - The event object containing GridApi and ColumnApi instances
   */
  onGridReady(params: GridReadyEvent) {
    // Assign the GridApi and ColumnApi instances from the ag-grid table
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  /**
   * Generates column definitions for the ag-grid table.
   */
  generateColumnDefs() {
    for (let i = 1; i <= 12; i++) {
      this.columnDefs.push({
        headerName: `Column ${i}`,
        field: `col${i}`,
        sortable: true,
        filter: true,
      });
    }
  }

  /**
   * Generates row data for the ag-grid table.
   */
  generateRowData() {
    for (let i = 1; i <= 30; i++) {
      const rowData: any = {};
      for (let j = 1; j <= 12; j++) {
        rowData[`col${j}`] = `Cell ${i}-${j}`;
      }
      this.rowData.push(rowData);
    }
  }
}
