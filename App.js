import Home from "./src/views/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsPage from "./src/views/DetailsPage/DetailsPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
