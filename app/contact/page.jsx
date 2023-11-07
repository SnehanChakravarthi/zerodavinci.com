import React from 'react';

function page() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="max-w-3xl mt-20  flex flex-col text-center">
        <p className="text-2xl font-bold md:text-3xl">Contact Us</p>
        <p className="text-sm mt-2">
          We're always here to answer any questions you may have about the Zero
          da Vinci, or any other inquiries you might have. We'd love to hear
          from you!
        </p>
        <p className="font-bold mt-6 text-base mb-2">
          Motsats Furniture, Innovating Comfort and Design{' '}
        </p>
        <p className="text-sm">
          Based in the heart of Malmö, Sweden, Motsats Furniture is dedicated to
          breaking the boundaries between function and art, comfort and
          elegance. We are the proud creators of the Zero da Vinci, a
          groundbreaking fusion of space-age innovation and Renaissance
          inspiration. Our mission is to redefine the way you live and work by
          transforming your space into a sanctuary of style and well-being.
        </p>
        <p className="font-bold mt-6 text-base mb-2">Contact Information</p>
        <p className="text-sm font-normal">
          <span className="font-bold">📧 Email:</span>{' '}
          <a href="mailto:support@zerodavinci.com" className="text-blue-500">
            support@zerodavinci.com
          </a>
        </p>
        <p className="text-sm font-normal">
          <span className="font-bold">📞 Phone:</span> +46 760724988
        </p>
        {/* <p className="text-sm font-normal">
          <span className="font-bold">📍 Address:</span> Östra Förstadsgatan 50,
          21212 Malmö, Sweden
        </p> */}
      </div>
    </div>
  );
}

export default page;
