import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

const ProfileAddress = () => {
  return (
    <section className='max-w-5xl mx-auto flex items-center min-h-screen'>
      <div className='w-[500px]'>
        <h2 className='font-semibold mb-14'>Shipping Address</h2>
        <div>
          <form action=''>
            <div className='grid grid-cols-2 gap-4 mb-14'>
              <div className='col-span-2'>
                <Label htmlFor='detail_address' className='text-sm text-neutral-600'>
                  Detail Alamat
                </Label>
                <Input type='text' id='detail_address' name='detail_address' />
              </div>
              <div>
                <Label htmlFor='detail_address' className='text-sm text-neutral-600'>
                  Desa/Kelurahan
                </Label>
                <Input type='text' id='detail_address' name='detail_address' />
              </div>
              <div>
                <Label htmlFor='detail_address' className='text-sm text-neutral-600'>
                  Kecamatan
                </Label>
                <Input type='text' id='detail_address' name='detail_address' />
              </div>
              <div>
                <Label htmlFor='detail_address' className='text-sm text-neutral-600'>
                  Kota
                </Label>
                <Input type='text' id='detail_address' name='detail_address' />
              </div>
              <div>
                <Label htmlFor='detail_address' className='text-sm text-neutral-600'>
                  Kode  Pos
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

export default ProfileAddress;
