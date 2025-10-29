export type Transaction = {
    id: string
    type: 'Payment' | 'Credit'
    amount: number
    transaction_name: string
    transaction_description: string
    date: string
    authorized_user: string,
    pending: boolean,
    icon: string
}


