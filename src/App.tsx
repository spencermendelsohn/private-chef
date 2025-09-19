import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
    color: #222;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/images/hero.jpg") center/cover no-repeat;
`;

const HeroOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.a`
  display: inline-block;
  background: #fbbf24;
  color: #fff;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: #f59e0b;
  }
`;

const Section = styled.section<{ bg?: string }>`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: ${({ bg }) => bg || "transparent"};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ServicesGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  list-style: none;
  padding: 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.li`
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MenuCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const MenuImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

const MenuCardBody = styled.div`
  padding: 0.75rem;
`;

const TestimonialBlock = styled.blockquote`
  background: #fff;
  padding: 1.2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
`;

const TestimonialFooter = styled.footer`
  color: #888;
  font-size: 0.95rem;
`;

const LocationSection = styled.section`
  background: #111827;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
`;

const Footer = styled.footer`
  background: #1f2937;
  color: #d1d5db;
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.95rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      {/* Hero Section */}
      <Hero>
        <HeroOverlay>
          <HeroTitle>Spencer Mendelsohn</HeroTitle>
          <HeroSubtitle>Private Chef Services in Boston, MA</HeroSubtitle>
          <HeroButton href="#contact">Book a Consultation</HeroButton>
        </HeroOverlay>
      </Hero>

      {/* About Section */}
      <Section id="about">
        <SectionTitle>About Spencer</SectionTitle>
        <p>
          I'm a Boston-based food enthusiast with hands-on experience in the
          restaurant industry, having worked as a Food Expeditor at Bento Asian
          Kitchen + Sushi in St. Petersburg, Florida. There, I prepared salads,
          vegetables, rice bowls, bento boxes, soups, and portioned sauces, and
          took pride in arranging and garnishing dishes for service to guests.
          My time in the kitchen taught me the importance of organization,
          attention to detail, and the joy of creating beautiful, delicious food
          for others.
        </p>
        <p>
          When I'm not working or studying, I love cooking for my roommates and
          friends—constantly experimenting with new recipes and sharing my
          creations. I regularly post my culinary adventures on{" "}
          <a
            href="http://instagram.com/chefmendelsohn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          , where I showcase the joy of bringing people together through food.
        </p>
        <p>
          I'm also a computer science student at Northeastern University, and I
          enjoy using my technical skills to create meaningful, impactful
          experiences—both in and out of the kitchen.
        </p>
      </Section>

      {/* Services Section */}
      <Section id="services" bg="#f9fafb">
        <SectionTitle>Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <h3>Private Dinners</h3>
            <p>
              Elegant, multi-course dining experiences tailored to your
              preferences, featuring seasonal ingredients and innovative flavor
              combinations.
            </p>
          </ServiceCard>
          <ServiceCard>
            <h3>Private Lunches</h3>
            <p>
              Sophisticated lunch service perfect for business meetings, special
              occasions, or casual gatherings with friends.
            </p>
          </ServiceCard>
          <ServiceCard>
            <h3>Private Breakfasts</h3>
            <p>
              Gourmet breakfast and brunch experiences, from artisanal pastries
              to creative egg dishes and fresh-baked goods.
            </p>
          </ServiceCard>
        </ServicesGrid>
      </Section>

      {/* Menu/Portfolio Section */}
      <Section id="menu">
        <SectionTitle>Featured Creations</SectionTitle>
        <MenuGrid>
          <MenuCard>
            <MenuImage src="/images/dish1.jpg" alt="Artisanal Breakfast" />
            <MenuCardBody>
              <h3>Artisanal Breakfast</h3>
              <p>
                Fresh-baked pastries, house-made preserves, and perfectly
                prepared breakfast classics with a gourmet twist.
              </p>
            </MenuCardBody>
          </MenuCard>
          <MenuCard>
            <MenuImage src="/images/dish2.jpg" alt="Seasonal Dinner" />
            <MenuCardBody>
              <h3>Seasonal Dinner</h3>
              <p>
                Multi-course dining experience featuring the finest seasonal
                ingredients and innovative culinary techniques.
              </p>
            </MenuCardBody>
          </MenuCard>
          <MenuCard>
            <MenuImage src="/images/dish3.jpg" alt="Creative Lunch" />
            <MenuCardBody>
              <h3>Creative Lunch</h3>
              <p>
                Sophisticated lunch offerings that combine fresh, local
                ingredients with creative presentation and bold flavors.
              </p>
            </MenuCardBody>
          </MenuCard>
        </MenuGrid>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" bg="#f9fafb">
        <SectionTitle>Client Experiences</SectionTitle>
        <TestimonialBlock>
          <p>
            "The quality of the food was amazing. My favorite meal was his creamy garlic chicken pasta!"
          </p>
          <TestimonialFooter>— Alex</TestimonialFooter>
        </TestimonialBlock>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <SectionTitle>Contact</SectionTitle>
        <p>
          Ready to create your perfect dining experience? Let's discuss your
          vision.
        </p>
        <p>
          Phone: <a href="tel:+18183090512">+1 818-309-0512</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:chef@spencermendelsohn.com">
            chef@spencermendelsohn.com
          </a>
        </p>
        <p>
          Follow my culinary journey:{" "}
          <a
            href="http://instagram.com/chefmendelsohn"
            target="_blank"
            rel="noopener noreferrer"
          >
            @chefmendelsohn
          </a>
        </p>
      </Section>

      {/* Gallery Section at the very bottom */}
      <Section id="gallery">
        <SectionTitle>Gallery</SectionTitle>
        <GalleryGrid>
          <GalleryImage src="/images/IMG_3770.JPG" alt="Gallery Image 1" />
          <GalleryImage src="/images/IMG_3742.JPG" alt="Gallery Image 2" />
          <GalleryImage src="/images/IMG_3741.JPG" alt="Gallery Image 3" />
          <GalleryImage src="/images/IMG_3548.JPG" alt="Gallery Image 4" />
          <GalleryImage src="/images/IMG_2892.JPG" alt="Gallery Image 5" />
          <GalleryImage src="/images/IMG_2586.JPG" alt="Gallery Image 6" />
          <GalleryImage src="/images/IMG_2570.JPG" alt="Gallery Image 7" />
          <GalleryImage src="/images/IMG_2556.JPG" alt="Gallery Image 8" />
          <GalleryImage src="/images/IMG_2534.JPG" alt="Gallery Image 9" />
          <GalleryImage src="/images/IMG_2390.JPG" alt="Gallery Image 10" />
          <GalleryImage src="/images/IMG_1397.JPG" alt="Gallery Image 11" />
          <GalleryImage src="/images/IMG_1360.JPG" alt="Gallery Image 12" />
          <GalleryImage src="/images/IMG_1329.JPG" alt="Gallery Image 13" />
          <GalleryImage src="/images/IMG_1181.JPG" alt="Gallery Image 14" />
          <GalleryImage src="/images/IMG_1167.JPG" alt="Gallery Image 15" />
          <GalleryImage src="/images/IMG_1119.JPG" alt="Gallery Image 16" />
          <GalleryImage src="/images/IMG_1104.JPG" alt="Gallery Image 17" />
          <GalleryImage src="/images/IMG_1063.JPG" alt="Gallery Image 18" />
          <GalleryImage src="/images/IMG_1049.JPG" alt="Gallery Image 19" />
          <GalleryImage
            src="/images/D12E9270-9FD1-4C09-92C8-0184388A17F6.jpg"
            alt="Gallery Image 20"
          />
        </GalleryGrid>
      </Section>

      {/* Location Section */}
      <LocationSection id="location">
        <h2>Based in Boston, MA</h2>
        <p>Serving Boston and the surrounding areas</p>
      </LocationSection>

      {/* Footer */}
      <Footer>
        &copy; {new Date().getFullYear()} Spencer Mendelsohn. All rights
        reserved.
      </Footer>
    </Wrapper>
  );
};

function App() {
  return <Home />;
}

export default App;
