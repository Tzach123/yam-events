import React from "react";
import classes from "./photosFromEvents.module.css";
import img1 from "../../image/photosFromEvents/1.jpg";
import img3 from "../../image/photosFromEvents/3.jpg";
import img5 from "../../image/photosFromEvents/5.jpg";
import img6 from "../../image/photosFromEvents/6.jpg";
import img8 from "../../image/photosFromEvents/8.jpg";

interface PhotosFromEventsProps {
  ifPlayAnimationPhotosFromEvent: boolean;
}

const PhotoCard: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className = "",
}) => (
  <figure className={`relative m-0 overflow-hidden rounded-2xl group shadow-md ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 rounded-2xl" />
  </figure>
);

const PhotosFromEvents: React.FC<PhotosFromEventsProps> = ({
  ifPlayAnimationPhotosFromEvent,
}) => {
  return (
    <section className="w-full bg-[#f2f1ef] py-12 px-4 md:px-8 lg:px-12" dir="rtl">
      <div
        className={`max-w-7xl mx-auto flex flex-col gap-4 ${
          ifPlayAnimationPhotosFromEvent ? classes.animateIn : "opacity-0"
        }`}
      >
        {/* Row 1: Editorial strip — text + hero image */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Text card */}
          <div className="lg:w-1/3 bg-[#413f3d] text-white rounded-2xl p-8 flex flex-col justify-center gap-4 shadow-md">
            <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-white">
              האירוע שלכם הציוד שלנו...
            </h2>
            <h3 className="text-base font-semibold text-gray-200 leading-relaxed">
              גם אתם עומדים לקראת אירוע? ים אירועים זאת הבחירה שלך
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              מעניק ללקוחותיו את כל הציוד הנדרש לאירוע המושלם...
            </p>
          </div>

          {/* Hero image */}
          <PhotoCard
            src={img8}
            alt="תמונה מהאירוע - ים אירועים"
            className="lg:w-2/3 aspect-video lg:aspect-auto lg:min-h-72"
          />
        </div>

        {/* Row 2: 4-column photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <PhotoCard src={img6} alt="תמונה מאירוע 6" className="aspect-square" />
          <PhotoCard src={img1} alt="תמונה מאירוע 1" className="aspect-square" />
          <PhotoCard src={img3} alt="תמונה מאירוע 3" className="aspect-square" />
          <PhotoCard src={img5} alt="תמונה מאירוע 5" className="aspect-square" />
        </div>

        {/* Row 3: Full-width CTA text band */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#413f3d]">
            הפקת אירוע
          </h2>
          <p className="text-[#413f3d] text-sm md:text-base leading-relaxed max-w-3xl">
            היא משימה שנראית כמעט בלתי אפשרית במבט ראשון, ואכן למרביתנו אין את
            הידע, ההיכרות והיכולות הנדרשות על מנת להפיק אירוע בצורה מקצועית. יחד
            נבחר את הקונספט ואת השילוב המושלם, נפיק את האירוע בצורה הטובה ביותר.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotosFromEvents;
