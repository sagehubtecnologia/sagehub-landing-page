// app/page.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Library,
  MessageSquare,
  Lock,
  Shield,
  Zap,
  Leaf,
  DollarSign,
  Target,
  BarChart,
  User,
  Briefcase,
  Code,
} from 'lucide-react';

export default function SageHubLandingPage() {
  return (
    <main className="bg-background text-foreground">
      {/* --- Header Provisório --- */}
      <nav className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background border-b-4 border-foreground">
        <div className="flex items-center gap-2"> {/* Adicionei um div para agrupar a logo e o texto */}
          <Image
            src="/logo.png" // Caminho da sua imagem na pasta public
            alt="Logo SageHub"
            width={40} // Ajuste a largura conforme necessário
            height={40} // Ajuste a altura conforme necessário
          />
          <h1 className="text-2xl font-bold">SageHub</h1>
        </div>
      </nav>

      <div className="flex flex-col gap-24 p-4 md:p-10 max-w-6xl mx-auto">
        
        {/* --- Seção 1: Título Principal --- */}
        <section className="flex flex-col items-center text-center gap-4 py-20">
          <h1 className="text-5xl md:text-6xl font-bold">
            Menos tempo procurando. Mais tempo aprendendo.
          </h1>
          <p className="text-xl max-w-3xl">
            SageHub é a plataforma de estudo colaborativo que usa inteligência coletiva para entregar o conteúdo que realmente importa.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Para estudantes universitários e concurseiros, transformamos a frustração da busca por materiais em um processo de descoberta focado e eficiente, redefinindo o futuro do aprendizado.
          </p>
        </section>

        {/* --- Seção 2: O Problema --- */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            O maior inimigo do aprendizado é o tempo perdido.
          </h2>
          <Card className="bg-yellow border-4 border-foreground shadow-hard">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-black">
      Todos os dias, estudantes perdem horas preciosas navegando em um labirinto digital de informações desorganizadas. A 'caça ao tesouro' por materiais de estudo de qualidade em meio a fontes duvidosas e conteúdo de baixo valor não é apenas frustrante, é um desperdício de potencial que gera ansiedade e esgotamento. Cada hora gasta nessa busca infrutífera é uma hora a menos de estudo produtivo, um obstáculo real que compromete o sucesso acadêmico e profissional. Essa ineficiência sistêmica é um problema universal e silencioso que decidimos resolver de forma definitiva.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* --- Seção 3: A Solução SageHub --- */}
        <section>
          <h2 className="text-4xl font-bold mb-6 text-center">
            A resposta é a inteligência coletiva.
          </h2>
          <p className="text-lg text-center mb-8 max-w-4xl mx-auto">
            O SageHub ataca a ineficiência de frente, funcionando como um poderoso e dinâmico filtro de qualidade, alimentado pela própria comunidade de estudantes. Criamos um ecossistema que se aprimora continuamente. O mecanismo é simples, transparente e eficaz:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-blue border-4 border-foreground shadow-hard">
              <CardHeader>
                <CardTitle className="text-black">1. Compartilhamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black">
                  Usuários compartilham seus melhores e mais confiáveis materiais de estudo.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple border-4 border-foreground shadow-hard">
              <CardHeader>
                <CardTitle className="text-black">2. Avaliação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black">
                  A comunidade avalia e valida esses materiais através de notas, comentários e discussões construtivas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green border-4 border-foreground shadow-hard">
              <CardHeader>
                <CardTitle className="text-black">3. Destaque</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black">
                  O melhor conteúdo ganha destaque naturalmente, tornando-se facilmente acessível para todos.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-xl font-bold text-center text-black mt-8 p-4 bg-lime border-4 border-foreground shadow-hard">
            O resultado? Transformamos horas de busca frustrante em minutos de descoberta focada. Entregamos eficiência e confiança, permitindo que os estudantes se concentrem no que realmente importa: aprender e alcançar seus objetivos.
          </p>
        </section>

        {/* --- Seção 4: Funcionalidades Chave --- */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Ferramentas construídas para o aprendizado focado.
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <FeatureCard
              icon={<Library size={32} />}
              title="Comunidade de Conteúdo"
              text1="Acesse uma biblioteca de conhecimento rica e diversificada, com arquivos (PDFs, DOCX, etc.) validados por outros estudantes."
              text2="Faça upload, compartilhe seu conhecimento e construa sua reputação como um contribuidor de valor na plataforma."
              bgColor="bg-red"
            />
            <FeatureCard
              icon={<Target size={32} />}
              title="Roadmaps de Aprendizado"
              text1="Transforme metas abstratas em planos de ação."
              text2="Crie e personalize trilhas de estudo, organize tópicos de forma lógica e acompanhe seu progresso visualmente, mantendo uma visão clara do seu plano de desenvolvimento."
              bgColor="bg-cyan"
            />
            <FeatureCard
              icon={<MessageSquare size={32} />}
              title="Fórum Colaborativo"
              text1="Vá além dos materiais estáticos. Tire dúvidas com outros acadêmicos, responda perguntas e participe de discussões que aprofundam o conhecimento, criando uma rede de apoio e aprendizado mútuo."
              bgColor="bg-orange"
            />
            <FeatureCard
              icon={<Lock size={32} />}
              title="Comunidades Privadas"
              text1="Crie grupos de estudo restritos e seguros para colaborar com sua equipe."
              text2="É o ambiente ideal para um trabalho focado, sem distrações, permitindo o compartilhamento de informações sensíveis e a colaboração em projetos específicos."
              bgColor="bg-pink"
            />
          </div>
        </section>

        {/* --- Seção 5: Nosso Diferencial --- */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Um ecossistema baseado em respeito e sustentabilidade.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DifferentialCard
              icon={<Shield size={32} />}
              title="Respeito ao Criador de Conteúdo"
              text="No SageHub, a confiança é o nosso pilar. Combatemos o modelo predatório do mercado: o que você cria, continua sendo seu. Garantimos 100% da propriedade intelectual e uma política de privacidade com zero rastreamento. Este ambiente seguro e respeitoso é o que atrai e retém os melhores criadores, garantindo um fluxo contínuo de conteúdo de alta qualidade para a plataforma."
              bgColor="bg-gray"
            />
            <DifferentialCard
              icon={<Zap size={32} />}
              title="Modelo de Negócio Justo (Freemium)"
              text="Oferecemos acesso gratuito e ilimitado às funcionalidades essenciais de pesquisa e aprendizado. Para usuários que desejam ferramentas avançadas de organização, como os Roadmaps de Estudo Dinâmicos, oferecemos um plano Premium acessível. Este modelo nos permite crescer de forma sustentável, alinhados aos interesses dos nossos usuários, sem nunca depender de anúncios invasivos ou da venda de dados."
              bgColor="bg-purple"
            />
            <DifferentialCard
              icon={<Leaf size={32} />}
              title="Tecnologia Verde e Eficiente"
              text="Enquanto o mercado investe em soluções de IA pesadas e de alto custo energético, nós focamos em Tecnologia Verde. O SageHub é projetado para ser leve, com código otimizado e algoritmos de baixo consumo. Na prática, isso não apenas reduz nosso custo operacional e melhora a escalabilidade, mas também entrega uma plataforma mais rápida, acessível e que funciona perfeitamente em qualquer dispositivo, mesmo com conexões de internet limitadas."
              bgColor="bg-green"
            />
          </div>
        </section>

        {/* --- Seção 6: A Oportunidade de Mercado --- */}
        <section>
          <h2 className="text-4xl font-bold mb-6 text-center">
            Uma estratégia focada para um crescimento exponencial.
          </h2>
          <p className="text-lg text-center mb-8 max-w-4xl mx-auto">
            Nossa entrada no mercado começa com um foco cirúrgico em Sobral, Ceará... Este plano nos permite provar a eficácia do SageHub com risco controlado, refinar o produto com base em feedback real e, a partir daí, escalar para novos mercados com um modelo de negócio já validado e robusto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={<BarChart size={32} />}
              label="Mercado Total (TAM)"
              value="R$ 25 milhões"
              description="em Sobral"
              bgColor="bg-blue"
            />
            <StatCard
              icon={<Target size={32} />}
              label="Mercado Endereçável (SAM)"
              value="R$ 3 milhões"
              description="mirando público-alvo inicial"
              bgColor="bg-yellow"
            />
            <StatCard
              icon={<DollarSign size={32} />}
              label="Meta Inicial (SOM)"
              value="R$ 67 mil"
              description="no primeiro ano"
              bgColor="bg-lime"
            />
          </div>
        </section>

        {/* --- Seção 7: Nossa Equipe --- */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Os fundadores por trás da visão.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TeamCard
              icon={<Briefcase size={40} />}
              name="Azael"
              role="Líder Administrativo e de Marketing"
              bgColor="bg-orange"
            />
            <TeamCard
              icon={<User size={40} />}
              name="Anderson"
              role="Tech Lead"
              bgColor="bg-cyan"
            />
            <TeamCard
              icon={<Code size={40} />}
              name="Igor"
              role="Líder de Backend"
              bgColor="bg-red"
            />
          </div>
          <p className="text-lg text-center mt-8 italic max-w-3xl mx-auto">
            Somos uma equipe multidisciplinar que une visão de negócio, liderança técnica e expertise em desenvolvimento, movidos pela paixão de transformar a educação através da tecnologia.
          </p>
        </section>

        {/* --- Seção 8: Chamada para Ação --- */}
        <section className="py-20">
          <Card className="bg-foreground text-background border-4 border-foreground shadow-hard">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex-2">
                  <h2 className="text-4xl font-bold mb-4">
                    Junte-se a nós na construção do futuro da educação.
                  </h2>
                  <p className="text-lg mb-4">
                    O SageHub é mais do que uma plataforma; é um plano claro para construir um ecossistema de aprendizado mais inteligente, eficiente e sustentável. Esta é uma oportunidade de investir em uma solução com um modelo de negócio validado, uma estratégia de mercado clara e um imenso potencial de impacto.
                  </p>
                  <p className="text-lg font-bold">
                    Estamos buscando investidores que compartilhem nossa visão e queiram fazer parte da próxima grande inovação em EdTech no Brasil.
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <Button
                    className="w-full bg-lime text-black shadow-hard hover:bg-lime/90 text-lg p-6"
                  >
                    Entre em contato e vamos conversar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* --- Footer --- */}
      <footer className="p-6 border-t-4 border-foreground text-center">
        <p>© {new Date().getFullYear()} SageHub. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

// --- Componentes Reutilizáveis (Estilo Tailwind/Shadcn) ---
// (Você pode movê-los para seus próprios arquivos em /components)

const FeatureCard = ({ icon, title, text1, text2, bgColor }) => (
  <Card className={`w-full md:w-[calc(50%-1.5rem)] max-w-lg ${bgColor} border-4 border-foreground shadow-hard`}>
    <CardHeader>
      <div className="flex flex-col gap-3 text-black">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex flex-col gap-2 text-black">
      <p>{text1}</p>
      {text2 && <p>{text2}</p>}
    </CardContent>
  </Card>
);

const DifferentialCard = ({ icon, title, text, bgColor }) => (
  <Card className={`${bgColor} border-4 border-foreground shadow-hard flex flex-col`}>
    <CardHeader>
      <div className="flex flex-col gap-3 text-black">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex-1 text-black">
      <p>{text}</p>
    </CardContent>
  </Card>
);

const StatCard = ({ icon, label, value, description, bgColor }) => (
  <Card className={`${bgColor} border-4 border-foreground shadow-hard`}>
    <CardContent className="pt-6">
      <div className="flex flex-col items-center gap-2 text-center text-black">
        {icon}
        <p className="text-sm font-bold uppercase">{label}</p>
        <p className="text-4xl font-bold">{value}</p>
        <p className="text-sm">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const TeamCard = ({ icon, name, role, bgColor }) => (
  <Card className={`${bgColor} border-4 border-foreground shadow-hard`}>
    <CardContent className="pt-6">
      <div className="flex flex-col items-center gap-2 text-center text-black">
        {icon}
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="font-semibold">{role}</p>
      </div>
    </CardContent>
  </Card>
);