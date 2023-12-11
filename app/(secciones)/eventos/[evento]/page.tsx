import dynamic from 'next/dynamic';

import NotFound from "@/app/not-found";
import events from "@/data/events-posts.json";

export default function Page({ params }: { params: { evento: string } }) {
  const getEvent = events.find((event) => event.link === `/${params.evento}`);
  const DynamicEvent = dynamic(() => import(`@/app/content/events/${getEvent?.post}.mdx`), {ssr: false});

  return (
    <main className="post-wrapper">
      {getEvent?.post ? (
        <div className="post-article">
          <DynamicEvent />
        </div>
      ) : (
        <NotFound />
      )}
    </main>
  );
}