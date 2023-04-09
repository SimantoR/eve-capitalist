import Image from 'next/image';
import ItemView, { ItemViewProps } from './ItemView';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const contracts = {
    production: [
      { item: { id: 33470, name: 'Stratios', volume: '101,000' }, quantity: 5, created: 'Jan 23, 2023', due: 'Apr 14, 2023', payout: '1.24B', status: 'completed' },
      { item: { id: 33468, name: 'Astero', volume: '16,500' }, quantity: 12, created: 'Jan 23, 2023', due: 'Apr 14, 2023', payout: '324M' },
      { item: { id: 28268, name: '\'Augmented\' Berserker', volume: '25' }, quantity: 108, created: 'Apr 23, 2023', due: 'APR 14', payout: '2.4M' },
    ] as ItemViewProps[],
    mining: [
      { item: { id: 38, name: 'Nocxium', volume: '0.01' }, quantity: 20000, created: 'Jan 23, 2023', due: 'Apr 14, 2023', payout: '200K', status: 'active' },
      { item: { id: 34, name: 'Tritanium', volume: '0.01' }, quantity: 20000, created: 'Jan 23, 2023', due: 'Apr 14, 2023', payout: '120K' },
    ] as ItemViewProps[],
  }

  return (
    <main className="dark:bg-slate-800">
      <div className='container py-4 space-y-8 lg:space-y-16'>
        <div className='space-y-4'>
          <div className='flex flex-row'>
            <h2 className='w-full border-b dark:border-gray-600 text-2xl tracking-wide font-semibold dark:text-gray-500'>Production Contracts</h2>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            {contracts.production.map((p) => (
              <div key={p.item.id} className='w-full h-full aspect-[16/9]'>
                <ItemView {...p} />
              </div>
            ))}
          </div>
        </div>
        <div className='space-y-4'>
          <h2 className='w-full border-b dark:border-gray-600 text-2xl tracking-wide font-semibold dark:text-gray-500'>Mining Contracts</h2>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            {contracts.mining.map((p) => (
              <div key={p.item.id} className='w-full h-full'>
                <ItemView {...p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
