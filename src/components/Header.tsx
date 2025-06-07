export default function Header() {
  const contactItems = [
    { icon: "location", text: "г. Донецк, ул. Буденновских Партизан, 19а" },
    { icon: "time", text: "Пн-Пт 9:00 до 17:00" },
    { icon: "telegram", text: "Telegram" },
    { icon: "whatsapp", text: "WhatsApp" },
    { icon: "phone", text: "+7-949-316-36-14" },
  ];

  const navItems = [
    { text: "Окна" },
    { text: "Галерея работ", highlighted: true },
    { text: "Контакты" },
    { text: "Остекление балконов" },
    { text: "Ремонт балконов" },
    { text: "Отзывы" },
  ];

  const featureItems = [
    { icon: "window", text: "Энергосберегающие стеклопакеты" },
    { icon: "like", text: "Качественный монтаж" },
    { icon: "temperaturePlus", text: "Высокая теплоизоляция" },
    { icon: "soundMute", text: "Улучшенная звукоизоляция" },
    { icon: "invert", text: "Цветовые решения" },
    { icon: "security", text: "Гарантия 40 лет" },
  ];

  const titleWords = ["ОКНА", "ДОНЕЦК", "ДНР"];

  return (
    <header className="">
      <div className="mx-[20%] flex justify-between py-[18px]">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <img src={`./header/${item.icon}.svg`} alt={item.icon} />
            <p className="pl-2">{item.text}</p>
          </div>
        ))}
      </div>

      <nav className="border-t border-t-(--borderHeader) py-[26px] flex items-center">
        <img className="pl-20" src="./header/logo.svg" alt="logo" />
        <div className="mx-[9%] flex justify-between flex-1 pr-52">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={item.highlighted ? "text-[#F56A38]" : ""}
            >
              {item.text}
            </a>
          ))}
        </div>
      </nav>

      <div
        className="bg-[url('./header/header.svg')] bg-cover bg-center min-h-[820px] flex justify-center items-center overflow-hidden text-center"
        style={{
          borderBottomLeftRadius: "100% 20%",
          borderBottomRightRadius: "100% 20%",
        }}
      >
        <div>
          <h1 className="mb-3 text-[#F56A38] text-[32px] font-black leading-[38px]">
            +7 949 316 36 14
          </h1>

          <div className="mb-13">
            {titleWords.map((word, index) => (
              <span
                key={word}
                className={`text-[#16192C] text-5xl font-black leading-[56px] ${
                  index === 0
                    ? "pr-5 border-r-[2px] border-r-[#ED744C]"
                    : index === 1
                    ? "px-5 border-r-[2px] border-r-[#ED744C]"
                    : "pl-5"
                }`}
              >
                {word}
              </span>
            ))}
          </div>

          <p className="text-[#16192C] text-[48px] font-bold leading-[56px] max-w-[796px] mb-5">
            Безупречное качество, профессиональная установка
          </p>

          <span className="text-[#4d4f57] text-[24px] leading-[28px]">
            Донецк и ДНР выбирают нас за качество и профессионализм
          </span>

          <button className="flex mx-auto mt-11 rounded-[8px] bg-[#F56A38] py-4 px-8 text-white mb-20">
            <img className="pr-1" src="./header/phoneWhite.svg" alt="phone" />
            Заказать звонок
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featureItems.map((item) => (
              <div
                key={item.icon}
                className="w-[243px] h-[48px] flex items-center gap-3 py-3 px-4 my-5 bg-white rounded-lg"
              >
                <img
                  src={`./header/${item.icon}.svg`}
                  alt={item.icon}
                  className="w-6 h-6"
                />
                <p className="text-gray-800 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
