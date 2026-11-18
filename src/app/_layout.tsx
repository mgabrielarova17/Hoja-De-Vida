import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#A855F7',
        tabBarInactiveTintColor: '#A1A1AA',

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E9D5FF',
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      {/* INICIO */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              color={String(color ?? '#A855F7')}
              size={size}
            />
          ),
        }}
      />

      {/* ESTUDIOS */}
      <Tabs.Screen
        name="estudios"
        options={{
          title: 'Estudios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="school"
              color={String(color ?? '#A855F7')}
              size={size}
            />
          ),
        }}
      />

      {/* EXPERIENCIA */}
      <Tabs.Screen
        name="experiencia"
        options={{
          title: 'Experiencia',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="briefcase"
              color={String(color ?? '#A855F7')}
              size={size}
            />
          ),
        }}
      />

      {/* HOBBIES */}
      <Tabs.Screen
        name="hobbies"
        options={{
          title: 'Hobbies',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="heart"
              color={String(color ?? '#A855F7')}
              size={size}
            />
          ),
        }}
      />

      {/* OCULTAR EXPLORAR */}
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
