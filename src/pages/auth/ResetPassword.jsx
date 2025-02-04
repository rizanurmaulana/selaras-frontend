import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useNavigate } from 'react-router';

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <section className='flex justify-center items-center h-screen'>
      <form action='#' className='w-80'>
        <div className='mb-6'>
          <Label htmlFor='new-password' className='text-sm'>
            New Password
          </Label>
          <Input type='password' id='new-password' name='new-password' />
        </div>
        <div className='mb-6'>
          <Label htmlFor='confirm-password' className='text-sm'>
            Confirm Password
          </Label>
          <Input
            type='password'
            id='confirm-password'
            name='confirm-password'
          />
        </div>
        <div className='mb-6'>
          <Button
            type='submit'
            className='w-full'
            onClick={() => navigate('/auth/login')}
          >
            Reset password
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ResetPassword;
