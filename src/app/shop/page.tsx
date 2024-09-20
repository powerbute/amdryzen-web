'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [tab, setTab] = React.useState(0);
  return (
    <main className='bg-black text-white h-full flex items-center md:items-start flex-col'>
      <div className='flex md:justify-between md:px-48 py-8 md:w-full items-center'>
        <div className='cursor-pointer' onClick={() => window.open("/", "_self")}><img src='amd-header-logo.png' width={90} /></div>
        <div onClick={() => window.open("/", "_self")} className='hidden md:block bg-stone-950 hover:bg-stone-900 cursor-pointer select-none rounded-2xl p-4'>На главную</div>
      </div>
      <div id='shop' className='flex flex-col items-center md:items-start py-8 md:px-48 gap-4'>
        <div className='text-2xl font-semibold'>Магазин</div>
        <div className='flex gap-2 flex-wrap items-center'>
          <div className='bg-stone-950 hover:bg-stone-900 cursor-pointer select-none rounded-2xl p-4' onClick={() => setTab(0)}>Ryzen 9000</div>
          <div className='bg-stone-950 hover:bg-stone-900 cursor-pointer select-none rounded-2xl p-4' onClick={() => setTab(1)}>Ryzen 8000</div>
        </div>
        {tab == 1 &&
          <div className='border flex justify-center w-full rounded-md p-2 border-yellow-500 bg-yellow-500 bg-opacity-20 font-semibold text-center'>Будьте внимательны, используется старая архитектура Zen4</div>
        }
        {tab == 0 &&
          <div className='flex flex-wrap justify-center gap-4'>
            <div onClick={() => window.open("/ryzen9-9950x", "_self")} className='bg-stone-950 gap-4 hover:bg-stone-900 p-6 rounded-2xl cursor-pointer flex items-center flex-col select-none'>
              <img src='ryzen9.webp' width={250} className='rounded-xl' />
              <div className='text-lg font-semibold'>Ryzen 9 9950X</div>
            </div>
            <div onClick={() => window.open("/ryzen9-9900x", "_self")} className='bg-stone-950 gap-4 hover:bg-stone-900 p-6 rounded-2xl cursor-pointer flex items-center flex-col select-none'>
              <img src='ryzen9.webp' width={250} className='rounded-xl' />
              <div className='text-lg font-semibold'>Ryzen 9 9900X</div>
            </div>
            <div onClick={() => window.open("/ryzen7-9700x", "_self")} className='bg-stone-950 gap-4 hover:bg-stone-900 p-6 rounded-2xl cursor-pointer flex items-center flex-col select-none'>
              <img src='ryzen9.webp' width={250} className='rounded-xl' />
              <div className='text-lg font-semibold'>Ryzen 7 9700X</div>
            </div>
            <div onClick={() => window.open("/ryzen5-9600x", "_self")} className='bg-stone-950 gap-4 hover:bg-stone-900 p-6 rounded-2xl cursor-pointer flex items-center flex-col select-none'>
              <img src='ryzen9.webp' width={250} className='rounded-xl' />
              <div className='text-lg font-semibold'>Ryzen 5 9600X</div>
            </div>
          </div>
        }
        {tab == 1 &&
          <div className='flex flex-wrap justify-center gap-4'>
            <div onClick={() => window.open("/ryzen7-8700g", "_self")} className='bg-stone-950 gap-4 hover:bg-stone-900 p-6 rounded-2xl cursor-pointer flex items-center flex-col select-none'>
              <img src='ryzen8.webp' width={250} className='rounded-xl' />
              <div className='text-lg font-semibold'>Ryzen 7 8700G</div>
            </div>
            <div onClick={() => window.open("/ryzen7-8700f", "_self")} className='bg-stone-950 gap-4 hover:bg-stone-900 p-6 rounded-2xl cursor-pointer flex items-center flex-col select-none'>
              <img src='ryzen8.webp' width={250} className='rounded-xl' />
              <div className='text-lg font-semibold'>Ryzen 7 8700F</div>
            </div>
            <div onClick={() => window.open("/ryzen5-8600g", "_self")} className='bg-stone-950 gap-4 hover:bg-stone-900 p-6 rounded-2xl cursor-pointer flex items-center flex-col select-none'>
              <img src='ryzen8.webp' width={250} className='rounded-xl' />
              <div className='text-lg font-semibold'>Ryzen 5 8600G</div>
            </div>
            <div onClick={() => window.open("/ryzen5-8500g", "_self")} className='bg-stone-950 gap-4 hover:bg-stone-900 p-6 rounded-2xl cursor-pointer flex items-center flex-col select-none'>
              <img src='ryzen8.webp' width={250} className='rounded-xl' />
              <div className='text-lg font-semibold'>Ryzen 5 8500G</div>
            </div>
            <div onClick={() => window.open("/ryzen5-8400f", "_self")} className='bg-stone-950 gap-4 hover:bg-stone-900 p-6 rounded-2xl cursor-pointer flex items-center flex-col select-none'>
              <img src='ryzen8.webp' width={250} className='rounded-xl' />
              <div className='text-lg font-semibold'>Ryzen 5 8400F</div>
            </div>
            <div onClick={() => window.open("/ryzen3-8300g", "_self")} className='bg-stone-950 gap-4 hover:bg-stone-900 p-6 rounded-2xl cursor-pointer flex items-center flex-col select-none'>
              <img src='ryzen8.webp' width={250} className='rounded-xl' />
              <div className='text-lg font-semibold'>Ryzen 3 8300G</div>
            </div>
          </div>
        }
      </div>
    </main>
  );
}
