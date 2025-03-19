import React from "react";
import { PERSONS } from "@/constants/persons";
import { PersonCard } from "@/components/person-card";

export const AboutUsPage = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex flex-col gap-3">
        <h4 className="font-bold">
          «Народная воля» – подпольное движение сопротивления в России
        </h4>
        <p>
          {" "}
          «Народная воля» – это революционная организация, борющаяся против
          диктатуры и коррупируванного режима. Мы боремся сегодня за свое
          завтра. Мы уже боремся, слово — за тобой
        </p>
        <div>
          <p className="font-semibold">Наша деятельность:</p>
          <ul className="flex flex-col gap-1 px-3">
            <li>
              {" "}
              Информационная война – разоблачение преступлений власти,
              кибератаки, поддержка независимых медиа.
            </li>
            <li>
              {" "}
              Экономический саботаж – блокировка финансовых потоков режима,
              финансирование подполья.{" "}
            </li>
            <li>
              Прямые действия – диверсии, акции сопротивления, уличный протест.
            </li>
            <li>
              Подготовка нового поколения – обучение активистов, формирование
              альтернативной политической элиты.
            </li>
          </ul>
        </div>

        <p>
          Мы не верим в компромиссы с диктатурой. Свобода не даётся – её нужно
          взять. «Народная воля» – идёт революция присойденяйся.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {PERSONS.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
    </div>
  );
};
