import { AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar } from '@radix-ui/react-avatar';
import React from 'react';

const Account = () => {
  return (
    <section className='max-w-5xl mx-auto flex items-center min-h-screen'>
      <div className='w-[350px]'>
        <h2 className='font-semibold mb-14'>Account Details</h2>
        <div>
          <Avatar>
            <AvatarFallback className='h-12 w-12 flex justify-center items-center mb-6'>
              RN
            </AvatarFallback>
          </Avatar>
          <form action=''>
            <div className='grid grid-cols-1 gap-4 mb-14'>
              <div>
                <Label htmlFor='detail_address' className='text-sm text-neutral-600'>
                  Nama Lengkap
                </Label>
                <Input type='text' id='detail_address' name='detail_address' />
              </div>
              <div>
                <Label htmlFor='detail_address' className='text-sm text-neutral-600'>
                  Email
                </Label>
                <Input type='text' id='detail_address' name='detail_address' />
              </div>
            </div>
            <Button type='submit'>Save changes</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Account;
