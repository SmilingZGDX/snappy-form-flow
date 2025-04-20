
import { createContext, useContext, useState, ReactNode } from 'react';

export interface Customer {
  id: string;
  name: string;
  email: string;
  document: string;
  status: 'Complete' | 'Pending';
  date: string;
}

interface CustomerContextType {
  customers: Customer[];
  addCustomer: (customer: Omit<Customer, 'id' | 'date'>) => void;
}

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export function CustomerProvider({ children }: { children: ReactNode }) {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const addCustomer = (customer: Omit<Customer, 'id' | 'date'>) => {
    const newCustomer: Customer = {
      ...customer,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };
    setCustomers(prev => [newCustomer, ...prev]);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const context = useContext(CustomerContext);
  if (context === undefined) {
    throw new Error('useCustomer must be used within a CustomerProvider');
  }
  return context;
}
