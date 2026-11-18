
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#C4B5FD',

        tabBarStyle: {
          backgroundColor: '#321052',
          borderTopColor: '#7E22CE',
          borderTopWidth: 1,
          height: 72,
          paddingBottom: 9,
          paddingTop: 9,
          elevation: 12,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
          marginTop: 3,
        },

        tabBarItemStyle: {
          borderRadius: 14,
          marginHorizontal: 3,
          marginVertical: 3,
        },
      }}
    >
      {/* INICIO */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={String(color ?? '#C4B5FD')}
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
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'school' : 'school-outline'}
              color={String(color ?? '#C4B5FD')}
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
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'briefcase' : 'briefcase-outline'}
              color={String(color ?? '#C4B5FD')}
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
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'}
              color={String(color ?? '#C4B5FD')}
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
