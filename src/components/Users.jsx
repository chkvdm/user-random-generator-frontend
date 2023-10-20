import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import RegionPanel from './RegionPanel';
import ErrorPanel from './ErrorPanel';
import SeedPanel from './SeedPanel';
import Table from './Table';

const columns = [
  {
    accessorKey: 'id',
    header: 'id',
  },
  {
    accessorKey: 'fullName',
    header: 'full Name',
  },
  {
    accessorKey: 'address',
    header: 'address',
  },
];

const Users = () => {
  const tableContainerRef = useRef(null);
  const rowVirtualizerInstanceRef = useRef(null);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState();
  const [sorting, setSorting] = useState([]);
  const [region, setRegion] = useState('KA_GE');
  const [seed, setSeed] = useState(10);
  const [errorValue, setErrorValue] = useState(0);

  const handleErrorInput = (e) => {
    setErrorValue(e.target.value);
  };
  const handleErrorSlider = (e) => {
    setErrorValue(e.target.value);
  };
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };
  const handleSeedChange = (e) => {
    setSeed(e.target.value);
  };
  const generateRandomNumber = () => {
    const min = 1;
    const max = 100000;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setSeed(random);
  };

  const { data, fetchNextPage, isError, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: [
        'table-data',
        columnFilters,
        globalFilter,
        sorting,
        seed,
        region,
        errorValue,
      ],
      queryFn: async ({ pageParam = 0 }) => {
        const url = new URL('/api/v1/users', 'http://localhost:3001');
        url.searchParams.set('seed', `${seed}`);
        url.searchParams.set('pageNumber', `${pageParam}`);
        url.searchParams.set('count', `${10}`);
        url.searchParams.set('region', `${region}`);
        url.searchParams.set('errorCount', `${errorValue}`);
        const response = await fetch(url.href);
        const json = await response.json();
        return json;
      },
      getNextPageParam: (_lastGroup, groups) => groups.length,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    });
  const flatData = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data]
  );
  const totalDBRowCount = data?.pages?.[0]?.meta?.totalRowCount ?? 0;
  const totalFetched = flatData.length;
  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (
          scrollHeight - scrollTop - clientHeight < 60 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  );
  useEffect(() => {
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
    } catch (error) {
      console.error(error);
    }
  }, [sorting, columnFilters, globalFilter, seed, region]);
  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  return (
    <div className="container">
      <div className="user-container mx-auto col-lg-12">
        <div className="container control-panel">
          <RegionPanel handleRegionChange={handleRegionChange} />
          <ErrorPanel
            errorValue={errorValue}
            handleErrorSlider={handleErrorSlider}
            handleErrorInput={handleErrorInput}
          />
          <SeedPanel
            seed={seed}
            handleSeedChange={handleSeedChange}
            generateRandomNumber={generateRandomNumber}
          />
        </div>
        <Table
          columns={columns}
          flatData={flatData}
          tableContainerRef={tableContainerRef}
          fetchMoreOnBottomReached={fetchMoreOnBottomReached}
          isError={isError}
          setColumnFilters={setColumnFilters}
          setGlobalFilter={setGlobalFilter}
          setSorting={setSorting}
          totalFetched={totalFetched}
          totalDBRowCount={totalDBRowCount}
          columnFilters={columnFilters}
          globalFilter={globalFilter}
          isLoading={isLoading}
          isFetching={isFetching}
          sorting={sorting}
          rowVirtualizerInstanceRef={rowVirtualizerInstanceRef}
        />
        <div className="table-container-bottom"></div>
      </div>
    </div>
  );
};

export default Users;
