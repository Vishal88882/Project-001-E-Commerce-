
import React, { useState } from "react";
import {
  RotateCcw,
  PackageCheck,
  CreditCard,
  Clock3,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const Return = () => {
  const [open, setOpen] = useState(null);

  const returnSteps = [
    {
      icon: PackageCheck,
      title: "Request Return",
      text: "Open your order and submit a return request for the eligible product.",
    },
    {
      icon: ShieldCheck,
      title: "Product Verification",
      text: "Our team will verify the product and your return request.",
    },
    {
      icon: RotateCcw,
      title: "Product Pickup",
      text: "Once approved, the product will be picked up from your address.",
    },
    {
      icon: CreditCard,
      title: "Get Refund",
      text: "After successful verification, your refund will be processed.",
    },
  ];

  const faqs = [
    {
      question: "How many days do I have to return a product?",
      answer:
        "Eligible products can be returned within the return period mentioned on the product or order details page.",
    },
    {
      question: "Can I return a damaged product?",
      answer:
        "Yes. If your product arrives damaged, report the issue as soon as possible with the required details.",
    },
    {
      question: "How long does a refund take?",
      answer:
        "Once the return is approved and processed, the refund may take a few business days depending on your payment method.",
    },
    {
      question: "Can I exchange a product instead of returning it?",
      answer:
        "Exchange availability depends on the product, stock and applicable return policy.",
    },
    {
      question: "Will I get a full refund?",
      answer:
        "Refund eligibility and amount depend on the product condition and the applicable return policy.",
    },
  ];

  const toggleFaq = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-500 dark:bg-black dark:text-white">

      {/* Hero */}

      <section className="px-5 pb-16 pt-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
            <RotateCcw size={30} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
            RajYadav Returns
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl lg:text-6xl">
            Return &{" "}
            <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Refund
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            We want you to be happy with your purchase. Learn how returns,
            exchanges and refunds work at RajYadav.
          </p>

        </div>
      </section>

      {/* Return Process */}

      <section className="px-5 py-12 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-9">
            <p className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Simple Process
            </p>

            <h2 className="mt-2 text-3xl font-black">
              How Returns Work
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {returnSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-purple-500/50"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                    <Icon size={24} />
                  </div>

                  <span className="absolute right-5 top-5 text-3xl font-black text-gray-200 dark:text-white/10">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Eligibility */}

      <section className="px-5 py-14 sm:px-8 lg:px-16">

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">

          {/* Eligible */}

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 dark:border-white/10 dark:bg-white/[0.03] sm:p-9">

            <div className="flex items-center gap-3">
              <CheckCircle2
                className="text-green-500"
                size={25}
              />

              <h2 className="text-2xl font-black">
                Return Eligibility
              </h2>
            </div>

            <div className="mt-7 space-y-4">

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={19} />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Product must be within the applicable return period.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={19} />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Product should be unused and in acceptable condition.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={19} />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Original packaging and accessories may be required.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={19} />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Some products may have different return conditions.
                </p>
              </div>

            </div>

          </div>

          {/* Not Eligible */}

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 dark:border-white/10 dark:bg-white/[0.03] sm:p-9">

            <div className="flex items-center gap-3">
              <Clock3
                className="text-orange-500"
                size={25}
              />

              <h2 className="text-2xl font-black">
                Important Information
              </h2>
            </div>

            <div className="mt-7 space-y-5">

              <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
                Return availability can vary depending on the product
                category and seller policy.
              </p>

              <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
                Products showing signs of misuse or damage caused after
                delivery may not qualify for return.
              </p>

              <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
                Please keep your invoice, original packaging and accessories
                until the return process is completed.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Refund */}

      <section className="px-5 py-14 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl rounded-3xl border border-purple-200 bg-purple-50 p-8 dark:border-purple-500/20 dark:bg-purple-500/10 sm:p-10">

          <div className="grid items-center gap-8 md:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                Refund Information
              </p>

              <h2 className="mt-3 text-3xl font-black">
                When will you receive your refund?
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400">
                Once your returned product has been received and successfully
                verified, your refund will be initiated according to the
                applicable refund policy.
              </p>

            </div>

            <div className="rounded-2xl border border-purple-200 bg-white p-6 dark:border-white/10 dark:bg-black/30">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                  <CreditCard size={24} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Refund Method
                  </h3>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Refunds are processed based on the original payment
                    method and applicable policy.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="px-5 pb-20 pt-14 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-4xl">

          <div className="mb-9 text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Questions
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Return & Refund FAQs
            </h2>

          </div>

          <div className="space-y-4">

            {faqs.map((item, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03]"
              >

                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                >

                  <span className="text-sm font-semibold sm:text-base">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                      open === index
                        ? "rotate-180 text-purple-500"
                        : ""
                    }`}
                  />

                </button>

                {open === index && (
                  <div className="border-t border-gray-200 px-5 py-5 text-sm leading-7 text-gray-500 dark:border-white/10 dark:text-gray-400">
                    {item.answer}
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Return;