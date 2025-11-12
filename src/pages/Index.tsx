import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('biography');
  const [selectedImage, setSelectedImage] = useState<{ title: string; description: string; imageUrl: string } | null>(null);

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

  const galleryItems = [
    {
      title: 'Мёртвые души',
      description: 'Чичиков и его авантюра с мёртвыми душами. Карета путешествует по просторам России.',
      imageUrl: 'https://cdn.poehali.dev/projects/8abeb452-62e9-4187-89d0-e6eb793a0123/files/491fbf97-619c-4438-9d34-0f83ef070975.jpg'
    },
    {
      title: 'Ревизор',
      description: 'Комедия о мнимом ревизоре и чиновничьих пороках. «Чему смеётесь? Над собой смеётесь!»',
      imageUrl: 'https://cdn.poehali.dev/projects/8abeb452-62e9-4187-89d0-e6eb793a0123/files/9fde522f-c37d-4730-b4f1-4e0b52ddde0b.jpg'
    },
    {
      title: 'Вий',
      description: 'Мистическая повесть о философе Хоме Бруте и его страшных ночных бдениях.',
      imageUrl: 'https://cdn.poehali.dev/projects/8abeb452-62e9-4187-89d0-e6eb793a0123/files/d20b1bd9-5037-42ff-ba17-62ec9e7e3c69.jpg'
    },
    {
      title: 'Тарас Бульба',
      description: 'Эпическая повесть о казацкой вольнице, отцовской любви и трагической судьбе.',
      imageUrl: 'https://cdn.poehali.dev/projects/8abeb452-62e9-4187-89d0-e6eb793a0123/files/8a5833f9-28a3-48ba-9d74-90a1e3d572bf.jpg'
    },
    {
      title: 'Шинель',
      description: 'История маленького человека Акакия Акакиевича и его мечты о новой шинели.',
      imageUrl: 'https://cdn.poehali.dev/projects/8abeb452-62e9-4187-89d0-e6eb793a0123/files/f011059a-8560-4acd-98d1-0e6ea0ce4c8a.jpg'
    },
    {
      title: 'Нос',
      description: 'Абсурдистская повесть о майоре Ковалёве и его сбежавшем носе.',
      imageUrl: 'https://cdn.poehali.dev/projects/8abeb452-62e9-4187-89d0-e6eb793a0123/files/aeec4306-0406-4412-ab64-a97b358e9b0d.jpg'
    },
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
           }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <Card className="mb-8 bg-card/50 backdrop-blur-xl border-primary/20 shadow-2xl shadow-primary/5">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-md animate-pulse" />
                  <Avatar className="w-40 h-40 border-4 border-primary relative ring-4 ring-primary/20">
                    <AvatarImage 
                      src="https://cdn.poehali.dev/projects/8abeb452-62e9-4187-89d0-e6eb793a0123/files/fb48e0d4-ea9d-4981-9b52-7cee52a95de5.jpg" 
                      alt="Н.В. Гоголь" 
                    />
                    <AvatarFallback>НГ</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-semibold shadow-lg">
                    <Icon name="Feather" className="w-3 h-3 mr-1" />
                    Писатель
                  </Badge>
                  <p className="text-sm text-muted-foreground">Онлайн: вчера в 18:43</p>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-5xl font-black text-foreground mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Николай Васильевич Гоголь</h1>
                  <p className="text-xl text-muted-foreground italic">«Живописец русской жизни»</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" className="w-4 h-4 text-primary" />
                    <span>20 марта 1809 – 21 февраля 1852</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" className="w-4 h-4 text-secondary" />
                    <span>Москва, Российская Империя</span>
                  </div>
                </div>

                <Separator className="bg-gradient-to-r from-primary via-accent to-secondary h-0.5" />

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">Драматург</Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">Прозаик</Badge>
                  <Badge variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10">Критик</Badge>
                  <Badge variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">Публицист</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="biography" className="space-y-6" onValueChange={setActiveSection}>
          <TabsList className="grid w-full grid-cols-6 bg-card/50 backdrop-blur-xl border border-primary/20 h-auto p-2 rounded-2xl">
            <TabsTrigger 
              value="biography" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white text-sm py-3 rounded-xl transition-all duration-300"
            >
              <Icon name="BookOpen" className="w-4 h-4 mr-2" />
              Биография
            </TabsTrigger>
            <TabsTrigger 
              value="friends" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white text-sm py-3 rounded-xl transition-all duration-300"
            >
              <Icon name="Users" className="w-4 h-4 mr-2" />
              Друзья
            </TabsTrigger>
            <TabsTrigger 
              value="works" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white text-sm py-3 rounded-xl transition-all duration-300"
            >
              <Icon name="Library" className="w-4 h-4 mr-2" />
              Произведения
            </TabsTrigger>
            <TabsTrigger 
              value="quotes" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white text-sm py-3 rounded-xl transition-all duration-300"
            >
              <Icon name="Quote" className="w-4 h-4 mr-2" />
              Цитаты
            </TabsTrigger>
            <TabsTrigger 
              value="posts" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white text-sm py-3 rounded-xl transition-all duration-300"
            >
              <Icon name="FileText" className="w-4 h-4 mr-2" />
              Публикации
            </TabsTrigger>
            <TabsTrigger 
              value="gallery" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white text-sm py-3 rounded-xl transition-all duration-300"
            >
              <Icon name="Image" className="w-4 h-4 mr-2" />
              Галерея
            </TabsTrigger>
          </TabsList>

          <TabsContent value="biography" className="space-y-4 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-xl border border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">О жизни и творчестве</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground leading-relaxed">
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
                  className="bg-card/50 backdrop-blur-xl border border-primary/20 hover:shadow-2xl hover:shadow-primary/20 transition-all hover-scale cursor-pointer hover:border-primary/50"
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <Avatar className="w-20 h-20 mx-auto border-2 border-primary ring-4 ring-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-lg font-bold">
                        {friend.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-foreground">{friend.name}</h3>
                      <p className="text-sm text-primary">{friend.status}</p>
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
                  className="bg-card/50 backdrop-blur-xl border border-primary/20 hover:shadow-2xl hover:shadow-primary/20 transition-all hover-scale cursor-pointer hover:border-primary/50"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-start justify-between font-bold">
                      <span className="flex-1">{work.title}</span>
                      <Icon name="BookMarked" className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90">
                        {work.genre}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{work.year}</span>
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
                  className="bg-card/50 backdrop-blur-xl border border-accent/30 hover:shadow-2xl hover:shadow-accent/20 transition-all hover:border-accent/60"
                >
                  <CardContent className="p-6">
                    <div className="relative">
                      <Icon name="Quote" className="w-8 h-8 text-accent opacity-30 absolute -top-2 -left-2" />
                      <p className="text-lg text-foreground italic relative z-10 pl-6">
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
                className="bg-card/50 backdrop-blur-xl border border-secondary/30 hover:shadow-2xl hover:shadow-secondary/20 transition-all hover:border-secondary/60"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl text-foreground font-bold">{post.title}</CardTitle>
                    <span className="text-sm text-secondary whitespace-nowrap ml-4">{post.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{post.text}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="gallery" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-xl border border-primary/30 overflow-hidden hover:shadow-2xl hover:shadow-primary/30 transition-all hover-scale cursor-pointer group hover:border-primary"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
              <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-2xl border-2 border-primary/40">
                {selectedImage && (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                        {selectedImage.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-primary/40 shadow-2xl shadow-primary/20">
                        <img 
                          src={selectedImage.imageUrl} 
                          alt={selectedImage.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-foreground leading-relaxed text-lg">
                        {selectedImage.description}
                      </p>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </TabsContent>


        </Tabs>
      </div>

      <footer className="bg-card/30 backdrop-blur-xl border-t border-primary/20 mt-12 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <Icon name="Feather" className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="text-sm text-muted-foreground">
            © 1842 · Литературная сеть · Российская Империя
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;