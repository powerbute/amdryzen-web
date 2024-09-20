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
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
import { FaRegCreditCard, FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";

export default function HomePage() {
  const searchParams = useSearchParams();
  const price = searchParams.get("price")
  const item = searchParams.get("item")
  const [paymentMethod, setPaymentMethod] = React.useState(1);
  const [cardNumber, setCardNumber] = React.useState<any>("")
  const [cardExpiry, setCardExpiry] = React.useState<any>("")
  const [cardCVC, setCardCVC] = React.useState<any>("")
  const [step, setStep] = React.useState(0)

  function numberWithSpaces(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function runTransaction() {
    setStep(1);
    setTimeout(() => setStep(2), 2000)
  }

  return (
    <main className='bg-black text-white flex items-center flex-col h-full min-h-screen'>
      <div className='flex md:justify-between md:px-48 py-8 md:w-full items-center'>
        <div className='cursor-pointer' onClick={() => window.open("/", "_self")}><img src='amd-header-logo.png' width={90} /></div>
        <div onClick={() => window.open("/", "_self")} className='hidden md:block bg-stone-950 hover:bg-stone-900 cursor-pointer select-none rounded-2xl p-4'>На главную</div>
      </div>
      <div className='bg-stone-950 w-full lg:w-1/2 px-4 lg:px-20 py-12 rounded-2xl flex flex-col gap-4 md:gap-8'>
        <div className='flex justify-between items-end'>
          <div className='text-lg md:text-3xl font-bold'>Оплата</div>
          <div className='text-lg md:text-2xl font-bold'>{numberWithSpaces(price)}₽</div>
        </div>
        {step == 0 &&
          <>
            <div className='text-lg font-semibold'>1x {item}</div>
            <div className='flex flex-col gap-2'>
              <input className='rounded-md bg-stone-950 border-stone-900' placeholder='Адрес доставки' />
            </div>
            <div className='grid 2xl:grid-cols-3 gap-2 items-center'>
              <div className={"flex gap-4 justify-center font-semibold cursor-pointer p-4 rounded-2xl select-none items-center border border-stone-900 hover:border-stone-800 " + (paymentMethod == 1 ? "bg-stone-900 hover:bg-stone-800" : "")} onClick={() => setPaymentMethod(1)}>
                <FaRegCreditCard size={30} />
                Картой
              </div>
              <div className={"flex gap-4 justify-center font-semibold cursor-pointer p-4 rounded-2xl select-none items-center border border-stone-900 hover:border-stone-800 " + (paymentMethod == 0 ? "bg-stone-900 hover:bg-stone-800" : "")} onClick={() => setPaymentMethod(0)}>
                <FaRegMoneyBillAlt size={30} />
                При получении
              </div>
            </div>
            {(paymentMethod == 0 && price != null && parseInt(price) > 50000) &&
              <div className='flex p-2 rounded-md border border-red-500 bg-red-500 bg-opacity-20 justify-center'>Заказ свыше 50 000 рублей нельзя оформить без предварительной оплаты</div>
            }
            {paymentMethod == 1 &&
              <div className='flex flex-col gap-2'>
                <input value={cardNumber} onChange={(e) => {
                  setCardNumber(e.target.value.replace(/(\d{4})(?!\s|$)/gm, `$1 `)
                    .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/))
                }} maxLength={19} placeholder='Номер карты' className='rounded-md bg-stone-950 border-stone-900' />
                <div className='grid grid-cols-2 gap-2 items-center'>
                  <input value={cardExpiry} onChange={(e) => {
                    setCardExpiry(e.target.value.replace(/\//g, "").substring(0, 2) +
                      (e.target.value.length > 2 ? '/' : '') +
                      e.target.value.replace(/\//g, "").substring(2, 4))
                  }} placeholder='00/00' className='rounded-md bg-stone-950 border-stone-900' />
                  <input maxLength={3} pattern="[0-9]*" value={cardCVC} inputMode='numeric' onChange={(e) => {
                    setCardCVC(e.target.value)
                  }} placeholder='CVC' className='rounded-md bg-stone-950 border-stone-900' />
                </div>
              </div>
            }
            {paymentMethod == 1 &&
              <div onClick={() => runTransaction()} className='flex bg-green-500 hover:bg-green-600 select-none cursor-pointer justify-center text-lg font-bold p-4 rounded-2xl'>Оплатить</div>
            }
            {(paymentMethod == 0 && !(paymentMethod == 0 && price != null && parseInt(price) > 50000)) &&
              <div onClick={() => runTransaction()} className='flex bg-green-500 hover:bg-green-600 select-none cursor-pointer justify-center text-lg font-bold p-4 rounded-2xl'>Оплатить</div>
            }
          </>
        }
        {step == 1 &&
          <div className='h-72 flex justify-center items-center'>
            <div className='flex justify-center'>
              <AiOutlineLoading className='animate-spin' size={64} />
            </div>
          </div>
        }
        {step == 2 &&
          <div className='h-72 flex justify-center items-center'>
            <div className='flex flex-col gap-4 items-center'>
              <FaCircleCheck size={64} className='text-green-500' />
              <div className='text-4xl font-bold'>Успешно</div>
            </div>
          </div>
        }
      </div>
    </main>
  );
}
