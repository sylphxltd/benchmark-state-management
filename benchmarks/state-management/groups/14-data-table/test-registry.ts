/**
 * Test registry for 14-data-table group
 * Tests real-world data table / grid operations
 */

export interface TestDefinition {
  name: string;
  method: string; // Required method name for this test
  execute: (store: any) => void | any;
}

export const TESTS = {
  LOAD_TABLE_DATA: {
    name: 'Load Table Data (100 rows)',
    method: 'loadTableData',
    execute: (store) => {
      // Load initial table data
      const mockData = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        status: i % 2 === 0 ? 'active' : 'inactive',
        score: Math.random() * 100
      }));
      store.loadTableData(mockData);
    }
  },
  SORT_BY_COLUMN: {
    name: 'Sort by Column',
    method: 'sortByColumn',
    execute: (store) => {
      // Sort table by specific column
      store.sortByColumn('name', 'asc');
    }
  },
  CHANGE_PAGE: {
    name: 'Change Page (Pagination)',
    method: 'changePage',
    execute: (store) => {
      // Navigate to different page
      store.changePage(2);
    }
  },
  SET_PAGE_SIZE: {
    name: 'Set Page Size',
    method: 'setPageSize',
    execute: (store) => {
      // Change rows per page
      store.setPageSize(50);
    }
  },
  SELECT_ROW: {
    name: 'Select Row',
    method: 'selectRow',
    execute: (store) => {
      // Select a single row
      store.selectRow(5);
    }
  },
  SELECT_ALL_ROWS: {
    name: 'Select All Rows',
    method: 'selectAllRows',
    execute: (store) => {
      // Select all rows in current page
      store.selectAllRows();
    }
  },
  DESELECT_ALL_ROWS: {
    name: 'Deselect All Rows',
    method: 'deselectAllRows',
    execute: (store) => {
      // Clear all selections
      store.deselectAllRows();
    }
  },
  FILTER_TABLE: {
    name: 'Filter Table by Value',
    method: 'filterTable',
    execute: (store) => {
      // Apply filter criteria
      store.filterTable({ status: 'active' });
    }
  },
  SEARCH_TABLE: {
    name: 'Search Table',
    method: 'searchTable',
    execute: (store) => {
      // Full-text search across all columns
      store.searchTable('user');
    }
  },
  UPDATE_ROW: {
    name: 'Update Row Data',
    method: 'updateRow',
    execute: (store) => {
      // Edit a row inline
      store.updateRow(5, { name: 'Updated Name', email: 'updated@example.com' });
    }
  },
  DELETE_ROW: {
    name: 'Delete Row',
    method: 'deleteRow',
    execute: (store) => {
      // Remove a row
      store.deleteRow(5);
    }
  },
  BULK_DELETE: {
    name: 'Bulk Delete Selected Rows',
    method: 'bulkDeleteRows',
    execute: (store) => {
      // Delete multiple selected rows
      store.bulkDeleteRows([1, 2, 3, 4, 5]);
    }
  },
  GET_SELECTED_ROWS: {
    name: 'Get Selected Rows',
    method: 'getSelectedRows',
    execute: (store) => {
      // Retrieve all selected row data
      const selected = store.getSelectedRows();
      return selected;
    }
  },
  TOGGLE_COLUMN_VISIBILITY: {
    name: 'Toggle Column Visibility',
    method: 'toggleColumnVisibility',
    execute: (store) => {
      // Show/hide a column
      store.toggleColumnVisibility('email', false);
    }
  },
  REORDER_COLUMNS: {
    name: 'Reorder Columns',
    method: 'reorderColumns',
    execute: (store) => {
      // Drag and drop column reordering
      store.reorderColumns('email', 'name'); // move email before name
    }
  },
  EXPAND_ROW_DETAIL: {
    name: 'Expand Row Detail',
    method: 'expandRowDetail',
    execute: (store) => {
      // Expand nested row details
      store.expandRowDetail(5);
    }
  },
  APPLY_BULK_ACTION: {
    name: 'Apply Bulk Action',
    method: 'applyBulkAction',
    execute: (store) => {
      // Apply action to selected rows (e.g., change status)
      store.applyBulkAction('activate', [1, 2, 3]);
    }
  },
  RESET_FILTERS: {
    name: 'Reset All Filters',
    method: 'resetFilters',
    execute: (store) => {
      // Clear all filter/search criteria
      store.resetFilters();
    }
  },
  EXPORT_SELECTED: {
    name: 'Export Selected Rows',
    method: 'exportSelectedRows',
    execute: (store) => {
      // Prepare selected rows for export
      const exportData = store.exportSelectedRows();
      return exportData;
    }
  },
  REFRESH_TABLE_DATA: {
    name: 'Refresh Table Data',
    method: 'refreshTableData',
    execute: (store) => {
      // Reload table with fresh data
      store.refreshTableData();
    }
  }
} as const satisfies Record<string, TestDefinition>;

export type DataTableTestKey = keyof typeof TESTS;
