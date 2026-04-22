import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-20 flex-grow">

        {/* HERO SECTION */}
        <section className="bg-[url('/images/bg.jpg')] bg-cover bg-center py-20 text-white relative">
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative container mx-auto px-4 text-center">
            <span className="uppercase tracking-widest text-sm">
              Contact Us
            </span>

            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mt-4 leading-snug">
              Get in Touch with 5P Genomics
            </h1>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="py-16">
          <div className="container mx-auto px-4">

            <div className="grid md:grid-cols-2 gap-6 text-center">

              {/* CALL */}
              <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-white">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-lg">Call Us</h3>

                <a
                  href="tel:+2340000000000"
                  className="text-gray-500 text-sm block mt-2 hover:text-black"
                >
                  +234 5P GENOMICS
                </a>
              </div>

              {/* EMAIL */}
              <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-white">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-semibold text-lg">Email Us</h3>

                <a
                  href="mailto:info@5pgenomics.com"
                  className="text-gray-500 text-sm block mt-2 hover:text-black"
                >
                  info@5pgenomics.com
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* OPTIONAL CTA (prevents empty page feel) */}
        <section className="pb-16 text-center">
          {/* <p className="text-gray-600">
            We typically respond within 24 hours.
          </p> */}
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;