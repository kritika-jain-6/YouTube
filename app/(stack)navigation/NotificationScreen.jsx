import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; 
import notificationsData from "../dummy/videos.json";

const NotificationItem = ({ notification }) => {
  return (
    <View style={styles.notificationItem} testID={`notification-item-${notification.id}`}>
      <Image source={{ uri: notification.thumbnail }} style={styles.image} />
      <View style={styles.notificationContent}>
        <Text style={styles.user}>{notification.userName}</Text>
        <Text style={styles.message}>{notification.title}</Text>
        <Text style={styles.time}>{notification.createdTime}</Text>
      </View>
    </View>
  );
};

const NotificationsScreen = () => {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={styles.backButton} 
          testID="back-button"
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      <FlatList
  data={notificationsData || []} 
  keyExtractor={(item, index) => (item?.id ? item.id.toString() : index.toString())} // Fallback to index if id is missing
  renderItem={({ item }) => <NotificationItem notification={item} />}
/>

    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  notificationItem: {
    flexDirection: "row",
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  user: {
    fontWeight: "bold",
  },
  message: {
    color: "#555",
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
});
