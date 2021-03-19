import { createContext, ReactNode, useEffect, useState } from "react";
import api from "./services/api";

type TransactionTypes = "deposit" | "withdraw";

export interface ITransaction {
  id: number;
  title: string;
  type: TransactionTypes;
  category: string;
  amount: number;
  createdAt: string;
}

type ITransactionInput = Pick<
  ITransaction,
  "title" | "type" | "amount" | "category"
>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: ITransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: ITransactionInput) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
