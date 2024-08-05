# Learning React Native in 3-4 Days

## Overview

This guide aims to help you get up to speed with React Native in 3-4 days. You'll learn how to create a basic app with essential features such as splash screen, welcome screen, authentication, navigation, data handling, and more. Each section includes a brief explanation and relevant code snippets.

## Day 1: Getting Started and Basic Components

### Setting Up the Environment

1. **Install Node.js**: [Download and install](https://nodejs.org/).
2. **Install Expo CLI**: 
    ```bash
    npm install -g expo-cli
    ```
3. **Create a New Project**:
    ```bash
    expo init MyReactNativeApp
    cd MyReactNativeApp
    expo start
    ```

### Splash Screen

1. **Install Dependencies**:
    ```bash
    expo install expo-splash-screen
    ```
2. **Configure Splash Screen**:
    ```js
    import * as SplashScreen from 'expo-splash-screen';

    SplashScreen.preventAutoHideAsync();
    // Load resources, then call SplashScreen.hideAsync();
    ```

### Welcome Screen

1. **Create a Welcome Screen Component**:
    ```js
    const WelcomeScreen = () => (
      <View style={styles.container}>
        <Text>Welcome to My App!</Text>
      </View>
    );
    ```

## Day 2: Navigation and Authentication

### Bottom Navigation

1. **Install React Navigation**:
    ```bash
    npm install @react-navigation/native
    npm install @react-navigation/bottom-tabs
    npm install react-native-screens react-native-safe-area-context
    ```
2. **Set Up Bottom Tabs**:
    ```js
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

    const Tab = createBottomTabNavigator();

    function MyTabs() {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      );
    }
    ```

### Side Navigation Drawer

1. **Install Drawer Navigation**:
    ```bash
    npm install @react-navigation/drawer
    ```
2. **Set Up Drawer**:
    ```js
    import { createDrawerNavigator } from '@react-navigation/drawer';

    const Drawer = createDrawerNavigator();

    function MyDrawer() {
      return (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
      );
    }
    ```

### Login / SignIn

1. **Create Login Screen**:
    ```js
    const LoginScreen = ({ navigation }) => {
      return (
        <View style={styles.container}>
          <TextInput placeholder="Email" />
          <TextInput placeholder="Password" secureTextEntry />
          <Button title="Login" onPress={() => navigation.navigate('Home')} />
        </View>
      );
    };
    ```

## Day 3: Data Handling and Advanced Components

### Image Slider

1. **Install Carousel Package**:
    ```bash
    npm install react-native-snap-carousel
    ```
2. **Set Up Image Slider**:
    ```js
    import Carousel from 'react-native-snap-carousel';

    const MyCarousel = () => {
      return (
        <Carousel
          data={data}
          renderItem={({ item }) => <Image source={{ uri: item.url }} />}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      );
    };
    ```

### List Data and Selection

1. **Create List Component**:
    ```js
    const MyList = () => {
      return (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
      );
    };
    ```
2. **Handle Selection**:
    ```js
    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (id) => {
      setSelectedId(id);
    };
    ```

### Navigation Between Screens

1. **Set Up Stack Navigator**:
    ```bash
    npm install @react-navigation/stack
    ```
2. **Define Navigation Structure**:
    ```js
    import { createStackNavigator } from '@react-navigation/stack';

    const Stack = createStackNavigator();

    function MyStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      );
    }
    ```

## Day 4: Storage, APIs, and Final Touches

### Local Database (Async Storage)

1. **Install Async Storage**:
    ```bash
    npm install @react-native-async-storage/async-storage
    ```
2. **Store and Retrieve Data**:
    ```js
    import AsyncStorage from '@react-native-async-storage/async-storage';

    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('@storage_Key', value)
      } catch (e) {
        // saving error
      }
    };

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
          // value previously stored
        }
      } catch(e) {
        // error reading value
      }
    };
    ```

### Social Login

1. **Install Social Login Packages** (Example: Google):
    ```bash
    expo install expo-auth-session
    ```
2. **Configure Social Login**:
    ```js
    import * as Google from 'expo-auth-session/providers/google';

    const [request, response, promptAsync] = Google.useAuthRequest({
      clientId: 'GOOGLE_CLIENT_ID',
    });

    useEffect(() => {
      if (response?.type === 'success') {
        const { authentication } = response;
        // handle authentication
      }
    }, [response]);
    ```

### API Integration

1. **Fetch Data from API**:
    ```js
    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
    ```

### Loader

1. **Create a Loader Component**:
    ```js
    const Loader = () => (
      <ActivityIndicator size="large" color="#0000ff" />
    );
    ```

### Search Bar

1. **Implement Search Functionality**:
    ```js
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <View>
        <TextInput
          placeholder="Search"
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
        />
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    );
    ```

## Conclusion

By following this guide, you should be able to build a basic React Native app with essential features in just 3-4 days. Each section provides a foundational understanding and example code to help you get started quickly. For more advanced topics, refer to the official React Native documentation and community resources.

## Additional Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [Async Storage Documentation](https://react-native-async-storage.github.io/async-storage/docs/usage/)

Feel free to contribute to this guide by opening a pull request or reporting issues on the [GitHub repository](https://github.com/your-repo-link).
