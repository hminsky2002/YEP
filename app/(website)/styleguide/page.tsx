export default async function Page() {
  return (
    <main className="bg-gray py-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center justify-center rounded-[0.7rem] bg-white p-[2.1rem] lg:text-[2rem]">
          bg-white
        </div>
        <div className="flex items-center justify-center rounded-[0.7rem] bg-yellow p-[2.1rem] lg:text-[2rem]">
          bg-yellow
        </div>
        <div className="flex items-center justify-center rounded-[0.7rem] bg-orange p-[2.1rem] lg:text-[2rem]">
          bg-orange
        </div>
        <div className="flex items-center justify-center rounded-[0.7rem] bg-red p-[2.1rem] lg:text-[2rem]">
          bg-red
        </div>
        <div className="flex items-center justify-center rounded-[0.7rem] bg-pink p-[2.1rem] lg:text-[2rem]">
          bg-pink
        </div>
      </div>
      <div className="mt-12 flex flex-col items-start">
        <div className="mb-4 flex flex-row flex-wrap items-start gap-4">
          <span className="hxxl">Headline XXL</span>
          <pre>h1, .h1, .hxxl</pre>
        </div>
        <div className="mb-4 flex flex-row flex-wrap items-start gap-4">
          <span className="hxl">Headline XL</span>
          <pre>h2, .h2, .hxl</pre>
        </div>
        <div className="mb-4 flex flex-row flex-wrap items-start gap-4">
          <span className="hl">Headline L</span>
          <pre>h3, .h3, .hl</pre>
        </div>
        <div className="mb-4 flex flex-row flex-wrap items-start gap-4">
          <span className="medium">Medium</span>
          <pre>h4, .h4, .medium</pre>
        </div>
      </div>
    </main>
  );
}
