export function TrustedBy() {
  const companies = [
    { name: "TechCorp", width: "w-24" },
    { name: "InnovateCo", width: "w-28" },
    { name: "GlobalBiz", width: "w-24" },
    { name: "StartupXYZ", width: "w-28" },
    { name: "EnterpriseCo", width: "w-32" },
    { name: "CloudSoft", width: "w-24" },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Trusted by leading companies
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`${company.width} h-12 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center`}
            >
              <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
