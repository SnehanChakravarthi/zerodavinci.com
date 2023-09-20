import React from 'react';

function ContactUs() {
  return (
    <div>
      {' '}
      <p className="font-bold text-3xl mb-3">Contact Us</p>
      <p className="text-sm">
        We're always here to answer any questions you may have about the Zero da
        Vinci, or any other inquiries you might have. We'd love to hear from
        you!
      </p>
      <p className="font-bold mt-6 text-base mb-2">
        Motsats Furniture – Innovating Comfort and Design{' '}
      </p>
      <p className="text-sm">
        Based in the heart of Malmö, Sweden, Motsats Furniture is dedicated to
        breaking the boundaries between function and art, comfort and elegance.
        We are the proud creators of the Zero da Vinci, a groundbreaking fusion
        of space-age innovation and Renaissance inspiration. Our mission is to
        redefine the way you live and work by transforming your space into a
        sanctuary of style and well-being.
      </p>
      <p className="font-bold mt-6 text-base mb-2">Contact Information</p>
      <p className="text-sm font-normal">
        <span className="font-bold">📧 Email:</span>{' '}
        <a href="mailto:support@zerodavinci.com" className="text-blue-500">
          support@zerodavinci.com
        </a>
      </p>
      <p className="text-sm font-normal">
        <span className="font-bold">📞 Phone:</span> +46 760724988{' '}
      </p>
      <p className="text-sm font-normal">
        <span className="font-bold">📍 Address:</span> Östra Förstadsgatan 50,
        21212 Malmö, Sweden
      </p>
    </div>
  );
}

export default ContactUs;
