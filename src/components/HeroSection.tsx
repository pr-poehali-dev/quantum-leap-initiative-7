import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const images = [
  'https://cdn.poehali.dev/projects/6bd7db51-d28f-4ad4-aeb4-605a4fdb8fba/files/6ab8ab56-3607-431b-8bb8-cf904aeaa9ea.jpg',
  'https://cdn.poehali.dev/projects/6bd7db51-d28f-4ad4-aeb4-605a4fdb8fba/files/dc06bdbc-93f5-455f-895a-633ad5cd402e.jpg',
  'https://cdn.poehali.dev/projects/6bd7db51-d28f-4ad4-aeb4-605a4fdb8fba/files/afbe840a-e057-4d3f-a25a-af6cad3d3245.jpg',
];

const features = [
  { icon: 'Thermometer', text: 'Контроль температуры' },
  { icon: 'Wifi', text: 'Удалённое управление' },
  { icon: 'Zap', text: 'Энергоэффективность' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-8">
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500">
                  <Icon name="Flame" size={28} className="text-white" />
                </div>
                <span className="text-2xl font-semibold tracking-wide text-white">SINUM</span>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-5">
                <h1 className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
                  Интеллектуальная система<br />
                  <span className="font-medium text-orange-400">управления отоплением</span>
                </h1>
                <p className="max-w-lg text-lg font-light leading-relaxed text-white/70 md:text-xl">
                  Объединяем котлы, тепловые насосы, радиаторы и тёплый пол в единую сеть с удалённым управлением. Комфортный микроклимат — без вашего участия.
                </p>
              </div>
            </div>

            <div
              className={cn(
                'flex flex-wrap gap-6 transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2">
                  <Icon name={feature.icon} size={18} className="text-orange-400" />
                  <span className="text-sm text-white/80">{feature.text}</span>
                </div>
              ))}
            </div>

            <div
              className={cn(
                'flex gap-4 pt-2 transform transition-all duration-1000 delay-700 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-orange-600"
              >
                Получить консультацию
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 z-20 hidden items-center gap-3 text-white/40 md:flex">
        <span className="text-xs uppercase tracking-widest">TECH Controllers</span>
        <span className="text-xs">×</span>
        <span className="text-xs uppercase tracking-widest">Sinum</span>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-orange-500' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
