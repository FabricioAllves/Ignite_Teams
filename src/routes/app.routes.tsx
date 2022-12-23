import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '@pages/Groups';
import { Players } from '@pages/Players';
import { NewGroup } from '@pages/NewGroup';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='groups' component={Groups}/>
      <Screen name='new' component={NewGroup}/>
      <Screen name='players' component={Players}/>
    </Navigator>
  )
}