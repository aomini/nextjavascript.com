import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import SubHeading from '@/components/SubHeading';
import Footer from '@/components/Footer';
import Tabs from '@/components/Tabs';
import Timeline from '@/components/Timeline';

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

const Services = () => {
  return (
    <main>
      <section className='bg-primary pb-4 lg:h-screen'>
        <div className='flex flex-col h-full'>
          <Navbar />
          <div className='container py-4 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center justify-between flex-grow'>
            <div className='basis-1/2'>
              <p className='text-danger mb-1 text-lg'>Engineering Applicants</p>
              <Heading className='text-white capitalize font-light font-work-sans'>
                Complete Some reports <br />{' '}
                <span className='font-medium'>Doing Services</span>
              </Heading>
              <SubHeading
                className='text-white leading-10 font-normal'
                size='lg'
              >
                some lorem ipsum text
              </SubHeading>
            </div>
            <Image
              src='/support-team.svg'
              width={505}
              height={414}
              alt='Bunch of people in an illustration illustrating support services.'
            />
          </div>
        </div>
      </section>
      <section className='container py-12 '>
        <Heading as='h2' variant='h3'>
          Some lorem text
        </Heading>
        <p className='text-lg'>Some more lorem text</p>
        <p className='text-lg'>Here some more lorem text</p>
        <p className='text-lg'>Some more</p>

        <Heading as='h2' variant='h3'>
          What is Child death rate?
        </Heading>
        <p>some lorem text</p>

        <Heading as='h2' variant='h3'>
          Who needs Chicken Death Rate?
        </Heading>
        <p>Some more lorem ipsum text</p>
      </section>
      <Tabs className='container' data={data} />

      <section className='container mb-16'>
        <Heading as='h2' variant='h3' className='text-info'>
          How we plan
        </Heading>
        <Timeline />
      </section>
      <Footer />
    </main>
  );
};
export default Services;
