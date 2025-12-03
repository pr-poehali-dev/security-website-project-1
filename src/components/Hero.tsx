import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Shield" size={20} />
            <span className="text-sm font-medium">Профессиональные охранные услуги с 2005 года</span>
          </div>
          
          <h1 className="font-heading md:text-7xl font-bold mb-6 leading-tight mx-0 text-7xl">ЧОО Стражник+</h1>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">Комплексные решения в сфере безопасности: пультовая и физическая охрана объектов, монтаж охранно-пожарной сигнализации и видеонаблюдение</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onContactClick}
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto"
            >
              Получить консультацию
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши услуги
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Охраняемых объектов</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Круглосуточный контроль</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">18+</div>
              <div className="text-white/80">Лет на рынке</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
}