import Image from "next/image";
import React from "react";

export const BodyFatForm = ({ step, setStep }) => {
  return (
    <div>
      <form action="">
        <h2 className="font-bold text-3xl p-2">What is your body fat %?</h2>
        <p className="p-2 leading-snug">
          This estimation will be used to calculate your body fat percentage and
          adjust your calorie intake accordingly.
        </p>
        <div className="grid-cols-3 grid gap-x-3 gap-y-10 pt-20">
          <button
            className="rounded-full border-2 border-slate-600"
            type="button"
          >
            <Image src="/images/Male3.PNG" alt="3-4" height={150} width={150} className="rounded-full"/>
          </button>
          <button
            className="rounded-full border-2 border-slate-600"
            type="button"
          >
            <Image src="/images/Male6.PNG" height={150} width={150}className="rounded-full" />
          </button>
          <button
            className="rounded-full border-2 border-slate-600"
            type="button"
          >
            <Image
              src="/images/Male10.PNG"
              height={150}
              width={150}
              className="rounded-full"
            />
          </button>
          <button
            className="rounded-full border-2 border-slate-600"
            type="button"
          >
            <Image
              src="/images/Male15.PNG"
              height={150}
              width={150}
              className="rounded-full"
            />
          </button>
          <button
            className="rounded-full border-2 border-slate-600"
            type="button"
          >
            <Image
              src="/images/Male20.PNG"
              height={150}
              width={150}
              className="rounded-full"
            />
          </button>
          <button
            className="rounded-full border-2 border-slate-600"
            type="button"
          >
            <Image
              src="/images/Male25.PNG"
              height={150}
              width={150}
              className="rounded-full"
            />
          </button>
          <button
            className="rounded-full border-2 border-slate-600"
            type="button"
          >
            <Image
              src="/images/Male30.PNG"
              height={150}
              width={150}
              className="rounded-full"
            />
          </button>
          <button
            className="rounded-full border-2 border-slate-600"
            type="button"
          >
            <Image
              src="/images/Male35.PNG"
              height={150}
              width={150}
              className="rounded-full"
            />
          </button>
          <button
            className="rounded-full border-2 border-slate-600"
            type="button"
          >
            <Image
              src="/images/Male40.PNG"
              height={150}
              width={150}
              className="rounded-full"
            />
          </button>
        </div>
      </form>
    </div>
  );
};
