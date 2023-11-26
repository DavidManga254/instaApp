import { Navigator } from './src/navigator/navigator';
import { appWrapper } from './src/components/appWrapper/appWrapper';

export default function App() {
    const AppWrapper = appWrapper(Navigator);
    return <AppWrapper />;
}
