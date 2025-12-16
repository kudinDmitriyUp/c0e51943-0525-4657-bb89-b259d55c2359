"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Leaf, Sparkles, Globe, Heart, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="largeSizeExtraLargeSpacing"
      background="circleGradient"
      cardStyle="gradient-subtle"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Pure Soap Co"
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="Handcrafted Natural Soaps for Every Skin"
          description="Discover the art of pure, luxurious handmade soaps. Each bar is carefully crafted with organic ingredients to nourish and delight your skin."
          tag="Artisan Soaps"
          buttons={[
            { text: "Shop Collection", href: "#products" },
            { text: "Learn Our Story", href: "#about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890583212-48mobmw3.jpg"
          imageAlt="Handmade natural soap bars"
          frameStyle="card"
          metricsLabel="Trusted by thousands of happy customers worldwide"
          metrics={[
            { id: "1", value: "5000+", label: "Bars Sold Monthly" },
            { id: "2", value: "100%", label: "Natural Ingredients" },
            { id: "3", value: "12 Years", label: "Crafting Excellence" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Handmade Soap Journey"
          description="We believe in the power of natural ingredients and traditional soap-making methods. Every bar tells a story of dedication to quality, sustainability, and your skin's wellbeing."
          tag="Our Story"
          bulletPoints={[
            {
              title: "Pure Ingredients",
              description: "No synthetic chemicals, parabens, or artificial fragrances. Just nature's finest oils and botanicals.",
              icon: Leaf
            },
            {
              title: "Small Batches",
              description: "Each soap is handmade in small batches to ensure premium quality and freshness.",
              icon: Sparkles
            },
            {
              title: "Sustainable Practice",
              description: "Eco-friendly packaging and ethical sourcing of all ingredients for a better planet.",
              icon: Globe
            },
            {
              title: "Skin Friendly",
              description: "Dermatologist-tested and suitable for all skin types, including sensitive skin.",
              icon: Heart
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890584951-5m3ut4ic.jpg"
          imageAlt="Handmade soap-making process"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Soap Collection"
          description="Explore our signature handmade soaps, each crafted with love and natural ingredients."
          tag="Best Sellers"
          products={[
            {
              id: "1",
              name: "Lavender Dreams",
              price: "$12.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890586350-rg9koqtc.jpg",
              imageAlt: "Lavender essential oil handmade soap"
            },
            {
              id: "2",
              name: "Charcoal Detox",
              price: "$13.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890586943-p5gvi952.jpg",
              imageAlt: "Charcoal activated soap bar"
            },
            {
              id: "3",
              name: "Honey Oat Bliss",
              price: "$12.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890587769-h2o7p2m4.jpg",
              imageAlt: "Honey oat natural soap"
            },
            {
              id: "4",
              name: "Rose Garden",
              price: "$14.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890588373-in1ujzcj.jpg",
              imageAlt: "Rose petal artisan soap"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890589162-zcqh2usu.jpg"
            },
            {
              id: "2",
              name: "James Cooper",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890589777-103bccj8.jpg"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890590666-r3ytk4jg.jpg"
            },
            {
              id: "4",
              name: "David Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890591206-uyrqsr1n.jpg"
            },
            {
              id: "5",
              name: "Lisa Anderson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890589162-zcqh2usu.jpg"
            },
            {
              id: "6",
              name: "Michael Brown",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890589777-103bccj8.jpg"
            }
          ]}
          cardTitle="Over 15,000 customers trust Pure Soap Co for their daily skincare routine"
          cardTag="Customer Love"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofThree
          title="Certified & Trusted"
          description="Our commitment to quality and sustainability is recognized by leading certification bodies"
          tag="Certifications"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890592173-nnrch50m.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890592919-2ot8397t.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890593801-am3mwaah.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890594727-4iajz1zl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890595307-k16o61ms.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890595827-elg78ns5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890596879-5vtuvm6t.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765890597664-kdexnpsq.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Join Our Soap Community"
          description="Subscribe to get exclusive discounts, new product launches, and skincare tips delivered to your inbox every month."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe Now"
          termsText="We respect your privacy. Unsubscribe at any time. No spam, just pure soap goodness."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Pure Soap Co"
          copyrightText="© 2025 Pure Soap Co. Handmade with love."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Products", href: "products" },
                { label: "Best Sellers", href: "products" },
                { label: "New Arrivals", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" },
                { label: "FAQ", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}