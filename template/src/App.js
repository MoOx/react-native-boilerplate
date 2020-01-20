/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  useWindowDimensions,
} from 'react-native';

import Header from './NewAppScreen/Header';
import LearnMoreLinks from './NewAppScreen/LearnMoreLinks';
import Colors from './NewAppScreen/Colors';
import DebugInstructions from './NewAppScreen/DebugInstructions';
import ReloadInstructions from './NewAppScreen/ReloadInstructions';

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    paddingVertical: 20,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  paginator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginatorDot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    marginHorizontal: 3,
    opacity: 0.25,
  },
  paginatorDotActive: {
    opacity: 1,
  },
});

const pages = [
  <Header />,
  <>
    <Text style={styles.sectionTitle}>Step One</Text>
    <Text style={styles.sectionDescription}>
      Edit <Text style={styles.highlight}>App.js</Text> to change this screen
      and then come back to see your edits.
    </Text>
    <Text style={styles.sectionTitle}>See Your Changes</Text>
    <Text style={styles.sectionDescription}>
      <ReloadInstructions />
    </Text>
    <Text style={styles.sectionTitle}>Debug</Text>
    <Text style={styles.sectionDescription}>
      <DebugInstructions />
    </Text>
  </>,
  <ScrollView stickyHeaderIndices={[0]}>
    <View style={{backgroundColor: Colors.lighter}}>
      <Text style={styles.sectionTitle}>Learn More</Text>
      <Text style={styles.sectionDescription}>
        Read the docs to discover what to do next:
      </Text>
    </View>
    <LearnMoreLinks />
  </ScrollView>,
];

const App /*: () => React$Node*/ = () => {
  const windowDimensions = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleMomentumScrollEnd = React.useCallback(
    event => {
      const x = event.nativeEvent.contentOffset.x;
      const index = Math.round(x / windowDimensions.width);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    },
    [currentIndex, windowDimensions.width],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
            onMomentumScrollEnd={handleMomentumScrollEnd}
            style={styles.scrollView}>
            {pages.map((page, index) => (
              <View
                key={index}
                style={[
                  styles.sectionContainer,
                  {width: windowDimensions.width},
                ]}>
                {page}
              </View>
            ))}
          </ScrollView>
          <View style={styles.paginator}>
            {pages.map((page, index) => (
              <View
                key={index}
                style={[
                  styles.paginatorDot,
                  currentIndex === index && styles.paginatorDotActive,
                ]}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
