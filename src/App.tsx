import { useState } from 'react'
import transactionsData from './data/transactions.json'
import type {Transaction} from './types'
import CardBalance from './components/CardBalance'
import TransactionsList from './components/TransactionsList'
import TransactionDetail from './components/TransactionDetail'

export default function App() {
    const [selected, setSelected] = useState<Transaction | null>(null)

    return (
        <div className="app">
            {/*<header className="header">Wallet</header>*/}
            <main className="container">
                {!selected ? (
                    <>
                        <CardBalance transactions={transactionsData as Transaction[]} />
                        <TransactionsList
                            transactions={transactionsData as Transaction[]}
                            onSelect={(t) => setSelected(t)}
                        />
                    </>
                ) : (
                    <TransactionDetail tx={selected} onBack={() => setSelected(null)} />
                )}
            </main>
        </div>
    )
}
