import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
export function appWrapper(WrappedComponent: any) {
    return function appWrapperComponent(props: any) {
        const queryClient = new QueryClient();
        return (
            <QueryClientProvider client={queryClient}>
                <SafeAreaView>
                    <WrappedComponent />
                </SafeAreaView>
            </QueryClientProvider>
        );
    };
}
