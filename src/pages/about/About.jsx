import React from 'react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const teamMembers = [
  {
    name: 'M. Rifki Firansah',
    role: 'Leader',
    image: '/images/teams/rifki.jpg',
  },
  {
    name: 'Cicih Kurniasih',
    role: 'Secretary',
    image: '/images/teams/cicih.jpg',
  },
  {
    name: 'Sifa Nur Azijah',
    role: 'Finance',
    image: '/images/teams/sifa.jpg',
  },
  {
    name: 'Riza Nur Maulana',
    role: 'Developer',
    image: '/images/teams/riza.jpg',
  },
  {
    name: 'Yuda Hendardi Firmansah',
    role: 'Marketing',
    image: '/images/teams/yuda.jpg',
  },
];

const TeamMember = ({ name, role, image }) => (
  <div className='w-full bg-white'>
    <div className='w-52 h-52 rounded-sm overflow-hidden mb-4'>
      <img
        src={image}
        alt={`Foto ${name}, ${role} di Tim Selaras`}
        className='aspect-square object-cover w-full h-full'
      />
    </div>
    <h5 className='font-medium'>{name}</h5>
    <p className='text-neutral-400'>{role}</p>
  </div>
);

const About = () => {
  return (
    <>
      <Navbar />

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20 mt-8'>
        <div className='mb-10'>
          <h1 className='text-xs text-neutral-400 mb-4 uppercase'>
            Tentang Kami
          </h1>
          <h2 className='text-3xl font-bold w-full sm:w-2/3'>
            Selaras: Platform Sewa Busana & Jasa Rias untuk Dukung UMKM Lokal di
            Kuningan
          </h2>
        </div>
        <div className='space-y-4'>
          <p>
            Selaras adalah platform sewa busana dan jasa rias profesional yang
            hadir untuk memenuhi kebutuhan fashion dan kecantikan Anda di setiap
            acara penting. Kami menyediakan berbagai pilihan busana, mulai dari
            kebaya, jas, hingga kostum anak, serta layanan tata rias oleh mitra
            profesional yang berpengalaman.
          </p>
          <p>
            Lebih dari sekadar penyewaan, Selaras berkomitmen untuk
            memberdayakan UMKM lokal di Kabupaten Kuningan dengan menghubungkan
            mereka kepada pelanggan yang mencari layanan berkualitas. Dengan
            sistem yang praktis dan koleksi yang selalu up-to-date, kami
            memastikan Anda mendapatkan pengalaman sewa yang mudah, nyaman, dan
            terjangkau.
          </p>
          <p>
            Baik untuk wisuda, pernikahan, pesta, atau acara resmi lainnya,
            Selaras siap membantu Anda tampil percaya diri dan memukau. Jadikan
            setiap momen lebih istimewa dengan pilihan busana dan riasan terbaik
            hanya di Selaras!
          </p>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='mb-10'>
          <h2 className='text-xs text-neutral-400 mb-4 uppercase'>Tim Kami</h2>
          <h3 className='text-3xl font-bold'>Meet Our Team</h3>
        </div>
        <div className='flex gap-4 overflow-x-scroll'>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
