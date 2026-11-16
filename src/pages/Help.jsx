
import React, { useState } from "react";
import {
  Search,
  Package,
  CreditCard,
  RotateCcw,
  ShoppingCart,
  User,
  ShieldCheck,
  ChevronDown,
  Mail,
  MessageCircle,
} from "lucide-react";

const Help = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(null);

  const categories = [
    {
      title: "Orders & Delivery",
      icon: Package,
      description: "Track your order and check delivery information.",
    },
    {
      title: "Payment & Refunds",
      icon: CreditCard,
      description: "Get help with payments, refunds and billing.",
    },
    {
      title: "Returns & Exchange",
      icon: RotateCcw,
      description: "Learn about returns, replacements and exchanges.",
    },
    {
      title: "Cart & Wishlist",
      icon: ShoppingCart,
      description: "Manage your cart and wishlist easily.",
    },
    {
      title: "Account",
      icon: User,
      description: "Manage your account and personal information.",
    },
    {
      title: "Security & Privacy",
      icon: ShieldCheck,
      description: "Learn how we keep your account secure.",
    },
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "You can check your order details from your account to view the current status of your order.",
    },
    {
      question: "How can I cancel my order?",
      answer:
        "You can cancel an order before it is shipped. Open your order details and select the cancel option.",
    },
    {
      question: "How can I return a product?",
      answer:
        "Open your order details and select the return option if your product is eligible for return.",
    },
    {
      question: "When will I receive my refund?",
      answer:
        "After your return is approved, the refund will be processed according to your payment method.",
    },
    {
      question: "How can I change my password?",
      answer:
        "Go to your account settings and use the password change option to create a new password.",
    },
    {
      question: "Why was my payment declined?",
      answer:
        "Payment can fail because of insufficient balance, incorrect payment details, bank restrictions or temporary issues.",
    },
  ];

  const filteredFaqs = faqs.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  const handleFaq = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-500 ease-in-out dark:bg-black dark:text-white">

      {/* Hero */}

      <section className="px-5 pb-16 pt-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-purple-600 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-400">
            RajYadav Support
          </span>

          <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            How can we{" "}
            <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              help?
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            Find answers to common questions about orders, payments,
            returns, accounts and more.
          </p>

          {/* Search */}

          <div className="relative mx-auto mt-9 max-w-2xl">

            <Search
              size={21}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for help..."
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-14 pr-5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />

          </div>

        </div>
      </section>

      {/* Help Categories */}

      <section className="px-5 py-12 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-8">
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              HELP CENTER
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Browse Help Topics
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-purple-500/50"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 transition-colors duration-300 dark:bg-purple-500/10 dark:text-purple-400">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="px-5 py-16 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-4xl">

          <div className="mb-9 text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-4">

            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, index) => (

                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03]"
                >

                  <button
                    onClick={() => handleFaq(index)}
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

              ))
            ) : (
              <div className="rounded-2xl border border-gray-200 py-12 text-center text-sm text-gray-500 dark:border-white/10">
                No help articles found.
              </div>
            )}

          </div>

        </div>

      </section>

      {/* Contact Support */}

      <section className="px-5 pb-20 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-purple-200 bg-purple-50 p-8 dark:border-purple-500/20 dark:bg-purple-500/10 sm:p-12">

            <div className="grid gap-10 md:grid-cols-2 md:items-center">

              <div>

                <p className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                  Still need help?
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  We're here for you.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500 dark:text-gray-400">
                  Can't find what you're looking for? Contact our support
                  team and we'll be happy to help.
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-black/30">

                  <Mail
                    size={24}
                    className="text-purple-600 dark:text-purple-400"
                  />

                  <h3 className="mt-4 font-bold">
                    Email Support
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Get help through email
                  </p>

                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-black/30">

                  <MessageCircle
                    size={24}
                    className="text-purple-600 dark:text-purple-400"
                  />

                  <h3 className="mt-4 font-bold">
                    Live Chat
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Chat with our support
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Help;