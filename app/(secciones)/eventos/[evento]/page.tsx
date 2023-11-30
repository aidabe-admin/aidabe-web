import NotFound from "@/app/not-found";
import events from "@/data/events-posts.json";
import Event from "@/app/content/event-1.mdx";

export default function Page({ params }: { params: { evento: string } }) {
  const getEvent = events.find((event) => event.link === `/${params.evento}`);

  return (
    <main className="event-post-wrapper">
      {getEvent ? (
        <div className="event-post">
          <Event />
        </div>
      ) : (
        <NotFound />
      )}
    </main>
  );
}