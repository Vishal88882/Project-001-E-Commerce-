
import React, { useState } from "react";
import {
  Truck,
  MapPin,
  Package,
  Clock3,
  ShieldCheck,
  CreditCard,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const ShippingDetails = () => {
  const [open, setOpen] = useState(null);

  const shippingSteps = [
    {
      icon: CreditCard,
      title: "Order Placed",
      text: "Your order is confirmed after successful payment or order placement.",
    },
    {
      icon: Package,
      title: "Order Packed",
      text: "Our team carefully packs your products and prepares them for shipping.",
    },
    {
      icon: Truck,
      title: "Order Shipped",
      text: "Your package is handed over to our delivery partner.",
    },
    {
      icon: MapPin,
      title: "Delivered",
      text: "Your order arrives safely at your delivery address.",
    },
  ];

  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Delivery time depends on your location, product availability and the delivery partner. The estimated delivery date is shown during the order process.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you can use the tracking information provided with your order details to check its status.",
    },
    {
      question: "Do you offer free shipping?",
      answer:
        "Shipping charges depend on the order value, product and delivery location. Any applicable shipping charge will be displayed before you place the order.",
    },
    {
      question: "Can I change my delivery address?",
      answer:
        "You may be able to change your delivery address before the order is shipped. Contact support as soon as possible if you need to update your address.",
    },
    {
      question: "What happens if I miss my delivery?",
      answer:
        "Our delivery partner may attempt delivery again. You can also check your tracking details for the latest delivery information.",
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
            <Truck size={31} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
            RajYadav Delivery
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl lg:text-6xl">
            Shipping{" "}
            <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Details
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            Everything you need to know about order processing, shipping,
            delivery and tracking.
          </p>

        </div>
      </section>

      {/* Quick Info */}

      <section className="px-5 py-10 sm:px-8 lg:px-16">

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <Truck className="text-purple-500" size={25} />

            <h3 className="mt-5 font-bold">
              Fast Delivery
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Reliable delivery to your doorstep.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <Clock3 className="text-purple-500" size={25} />

            <h3 className="mt-5 font-bold">
              Estimated Time
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Delivery time depends on your location.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <MapPin className="text-purple-500" size={25} />

            <h3 className="mt-5 font-bold">
              Doorstep Delivery
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Your order is delivered to your address.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <ShieldCheck className="text-purple-500" size={25} />

            <h3 className="mt-5 font-bold">
              Secure Shipping
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Your package is handled with care.
            </p>
          </div>

        </div>

      </section>

      {/* Shipping Process */}

      <section className="px-5 py-16 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10">

            <p className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Shipping Process
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              How Your Order Reaches You
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {shippingSteps.map((item, index) => {
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

      {/* Shipping Information */}

      <section className="px-5 py-14 sm:px-8 lg:px-16">

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">

          {/* Delivery */}

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-white/10 dark:bg-white/[0.03]">

            <div className="flex items-center gap-3">

              <Clock3
                size={25}
                className="text-purple-500"
              />

              <h2 className="text-2xl font-black">
                Delivery Information
              </h2>

            </div>

            <div className="mt-7 space-y-5">

              <div className="flex gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-green-500"
                />

                <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Estimated delivery time depends on your location and
                  product availability.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-green-500"
                />

                <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Orders are normally processed after successful order
                  confirmation.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-green-500"
                />

                <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Delivery may take longer during holidays, high-demand
                  periods or unexpected delays.
                </p>
              </div>

            </div>

          </div>

          {/* Charges */}

          <div className="rounded-3xl border border-purple-200 bg-purple-50 p-8 dark:border-purple-500/20 dark:bg-purple-500/10">

            <div className="flex items-center gap-3">

              <CreditCard
                size={25}
                className="text-purple-600 dark:text-purple-400"
              />

              <h2 className="text-2xl font-black">
                Shipping Charges
              </h2>

            </div>

            <p className="mt-6 text-sm leading-7 text-gray-500 dark:text-gray-400">
              Any applicable shipping fee will be clearly displayed during
              checkout before you place your order.
            </p>

            <div className="mt-6 rounded-2xl border border-purple-200 bg-white p-5 dark:border-white/10 dark:bg-black/30">

              <p className="text-sm font-semibold">
                Shipping cost
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Calculated based on your order and delivery location.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Tracking */}

      <section className="px-5 py-14 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-purple-600 to-fuchsia-600 p-8 text-white sm:p-12">

          <div className="grid items-center gap-8 md:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-widest text-white/70">
                Order Tracking
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Know where your package is.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/80">
                Once your order is shipped, tracking information will be
                available in your order details.
              </p>

            </div>

            <div className="flex justify-center md:justify-end">

              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
                <Truck size={45} />
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
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Shipping Questions
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

export default ShippingDetails;