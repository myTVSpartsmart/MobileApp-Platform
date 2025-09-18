import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';
// Example dummy credentials
const DUMMY_USER = {
  email: 'testuser@gmail.com',
  password: 'password123',
};
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    setLoading(true);
    try {
      // =====================
      // :small_blue_diamond: DUMMY LOGIN CHECK
      // =====================
      if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
        // Alert.alert("Success", "Logged in successfully with dummy data!");
        console.log('Success');
        navigation.replace('TabNavigator'); // Example redirect
      } else {
        Alert.alert('Error', 'Invalid email or password (dummy check)');
        console.log('Failed');
      }
      // =====================
      // :small_blue_diamond: REAL API LOGIN (uncomment when ready)
      // =====================
      /*
      const response = await fetch("https://your-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Logged in successfully!");
        // Save token, navigate, etc.
        // navigation.replace("HomeScreen");
      } else {
        Alert.alert("Error", data.message || "Login failed");
      }
      */
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      {/* Content wrapper (header + form) */}
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>
            Hi! Welcome back, you've been missed
          </Text>
        </View>
        {/* Form */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {/* Forgot Password */}
          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleSignIn}
            disabled={loading}
          >
            <Text style={styles.signInText}>
              {loading ? 'Signing In...' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.supportText}>
          Get in touch with us if any support.
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('mailto:helpdesk.mobility@tvs.in')}
        >
          <Text style={styles.email}>helpdesk.mobility@tvs.in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center', 
    paddingHorizontal: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 6,
    textAlign: 'center',
  },
  formContainer: {},
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#F7F6F2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  forgotPassword: {
    fontSize: 13,
    color: '#007AFF',
  },
  signInButton: {
    backgroundColor: '#F36F21',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginTop: 30,
    width: '50%',
    alignSelf: 'center',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: 120,
    paddingHorizontal: 24,
  },
  supportText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
