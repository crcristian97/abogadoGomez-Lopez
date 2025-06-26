import { Star, StarHalf, Star as StarOutline } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div
      className="testimonial-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 animate-fade"
      tabIndex={0}
      // aria-label removed from div, as it's not a landmark or widget role
    >
      <div className="bg-white p-8 rounded-xl shadow-lg h-full border border-gray-100 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-4">
            <StarRating count={testimonial.stars} name={testimonial.name} />
          </div>
          <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
        </div>
        <div className="flex items-center mt-2">
          <div>
            <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarRating({ count, name }) {
  // count: integer 0-5
  const fullStars = Math.floor(count);
  const hasHalf = count - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  // Use aria-label on a <span> with role="img" for the rating, not on a div
  return (
    <span
      className="flex space-x-1 text-yellow-400"
      role="img"
      aria-label={`Valoración: ${count} de 5 estrellas${name ? ` para ${name}` : ""}`}
    >
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={18} fill="#facc15" stroke="#facc15" aria-hidden="true" />
      ))}
      {hasHalf && <StarHalf size={18} fill="#facc15" stroke="#facc15" aria-hidden="true" />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOutline key={`empty-${i}`} size={18} stroke="#e5e7eb" aria-hidden="true" />
      ))}
    </span>
  );
}