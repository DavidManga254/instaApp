import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function queryClientWrapper(WrappedComponent: any) {
    return function QueryClientWrapperComponent(props: any) {
        const queryClient = new QueryClient();

        return (
            <QueryClientProvider client={queryClient}>
                <WrappedComponent />
            </QueryClientProvider>
        );
    };
}
