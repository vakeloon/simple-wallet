import type { Transaction } from '../types'

export default function TransactionDetail({ tx, onBack }: { tx: Transaction; onBack: () => void }) {
    const txDate = new Date(tx.date);



    const sign = tx.type === 'Payment' ? '+' : ''

    return (
        <div className="details">
            <button className="back-btn" onClick={onBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
            </button>

            <div className="detail-title">{sign}${tx.amount}</div>
            <div className="detail-user">{tx.authorized_user || "Vlad"}</div>
            <div className="detail-date">{txDate.toLocaleDateString()}</div>

            <div className="card detail">
                <div className="detail-row">Status: Approved</div>
                <div className="detail-desc">{tx.transaction_description}</div>
                <hr className="line"/>
                <div className="detail-row">
                    <span>Total</span>
                    <span>{sign}${tx.amount}</span>
                </div>
            </div>
        </div>
    )
}
