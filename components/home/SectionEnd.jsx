import React from 'react';
import Footer from '@/components/root/Footer';
import ContactUs from './ContactUs';
import CheckoutSection from './Section7-Checkout';
import SignUpSection from './Section8-SignUp';
import FAQSection from './Section9-FAQ';
import Image from 'next/image';

function SectionEnd() {
  return (
    <div className="flex z-0 w-screen flex-col items-center bg-neutral-100 shadow-sm shadow-black tracking-wide h-auto">
      <div className="w-full mx-auto container flex justify-center">
        <div className="w-11/12 flex flex-col px-2 sm:px-0">
          <div className="space-y-10 mb-20 flex flex-col items-center justify-center ">
            <CheckoutSection />

            <Image
              src="/pictures/blackSEB.png"
              width={500}
              height={500}
              className="rounded-xl w-full max-w-2xl"
              alt=""
            />

            <SignUpSection />
            <FAQSection />
            {/* <ContactUs /> */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default SectionEnd;
