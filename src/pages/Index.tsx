import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('biography');

  const friends = [
    { name: 'А.С. Пушкин', status: 'Поэт', years: '1799-1837' },
    { name: 'В.А. Жуковский', status: 'Поэт', years: '1783-1852' },
    { name: 'В.Г. Белинский', status: 'Критик', years: '1811-1848' },
    { name: 'М.С. Щепкин', status: 'Актёр', years: '1788-1863' },
  ];

  const works = [
    { title: 'Мёртвые души', year: '1842', genre: 'Поэма' },
    { title: 'Ревизор', year: '1836', genre: 'Комедия' },
    { title: 'Вий', year: '1835', genre: 'Повесть' },
    { title: 'Тарас Бульба', year: '1835', genre: 'Повесть' },
    { title: 'Шинель', year: '1842', genre: 'Повесть' },
    { title: 'Нос', year: '1836', genre: 'Повесть' },
  ];

  const quotes = [
    'Редкая птица долетит до середины Днепра',
    'Чему смеётесь? Над собой смеётесь!',
    'Боже! Как грустна наша Россия!',
    'Везде, где только выражается народ, я вижу, что он требует одного и того же',
  ];

  const posts = [
    {
      date: '15 мая 1842',
      title: 'О поэме "Мёртвые души"',
      text: 'Завершил первый том поэмы. Сколько душ перед глазами! Чичиков обрёл свою жизнь.',
    },
    {
      date: '19 апреля 1836',
      title: 'Премьера "Ревизора"',
      text: 'Комедия поставлена. Публика смеялась, но не поняла. Или я не понял публику?',
    },
    {
      date: '3 октября 1835',
      title: 'Размышления о Петербурге',
      text: 'Город контрастов и парадоксов. Здесь теряются судьбы маленьких людей.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE0] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
           }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <Card className="mb-8 bg-[#FFFBF5] border-[#C5A572] border-2 shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37] to-[#8B7355] rounded-full blur-sm" />
                  <Avatar className="w-40 h-40 border-4 border-[#D4AF37] relative">
                    <AvatarImage 
                      src="https://cdn.poehali.dev/projects/8abeb452-62e9-4187-89d0-e6eb793a0123/files/fb48e0d4-ea9d-4981-9b52-7cee52a95de5.jpg" 
                      alt="Н.В. Гоголь" 
                    />
                    <AvatarFallback>НГ</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="bg-[#D4AF37] text-[#2C1810] hover:bg-[#C5A572] font-medium">
                    <Icon name="Feather" className="w-3 h-3 mr-1" />
                    Писатель
                  </Badge>
                  <p className="text-sm text-muted-foreground">Онлайн: вчера в 18:43</p>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-5xl font-bold text-[#2C1810] mb-2">Николай Васильевич Гоголь</h1>
                  <p className="text-xl text-[#8B7355] italic">«Живописец русской жизни»</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" className="w-4 h-4 text-[#8B7355]" />
                    <span>20 марта 1809 – 21 февраля 1852</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" className="w-4 h-4 text-[#8B7355]" />
                    <span>Москва, Российская Империя</span>
                  </div>
                </div>

                <Separator className="bg-[#C5A572]" />

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-[#8B7355] text-[#2C1810]">Драматург</Badge>
                  <Badge variant="outline" className="border-[#8B7355] text-[#2C1810]">Прозаик</Badge>
                  <Badge variant="outline" className="border-[#8B7355] text-[#2C1810]">Критик</Badge>
                  <Badge variant="outline" className="border-[#8B7355] text-[#2C1810]">Публицист</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="biography" className="space-y-6" onValueChange={setActiveSection}>
          <TabsList className="grid w-full grid-cols-7 bg-[#FFFBF5] border-2 border-[#C5A572] h-auto p-1">
            <TabsTrigger 
              value="biography" 
              className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C1810] text-sm py-3"
            >
              <Icon name="BookOpen" className="w-4 h-4 mr-2" />
              Биография
            </TabsTrigger>
            <TabsTrigger 
              value="friends" 
              className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C1810] text-sm py-3"
            >
              <Icon name="Users" className="w-4 h-4 mr-2" />
              Друзья
            </TabsTrigger>
            <TabsTrigger 
              value="works" 
              className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C1810] text-sm py-3"
            >
              <Icon name="Library" className="w-4 h-4 mr-2" />
              Произведения
            </TabsTrigger>
            <TabsTrigger 
              value="quotes" 
              className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C1810] text-sm py-3"
            >
              <Icon name="Quote" className="w-4 h-4 mr-2" />
              Цитаты
            </TabsTrigger>
            <TabsTrigger 
              value="posts" 
              className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C1810] text-sm py-3"
            >
              <Icon name="FileText" className="w-4 h-4 mr-2" />
              Публикации
            </TabsTrigger>
            <TabsTrigger 
              value="gallery" 
              className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C1810] text-sm py-3"
            >
              <Icon name="Image" className="w-4 h-4 mr-2" />
              Галерея
            </TabsTrigger>
            <TabsTrigger 
              value="music" 
              className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C1810] text-sm py-3"
            >
              <Icon name="Music" className="w-4 h-4 mr-2" />
              Музыка
            </TabsTrigger>
          </TabsList>

          <TabsContent value="biography" className="space-y-4 animate-fade-in">
            <Card className="bg-[#FFFBF5] border-[#C5A572] border-2">
              <CardHeader>
                <CardTitle className="text-3xl text-[#2C1810]">О жизни и творчестве</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-[#2C1810] leading-relaxed">
                <p className="text-lg">
                  Родился в местечке Великие Сорочинцы Миргородского уезда Полтавской губернии 
                  в семье небогатого помещика. С детства проявлял интерес к литературе и театру.
                </p>
                <p>
                  В 1828 году переехал в Петербург, где начал литературную карьеру. Сближение с 
                  А.С. Пушкиным оказало значительное влияние на творческий путь.
                </p>
                <p>
                  Автор бессмертных произведений: «Вечера на хуторе близ Диканьки», «Миргород», 
                  «Ревизор», «Мёртвые души», «Петербургские повести». Создатель уникального 
                  художественного мира, сочетающего реализм с фантастикой.
                </p>
                <p>
                  Последние годы жизни провёл в религиозных исканиях и работе над вторым томом 
                  «Мёртвых душ», который был уничтожен автором незадолго до смерти.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="friends" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {friends.map((friend, index) => (
                <Card 
                  key={index} 
                  className="bg-[#FFFBF5] border-[#C5A572] border-2 hover:shadow-lg transition-all hover-scale cursor-pointer"
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <Avatar className="w-20 h-20 mx-auto border-2 border-[#D4AF37]">
                      <AvatarFallback className="bg-[#D4AF37] text-[#2C1810] text-lg font-bold">
                        {friend.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-[#2C1810]">{friend.name}</h3>
                      <p className="text-sm text-[#8B7355]">{friend.status}</p>
                      <p className="text-xs text-muted-foreground mt-1">{friend.years}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="works" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {works.map((work, index) => (
                <Card 
                  key={index} 
                  className="bg-[#FFFBF5] border-[#C5A572] border-2 hover:shadow-lg transition-all hover-scale cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-[#2C1810] flex items-start justify-between">
                      <span className="flex-1">{work.title}</span>
                      <Icon name="BookMarked" className="w-5 h-5 text-[#D4AF37] flex-shrink-0 ml-2" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-[#D4AF37] text-[#2C1810] hover:bg-[#C5A572]">
                        {work.genre}
                      </Badge>
                      <span className="text-sm text-[#8B7355]">{work.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quotes" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quotes.map((quote, index) => (
                <Card 
                  key={index} 
                  className="bg-[#FFFBF5] border-[#C5A572] border-2 hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div className="relative">
                      <Icon name="Quote" className="w-8 h-8 text-[#D4AF37] opacity-30 absolute -top-2 -left-2" />
                      <p className="text-lg text-[#2C1810] italic relative z-10 pl-6">
                        {quote}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="posts" className="space-y-4 animate-fade-in">
            {posts.map((post, index) => (
              <Card 
                key={index} 
                className="bg-[#FFFBF5] border-[#C5A572] border-2 hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl text-[#2C1810]">{post.title}</CardTitle>
                    <span className="text-sm text-[#8B7355] whitespace-nowrap ml-4">{post.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2C1810] leading-relaxed">{post.text}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="gallery" className="animate-fade-in">
            <Card className="bg-[#FFFBF5] border-[#C5A572] border-2">
              <CardContent className="p-8 text-center space-y-4">
                <Icon name="Image" className="w-16 h-16 text-[#8B7355] mx-auto opacity-50" />
                <p className="text-[#8B7355] text-lg">
                  Раздел находится в разработке. Здесь будут размещены иллюстрации к произведениям, 
                  портреты и виды эпохи.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="music" className="animate-fade-in">
            <Card className="bg-[#FFFBF5] border-[#C5A572] border-2">
              <CardContent className="p-8 text-center space-y-4">
                <Icon name="Music" className="w-16 h-16 text-[#8B7355] mx-auto opacity-50" />
                <p className="text-[#8B7355] text-lg">
                  Раздел находится в разработке. Здесь будут представлены музыкальные произведения, 
                  вдохновлённые творчеством писателя.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-[#FFFBF5] border-t-2 border-[#C5A572] mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-[#8B7355]">
          <p className="text-sm">
            © 1842 · Литературная сеть · Российская Империя
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
