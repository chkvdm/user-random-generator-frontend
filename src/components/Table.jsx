import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, Typography, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mkConfig, generateCsv, download } from 'export-to-csv';

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
  const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
  });

  const hadleExportCsv = () => {
    const csv = generateCsv(csvConfig)(flatData);
    download(csvConfig)(csv);
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={flatData}
      enablePagination={false}
      enableRowNumbers
      enableRowVirtualization
      renderTopToolbarCustomActions={() => (
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            padding: '8px',
            flexWrap: 'wrap',
          }}
        >
          <Button
            onClick={() => hadleExportCsv()}
            startIcon={<FileDownloadIcon />}
          >
            Export to CSV
          </Button>
        </Box>
      )}
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
