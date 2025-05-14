import { Disco } from '@/app/Discografia/components/discos'
import React from 'react'

function page() {
  return (
    <div>
      <section className="py-16 ">
        <div>
          <h1 className=" text-3xl font-bold text-center mb-12 text-white ">Discografía</h1>
        </div>
        <div className="flex flex-wrap justify-between max-w-3/4 mx-auto">
          <Disco 
            title="Río Paradiso"
            description=" Album 2022 "
            imageUrl="/Albumes/rioparadiso.jpeg"
            audioUrl="https://open.spotify.com/album/3BlqYgJh0p3zb9FcvqBM1i?si=0UMerkPTQradLasD_eTAnw"
           />
           <Disco
            title="Escordando"
            description="Almbum 2019"
            imageUrl="/Albumes/escordando.jpeg"
            audioUrl="https://open.spotify.com/album/7KHIT5BYMSHELdLtwu59PI?si=ef-tj-n1TPmBKVZHXxGNyQ"
           />
           <Disco
            title="Respiraluz"
            description="Almbum 2019"
            imageUrl="/Albumes/respiraluz.jpeg"
            audioUrl="https://open.spotify.com/album/2kA1Zg3LVMLCRam2qDDB54?si=ydTbR7afSQqvPHgJiA2klw"
           />
        </div>
      </section>
    </div>
  )
}

export default page
