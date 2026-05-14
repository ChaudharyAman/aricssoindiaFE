const columns = [
  {
    key: 'control',
    title: 'Control',
    boxClass: 'bg-brand-control border-green-200',
    titleClass: 'text-green-800',
    itemClass: 'text-green-700',
  },
  {
    key: 'protection',
    title: 'Protection',
    boxClass: 'bg-brand-protect border-red-200',
    titleClass: 'text-red-800',
    itemClass: 'text-red-700',
  },
  {
    key: 'data',
    title: 'Real-Time Data',
    boxClass: 'bg-brand-data border-amber-200',
    titleClass: 'text-amber-800',
    itemClass: 'text-amber-700',
  },
]

export default function CPDBox({ cpd }) {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      {columns.map(({ key, title, boxClass, titleClass, itemClass }) => (
        <div key={key} className={`rounded-xl border p-5 ${boxClass}`}>
          <h4 className={`mb-3 font-heading text-lg font-bold ${titleClass}`}>
            {title}
          </h4>
          <div className="space-y-2">
            {cpd[key].map((item) => (
              <p key={item} className={`text-sm leading-7 ${itemClass}`}>
                • {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
