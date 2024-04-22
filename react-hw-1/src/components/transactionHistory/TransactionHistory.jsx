/* eslint-disable react/prop-types */
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.tableHead}>
                <th className={css.tableHeadText}>Type</th>
                <th className={css.tableHeadText}>Amount</th>
                <th className={css.tableHeadText}>Currency</th>
            </thead>
            <tbody className={css.tableBody}>
                {items.map((item) => (
                    <tr className={css.bodyRow} key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}