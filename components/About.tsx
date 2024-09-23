import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="w-full h-auto flex flex-col">
        {/* <div className="w-full h-20 flex items-center justify-center">
            <div className="w-96 h-80 relative">
                 <Image src="/logo1.png" alt="logo 1" fill />
            </div>

        </div> */}

<div className="max-w-5xl mx-auto flex flex-col space-y-3 mt-5"> <p className="text-center">Founded in 2010, THE MAKEUP STORE has been dedicated to empowering beauty enthusiasts with high-quality makeup products that inspire creativity and confidence. With a passion for all things beauty, we curate a diverse selection of cosmetics from beloved brands to indie treasures, ensuring there&apos;s something for everyone. Our mission is to create a welcoming space where every individual can explore their unique style and express themselves through makeup.</p>

<p className="text-center">At THE MAKEUP STORE, we believe that beauty is not just about looking good—it's about feeling good too. Our knowledgeable team is here to offer personalized advice and tips to help you discover products that suit your needs. Join us on this vibrant journey of self-expression, and let us help you shine!</p>

</div>


    </div>
  )
}

export default About
