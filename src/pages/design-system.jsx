import Heading from '../components/Heading';
import Subheading from '../components/SubHeading';
import Button from '@/components/Button';
import Tabs from '@/components/Tabs';
import Footer from '@/components/Footer';

const data = [
  {
    title: 'Something',
    id: 'something',
    content: `
  <p>There is something to be said about a truly disastrous meal, a meal
  forever indelible in your memory because it’s so uniquely bad, it
  can only be deemed an achievement. The sort of meal where everyone
  involved was definitely trying to do something; it’s just not
  entirely clear what. I’m not talking about a meal that’s poorly
  cooked, or a server who might be planning your murder — that sort of
  thing happens in the fat lump of the bell curve of bad. Instead, I’m
  talking about the long tail stuff — the sort of meals that make you
  feel as though the fabric of reality is unraveling. The ones that
  cause you to reassess the fundamentals of capitalism, and whether or
  not you’re living in a simulation in which someone failed to
  properly program this particular restaurant.<p> <p> The ones where you just
  know somebody’s going to lift a metal dome off a tray and reveal a
  single blue or red pill. I’m talking about those meals. At some
  point, the only way to regard that sort of experience — without
  going mad — is as some sort of community improv theater. You sit in
  the audience, shouting suggestions like, “A restaurant!” and “Eating
  something that resembles food” and “The exchange of money for goods,
  and in this instance the goods are a goddamn meal!” All of these
  suggestion go completely ignored. That is how I’ve come to regard
  our dinner at Bros, Lecce’s only Michelin-starred restaurant, as a
  means of preserving what’s left of my sanity.</p> <p>It wasn’t dinner. It
  was just dinner theater. No, scratch that. Because dinner was not
  involved. I mean — dinner played a role, the same way Godot played a
  role in Beckett’s eponymous play. The entire evening was about it,
  and guess what? IT NEVER SHOWED. There is something to be said about
  a truly disastrous meal, a meal forever indelible in your memory
  because it’s so uniquely bad, it can only be deemed an achievement.
  The sort of meal where everyone involved was definitely trying to do
  something; it’s just not entirely clear what. I’m not talking about
  a meal that’s poorly cooked, or a server who might be planning your
  murder — that sort of thing happens in the fat lump of the bell
  curve of bad. Instead, I’m talking about the long tail stuff — the
  sort of meals that make you feel as though the fabric of reality is
  unraveling. The ones that cause you to reassess the fundamentals of
  capitalism, and whether or not you’re living in a simulation in
  which someone failed to properly program this particular restaurant.
  The ones where you just know somebody’s going to lift a metal dome
  off a tray and reveal a single blue or red pill. I’m talking about
  those meals. At some point, the only way to regard that sort of
  experience — without going mad — is as some sort of community improv
  theater. You sit in the audience, shouting suggestions like, “A
  restaurant!” and “Eating something that resembles food” and “The
  exchange of money for goods, and in this instance the goods are a
  goddamn meal!” All of these suggestion go completely ignored. That
  is how I’ve come to regard our dinner at Bros, Lecce’s only
  Michelin-starred restaurant, as a means of preserving what’s left of
  my sanity. It wasn’t dinner. It was just dinner theater. No, scratch
  that. Because dinner was not involved. I mean — dinner played a
  role, the same way Godot played a role in Beckett’s eponymous play.
  The entire evening was about it, and guess what? IT NEVER SHOWED.</p>
`,
  },
  {
    title: 'Nothing',
    id: 'nothing',
    content: `
  <p>There is something to be said about a truly disastrous meal, a meal
  forever indelible in your memory because it’s so uniquely bad, it
  can only be deemed an achievement. The sort of meal where everyone
  involved was definitely trying to do something; it’s just not
  entirely clear what. I’m not talking about a meal that’s poorly
  cooked, or a server who might be planning your murder — that sort of
  thing happens in the fat lump of the bell curve of bad. Instead, I’m
  talking about the long tail stuff — the sort of meals that make you
  feel as though the fabric of reality is unraveling. The ones that
  cause you to reassess the fundamentals of capitalism, and whether or
  not you’re living in a simulation in which someone failed to
  properly program this particular restaurant.<p> <p> The ones where you just
  know somebody’s going to lift a metal dome off a tray and reveal a
  single blue or red pill. I’m talking about those meals. At some
  point, the only way to regard that sort of experience — without
  going mad — is as some sort of community improv theater. You sit in
  the audience, shouting suggestions like, “A restaurant!” and “Eating
  something that resembles food” and “The exchange of money for goods,
  and in this instance the goods are a goddamn meal!” All of these
  suggestion go completely ignored. That is how I’ve come to regard
  our dinner at Bros, Lecce’s only Michelin-starred restaurant, as a
  means of preserving what’s left of my sanity.</p> <p>It wasn’t dinner. It
  was just dinner theater. No, scratch that. Because dinner was not
  involved. I mean — dinner played a role, the same way Godot played a
  role in Beckett’s eponymous play. The entire evening was about it,
  and guess what? IT NEVER SHOWED. There is something to be said about
  a truly disastrous meal, a meal forever indelible in your memory
  because it’s so uniquely bad, it can only be deemed an achievement.
  The sort of meal where everyone involved was definitely trying to do
  something; it’s just not entirely clear what. I’m not talking about
  a meal that’s poorly cooked, or a server who might be planning your
  murder — that sort of thing happens in the fat lump of the bell
  curve of bad. Instead, I’m talking about the long tail stuff — the
  sort of meals that make you feel as though the fabric of reality is
  unraveling. The ones that cause you to reassess the fundamentals of
  capitalism, and whether or not you’re living in a simulation in
  which someone failed to properly program this particular restaurant.
  The ones where you just know somebody’s going to lift a metal dome
  off a tray and reveal a single blue or red pill. I’m talking about
  those meals. At some point, the only way to regard that sort of
  experience — without going mad — is as some sort of community improv
  theater. You sit in the audience, shouting suggestions like, “A
  restaurant!” and “Eating something that resembles food” and “The
  exchange of money for goods, and in this instance the goods are a
  goddamn meal!” All of these suggestion go completely ignored. That
  is how I’ve come to regard our dinner at Bros, Lecce’s only
  Michelin-starred restaurant, as a means of preserving what’s left of
  my sanity. It wasn’t dinner. It was just dinner theater. No, scratch
  that. Because dinner was not involved. I mean — dinner played a
  role, the same way Godot played a role in Beckett’s eponymous play.
  The entire evening was about it, and guess what? IT NEVER SHOWED.</p>
`,
  },
  {
    title: 'Everything',
    id: 'everything',
    content: `
  <p>There is something to be said about a truly disastrous meal, a meal
  forever indelible in your memory because it’s so uniquely bad, it
  can only be deemed an achievement. The sort of meal where everyone
  involved was definitely trying to do something; it’s just not
  entirely clear what. I’m not talking about a meal that’s poorly
  cooked, or a server who might be planning your murder — that sort of
  thing happens in the fat lump of the bell curve of bad. Instead, I’m
  talking about the long tail stuff — the sort of meals that make you
  feel as though the fabric of reality is unraveling. The ones that
  cause you to reassess the fundamentals of capitalism, and whether or
  not you’re living in a simulation in which someone failed to
  properly program this particular restaurant.<p> <p> The ones where you just
  know somebody’s going to lift a metal dome off a tray and reveal a
  single blue or red pill. I’m talking about those meals. At some
  point, the only way to regard that sort of experience — without
  going mad — is as some sort of community improv theater. You sit in
  the audience, shouting suggestions like, “A restaurant!” and “Eating
  something that resembles food” and “The exchange of money for goods,
  and in this instance the goods are a goddamn meal!” All of these
  suggestion go completely ignored. That is how I’ve come to regard
  our dinner at Bros, Lecce’s only Michelin-starred restaurant, as a
  means of preserving what’s left of my sanity.</p> <p>It wasn’t dinner. It
  was just dinner theater. No, scratch that. Because dinner was not
  involved. I mean — dinner played a role, the same way Godot played a
  role in Beckett’s eponymous play. The entire evening was about it,
  and guess what? IT NEVER SHOWED. There is something to be said about
  a truly disastrous meal, a meal forever indelible in your memory
  because it’s so uniquely bad, it can only be deemed an achievement.
  The sort of meal where everyone involved was definitely trying to do
  something; it’s just not entirely clear what. I’m not talking about
  a meal that’s poorly cooked, or a server who might be planning your
  murder — that sort of thing happens in the fat lump of the bell
  curve of bad. Instead, I’m talking about the long tail stuff — the
  sort of meals that make you feel as though the fabric of reality is
  unraveling. The ones that cause you to reassess the fundamentals of
  capitalism, and whether or not you’re living in a simulation in
  which someone failed to properly program this particular restaurant.
  The ones where you just know somebody’s going to lift a metal dome
  off a tray and reveal a single blue or red pill. I’m talking about
  those meals. At some point, the only way to regard that sort of
  experience — without going mad — is as some sort of community improv
  theater. You sit in the audience, shouting suggestions like, “A
  restaurant!” and “Eating something that resembles food” and “The
  exchange of money for goods, and in this instance the goods are a
  goddamn meal!” All of these suggestion go completely ignored. That
  is how I’ve come to regard our dinner at Bros, Lecce’s only
  Michelin-starred restaurant, as a means of preserving what’s left of
  my sanity. It wasn’t dinner. It was just dinner theater. No, scratch
  that. Because dinner was not involved. I mean — dinner played a
  role, the same way Godot played a role in Beckett’s eponymous play.
  The entire evening was about it, and guess what? IT NEVER SHOWED.</p>
`,
  },
];

