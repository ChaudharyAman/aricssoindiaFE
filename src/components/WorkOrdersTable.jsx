export default function WorkOrdersTable({ orders }) {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-brand-border bg-white shadow-card">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-brand-body">
          <thead className="bg-brand-teal text-white">
            <tr>
              <th className="px-5 py-4">S.No</th>
              <th className="px-5 py-4">Work Order No.</th>
              <th className="px-5 py-4">Name of Work</th>
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Work Order Date</th>
              <th className="px-5 py-4">Completion Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={`border-t border-brand-border ${
                  index % 2 === 0 ? 'bg-white' : 'bg-brand-bg-soft'
                }`}
              >
                <td className="px-5 py-4">{order.id}</td>
                <td className="px-5 py-4 font-medium text-brand-dark">{order.orderNumber}</td>
                <td className="px-5 py-4">{order.work}</td>
                <td className="px-5 py-4">{order.customer}</td>
                <td className="px-5 py-4">{order.orderDate}</td>
                <td className="px-5 py-4">{order.completion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
