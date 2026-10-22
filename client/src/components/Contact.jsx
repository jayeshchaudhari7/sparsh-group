import { useState } from "react";
import { MapPin, Smartphone, Send } from "lucide-react";
import { createContact } from "../services/contactService";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await createContact(formData);

      setSuccess(
        response.message || "Thank you! Your message has been submitted."
      );
      setFormData(initialForm);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border-b border-gray-300 bg-transparent px-0 py-3 text-[#101329] outline-none transition-colors placeholder:text-gray-400 focus:border-[#e9a63e]";

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1550px] px-6 md:px-12 lg:px-16">
        <p className="mb-8 text-xl italic text-[#e9a63e]">
          Contact Us
        </p>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.85fr_0.85fr] lg:gap-14">
          {/* Introduction */}
          <div>
            <h2 className="text-5xl leading-[1.05] font-black tracking-[0.02em] text-[#101329] md:text-5xl">
              GET IN
              <br />
              TOUCH
            </h2>

            <p className="mt-8 max-w-[510px] text-lg leading-[1.65] text-[#77797d]">
              We will help you find the best available apartments for sale or
              for rent. Let us know what you are looking for and we will make
              sure you get it as fast as possible!
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-5 pt-1 md:gap-7">
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-[#d0d1d7]">
              <MapPin
                size={24}
                strokeWidth={1.8}
                className="text-[#e9a63e]"
              />
            </div>

            <div className="min-w-0 pt-2">
              <h3 className="whitespace-nowrap text-base font-normal text-[#101329] md:text-[24px]">
                ADDRESS
              </h3>

              <address className="mt-8 text-base leading-[1.7] text-[#77797d] not-italic md:text-[18px]">
                1110-1111, SURYA ICON, B/H
                <br className="hidden xl:block" />
                {" "}BINALI COMPLEX NARANPURA,
                <br className="hidden xl:block" />
                {" "}Ahmedabad City,
                <br />
                Ahmedabad
              </address>
            </div>
          </div>

          {/* Contact details */}
          <div className="flex items-start gap-5 pt-1 md:gap-7">
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-[#d0d1d7]">
              <Smartphone
                size={24}
                strokeWidth={1.8}
                className="text-[#101329]"
              />
            </div>

            <div className="min-w-0 flex-1 pt-2">
              <h3 className="whitespace-nowrap text-base font-normal text-[#101329] md:text-[24px]">
                CONTACT DETAILS
              </h3>

              <a
                href="mailto:info@thesparshgroup.com"
                className="mt-8 block w-fit max-w-full break-all border-b-[3px] border-[#77797d] pb-2 text-base text-[#77797d] transition-colors hover:text-[#e9a63e] md:text-[18px]"
              >
                info@thesparshgroup.com
              </a>

              <a
                href="tel:+919904555373"
                className="mt-3 block whitespace-nowrap text-lg text-[#101329] transition-colors hover:text-[#e9a63e] md:text-[18px]"
              >
                +91 99045 55373
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-gray-200 pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e9a63e]">
              Have a question?
            </p>

            <h3 className="mt-4 text-3xl font-bold text-[#101329] md:text-4xl">
              Let's talk about your next home.
            </h3>

            <p className="mt-4 max-w-md leading-7 text-[#77797d]">
              Share your requirements with us. Our team will get in touch
              with you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-[#101329]"
                >
                  Full name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={100}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-[#101329]"
                >
                  Email address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-[#101329]"
                >
                  Phone number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-[#101329]"
                >
                  Your message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder="Tell us what you are looking for..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-md bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            {success && (
              <p
                role="status"
                className="rounded-md bg-green-50 p-3 text-sm text-green-700"
              >
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 bg-[#101329] px-7 py-4 font-medium text-white transition-colors hover:bg-[#e9a63e] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;