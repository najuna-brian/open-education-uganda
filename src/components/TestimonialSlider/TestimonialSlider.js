import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    name: "John Mugisha",
    role: "Student, Makerere University",
    content: "Open Education Uganda has transformed my learning experience. The resources are comprehensive and easy to access.",
    avatar: "👨🏾‍🎓"
  },
  {
    id: 2,
    name: "Sarah Nalwoga",
    role: "Lecturer, Kyambogo University",
    content: "As an educator, I find this platform invaluable for supplementing my teaching materials and reaching more students.",
    avatar: "👩🏾‍🏫"
  },
  {
    id: 3,
    name: "David Ochieng",
    role: "Medical Student, Mbarara University",
    content: "The quality of medical resources available here rivals paid platforms. I recommend it to all my classmates.",
    avatar: "👨🏾‍⚕️"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-slider">
      <div className="slider-container">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`testimonial ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="testimonial-content">
              <p>"{testimonial.content}"</p>
            </div>
            <div className="testimonial-author">
              <div className="avatar">{testimonial.avatar}</div>
              <div>
                <h4>{testimonial.name}</h4>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={prevTestimonial} className="slider-button">
          &lt;
        </button>
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <button onClick={nextTestimonial} className="slider-button">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;