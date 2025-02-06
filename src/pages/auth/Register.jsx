import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <section className='flex justify-center items-center h-screen'>
      <form action='#' className='w-80'>
        <div className='mb-6'>
          <Button type='submit' variant='outline' className='w-full'>
            <img src='/logo/Google.png' /> Continue with Google
          </Button>
        </div>
        <div className='mb-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-4 text-xs text-neutral-500'>OR</span>
            </div>
          </div>
        </div>
        <div className='mb-6'>
          <Label htmlFor='name' className='text-sm'>
            Name
          </Label>
          <Input type='name' id='name' name='name' />
        </div>
        <div className='mb-6'>
          <Label htmlFor='email' className='text-sm'>
            Email
          </Label>
          <Input type='email' id='email' name='email' />
        </div>
        <div className='mb-6'>
          <Label htmlFor='password' className='text-sm'>
            Password
          </Label>
          <Input type='password' id='password' name='password' />
        </div>
        <div className='flex justify-center max-w-lg mb-6'>
          <p className='text-sm text-neutral-500'>
            By creating an account you agree with our Terms of Service, Privacy
            Policy.
          </p>
        </div>
        <div className='mb-6'>
          <Button type='submit' className='w-full'>
            Register
          </Button>
        </div>
        <div className='flex justify-center max-w-lg mb-6'>
          <p className='text-sm text-neutral-500'>
            Already have an account?{' '}
            <Link
              to='/auth/login'
              className='hover:text-neutral-900 font-medium hover:underline underline-offset-4'
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
