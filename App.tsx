import { Navigator } from './src/navigator/navigator';
import { appWrapper } from './src/components/appWrapper/appWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
    const AppWrapper = appWrapper(Navigator);
    return <AppWrapper />;
}
