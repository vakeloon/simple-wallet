import type { Transaction } from '../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faGear } from '@fortawesome/free-solid-svg-icons'

const iconMap = {
    "apple": faApple,
    "house": faHouse,
    "gear": faGear,
}

export default function TransactionItem({ tx, onClick }: { tx: Transaction; onClick: () => void }) {
    const txDate = new Date(tx.date);
    const now = new Date();

    const diffMs = now.getTime() - txDate.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    let dateLabel: string;
    if (diffDays <= 7) {
        dateLabel = txDate.toLocaleDateString('en-US', { weekday: 'long' });
    } else {
        dateLabel = txDate.toLocaleDateString();
    }

    const sign = tx.type === 'Payment' ? '+' : ''

    return (
        <div className="tx-item" onClick={onClick}>
            <div className="tx-left">
                <div className="avatar">
                    <FontAwesomeIcon icon={iconMap[tx.icon as keyof typeof iconMap]} color="white" />
                </div>
                <div>
                    <div className="tx-name">{tx.transaction_name}</div>
                    <div className="tx-meta">
                        <span>{tx.pending && "Pending - "}{tx.transaction_description}</span>
                        <span>{tx.authorized_user && `${tx.authorized_user} - `}{dateLabel}</span>
                    </div>
                </div>
            </div>
            <div className="tx-right">
                <div className="tx-amount">
                    {sign}${tx.amount.toFixed(2)}
                </div>
            </div>

        </div>
    )
}
