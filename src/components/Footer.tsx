import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Shield" size={28} />
              <span className="font-heading text-2xl font-bold">SecurityPro</span>
            </div>
            <p className="text-white/80">
              Надежная защита вашего бизнеса с 2005 года. Лицензированная охранная организация.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <a href="tel:+74951234567" className="hover:text-white transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={18} />
                <a href="mailto:info@security.ru" className="hover:text-white transition-colors">
                  info@security.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={18} />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-white/80">
              <li>Пультовая охрана объектов</li>
              <li>Физическая охрана объектов</li>
              <li>Монтаж ОПС</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© {currentYear} SecurityPro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
