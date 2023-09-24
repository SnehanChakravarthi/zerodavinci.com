import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        'focus-within:shadow-black overflow-hidden first:mt-0 first:rounded-t-lg last:rounded-b-lg ',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          'text-black  hover:bg-neutral-50 group flex h-[40px] flex-1 text-start items-center cursor-pointer justify-between bg-white  px-3 sm:text-sm text-sm leading-none border-b border-neutral-300  outline-none',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        'text-black data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-xs sm:text-sm bg-neutral-200',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default function FAQSection() {
  return (
    <div className=" w-full max-w-2xl">
      <p className="text-2xl font-bold md:text-3xl mb-4">
        Frequently Asked Questions
      </p>
      <Accordion.Root
        className="w-full rounded-lg "
        type="single"
        // defaultValue="item-1"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What inspired the name Zero da Vinci?
          </AccordionTrigger>
          <AccordionContent>
            Inspired by the zero-gravity positions of astronauts venturing into
            space, Zero da Vinci's design incorporates a multifunctional
            workstation that harmoniously merges with NASA's spirit of
            innovation. This design elegantly encapsulates the past and the
            future, creating a captivating fusion.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>When is the crowdfunding launch?</AccordionTrigger>
          <AccordionContent>
            We are preparing for a crowdfunding campaign in Kickstarter and
            Indiegogo, during November this year. Sign Up to get notified when
            the campaign launches.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How to see the Zero da Vinci closer?
          </AccordionTrigger>
          <AccordionContent>
            You can see the Zero da Vinci using the AR feature on the website.
            Click the AR button in the bottom panel to see the Zero da Vinci in
            your space.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            What is the Super Early Bird Discount?
          </AccordionTrigger>
          <AccordionContent>
            By reserving the Zero da Vinci for $95 in this website, you can
            secure a 50% discount. This brings the cost down to $1350 during the
            crowdfunding launch.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Is there an Early Bird Discount?</AccordionTrigger>
          <AccordionContent>
            Yes! There is a Early Bird Discount of 30% off the retail price.
            With this offer you can buy the Zero da Vinci for $1890. This is
            available for the early orders after the crowdfunding launch. Sign
            Up to get notified when the campaign launches.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            What if I just sign up for the newsletter?
          </AccordionTrigger>
          <AccordionContent>
            You become part of the Zero da Vinci community and witness our
            journey firsthand. You will be notified first when the crowdfunding
            campaign launches, allowing them to take advantage of the Early Bird
            Discount of 30%.
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
      <p className="font-medium text-xs  py-1 font sm:bg-transparent ">
        For any more questions, feel free to reach out to our support team.
      </p>
    </div>
  );
}

// const AccordionItem = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Item
//       className={classNames(
//         'focus-within:shadow-black overflow-hidden first:mt-0 first:rounded-t-lg last:rounded-b-lg ',
//         className
//       )}
//       {...props}
//       ref={forwardedRef}
//     >
//       {children}
//     </Accordion.Item>
//   )
// );

// const AccordionTrigger = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Header className="flex">
//       <Accordion.Trigger
//         className={classNames(
//           'text-black  hover:bg-neutral-50 group flex h-[40px] flex-1 text-start items-center cursor-pointer justify-between bg-white  px-3 sm:text-sm text-sm leading-none border-b border-neutral-300  outline-none',
//           className
//         )}
//         {...props}
//         ref={forwardedRef}
//       >
//         {children}
//         <ChevronDownIcon
//           className="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
//           aria-hidden
//         />
//       </Accordion.Trigger>
//     </Accordion.Header>
//   )
// );

// const AccordionContent = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Content
//       className={classNames(
//         'text-black data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-xs sm:text-sm bg-neutral-200',
//         className
//       )}
//       {...props}
//       ref={forwardedRef}
//     >
//       <div className="py-[15px] px-5">{children}</div>
//     </Accordion.Content>
//   )
// );
