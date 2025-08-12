import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="bg-white max-lg:mt-10" id="who-we-are">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - with added top padding */}
          <div className="space-y-6 pt-16">
            <h2 className="text-5xl text-[#DB6B24] font-bold font-gloria">Who We Are</h2>

            <p className="text-lg font-urbanist">
              We are a generation driven by the fear that we might not pass onto our children the
              world they deserve. There are several history-defining challenges that the future
              working generations will have to face this century: climate change, unceasingly
              increasing inequality and much more. While we may not yet know how to solve all these,
              we believe education can empower more people to take part in tackling humanity's
              greatest obstacles.
            </p>

            <p className="text-lg font-urbanist">
              By sharing the education we've been fortunate to receive in England, we hope to
              increase our chances of generating and implementing the right solutions to address
              these global problems.
            </p>

            {/* Image of people with flower necklaces in polaroid-like frame */}
            <div className="mt-8">
              <div className="w-full relative">
                <Image 
                  src="/images/whoWeAreWearingFlowerNecklaces.jpeg" 
                  alt="Our team wearing flower necklaces" 
                  width={500}
                  height={333}
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column - with reduced top padding */}
          <div className="flex flex-col space-y-6">
            {/* Colorful flower images as U shape */}
            <div className="relative flex justify-between h-[200px] mx-auto w-full max-w-[500px]">
              {/* Left part of U - purple/green lei */}
              <div className="relative w-[150px]">
                <Image 
                  src="/images/flower2.png" 
                  alt="Purple and green lei" 
                  width={150}
                  height={200}
                  className="object-contain"
                />
              </div>
              
              {/* Right part of U - red/yellow lei */}
              <div className="relative w-[190px]">
                <Image 
                  src="/images/flower1.png" 
                  alt="Red and yellow lei" 
                  width={190}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Additional text */}
            <div className="space-y-4">
              <p className="text-lg font-urbanist">
                Our work focuses on educating those who have done nothing wrong but have found
                themselves in unimaginably difficult conditions simply due to the "birth roulette".
              </p>
              <p className="font-bold text-lg">As one of our guiding quotes states:</p>
            </div>

            {/* Quote box */}
            <div className="relative bg-[#E7F8FF] rounded-3xl p-8 mt-4">
              <div className="text-[#7AB9DE] text-[80px] font-serif absolute top-0 left-4">
                &#8220;
              </div>
              <blockquote className="text-2xl text-center px-6 py-4">
                Tough times create tough men.
                Tough men create easy times. Easy
                times create weak people. Weak
                people create tough times.
              </blockquote>
              <div className="text-[#FF9E7A] text-[80px] font-serif absolute bottom-0 right-4">
                &#8221;
              </div>
            </div>

            {/* Final paragraph */}
            <p className="text-lg mt-4 font-urbanist">
              Tough times have certainly begun. But we do not yet consider ourselves strong. Only by
              overcoming challenges together, by fighting for what the child in each of us knows to
              be right,
              <strong> will we become truly tough.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}