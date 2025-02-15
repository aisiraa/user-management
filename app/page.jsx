import Image from 'next/image';
import UnsubscribeForm from '@/app/components/UnsubscribeForm';
import logo from '@/public/logo.png';

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const email = params?.email || '';

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100'>
      <header className='p-4'>
        <Image src={logo} alt='Siraa Logo' className='w-48' priority />
      </header>
      <main className='flex-1 grid place-items-center px-4 -mt-16'>
        <div className='w-full max-w-md'>
          <h1 className='text-3xl font-bold mb-8 text-center text-gray-800'>
            Unsubscribe from Our <br /> Mailing List
          </h1>
          <UnsubscribeForm email={email} />
        </div>
      </main>
    </div>
  );
}
