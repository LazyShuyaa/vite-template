import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-3xl font-bold">Under Construction</h1>
          <p className="mt-4 text-lg">We are working hard to bring you something amazing. Stay tuned!</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
