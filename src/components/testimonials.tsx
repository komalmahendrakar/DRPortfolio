'use client';

/**
 * @fileOverview PatientReviews — Hero review + horizontal scroll strip.
 * Merges Google reviews and testimonials into one unified section.
 */

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

// ─── Data ────────────────────────────────────────────────────────────────────

const heroReview = {
  name: "Naresh Acharjee",
  location: "Coochbehar, West Bengal",
  rating: 5,
  postedAt: "2 years ago",
  isGoogle: true,
  // Place naresh.png inside your /public/images/ folder
  profilePhoto: "/images/naresh2.png" as string | null,
  shortText: `I am 68 years old and writing this review for the first time on Google. Before I met Dr. Poornesh, big hospitals like NIMANS failed to diagnose my disease even after multiple tests. But he diagnosed me perfectly on the very first visit and operated at a very low cost.`,
  fullText: `I am 68 years old and I am writing this review for the first time on Google. I came to visit Dr. Poornesh's chamber in United Hospital after reading previous reviews written by his former patients. I am feeling much better now with his kind behaviour and responsible medical care. Before I met him, I spent a lot of money in different places over the years — big hospitals like NIMANS failed to diagnose my disease even after seeing the symptoms and multiple tests. But Dr. Poornesh diagnosed my disease perfectly in my very first visit and operated on me in a very short time at a very low cost. His service and regular inquiries have increased my respect and trust in him. You have freed me from excruciating pain. I can now walk well. Good doctors are rare and not easy to find, but you are truly the best in India. God bless you, son. I am recommending Dr. Poornesh Gowda to all of you — if you have any orthopaedic problem or if all your efforts have been exhausted already, do not lose hope. Dr. Poornesh Gowda, best orthopaedic surgeon and spine specialist, is there for you.`,
};

const scrollReviews = [

  {
    name: "",
    rating: 5,
    postedAt: null,
    isGoogle: false,
    profilePhoto: null,
    image: PlaceHolderImages.find((img) => img.id === "testimonial-1")?.imageUrl ?? null,
    text: "Building trust through compassionate communication and patient education.",
  },
  {
    name: "",
    rating: 5,
    postedAt: null,
    isGoogle: false,
    profilePhoto: null,
    image: PlaceHolderImages.find((img) => img.id === "testimonial-2")?.imageUrl ?? null,
    text: "Engaging with leading medical professionals to stay at the forefront of spine surgery advancements.",
  },
  {
    name: "",
    rating: 5,
    postedAt: null,
    isGoogle: false,
    profilePhoto: null,
    image: PlaceHolderImages.find((img) => img.id === "testimonial-3")?.imageUrl ?? null,
    text: "Committed to patient-centered care and evidence-based spine treatment.",
  },
  {
    name: "",
    rating: 5,
    postedAt: null,
    isGoogle: false,
    profilePhoto: null,
    image: PlaceHolderImages.find((img) => img.id === "testimonial-4")?.imageUrl ?? null,
    text: "Performing advanced minimally invasive spine surgery with a skilled surgical team.",
  },
  {
    name: "",
    rating: 5,
    postedAt: null,
    isGoogle: false,
    profilePhoto: null,
    image: PlaceHolderImages.find((img) => img.id === "testimonial-5")?.imageUrl ?? null,
    text: "Representing and collaborating with experts at the Annual Conference of the Association of Spine Surgeons of India (ASSICON).",
  },
  {
    name: "",
    rating: 5,
    postedAt: null,
    isGoogle: false,
    profilePhoto: null,
    image: PlaceHolderImages.find((img) => img.id === "testimonial-6")?.imageUrl ?? null,
    text: "Utilizing cutting-edge endoscopic techniques for safer and faster spine recovery.",
  },
  {
    name: "",
    rating: 5,
    postedAt: null,
    isGoogle: false,
    profilePhoto: null,
    image: PlaceHolderImages.find((img) => img.id === "testimonial-7")?.imageUrl ?? null,
    text: "Dedicated to providing precise diagnosis and personalized treatment for every patient.",
  },
  {
    name: "",
    rating: 5,
    postedAt: null,
    isGoogle: false,
    profilePhoto: null,
    image: PlaceHolderImages.find((img) => img.id === "testimonial-8")?.imageUrl ?? null,
    text: "Honored with a traditional welcome during a medical outreach visit in rural Assam, reflecting a commitment to bringing advanced spine care closer to communities.",
  },
  {
    name: "Sahil Bhargava",
    rating: 5,
    postedAt: "2 years ago",
    isGoogle: true,
    profilePhoto: null,
    image: null,
    text: "I got my ACL reconstruction surgery done from Dr Poornesh and I can't stress on how well he has done it. Not only did he perform the surgery flawlessly, but also ensured everything goes smooth pre and post-op. He is a really humble and knowledgeable doctor 👍🌟",
  },
  {
    name: "Rangegowda CD",
    rating: 5,
    postedAt: "2 years ago",
    isGoogle: true,
    profilePhoto: null,
    image: null,
    text: "One of the best doctors. I was having back pain for the past 10 years. I consulted many doctors but after I met Dr. Poornesh, got operated, and it cleared completely. He is having magic in his hands. Overall excellent experience.",
  },

];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const avatarColors = [
  "#0d6e6e", "#1a5276", "#6e2f0d", "#2d6e0d", "#6e0d5a",
  "#0d3b6e", "#6e5a0d", "#3b0d6e", "#0d6e3b", "#6e0d1a",
];

function avatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  return avatarColors[hash % avatarColors.length];
}

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={s <= rating ? "#f59e0b" : "rgba(255,255,255,0.3)"}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "white",
        fontSize: 11,
        fontWeight: 800,
        color: "#4285F4",
        flexShrink: 0,
        boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        fontFamily: "sans-serif",
      }}
    >
      G
    </span>
  );
}

function InitialsAvatar({ name, size = 48 }: { name: string; size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: avatarColor(name),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.35,
        fontWeight: 700,
        color: "white",
        flexShrink: 0,
        fontFamily: "Georgia, serif",
        letterSpacing: 1,
      }}
    >
      {getInitials(name)}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function ReviewModal({ onClose }: { onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(145deg, #0a2540, #0d4040)",
          borderRadius: 20,
          maxWidth: 640,
          width: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "2.5rem",
          position: "relative",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%",
            width: 32,
            height: 32,
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
          <InitialsAvatar name={heroReview.name} size={52} />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <p style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", margin: 0, fontFamily: "Georgia, serif" }}>
                {heroReview.name}
              </p>
              <GoogleBadge />
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", margin: "3px 0 6px", fontFamily: "sans-serif" }}>
              {heroReview.location} · {heroReview.postedAt}
            </p>
            <StarRating rating={heroReview.rating} size={15} />
          </div>
        </div>

        {/* Full review */}
        <p
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "1rem",
            lineHeight: 1.85,
            margin: 0,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          \"{heroReview.fullText}\"
        </p>

        {/* Verified badge */}
        <div style={{ marginTop: "1.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 100,
              padding: "5px 14px",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <GoogleBadge />
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", fontFamily: "sans-serif" }}>
              Verified Google Review
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero Card ────────────────────────────────────────────────────────────────

function HeroReviewCard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <ReviewModal onClose={() => setModalOpen(false)} />}

      <div
        style={{
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          height: 520,
          boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "#0a1a2a",
        }}
      >
        {/* Full background image */}
        {heroReview.profilePhoto ? (
          <Image
            src={heroReview.profilePhoto}
            alt={heroReview.name}
            fill
            style={{ objectFit: "contain", objectPosition: "center top" }}
            priority
          />
        ) : (
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, #0a2540, #0d4f4f)",
          }} />
        )}

        {/* Dark gradient scrim — stronger at bottom for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        {/* Decorative large quote */}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 28,
            fontSize: 140,
            lineHeight: 1,
            color: "rgba(255,255,255,0.12)",
            fontFamily: "Georgia, serif",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          \"
        </div>

        {/* Google badge top-right */}
        <div style={{ position: "absolute", top: 16, right: 16, zIndex: 2 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: 100,
            padding: "4px 10px",
            border: "1px solid rgba(255,255,255,0.25)",
          }}>
            <GoogleBadge />
            <span style={{ color: "white", fontSize: "0.72rem", fontFamily: "sans-serif", fontWeight: 600 }}>
              Google Review
            </span>
          </div>
        </div>

        {/* Glass content overlay at bottom — collapses to 1 line, expands on hover */}
        <div
          className="hero-glass-overlay"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            zIndex: 2,
            overflow: "hidden",
            transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), padding 0.3s ease",
            maxHeight: "56px",
            padding: "0 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Collapsed line — always visible */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "56px",
            flexShrink: 0,
          }}>
            <p style={{ color: "white", fontWeight: 700, fontSize: "1rem", margin: 0, fontFamily: "Georgia, serif" }}>
              {heroReview.name}
            </p>
            <StarRating rating={heroReview.rating} size={16} />
          </div>

          {/* Expanded content — hidden until hover */}
          <div style={{ paddingBottom: "1.5rem" }}>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem", margin: "0 0 10px", fontFamily: "sans-serif" }}>
              {heroReview.location} · {heroReview.postedAt}
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                margin: "0 0 14px",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
              }}
            >
              \"{heroReview.shortText}\"
            </p>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 100,
                color: "white",
                fontSize: "0.8rem",
                fontWeight: 600,
                padding: "7px 18px",
                cursor: "pointer",
                fontFamily: "sans-serif",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s, transform 0.15s",
                letterSpacing: "0.3px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.25)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              Read full review ↗
            </button>
          </div>
        </div>

        {/* Hover expand style */}
        <style>{`
          .hero-glass-overlay:hover {
            max-height: 320px !important;
            padding-top: 0 !important;
          }
        `}</style></div>
    </>
  );
}

