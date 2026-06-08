// const partners = [
//   { name: "Tradeways", src: "https://germonizer.com/images/about/1.png" },
//   { name: "Securetec", src: "https://germonizer.com/images/about/2.png" },
//   { name: "Identa", src: "https://germonizer.com/images/about/3.png" },
//   { name: "ABF Diagnostics", src: "https://germonizer.com/images/about/4.png" },
//   { name: "Testgene", src: "https://germonizer.com/images/about/5.png" },
//   { name: "LabG", src: "https://germonizer.com/images/about/6.png" },
//   { name: "Adeldas", src: "https://germonizer.com/images/about/adeldas.jpg" },
//   { name: "Cybergram", src: "https://germonizer.com/images/about/cybergram.jpg" },
// ];

// const PartnersSection = () => {
//   return (
//     <section className="py-16 bg-gray-light overflow-hidden">
//       <div className="container mx-auto px-4 mb-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">Our Partners</h2>
//       </div>

//       {/* Infinite scroll */}
//       <div className="relative w-full overflow-hidden">
//         <div className="flex animate-scroll w-max">
//           {[...partners, ...partners, ...partners].map((p, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 mx-6 w-32 h-20 flex items-center justify-center bg-card rounded-md shadow-sm p-3"
//             >
//               <img
//                 src={p.src}
//                 alt={p.name}
//                 className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnersSection;



const partners = [
  { name: "Tradeways", src: "/assets/genomics.png" },
  { name: "Securetec", src: "/assets/gemonizer.png" },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Our Partners
        </h2>
      </div>

      {/* Static logos */}
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {partners.map((p, i) => (
          <div
            key={i}
            className="w-40 h-24 flex items-center justify-center bg-card rounded-lg shadow-md p-4"
          >
            <img
              src={p.src}
              alt={p.name}
              className="max-w-full max-h-full object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;