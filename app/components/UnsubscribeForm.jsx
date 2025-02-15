'use client';

import { useState } from 'react';
import { Button } from '@/app/components/Button';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { unsubscribeUser } from '@/app/actions';

export default function UnsubscribeForm({ email }) {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const result = await unsubscribeUser(email);
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setError(result.error || 'An unexpected error occurred');
    }
  };

  return (
    <div className='bg-white p-8 rounded-lg shadow-md'>
      {status === 'success' ? (
        <div className='text-center'>
          <CheckCircle2 className='mx-auto h-12 w-12 text-[#0954E5] mb-4' />
          <p className='text-lg font-semibold text-gray-800 mb-2'>
            You've been unsubscribed
          </p>
          <p className='text-gray-600'>
            You will no longer receive emails from us.
          </p>
        </div>
      ) : status === 'error' ? (
        <div className='text-center'>
          <AlertCircle className='mx-auto h-12 w-12 text-red-500 mb-4' />
          <p className='text-lg font-semibold text-gray-800 mb-2'>
            Error unsubscribing
          </p>
          <p className='text-gray-600'>{error}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4'>
          <p className='text-center text-gray-700 mb-4'>
            We hate to see you go! Are you sure you want to unsubscribe from our
            mailing list?
          </p>
          <Button
            type='submit'
            className='w-full bg-[#0954E5] hover:bg-[#0954E5]/90'
            disabled={status === 'loading'}
          >
            {status === 'loading'
              ? 'Processing...'
              : 'Yes, I want to unsubscribe!'}
          </Button>
          <p className='text-xs text-gray-500 mt-2 text-center'>
            <AlertCircle className='inline-block w-4 h-4 mr-1 mb-1' />
            This action cannot be undone.
          </p>
        </form>
      )}
    </div>
  );
}