// ─── Scroll Strip Card ────────────────────────────────────────────────────────

function ScrollCard({ review }: { review: typeof scrollReviews[0] }) {
  const hasImage = !!review.image;

  return (
    <div
      style={{
        flexShrink: 0,
        width: 260,
        height: 300,
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        background: hasImage
          ? "transparent"
          : "linear-gradient(145deg, #0a2540, #1a3a5c)",
        border: "1px solid rgba(255,255,255,0.08)",
        cursor: "default",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.28)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.18)";
      }}
    >
      {/* Background image */}
      {hasImage && (
        <Image
          src={review.image!}
          alt={review.name}
          fill
          style={{ objectFit: "cover" }}
        />
      )}

      {/* No-image: initials centered */}
      {!hasImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <InitialsAvatar name={review.name} size={72} />
        </div>
      )}

      {/* Gradient scrim for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hasImage
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
        }}
      />

      {/* Google badge top-right */}
      {review.isGoogle && (
        <div style={{ position: "absolute", top: 12, right: 12, zIndex: 2 }}>
          <GoogleBadge />
        </div>
      )}

      {/* Glass overlay bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "14px 16px",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <p style={{ color: "white", fontWeight: 600, fontSize: "0.82rem", margin: 0, fontFamily: "Georgia, serif" }}>
            {review.name}
          </p>
          {review.postedAt && (
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.7rem", fontFamily: "sans-serif" }}>
              · {review.postedAt}
            </span>
          )}
        </div>
        <StarRating rating={review.rating} size={12} />
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "0.75rem",
            lineHeight: 1.5,
            margin: "6px 0 0",
            fontFamily: "sans-serif",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {review.text}
        </p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function Testimonials() {
  const stripRef = useRef<HTMLDivElement>(null);

  // Mouse drag scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    startX.current = e.pageX - (stripRef.current?.offsetLeft ?? 0);
    scrollLeft.current = stripRef.current?.scrollLeft ?? 0;
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (stripRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.2;
    if (stripRef.current) stripRef.current.scrollLeft = scrollLeft.current - walk;
  }
  function onMouseUp() { isDragging.current = false; }

  return (
    <section
      style={{
        width: "100%",
        padding: "5rem 0",
        background: "#e0f2fe",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          {/* Google rating pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "white",
              borderRadius: 100,
              padding: "6px 16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              marginBottom: "1.25rem",
            }}
          >
            <GoogleBadge />
            <StarRating rating={5} size={14} />
            <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a", fontFamily: "Georgia, serif" }}>
              5.0
            </span>
            <span style={{ color: "#888", fontSize: "0.8rem", fontFamily: "sans-serif" }}>
              · Rated on Google
            </span>
          </div>

          <h2
            className="font-headline"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#0a2540",
              margin: "0 0 0.75rem",
              letterSpacing: "-0.5px",
            }}
          >
            What Our Patients Say
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem", margin: 0, fontFamily: "sans-serif" }}>
            Real stories from patients treated by Dr. Poornesh Gowda
          </p>
        </div>

        {/* Hero Review */}
        <div style={{ marginBottom: "2rem" }}>
          <HeroReviewCard />
        </div>

        {/* Scroll Strip Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
            paddingRight: "0.5rem",
          }}
        >
          <p style={{ color: "#64748b", fontSize: "0.82rem", margin: 0, fontFamily: "sans-serif" }}>
            ← Drag to explore more
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#4285F4",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "sans-serif",
            }}
          >
            <GoogleBadge />
            See all on Google
          </a>
        </div>

        {/* Horizontal Scroll Strip */}
        <div
          ref={stripRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            paddingBottom: "1.25rem",
            cursor: "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            userSelect: "none",
          }}
        >
          {scrollReviews.map((review, i) => (
            <ScrollCard key={i} review={review} />
          ))}
        </div>

        {/* Hide scrollbar for webkit */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

      </div>
    </section>
  );
}