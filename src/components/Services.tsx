import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'MonitorSmartphone',
    title: 'Пультовая охрана объектов',
    description: 'Круглосуточный мониторинг и контроль охранных систем с мгновенным реагированием на тревожные сигналы. Современное оборудование и квалифицированные операторы. Бесплатное мобильное приложение для контроля объекта.'
  },
  {
    icon: 'Users',
    title: 'Физическая охрана объектов',
    description: 'Профессиональные сотрудники службы безопасности обеспечивают надежную защиту вашего бизнеса. Лицензированные охранники с опытом работы.'
  },
  {
    icon: 'Wifi',
    title: 'Монтаж ОПС',
    description: 'Установка и настройка охранно-пожарной сигнализации под ключ. Проектирование, монтаж и техническое обслуживание систем безопасности.'
  },
  {
    icon: 'Video',
    title: 'Видеонаблюдение',
    description: 'Установка современных систем видеонаблюдения с возможностью удаленного просмотра. HD-камеры, запись и хранение архива, интеграция с охранными системами.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-primary">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексные решения по обеспечению безопасности для бизнеса любого масштаба
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={32} className="text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}