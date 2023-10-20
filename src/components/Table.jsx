import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Typography } from '@mui/material';

const Table = ({
  columns,
  flatData,
  tableContainerRef,
  fetchMoreOnBottomReached,
  isError,
  setColumnFilters,
  setGlobalFilter,
  setSorting,
  totalFetched,
  totalDBRowCount,
  columnFilters,
  globalFilter,
  isLoading,
  isFetching,
  sorting,
  rowVirtualizerInstanceRef,
}) => {
  return (
    <MaterialReactTable
      columns={columns}
      data={flatData}
      enablePagination={false}
      enableRowNumbers
      enableRowVirtualization
      muiTableContainerProps={{
        ref: tableContainerRef,
        sx: { maxHeight: '520px' },
        onScroll: (event) => fetchMoreOnBottomReached(event.target),
      }}
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: 'error',
              children: 'Error loading data',
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onSortingChange={setSorting}
      renderBottomToolbarCustomActions={() => (
        <Typography>
          Fetched {totalFetched} of {totalDBRowCount} total rows.
        </Typography>
      )}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        showAlertBanner: isError,
        showProgressBars: isFetching,
        sorting,
      }}
      rowVirtualizerInstanceRef={rowVirtualizerInstanceRef}
      rowVirtualizerProps={{ overscan: 4 }}
    />
  );
};

export default Table;
