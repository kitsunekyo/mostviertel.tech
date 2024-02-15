"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
  { name: "GitHub", href: "https://github.com/kitsunekyo", external: true },
];

function Logo() {
  return (
    <div className="flex items-center gap-1 font-decoration">
      <span>mo</span>
      <span className="text-slate-300">&#47;&#47;</span>
      <span>te</span>
    </div>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-8">
      <div className="px-6 sm:px-8">
        <div className="max-w-3xl mx-auto flex justify-between gap-4 items-center">
          <Link href="/">
            <Logo />
          </Link>
          {/* <nav className="hidden gap-4 items-center font-medium lg:flex">
            {navigation.map((item) =>
              item.external ? (
                <a key={item.name} href={item.href}>
                  <span>{item.name}</span>
                </a>
              ) : (
                <Link key={item.name} href={item.href}>
                  <span>{item.name}</span>
                </Link>
              ),
            )}
          </nav>
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          /> */}
        </div>
      </div>
    </header>
  );
}

function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={onClick}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}

function MobileMenu({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  return (
    <Dialog as="div" className="lg:hidden" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
