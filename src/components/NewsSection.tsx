const newsItems = [
  {
    image: "https://germonizer.com/images/blog/15%20People%20Nabbed%20for%20Vaping%20by%20HSA%20Sinagpore.jpg",
    title: "HSA Nabs 15 Individuals in Surprise Lunchtime CBD Vaping Operation",
    desc: "Singapore authorities continue their tough stance on vaping",
  },
  {
    image: "https://germonizer.com/images/blog/Minister%20Datuk%20Seri%20Dr%20Dzulkefly%20Ahmad.jpg",
    title: "Malaysia to Proceed with Full Ban on E-Cigarettes and Vape",
    desc: "Malaysia's government to implement a full ban on Vapes",
  },
  {
    image: "https://germonizer.com/images/blog/singapore%20ban%20etomidate.jpg",
    title: "Singapore to Crack Down on Etomidate Abusers: Shanmugam",
    desc: "Recent cases of etomidate-laced vapes prompt government action",
  },
  {
    image: "https://germonizer.com/images/blog/malaysia%20nationwide%20vape%20ban.jpg",
    title: "Malaysia to Enforce Nationwide Vape Ban by Mid-2026",
    desc: "The government cites health risks, addiction concerns and youth appeal",
  },
];

const NewsSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          News and Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group border border-border"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold text-navy mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{item.desc}</p>
                <a href="#" className="text-xs font-semibold text-orange hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
