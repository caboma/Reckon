import { useState, useEffect } from 'react';
import BillPanelItem from './BillPanelItem';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import './BillPanelList.scss';

const BillPanelList = (props) => {
	const [bills, setBills] = useState(props.billList);
	const deleteBill = (billId) => {
		axios.post(`/api/bills/delete/${billId}`, { billId }).then((res) => {
			setBills(res.data);
		});
	};

	// useEffect(() => {}, [bills]);

	let list = bills.map((bill) => {
		return (
			<BillPanelItem
				key={bill.id}
				date={bill.due_date}
				name={bill.payee}
				amount_cents={bill.amount_cents}
				id={bill.id}
				onDelete={deleteBill}
			/>
		);
	});
	return (
		<div className="bills">
			<Table responsive="sm" striped hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Due</th>
						<th>Payee</th>
						<th>Amount</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{list}
					<tr>
						<th colSpan="3">TOTAL</th>
						<th colSpan="2">
							{new Intl.NumberFormat('en-US', {
								style: 'currency',
								currency: 'USD',
							}).format(props.totalBills.total / 100)}
						</th>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default BillPanelList;
