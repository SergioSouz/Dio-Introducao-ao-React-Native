import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGit = '#010409';
const colorFontGit = '#C9D1D9';
const colorDarkFontGit = '#4F565E';

const imageProfileGit =
  'https://avatars.githubusercontent.com/u/92237773?s=400&u=451efb1bd1b20283f08dd2b3574db4a114f77000&v=4';
const urlToMyGithub = 'https://github.com/SergioSouz';

const App = () => {
  const hanbleClickGoGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    console.log('verificado link ');
    if (res) {
      console.log(' link aprovodo ');
      await Linking.openURL(urlToMyGithub);
      console.log(' abrindo o link ');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGit} barStyle={'light-content'} />
      <View style={style.content}>
        <Image
          accessibilityLabel="rosto do sergio"
          style={style.avatar}
          source={{uri: imageProfileGit}}
        />

        <View style={style.contentUser}>
          <Text accessibilityLabel="Nome sergio" style={style.title}>
            Sergio
          </Text>
          <Text
            accessibilityLabel="nome de usuario sergioSouz"
            style={style.subtitle}
          >
            SergioSouz
          </Text>
          <Text
            accessibilityLabel="biografia de sergio Oi esse sou eu, passa no Linkedin e manda um olá"
            style={style.bio}
          >
            Oi esse sou eu, passa no Linkedin e manda um olá
          </Text>
        </View>
        <Pressable onPress={hanbleClickGoGithub}>
          <View style={style.button}>
            <Text style={style.textButton}>Open in GitHub</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGit,
    flex: 1,
  },

  content: {
    alignItems: 'center',
    marginTop: 30,
    padding: 20,
  },

  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 10,
  },

  contentUser: {
    alignItems: 'flex-start',
  },

  title: {
    color: colorFontGit,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 1,
  },

  subtitle: {
    color: colorDarkFontGit,
    fontSize: 18,
    marginBottom: 10,
  },

  bio: {
    color: colorFontGit,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorDarkFontGit,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },

  textButton: {
    fontWeight: 'bold',
    color: colorFontGit,
  },
});
