import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="profile"
        options={{ title: "Profile" }}
      />

      <Stack.Screen
        name="course-details"
        options={{ title: "Course Details" }}
      />

      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}