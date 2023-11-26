import { Navigator } from './src/navigator/navigator';
import { queryClientWrapper } from './src/components/queryClient/queryClient';

export default function App() {
    const QueryClientWrapper = queryClientWrapper(Navigator);
    return <QueryClientWrapper />;
}
