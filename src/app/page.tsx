'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/amd-header-logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [tab, setTab] = React.useState(0);
  return (
    <main className='bg-black text-white h-full flex flex-col'>
      <div className='flex justify-center md:justify-between md:px-48 py-8 items-center'>
        <div><img src='amd-header-logo.png' width={90} /></div>
        <div onClick={() => window.open("/shop", "_self")} className='hidden md:block bg-stone-950 hover:bg-stone-900 cursor-pointer select-none rounded-2xl p-4'>Магазин</div>
      </div>
      <div className='flex md:px-48 py-16 flex-col items-center md:items-start gap-4 bghome'>
        <div className='text-3xl font-bold w-2/3 text-center'>Процессоры Ryzen для персональных компьютеров</div>
        <div className='text-lg font-semibold w-2/3 text-center'>Для невероятных игр, профессиональных задач и волшебных возможностей ИИ</div>
        <div className='grid md:grid-cols-2 w-2/3 items-center gap-4'>
          <div onClick={() => {
            window.open("/shop", "_self")
          }} className='bg-stone-950 text-center hover:bg-stone-900 cursor-pointer select-none rounded-2xl p-4'>Заказать</div>
          <div onClick={() => {
            setTab(0)
            window.open("#shop", "_self")
          }} className='bg-stone-950 text-center hover:bg-stone-900 cursor-pointer select-none rounded-2xl p-4'>Последняя линейка</div>
        </div>
      </div>
      <div className='flex flex-col py-16 md:px-48 gap-4 items-center'>
        <div className='text-xl md:text-4xl text-center font-bold md:w-1/2'>Надежный процессор<br />для сложных задач<br />с поддержкой ИИ</div>
        <div className='text-lg md:text-xl font-semibold md:font-bold text-center md:w-1/2'>Представляем новые процессоры AMD Ryzen серии 9000 для настольных ПК — самые передовые и мощные в мире решения для энтузиастов.</div>
        <div className=''><img src='proccessor.avif' width={400} /></div>
      </div>
      <div className='flex flex-col py-16 md:px-48 gap-4 items-center'>
        <div className='text-xl md:text-4xl text-center font-bold md:w-1/2'>Играйте в игры без видеокарты</div>
        <div className=''><img src='gamer.avif' width={400} /></div>
        <div className='text-lg md:text-xl font-semibold md:font-bold text-center md:w-1/2'>Новейшие процессоры AMD Ryzen G-Series оснащены лучшей в своем классе встроенной графикой, поэтому вы можете играть практически в любую игру для ПК в высоком разрешении без дополнительных расходов на видеокарту</div>
      </div>
      <div className='flex flex-col py-16 md:px-48 gap-4 items-center'>
        <div className='text-xl md:text-4xl text-center font-bold md:w-1/2'>Производительность профессионального уровня</div>
        <div className=''><img src='3d.avif' width={400} /></div>
        <div className='text-lg md:text-xl font-semibold md:font-bold text-center md:w-1/2'>Новейшие процессоры AMD Ryzen хорошо работают не только в играх, но и профессиональных задачах: будь то Office или Blender. Процессор поддерживает все новейшие технологии: PCIe 5.0, Wi-Fi 6E, AMD EXPO, до 32 потоков обработки</div>
      </div>
      <div className='flex flex-col py-16 md:px-48 gap-4 items-center'>
        <div className='text-xl md:text-4xl text-center font-bold md:w-1/2'>Новый сокет AM5 хватит на годы вперед</div>
        <div className=''><img src='am5.avif' width={400} /></div>
        <div className='text-lg md:text-xl font-semibold md:font-bold text-center md:w-1/2'>Покупая ПК на платформе AMD, вы имеете возможность обновлять его комплектующие еще долгие коды без обновления материнской платы</div>
      </div>
      <div id='shop' className='flex flex-col items-center md:items-start py-8 md:px-48 gap-4'>
        <div className='text-2xl font-semibold'>Технические характеристики</div>
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
