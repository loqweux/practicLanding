import { useState } from "react";
import sliderData from "../utils/sliderData.json";

export default function Slider() {
  const [page, setPage] = useState(0);

  const FIRST_PAGE_COUNT = 4;
  const CARD_FULL_WIDTH = 380 + 24;

  const offsetX = -page * FIRST_PAGE_COUNT * CARD_FULL_WIDTH;

  return (
    <section className="max-w-[1640px] mx-auto mb-35">
      <div className="overflow-hidden pb-4">
        <div
          className="flex gap-10 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${offsetX}px)` }}
        >
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[380px] min-h-[420px] flex flex-col bg-cover bg-center relative rounded-lg"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            >
              <div className="px-5 py-4 flex-grow">
                {slide.items.map((item, i) => (
                  <div key={i} className="mb-6">
                    <p className="text-white text-xl font-extrabold leading-none mb-3">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-white text-xl font-extrabold leading-none mb-3">
                        {item.description}
                      </p>
                    )}
                    <span className="inline-block rounded py-2 px-4 bg-white font-black 
                    text-base text-[#14183E]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto border-t border-white rounded-b-xl bg-gray-500/50">
                <p className="font-semibold text-base text-white min-h-[70px] px-4 py-[14px] 
                flex items-center">
                  Цены на работу, без учета стоимости материалов
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 flex justify-center space-x-2">
        <button
          onClick={() => setPage(0)}
          className={`w-[24px] h-[24px] rounded-full transition-colors duration-300
            ${page === 0 ? "bg-[#ED744C]" : "bg-[#FFC1A1]"}`}
          aria-label="Показать первые 4 карточки"
        />
        <button
          onClick={() => setPage(1)}
          className={`w-[24px] h-[24px] rounded-full transition-colors duration-300
            ${page === 1 ? "bg-[#ED744C]" : "bg-[#FFC1A1]"}`}
          aria-label="Показать оставшиеся карточки"
        />
      </div>
    </section>
  );
}
