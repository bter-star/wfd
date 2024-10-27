import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Membership", href: "/membership" },
    { name: "Gallery", href: "/gallery" },
    { name: "Donate", href: "/donate" },
  ],
};

export default function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const currentPath = location.pathname;

  return (
    <div className="bg-black-100 opacity-95 sticky top-0 z-40">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-black pb-12 shadow-xl border-b border-gray-800">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-200"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Join
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Donate
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Web menu */}
      <header className="relative">
        <nav aria-label="Top">
          {/* Navigation */}
          <div className="bg-transparent ">
            <div className="px-4 sm:px-6 lg:px-8 border-b border-gray-800">
              <div className="">
                <div className="flex h-24 items-center justify-between w-full">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <a href="/" className="flex items-center justify-start">
                      <span className="sr-only">Woodmere Fire Department</span>
                      <img
                        className="h-16 w-auto mx-4"
                        src="/DepartmentPatchNB.png"
                        alt=""
                      />
                      <div className="flex flex-col ">
                        <span className=" text-white font-extrabold text-2xl leading-none ">
                          WOODMERE
                        </span>
                        <span className=" text-tertiary-200 font-extrabold text-2xl  leading-none">
                          FIRE
                        </span>
                        <span className=" text-white font-extrabold text-2xl  leading-none">
                          DEPARTMENT
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Mega menus */}
                    <Popover.Group className="ml-8">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className={`flex items-center text-md font-medium  hover:text-tertiary-200 hover:border-tertiary-200 border-b-4  ${
                              currentPath === page.href
                                ? "border-tertiary-100 text-tertiary-100"
                                : "text-gray-50 border-transparent"
                            }`}
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Logo (lg-) */}
                  <div className="lg:hidden flex">
                    <span className="sr-only">Woodmere Fire Department</span>
                    <img
                      src="/DepartmentPatchNB.png"
                      alt=""
                      className="h-14 w-auto"
                    />
                    <div className="flex flex-col ml-2">
                      <span className=" text-white font-extrabold text-xl leading-none ">
                        WOODMERE
                      </span>
                      <span className=" text-tertiary-200 font-extrabold text-xl  leading-none">
                        FIRE
                      </span>
                      <span className=" text-white font-extrabold text-xl  leading-none">
                        DEPT.
                      </span>
                    </div>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-black p-2 text-white"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
