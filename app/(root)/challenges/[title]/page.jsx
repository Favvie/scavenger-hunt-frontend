"use client";

function page({ params }) {
  return (
    <>
      <section className="relative flex flex-col w-full px-6 pt-32 overflow-hidden text-white bg-black md:pt-40 md:px-12 Orbitron">
        <h1>
          {params?.title ? decodeURIComponent(params.title) : "not found"}
        </h1>
      </section>
    </>
  );
}

export default page;
