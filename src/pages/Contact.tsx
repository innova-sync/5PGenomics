import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">

        {/* HERO SECTION */}
        <section className="bg-[url('/images/bg.jpg')] bg-cover bg-center py-20 text-white relative">
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative container mx-auto px-4 text-center">
            <span className="uppercase tracking-widest">Contact Us</span>

            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mt-4">
              Get in Touch with Germonizer - Experts in Drug Testing, CBRNE, Forensic & Healthcare Solutions
            </h1>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="py-16">
          <div className="container mx-auto px-4">

            <div className="grid md:grid-cols-3 gap-6 text-center">

              {/* CALL */}
              <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <a
                  href="tel:+6567473631"
                  className="text-gray-500 text-sm"
                >
                  +65 6747 3631
                </a>
              </div>

              {/* EMAIL */}
              <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <a
                  href="mailto:info@germonizer.com"
                  className="text-gray-500 text-sm"
                >
                  info@5pgenomics.com
                </a>
              </div>

              {/* LOCATION */}
              <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-500 text-sm">
                  08-63, Mega@Woodlands, Singapore
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Contact Us
            </h2>

            <div className="w-16 h-1 bg-orange mx-auto mb-8"></div>

            <div className="flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSerIuLKgvRE4iSSZvMDYvb-uYRjpowockWBjzkIg1svGZJPRg/viewform?embedded=true"
                width="100%"
                height="900"
                className="max-w-4xl border rounded-lg"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>

          </div>
        </section>

        {/* GOOGLE MAP */}
        <section className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3380.9312330691573!2d103.8074779!3d1.4367148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da100869000001%3A0xc27777114d235fb9!2sGermonizer%20Pte%20Ltd!5e1!3m2!1sen!2sin!4v1730544888098!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="border-0"
            loading="lazy"
          ></iframe>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;