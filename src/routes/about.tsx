import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, HeartHandshake, MapPin, Users } from "lucide-react";

const journey = [
    {
        year: "2012",
        title: "The Beginning",
        description:
            "The journey of Stanley Suresh Ministries began in January 2012. Pastor Stanley started his independent prayer ministry in Adambakkam, later expanding to Choolaimedu.",
    },
    {
        year: "Early Years",
        title: "Expanding the Ministry",
        description:
            "Through individual prayer, phone prayer, and personal counselling, Pastor Stanley began reaching people in different locations, including Coimbatore, Tirunelveli, Trichy, Bangalore, Sirkazhi, Chengalpattu, Nanganallur, Anna Nagar, Adambakkam, and Choolaimedu.",
    },
    {
        year: "June 2017",
        title: "Regular Prayer Meetings",
        description:
            "Regular prayer meetings began with around 40–50 people and gradually grew to gatherings of 100+ people.",
    },
    {
        year: "COVID-19",
        title: "Going Online",
        description:
            "During the COVID-19 period, Pastor Stanley began a regular Saturday night online prayer meeting, which continues today through Zoom, YouTube, and Facebook.",
    },
    {
        year: "Today",
        title: "A Growing Ministry",
        description:
            "The ministry continues through physical prayer meetings, online gatherings, personal prayer, Gospel ministry, and community outreach.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-ivory text-navy">
            {/* Hero */}
            <section className="relative overflow-hidden bg-navy-gradient py-24 text-ivory lg:py-32">
                <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
                <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
                    <p className="eyebrow font-bold text-gold">
                        ABOUT STANLEY SURESH MINISTRIES
                    </p>

                    <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        A Journey Built on{" "}
                        <span className="text-gold-gradient">
                            Prayer, Faith &amp; Service
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ivory/80 sm:text-lg">
                        Since 2012, Stanley Suresh Ministries has been serving people
                        through prayer, deliverance ministry, Gospel ministry, spiritual
                        encouragement, and community outreach.
                    </p>
                </div>
            </section>

            {/* Meet Evangelist Stanley Suresh */}
            <section className="bg-ivory py-14 lg:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold uppercase">
                                <span className="h-px w-8 bg-gold" />
                                01 · The Beginning of the Calling
                            </div>

                            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                                Called to Serve Through Prayer
                            </h2>
                        </div>

                        <div className="space-y-5 text-base leading-relaxed text-slate lg:col-span-7">
                            <p>
                                Evangelist Stanley Suresh began his ministry journey as a
                                worship leader. While leading worship, Pastor Stanley witnessed
                                people experiencing what he understood as deliverance and
                                spiritual breakthrough.
                            </p>

                            <p>
                                This led Pastor Stanley to recognize a calling toward prayer
                                and deliverance ministry. What began with small prayer
                                gatherings gradually grew into regular meetings and ministry
                                invitations across different locations.
                            </p>

                            <p>
                                Today, Pastor Stanley continues to serve through prayer
                                meetings, personal prayer, online ministry, and community
                                outreach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Calling */}
            <section className="bg-white py-14 lg:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-12">
                        <div className="rounded-2xl bg-navy p-8 text-ivory shadow-card lg:col-span-5 lg:p-10">
                            <BookOpen className="h-10 w-10 text-gold" />

                            <p className="mt-8 text-xs font-bold tracking-widest text-gold uppercase">
                                02 · The Calling
                            </p>

                            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
                                A Calling Strengthened Through a Difficult Season
                            </h2>
                        </div>

                        <div className="space-y-5 text-base leading-relaxed text-slate lg:col-span-7 lg:pt-4">
                            <p>
                                During a difficult season when his parents were hospitalized
                                and his wife suffered an accident, Pastor Stanley continued
                                praying for people and receiving testimonies of deliverance.
                            </p>

                            <p>
                                In the midst of his struggles, Pastor Stanley describes hearing
                                the devil tell him to stop praying for people's deliverance and
                                leave the ministry. But God spoke to him, telling him not to
                                leave the calling and reminding him of the special anointing
                                given to him for deliverance ministry.
                            </p>

                            <p>
                                This became a turning point. Through fasting and prayer, Pastor
                                Stanley became even more committed to the calling he believed
                                God had given him.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ministry Journey */}
            <section className="bg-ivory py-14 lg:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-bold tracking-widest text-gold uppercase">
                            03 · The Ministry Journey
                        </p>

                        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                            From Small Beginnings to a Growing Ministry
                        </h2>
                    </div>

                    <div className="relative mx-auto mt-14 max-w-5xl">
                        <div className="absolute left-[23px] top-0 hidden h-full w-px bg-gold/30 md:block" />

                        <div className="space-y-5">
                            {journey.map((item) => (
                                <div
                                    key={item.year}
                                    className="relative grid gap-5 md:grid-cols-[180px_1fr] md:gap-10"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-gold">
                                            <span className="text-xs font-bold">●</span>
                                        </div>

                                        <div className="pt-3 md:hidden">
                                            <p className="font-bold text-gold">{item.year}</p>
                                        </div>

                                        <p className="hidden pt-3 font-bold text-gold md:block">
                                            {item.year}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-gold/15 bg-white p-7 shadow-card">
                                        <h3 className="font-display text-2xl font-bold text-navy">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ministry Beyond the Church */}
            <section className="bg-white py-14 lg:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-5">
                            <HeartHandshake className="h-12 w-12 text-gold" />

                            <p className="mt-8 text-xs font-bold tracking-widest text-gold uppercase">
                                04 · Ministry Beyond the Church
                            </p>

                            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
                                Serving People in Practical Ways
                            </h2>

                            <p className="mt-5 text-base leading-relaxed text-slate">
                                Pastor Stanley's ministry also extends beyond prayer meetings
                                through ministry training and community service.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
                            <div className="rounded-2xl border border-gold/15 bg-ivory p-7">
                                <Users className="h-8 w-8 text-gold" />

                                <h3 className="mt-5 text-xl font-bold text-navy">
                                    Ministry Training
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-slate">
                                    Three-day ministry seminars have been conducted to train and
                                    prepare people for ministry, including teaching on prayer and
                                    deliverance ministry.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gold/15 bg-ivory p-7 sm:col-span-2">
                                <MapPin className="h-8 w-8 text-gold" />

                                <h3 className="mt-5 text-xl font-bold text-navy">
                                    Community Outreach
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-slate">
                                    Through Kanmalai Charitable Trust, founded by Pastor Stanley,
                                    the ministry has supported communities through:
                                </p>

                                <ul className="mt-5 grid gap-3 text-sm text-slate sm:grid-cols-2">
                                    <li>• Blood donation initiatives</li>
                                    <li>• Food and clothing for elderly people</li>
                                    <li>• Children's home visits and prayer</li>
                                    <li>• Clothing support for children</li>
                                    <li>• Laptops for college students</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Today */}
            <section className="bg-navy-gradient py-14 text-ivory lg:py-20">
                <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
                    <p className="text-xs font-bold tracking-widest text-gold uppercase">
                        05 · Today
                    </p>

                    <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                        The Journey Continues
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ivory/80 sm:text-lg">
                        Today, Stanley Suresh Ministries continues to reach people through
                        prayer meetings, deliverance ministry, online prayer, Gospel
                        ministry, ministry training, and community outreach.
                    </p>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-ivory/80 sm:text-lg">
                        From a small beginning in 2012 to a growing ministry serving people
                        both physically and online, Pastor Stanley continues the journey
                        with a commitment to prayer, faith, service, and the Gospel of
                        Jesus Christ.
                    </p>

                    <div className="mt-10 rounded-2xl border border-gold/30 bg-white/5 p-8 backdrop-blur-sm">
                        <p className="font-display text-2xl font-bold text-gold sm:text-3xl">
                            Need Prayer?
                        </p>

                        <p className="mt-2 text-ivory/80">
                            You don't have to walk alone.
                        </p>

                        <div className="mt-7 flex flex-wrap justify-center gap-4">
                            <a href="#prayer-request" className="btn-gold">
                                Request Prayer
                                <ArrowRight className="h-4 w-4" />
                            </a>

                            <a href="/#schedule" className="btn-outline-light">
                                Join a Prayer Meeting
                            </a>
                             {/* Back to Home Button */}
        <div className="flex justify-center py-12">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold hover:text-navy"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </a>
        </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export const Route = createFileRoute("/about")({
    component: AboutPage,
});
