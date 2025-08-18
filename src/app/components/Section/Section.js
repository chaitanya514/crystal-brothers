import React from "react";

const Section = ({ imgSrc, imageSide = "left" }) => {
  const TextBlock = (
    <div className="max-w-lg md:max-w-none">
      <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>

      <p className="mt-4 text-gray-700">
        All crystals are handcrafted locally — product images are coming soon.
        What you see is just a glimpse of the beauty we offer.
      </p>
    </div>
  );

  const ImageBlock = (
    <div>
      <img src={imgSrc} className="rounded" alt="Crystal" />
    </div>
  );

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          {imageSide === "right" ? (
            <>
              {TextBlock}
              {ImageBlock}
            </>
          ) : (
            <>
              {ImageBlock}
              {TextBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
