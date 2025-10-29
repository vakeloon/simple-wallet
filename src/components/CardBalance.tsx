import type { Transaction } from '../types'

function getSeasonDay(date: Date): number {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 1–12
    const day = date.getDate();

    let seasonStart: Date;

    if (month >= 3 && month <= 5) {
        seasonStart = new Date(year, 2, 1);
    } else if (month >= 6 && month <= 8) {
        seasonStart = new Date(year, 5, 1);
    } else if (month >= 9 && month <= 11) {
        seasonStart = new Date(year, 8, 1);
    } else {
        if (month === 12) {
            seasonStart = new Date(year, 11, 1);
        } else {
            seasonStart = new Date(year - 1, 11, 1);
        }
    }

    const diff = date.getTime() - seasonStart.getTime();

    return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
}

function getSeasonPoints(day: number): number {
    if (day === 1) return 2;
    if (day === 2) return 3;

    let points = 0;

    const pointsArr: number[] = [2, 3];

    for (let i = 3; i <= day; i++) {
        const current = pointsArr[i - 3] + 0.6 * pointsArr[i - 2];
        pointsArr.push(current);
    }

    return pointsArr[day - 1];
}



export default function CardBalance({ transactions }: { transactions: Transaction[] }) {
    const maxLimit = 1500
    const balance = parseFloat((Math.random() * maxLimit).toFixed(2))

    const available = parseFloat((maxLimit - Math.abs(balance)).toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })


    const today = new Date();
    const seasonDay = getSeasonDay(today);
    const todayPoints = getSeasonPoints(seasonDay);


    return (
        <div className="card-block">
            <div className="card-block-left">
                <div className="card">
                    <div className="balance-name">Card Balance</div>
                    <div className="balance-amount">${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    <div className="available">${available} Available</div>
                </div>
                <div className="card daily-points">
                    <div className="daily-points-title">Daily Points</div>
                    <div className="daily-points-count">{todayPoints > 999 ? `${Math.floor(todayPoints/1000)}K` : todayPoints}</div>
                </div>
            </div>
            <div className="card-block-right">
                <div className="card">
                    <div className="no-payment">No Payment Due</div>
                    <div className="no-payment-desc">You've paid your September balance</div>
                </div>
            </div>

        </div>
    )
}
