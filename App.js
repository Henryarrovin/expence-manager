import { StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar';
import MyTextField from './components/MyTextField';
import Button from './components/Button';
import { FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = () => {
    const transaction = { expenses, income };
    setTransactions([...transactions, transaction]);
    setExpenses(0);
    setIncome(0);
  };

  const getTotal = (category) => {
    const total = transactions
      .filter((transaction) => transaction[category])
      .reduce((acc, curr) => acc + curr[category], 0);
    return total.toFixed(2);
  };

  return (
    
    <View style={styles.container}>
      <AppBar title="Expense Manager" />
      <View style={styles.formContainer}>
        <MyTextField
          hintText="Enter Expenses"
          onChangeText={(text) => setExpenses(parseFloat(text))}
        />
        <MyTextField
          hintText="Enter Income"
          onChangeText={(text) => setIncome(parseFloat(text))}
        />
        <Button title="Add Transaction" onPress={handleAddTransaction} />
      </View>
      <View style={styles.transactionsContainer}>
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionText}>
                Expenses: {item.expenses.toFixed(2)} rupees
              </Text>
              <Text style={styles.transactionText}>
                Income: {item.income.toFixed(2)} rupees
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Weekly Summary</Text>
        <Text style={styles.summaryText}>
          Total Expenses: {getTotal('expenses')} rupees
        </Text>
        <Text style={styles.summaryText}>
          Total Income: {getTotal('income')} rupees
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    padding: 20,
  },
  transactionsContainer: {
    flex: 1,
    padding: 20,
  },
  transactionItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 10,
  },
  transactionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  summaryContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});