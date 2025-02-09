import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

const ChangePassword = () => {
  return (
    <section className='max-w-5xl mx-auto flex items-center min-h-screen'>
      <div className='w-[350px]'>
        <h2 className='font-semibold mb-14'>New Password</h2>
        <div>
          <form action=''>
            <div className='grid grid-cols-1 gap-4 mb-14'>
              <div>
                <Label htmlFor='new-password' className='text-sm text-neutral-600'>
                  New Password
                </Label>
                <Input type='password' id='new-password' name='new-password' />
              </div>
              <div>
                <Label htmlFor='confirm-password' className='text-sm text-neutral-600'>
                  Confirm Password
                </Label>
                <Input
                  type='password'
                  id='confirm-password'
                  name='confirm-password'
                />
              </div>
            </div>
            <Button type='submit'>Save changes</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
