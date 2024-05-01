import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function FormComponent({ show, setShow }) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setShow}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full  justify-center text-center items-center p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-4 pb-4 pt-5 text-left shadow-xl transition-all  w-full">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
              
    <iframe
    id="JotFormIFrame-241126473269054"
    title="WFD Application"
    onload="window.parent.scrollTo(0,0)"
    allowtransparency="true"
    allow="geolocation; microphone; camera; fullscreen"
    src="https://form.jotform.com/241126473269054"
    frameborder="0"
    style="min-width:100%;max-width:100%;height:539px;border:none;"
    scrolling="yes"
  >
  </iframe>
  <script src='https://form.jotform.com/s/umd/latest/for-form-embed-handler.js'></script>
  <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-241126473269054'", "https://form.jotform.com/")</script>
  `,
                  }}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