const DesignSystem = () => {
  return (
    <main className='container'>
      <Heading className='text-6xl'>Typography</Heading>
      <Heading>Heading 1</Heading>
      <Heading as='h2'>Heading 2</Heading>
      <Heading as='h3'>Heading 3</Heading>
      <Heading as='h4'>Heading 4</Heading>
      <Heading as='h5'>Heading 5</Heading>
      <Subheading size='sm'>Small paragraph</Subheading>
      <Subheading size='md'>Medium Paragraph</Subheading>
      <Subheading size='lg'>Large Paragraph</Subheading>

      <section className='mb-4'>
        <Heading className='text-6xl'>Buttons</Heading>
        <div className='flex gap-4 items-center'>
          <Button size='lg'>Large</Button>
          <Button size='md'>Medium</Button>
          <Button size='sm'>Small</Button>
        </div>
      </section>

      <section className='mb-4'>
        <Heading className='text-6xl'>Button Color</Heading>
        <div className='flex gap-4 items-center'>
          <Button size='md' color='primary'>
            Primary
          </Button>
          <Button size='md' color='danger'>
            Danger
          </Button>
          <Button size='md' color='warning'>
            Warning
          </Button>
          <Button size='md' color='info'>
            Info
          </Button>
          <Button size='md' color='light'>
            Light
          </Button>
        </div>
      </section>

      <section className='mb-4'>
        <Heading className='text-6xl'>Button Variants</Heading>
        <div className='flex gap-4 items-center'>
          <Button size='md' color='primary' variant='contained'>
            Contained
          </Button>
          <Button size='md' color='danger' variant='outlined'>
            Outlined
          </Button>
        </div>
      </section>

      <section className='mb-4'>
        <Heading className='text-6xl'>Tabs</Heading>
        <Tabs data={data} />
      </section>
      <Footer />
    </main>
  );
};
export default DesignSystem;
