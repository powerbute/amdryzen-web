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
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const price = 89990;
  function numberWithSpaces(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return (
    <main className='bg-black text-white flex flex-col items-center md:items-start h-full min-h-screen'>
      <div className='flex md:justify-between md:px-48 py-8 md:w-full items-center'>
        <div className='cursor-pointer' onClick={() => window.open("/", "_self")}><img src='amd-header-logo.png' width={90} /></div>
        <div onClick={() => window.open("/", "_self")} className='hidden md:block bg-stone-950 hover:bg-stone-900 cursor-pointer select-none rounded-2xl p-4'>На главную</div>
      </div>
      <div className='px-4 md:px-48 py-12 flex flex-col lg:flex-row gap-8'>
        <div className='flex justify-center lg:justify-start'>
          <img src='ryzen9.webp' className='rounded-2xl hidden md:block' />
          <img src='ryzen9.webp' className='rounded-2xl block md:hidden' width={256} />
        </div>
        <div className='flex flex-col gap-4 justify-center md:justify-start'>
          <div className='text-2xl font-bold'>AMD Ryzen 7 9700X</div>
          <div className='text-lg'>AM5, 8 x 3.8 ГГц, L2 - 8 МБ, L3 - 32 МБ, 2 х DDR5-5600 МГц, AMD Radeon Graphics, TDP 65 Вт</div>
          <div className='w-full flex gap-6 items-center justify-center md:justify-end'>
            <div className='text-xl font-bold'>{numberWithSpaces(price)}₽</div>
            <div onClick={() => window.open("/pay?price=" + price + "&item=9700x", "_self")} className='bg-green-700 hover:bg-green-600 cursor-pointer select-none rounded-2xl px-12 py-4 w-fit'>КУПИТЬ</div>
          </div>
        </div>
      </div>
      <div className='px-4 md:px-48 py-12 flex flex-col gap-4'>
        <div className='text-xl md:text-2xl font-bold'>Технические характеристики</div>
        <div className='flex flex-col md:w-2/3'>
          <div className='grid grid-cols-2 gap-4 bg-stone-800 rounded-t-md'>
            <div className='bg-stone-900 rounded-tl-md p-2'>Технология AMD PRO</div>
            <div className='p-2'>Отсутствует</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Ядра</div>
            <div className='p-2'>8</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Потоков</div>
            <div className='p-2'>16</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Кэш L1</div>
            <div className='p-2'>640КБ</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Кэш L2</div>
            <div className='p-2'>8МБ</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Кэш L3</div>
            <div className='p-2'>32МБ</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Техпроцесс</div>
            <div className='p-2'>TSMC 4nm FinFET</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Базовая частота</div>
            <div className='p-2'>3.8 ГГц</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Максимальная частота в разгоне</div>
            <div className='p-2'>5.5 ГГц</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Тип памяти</div>
            <div className='p-2'>DDR5</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Максимальный объем RAM</div>
            <div className='p-2'>192 ГБ</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>TDP</div>
            <div className='p-2'>65 Вт</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Максимальная температура процессора</div>
            <div className='p-2'>95 °C</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Графическое ядро</div>
            <div className='p-2'>AMD Radeon Graphics</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800'>
            <div className='bg-stone-900 p-2'>Контроллер PCIe</div>
            <div className='p-2'>5.0</div>
          </div>
          <div className='grid grid-cols-2 gap-4 bg-stone-800 rounded-b-md'>
            <div className='bg-stone-900 rounded-bl-md p-2'>Число линий PCIe</div>
            <div className='p-2'>24шт</div>
          </div>
        </div>
      </div>
    </main>
  );
}
