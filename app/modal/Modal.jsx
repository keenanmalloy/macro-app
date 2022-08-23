import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal = ({
  isOpen,
  title,
  description,
  closeModal,
  children,
  className,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className={`min-h-screen text-center h-100`}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 " />
          </Transition.Child>
          <span
            className="inline-block h-screen align-bottom"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`inline-block border-solid w-full 
            max-w-3xl py-5 px-2 text-left align-middle 
            transition-all transform bg-slate-800 rounded-t-2xl text-white
             ${className}
            `}
            >
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-white px-4"
              >
                {title}
              </Dialog.Title>
              {description && (
                <Dialog.Description
                  as="p"
                  className="mt-2 text-sm leading-5 text-gray-300 px-4"
                >
                  {description}
                </Dialog.Description>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
