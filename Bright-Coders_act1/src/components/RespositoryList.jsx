import { FlatList, StyleSheet, Text, View } from 'react-native';
import repositories from '../data/food.js'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  }
})

const RepositoryList = () => {
  return (
    <View>
      {repositories.map(repo  => (
        <View key={repo.id}>
          <Text>ID: {repo.id}</Text>
          <Text>Name: {repo.name}</Text>
          <Text>Type: {repo.type}</Text>
          <Text>Color: {repo.color}</Text>
          <Text>Calories: {repo.calories}</Text>
        </View>
      ))}
    </View>
  )
}

export default RepositoryList
