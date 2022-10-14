/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Local Components
import HomeScreen from "./screens/HomeScreen";

/**
 * App is the root component of the application
 */
export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
