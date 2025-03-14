import React from "react";

export const JoinPage = () => {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          АНКЕТА ДЛЯ ЖЕЛАЮЩИХ ВСТУПИТЬ В ОРГАНИЗАЦИЮ «НАРОДНАЯ ВОЛЯ»
        </h1>

        <p className="mb-4 text-lg">
          <strong>Важно!</strong> Безопасность — превыше всего. Используйте VPN,
          Tor и защищённые соединения при заполнении этой анкеты. Ваши данные
          зашифрованы и не передаются третьим лицам.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">ЛИЧНАЯ ИНФОРМАЦИЯ</h2>
        <p className="mb-4">
          Заполняйте анонимно, настоящие данные запрашиваются позже.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Псевдоним:</strong> (обязательное поле)
          </li>
          <li>
            <strong>Возраст:</strong> (обязательное поле, только число)
          </li>
          <li>
            <strong>Город / регион проживания:</strong> (обязательное поле)
          </li>
          <li>
            <strong>
              Телефон (зашифрованный мессенджер, например, Signal, Session):
            </strong>{" "}
            (обязательное поле)
          </li>
          <li>
            <strong>
              Дополнительный способ связи (E-mail, Matrix, Ricochet и др.):
            </strong>{" "}
            (необязательно)
          </li>
          <li>
            <strong>Уровень владения иностранными языками:</strong>
            <ul className="list-inside list-disc mt-2">
              <li>Английский</li>
              <li>Немецкий</li>
              <li>Французский</li>
              <li>Китайский</li>
              <li>Другое (укажите): _______________</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">МОТИВАЦИЯ</h2>
        <p className="mb-4">(Ответы обязательны)</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Почему вы хотите вступить в «Народную волю»?</strong>{" "}
            (Кратко, 3-5 предложений.)
          </li>
          <li>
            <strong>Какие события повлияли на ваше решение?</strong>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">НАВЫКИ И ОПЫТ</h2>
        <p className="mb-4">
          (Выберите минимум одно направление, где можете быть полезны.)
        </p>
        <p className="font-semibold mb-4">Чем вы можете помочь движению?</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Информационная работа (создание контента, СМИ, соцсети)</li>
          <li>IT и кибербезопасность (анонимность, защита данных, взлом)</li>
          <li>Финансовая поддержка и экономика (переводы, сборы, логистика)</li>
          <li>
            Работа с людьми (вербовка, координация, психологическая поддержка)
          </li>
          <li>Медицинская помощь (первая помощь, тактическая медицина)</li>
          <li>
            Технические и инженерные навыки (изготовление, починка оборудования)
          </li>
          <li>
            Тактическая подготовка (самооборона, военные навыки, работа с
            оружием)
          </li>
          <li>Другое (укажите): _______________</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">УРОВЕНЬ БЕЗОПАСНОСТИ</h2>
        <p className="mb-4">(Выберите соответствующие пункты.)</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>
              Имеете ли вы опыт работы с анонимными сетями и безопасными
              каналами связи? (Tor, VPN, Signal, Tails и др.)
            </strong>
            <ul className="list-inside list-disc mt-2">
              <li>Да, опытный пользователь</li>
              <li>Частично знаком</li>
              <li>Нет, но готов(а) обучиться</li>
            </ul>
          </li>
          <li>
            <strong>
              Использовали ли вы ранее анонимные способы финансирования
              (криптовалюта, анонимные переводы и др.)?
            </strong>
            <ul className="list-inside list-disc mt-2">
              <li>Да</li>
              <li>Нет, но готов(а) обучиться</li>
            </ul>
          </li>
          <li>
            <strong>
              Знаете ли вы, как противодействовать слежке и цифровому контролю?
            </strong>
            <ul className="list-inside list-disc mt-2">
              <li>Да</li>
              <li>Частично</li>
              <li>Нет, но готов(а) обучиться</li>
            </ul>
          </li>
          <li>
            <strong>
              Были ли у вас задержания / обыски по политическим мотивам?
              (Необязательно)
            </strong>
            <ul className="list-inside list-disc mt-2">
              <li>Да</li>
              <li>Нет</li>
            </ul>
          </li>
          <li>
            <strong>
              Готовы ли вы пройти дополнительную проверку перед вступлением?
              (Обязательное поле)
            </strong>
            <ul className="list-inside list-disc mt-2">
              <li>Да</li>
              <li>Нет</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">ДРУГАЯ ИНФОРМАЦИЯ</h2>
        <p className="mb-4">(Необязательно)</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>
              Если у вас есть дополнительные комментарии, предложения или
              пожелания, укажите их здесь:
            </strong>
          </li>
        </ul>

        <p className="mb-4">
          После отправки анкеты вам придёт инструкция с дальнейшими шагами.
          Следуйте указаниям, соблюдайте меры безопасности и будьте готовы к
          проверке.
        </p>

        <p className="mb-6">
          <strong>Напишите ваши контакты для обратной связи:</strong>
        </p>
        <p className="mb-6">Телеграм, email: __________________________________</p>

        <footer className="text-center mt-6">
          <p>Мы боремся за свободу. ⚡</p>
        </footer>
      </div>
    </div>
  );
};
