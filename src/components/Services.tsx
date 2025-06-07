import servicesData from "../utils/servicesData.json";

interface Service {
  bgImage: string;
  icon?: string;
  title: string;
  description?: string;
  price: string;
}

export default function Services() {
  return (
    <section className="max-w-[1640px] mx-auto mb-35">
      <h1 className="mb-17 text-[40px] font-semibold text-[#14183E]">
        Наши услуги!
      </h1>

      <div className="relative">
        <div className="hidden md:flex flex-wrap gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="flex md:hidden gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {servicesData.map((service, index) => (
            <div className="flex-shrink-0 w-[280px]">
              <ServiceCard key={index} service={service} mobile />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  mobile?: boolean;
}

function ServiceCard({ service, mobile = false }: ServiceCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col 
        ${mobile ? "w-[280px] h-[420px]" : "w-[380px] h-[500px]"}`}
    >
      <div
        className="bg-cover bg-center relative flex-grow-0"
        style={{
          backgroundImage: `url('${service.bgImage}')`,
          height: mobile ? "250px" : "322px",
        }}
      >
        {service.icon && (
          <img
            src={service.icon}
            alt="Иконка услуги"
            className="absolute top-0 right-0 m-5 w-10 h-10"
          />
        )}
      </div>

      <div className="px-4 bg-white flex flex-col justify-center flex-grow">
        <h2
          className={`font-bold text-[#14183E] mb-2 ${
            mobile ? "text-[20px]" : "text-[24px]"
          }`}
        >
          {service.title}
        </h2>
        {service.description && (
          <p
            className={`text-[#425466] mb-4 font-normal ${
              mobile ? "text-[14px]" : "text-[16px]"
            }`}
          >
            {service.description}
          </p>
        )}
        <span
          className={`text-[#14183E] font-bold ${
            mobile ? "text-[20px]" : "text-[24px]"
          }`}
        >
          {service.price}
        </span>
      </div>
    </div>
  );
}
