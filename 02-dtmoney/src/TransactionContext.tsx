import { createContext, ReactNode, useEffect, useState } from "react";
import api from "./services/api";

export interface ITransaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<ITransaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
