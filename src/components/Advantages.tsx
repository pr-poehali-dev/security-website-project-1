import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Award',
    title: 'Лицензия и сертификаты',
    description: 'Все необходимые разрешительные документы и страхование ответственности'
  },
  {
    icon: 'Clock',
    title: 'Быстрое реагирование',
    description: 'Экипаж прибывает на объект в течение 5-7 минут после сигнала тревоги'
  },
  {
    icon: 'UserCheck',
    title: 'Опытные специалисты',
    description: 'Регулярное обучение персонала и повышение квалификации'
  },
  {
    icon: 'Settings',
    title: 'Современное оборудование',
    description: 'Используем только проверенные технологии и системы безопасности'
  },
  {
    icon: 'FileText',
    title: 'Прозрачная отчетность',
    description: 'Подробные отчеты о работе и событиях на объекте'
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Поддержка 24/7',
    description: 'Круглосуточная диспетчерская служба и техническая поддержка'
  }
];

export default function Advantages() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-primary">
            Наши преимущества
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Почему более 500 компаний выбирают нас для обеспечения своей безопасности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg hover:bg-secondary transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon name={advantage.icon as any} size={28} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-primary">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
