import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useNavigate } from 'react-router';

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <section className='flex justify-center items-center h-screen'>
      <form action='#' className='w-80'>
        <div className='flex justify-center max-w-lg mb-6'>
          <p className='text-sm text-neutral-500'>
            Please enter the email address associated with your account. We'll
            promptly send you a link to reset your password.
          </p>
        </div>
        <div className='mb-6'>
          <Label htmlFor='email' className='text-sm'>
            Email
          </Label>
          <Input type='email' id='email' name='email' />
        </div>
        <div className='mb-6'>
          <Button
            type='submit'
            className='w-full'
            onClick={() => navigate('/auth/reset-password')}
          >
            Send reset link
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
