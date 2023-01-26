import React from 'react';
import './Landing.scss';
import schemaSrc from './assets/schema.png';

const Landing = () => {
  return (
    <div className={'app-landing'}>
      <section className={'section-1'}>
        <h1 className={'section-header-1'}>Imilore Project</h1>
        <p className={'section-desc-1'}>
          Предикивный анализ сбоев серверного оборудования на основе Big Data
        </p>
      </section>
      <section className={'section-2'}>
        <h1 className={'section-header-2'}>Что это?</h1>
        <p className={'section-desc-2'}>
          Предикивный анализ сбоев серверного оборудования на основе Big Data включает в себя: сбор данных об оборудовани, обработку данных, их передачу в модель машинного обучения и возвращения в удобном формате
        </p>
      </section>
      <section className={'section-3'}>
        <h1 className={'section-header-3'}>Что мы решаем?</h1>
        <div className={'section-descriptions-3'}>
          <p className={'section-desc-3'}>
            Проблему сложности прогнозирования нагрузки
          </p>
          <p className={'section-desc-3'}>
            Проблему деградации
            и выхода из строя
            оборудования
          </p>
        </div>
      </section>
      <section className={'section-4'}>
        <h1 className={'section-header-4'}>Наше решение</h1>
        <p className={'section-desc-4'}>
          Мы предлагаем сократить ваши расходы на планирование будущих затрат, автоматизировав с помощью
          нашего приложения прогнозирование сбоев оборудования. Вы всегда сможете узнать если что-то идет не так.
        </p>
      </section>
      <section className={'section-5'}>
        <h1 className={'section-header-5'}>Как это работает?</h1>
        <img alt={'schema'} src={schemaSrc} className={'section-5-schema'} />
      </section>
      <footer className={'footer'}>
        <h3 className={'contacts'}>
          Контакты
        </h3>
        <p className={'contact'}>
          phone
        </p>
        <p className={'contact'}>
          email
        </p>
      </footer>
    </div>
  );
};

export default Landing;