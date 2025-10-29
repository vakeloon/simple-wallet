import type { Transaction } from '../types'
import TransactionItem from './TransactionItem'

export default function TransactionsList({
                                             transactions,
                                             onSelect
                                         }: {
    transactions: Transaction[]
    onSelect: (t: Transaction) => void
}) {
    return (
        <section>
            <h2 className="transactions-title">Latest Transactions</h2>
            <div className="tx-list">
                {transactions.map((tx) => (
                    <TransactionItem key={tx.id} tx={tx} onClick={() => onSelect(tx)} />
                ))}
            </div>
        </section>
    )
}
