import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function TabOneScreen() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCategories() {
    try {
      const response = await fetch(
        "http://192.168.1.18:1406/api/providerCategory/0001"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories)
  
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text>{categories[0].name}</Text>
    </View>
  );
}
