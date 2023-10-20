import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Users from './Users';

const queryClient = new QueryClient();

const QueryProvider = () => (
  <QueryClientProvider client={queryClient}>
    <Users />
  </QueryClientProvider>
);

export default QueryProvider;
