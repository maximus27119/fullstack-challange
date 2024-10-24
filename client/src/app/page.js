'use client'
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import OrdersTable from '@/app/components/OrdersTable';
import BasicModal from '@/app/components/BasicModal';
import OrderModalForm from '@/app/components/OrderModalForm';

export default function Home() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
    const data = await res.json();
    setOrders(data.orders);
  }

  const addOrder = async (newOrder) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    });
    getOrders();
  };

  useEffect(() => {
    getOrders();
  }, []);


  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_container}>
        <div className={styles.modal_container}>
          <BasicModal buttonText='Add Order'>
            <OrderModalForm onAddOrder={addOrder} />
          </BasicModal>
        </div>
        <OrdersTable orders={orders}/>
      </div>
    </div>
  );
}
