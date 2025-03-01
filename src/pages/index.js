import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Product", href: "#" },
  { name: "services", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Testimonials", href: "#testimonials" },
];
const testimonials = [
  {
    body: "We have an iMac that failed - turned out to be the motherboard. Jamie was able to salvage it by moving the screen and hard drive to another iMac and we're up and running. He even delivered it right to the house! Jamie has always provided great service at a fair price. He's even declined to do work when it wasn't worth it.",
    author: {
      name: "Mark P.",
    },
  },
  {
    body: "Jamie was friendly and helpful. He explained all the steps that needed to be done. The service was fast, friendly and he even took the time to explain what he did. Jamie even went over the pricing so I could get the most value for the dollar. Others contractors may be good but I can't imagine any better than Jamie.",
    author: {
      name: "Rob D.",
    },
  },
  {
    body: "Jamie was terrific - work was done professionally in a timely manner beyond all expectations. Price was very reasonable and he went above and beyond in all aspects. We will not call anyone else and will recommend him highly to anyone.",
    author: {
      name: "Dave R.",
    },
  },
  {
    body: "I called Jamie at 11:15 Saturday morning, delivered my HP laptop to him at 12:00 noon, and he had completed the job (plus a few extras I didn't realize I needed, but was happy he offered them to me before beginning the work) by 3:30. He was very customer-friendly, explaining to me what he had done and what differences I might see as a result.",
    author: {
      name: "Deborah A.",
    },
  },
  // More testimonials...
];

