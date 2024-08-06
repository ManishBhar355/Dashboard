import React from 'react';
// import './RecentOrders.css'; // Ensure you import your CSS
import WadeImg from '../assets/images/wade.png';
import JaneImg from '../assets/images/jane.png';
import GuyImg from '../assets/images/guy.png';
import KristinImg from '../assets/images/kristin.png';
import CodyImg from '../assets/images/cody.png';
import SavannahImg from '../assets/images/savannah.png';

const RecentOrders = () => {
    const orders = [
        { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', img: WadeImg },
        { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered', img: JaneImg },
        { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$54.88', status: 'Cancelled', img: GuyImg },
        { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending', img: KristinImg },
        { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', img: CodyImg },
        { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', img: SavannahImg },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Delivered':
                return 'success';
            case 'Pending':
                return 'pending';
            case 'Cancelled':
                return 'cancelled';
            default:
                return '';
        }
    };

    return (
        <div className="recent-orders table-responsive">
            <h3>Recent Orders</h3>
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Order No.</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>
                                <img src={order.img} alt={`${order.customer}`} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                                {order.customer}
                            </td>
                            <td>{order.orderNo}</td>
                            <td>{order.amount}</td>
                            <td> <span className={getStatusClass(order.status)}>{order.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentOrders;