const services = [
  {
    name: "Virus Removal",
    description:
      "Got a Virus? We can confiedntly kill the technological parasite while maintaining the condition of your device and data",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Computer Upgrades",
    description:
      "If your device isn't running quite like it used to, we are able to clean, clear and have your device working like brand new again.",
    icon: LockClosedIcon,
  },
  {
    name: "Data Recovery",
    description:
      "Get your lost data back. We can retrieve majoirty of lost data no matter the cause.",
    icon: ArrowPathIcon,
  },
  {
    name: "Hardware Repair",
    description:
      "We will complete a diagnosis and repair whatever the issue is at hand. We handel all devices with utmost care.",
    icon: FingerPrintIcon,
  },
  {
    name: "In-Home Set Up",
    description:
      "Have your Work from Home office professionally set up so you can stay hassel free.",
    icon: ArrowPathIcon,
  },
  {
    name: "Device Resale",
    description:
      "Upgrade your device! We sell refurbushed and afforable Macs and PC's.",
    icon: FingerPrintIcon,
  },
];
const tiers = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "$19",
    description: "The essentials to provide your best work for clients.",
    services: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    priceMonthly: "$49",
    description: "A plan that scales with your rapidly growing business.",
    services: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    services: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
    mostPopular: false,
  },
];
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
const footerNavigation = {
  solutions: [
    { name: "Hosting", href: "#" },
    { name: "Data services", href: "#" },
    { name: "Uptime monitoring", href: "#" },
    { name: "Enterprise services", href: "#" },
    { name: "Analytics", href: "#" },
  ],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white font-primary">
      {/* Header */}
      <header className="absolute inset-x-0 bg-white shadow sticky top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <AnchorLink href="#" className="-m-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://imgix.cosmicjs.com/bc806c10-f6ae-11ef-97be-337de38c2241-Computer-repair-logo.png"
                className="h-18 w-auto"
              />
            </AnchorLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <AnchorLink
                key={item.name}
                href={item.href}
                className="text-sm/6 font-normal hover:underline hover:text-violet-900 text-gray-600"
              >
                {item.name}
              </AnchorLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex gap-x-2">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon
                  aria-hidden="true"
                  className="h-7 w-6 text-violet-900"
                />
              </dt>
              <dd>
                <a
                  href="tel:7274593846"
                  className="text-lg font-semibold hover:text-violet-900 hover:underline"
                >
                  727-459-3846
                </a>
              </dd>
            </div>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>
          <div className="py-18">
            <div className="mx-auto max-w-7xl px-5">
              <div className="mx-auto max-w-7xl text-center">
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-violet-900 lg:text-7xl/20">
                  Let's face it, If you didn't have computer problems, you
                  wouldn't be reading this or have visited this website.
                </h1>
                <p className="mt-8 max-w-4xl mx-auto text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  We have been trusted to remove viruses, repair computers,
                  recover data and sells refurbished computers and laptops in
                  the Tampa Bay area for over 15 years.
                </p>
                <p className="mt-8 max-w-4xl mx-auto text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Let us show you the reason why you should give us a call and
                  join our many customers whom call us "Their Computer Guys!"
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="mailto:service@computerrepair911.biz"
                    className="rounded-full bg-main px-20 py-2.5 text-lg font-semibold text-white hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main"
                  >
                    service@computerrepair911.biz
                  </a>
                  <a
                    href="#"
                    className="text-lg/6 font-semibold text-violet-900 hover:underline hover:text-violet-500"
                  >
                    Need to Bring Your Device In?{" "}
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
              <div className="mt-10 flow-root">
                <div className="">
                  <img
                    alt="App screenshot"
                    src="https://imgix.cosmicjs.com/99e54170-f6a5-11ef-97be-337de38c2241-VNU_M652_01.svg"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl lg:text-center">
          <p className="text-pretty text-4xl font-semibold tracking-tight text-violet-900 lg:text-7xl">
            For over 15 years, we have been servicing computers in the Tampa Bay
            area
          </p>
          <img
            src="https://imgix.cosmicjs.com/c89090e0-f6ac-11ef-97be-337de38c2241-apple-cert.png"
            className="mx-auto mix-blend-multiply"
          />
        </div>
        <div className="bg-violet-900 p-10 rounded-4xl mx-auto max-w-5xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-violet-100 lg:text-xl">
            Partners
          </p>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white lg:text-6xl">
            Ray's Connecting Point
          </p>
          <p className="mt-8 max-w-4xl mx-auto text-pretty text-lg font-medium text-white sm:text-xl/8">
            Ray's has been servcing Tampa Bay area for 35+ years!
          </p>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:mt-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-main lg:text-6xl lg:text-balance">
              Services for Your Home or Small Business
            </p>
            <p className="mt-6 text-pretty text-lg/8 text-gray-600">
              Macs, PCs, iPhone and iPads are all welcomed and will
              professionally and dilligently be serviced by the trusted
              profesionals at Computer Repair 911.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {services.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-lg bg-main">
                      <feature.icon
                        aria-hidden="true"
                        className="size-8 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonial section */}
        <section
          id="testimonials"
          className="mx-auto mt-32 max-w-7xl lg:mt-10 sm:px-6 lg:px-8"
        >
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto text-center">
                <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 lg:text-6xl">
                  Here's What our Customers are Saying About Us
                </p>
              </div>
              <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                <div className="-mt-8 sm:-mx-4 grid grid-cols-2">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.author.name}
                      className="pt-8 sm:inline-block sm:w-full sm:px-4"
                    >
                      <figure className="rounded-2xl bg-violet-50 p-8 text-sm/6">
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <div>
                            <div className="font-semibold text-gray-900">
                              {testimonial.author.name}
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <div className="relative -z-10 mt-10 px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
          ></div>
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-violet-900 lg:text-5xl/13">
              We want to help you with your computer issues. Shoot us an email
              or give us a call.
            </h2>
            <div className="flex justify-center">
              <p className="mt-6 text-pretty font-medium text-2xl/8 text-gray-600">
                2340 SR 580 Suite M Clearwater, FL 33763
                <span className="mt-3 block text-sm">
                  (Located Within Ray's Connecting Point)
                </span>
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                Mon-Fri 10am to 5pm
              </p>
              <p className="border-violet-600 border-l-2 ml-5 pl-5  mt-6 text-pretty text-lg/8 text-gray-600">
                Sat 10am to 4pm
              </p>
              <p className="border-violet-600 border-l-2 ml-5 pl-5 mt-6 text-pretty text-lg/8 text-gray-600">
                Closed Sunday
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:service@computerrepair911.biz"
                className="rounded-full bg-main px-20 py-2.5 text-lg font-semibold text-white hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main"
              >
                service@computerrepair911.biz
              </a>
              <a
                href="#"
                className="rounded-full bg-violet-900 px-20 py-2.5 text-lg font-semibold text-white hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main"
              >
                <div className="flex gap-x-2">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-white"
                    />
                  </dt>
                  <dd>
                    <a href="tel:7274593846" className="text-lg font-semibold">
                      727-459-3846
                    </a>
                  </dd>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mx-auto mt-32 max-w-7xl px-6 py-8 border-t lg:px-8">
        <img
          alt=""
          src="https://imgix.cosmicjs.com/bc806c10-f6ae-11ef-97be-337de38c2241-Computer-repair-logo.png"
          className="h-24 saturate-0 w-auto mx-auto "
        />
      </footer>
    </div>
  );
}
