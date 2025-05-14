import React from 'react';
import './biografia.css';
import Image from 'next/image';

function page() {
  return (
    <div className="biografia-container">
      <h1 className="biografia-title mt-10">Jorge Palacios</h1>
      <Image
        src="/Jorge/jorge.jpeg"
        alt="Jorge Palacios"
        width={300}
        height={300}
        className="mx-auto rounded-full mb-4"
        priority
        quality={100}
      />
      <section className="biografia-section">
        <h2 className="biografia-subtitle">Biografía breve</h2>
        <p className="biografia-text">
          Jorge Palacios: Guitarrista y Compositor nacido en Villa Regina, Río Negro, en 1979. Realizó sus estudios de Profesorado Superior de guitarra, en el Instituto Universitario Patagónico de las Artes (IUPA) de General Roca. Estudió música de Cámara con el maestro Ljerko Spiller y guitarra con los profesores Roberto Moroni, Víctor Villadangos y Miguel Ángel Portal. Perfeccionó sus estudios con los reconocidos maestros Eduardo Fernández, María Isabel Swievers, Graciela Pomponio, Pablo Márquez, Armando de la Vega y Marcos Archetti. Ha realizado giras por Italia (2010), Qatar y Guyana Británica (dúo Escordando, 2014) con un repertorio original dedicado exclusivamente a la difusión de música argentina y latinoamericana. Es convocado asiduamente al Festival Guitarras del mundo y organiza el Ciclo Guitarra Íntima en Neuquén cuyo objetivo es promover la actividad guitarrística de la región. Discos: Escordando (2019), Respiraluz - Dúo Gema del Sol (2019) y Río Paradiso (2022). Colaboraciones: Omar Moreno Palacios - Los hermanos sean unidos / Canal Encuentro - Creación de la música original para el Documental &quot;Aquellos años felices&quot; basado en cuentos de Osvaldo Soriano. En 2019 su serie “Alma de Guitarra” obtuvo el Segundo premio en el Concurso Nacional de Composición de Música Popular Inédita del Fondo Nacional de las Artes. Su labor como intérprete y compositor ha contado con el apoyo del Instituto Nacional de la Música (INAMU) y el Fondo Nacional de las Artes (FNA). Actualmente es profesor en la Escuela Superior de Música de Neuquén (ESMN).
        </p>
      </section>
      <section className="biografia-section">
        <h2 className="biografia-subtitle">Biografía extendida</h2>
        <p className="biografia-text">
          Guitarrista y Compositor argentino, nacido en Villa Regina, Río Negro, en 1979. Realizó sus estudios de Profesorado Superior de guitarra, en el Instituto Universitario Patagónico de las Artes (IUPA) de General Roca. Estudió música de Cámara con el maestro Ljerko Spiller y guitarra con los profesores Roberto Moroni, Víctor Villadangos y Miguel Ángel Portal. Perfeccionó sus estudios con los reconocidos maestros Eduardo Fernández, María Isabel Swievers, Graciela Pomponio, Pablo Márquez, Gérard Abitons, Armando de la Vega y Marcos Archetti. Fue integrante del Cuarteto de Guitarras de Río Negro del IUPA, del dúo de guitarras Portal- Palacios y del Grupo de Música Latinoamericana Sanampay. En el año 2003 debutó como solista junto a la Orquesta de Cámara del Neuquén, en el concierto de Joaquín Rodrigo “Fantasía para un gentilhombre”. En el 2004 participa en la Décima Edición del Festival “Guitarras del mundo”. A lo largo de estos años ha sido convocado por reconocidos artistas entre los que se destacan el músico surero Omar Moreno Palacios, el cantor de tango Omar Mollo y el compositor y acordeonista brasileño Luíz Carlos Borges. En 2010 editó su primer CD, titulado &quot;Río Paradiso”, el que presentó en distintas ciudades de Italia. Se desempeña desde el año 2004 como profesor de guitarra, improvisación y ensamble, en la ESMN (Escuela Superior de Música de Neuquén). Desde el año 2011, promueve y organiza en la ciudad de Neuquén, el ciclo “Guitarra Intima”, cuyo espíritu es promover la versatilidad del instrumento en diversos géneros y estilos. Fue integrante del Grupo Flamenco “Manto de Andújar” con el cual mantuvo una fuerte presencia en la región durante los años 2010 a 2012 y fue el único grupo del interior convocado para participar en la Segunda Bienal Internacional de Flamenco en Buenos Aires (2011). En la actualidad mantiene su actividad como solista, es integrante, junto al Maestro Jorge Martí, del Dúo de Guitarras Escordando, invitado asiduamente al Festival Guitarras del Mundo en la ciudad de Buenos Aires y en la sede Neuquén. Además en mayo de 2014 el dúo realizó una importante gira por Qatar y Guyana Británica, difundiendo la música argentina con un repertorio original y adaptaciones propias. En 2022 edita su tercer disco solista titulado &quot;Río Paradiso&quot; con composiciones propias y de autores argentinos.
        </p>
      </section>
      <section className="biografia-section">
        <h2 className="biografia-subtitle">Discos disponibles</h2>
        <ul className="biografia-list">
          <li>Escordando - (2019)</li>
          <li>Respiraluz - Dúo Gema del Sol (2019)</li>
          <li>Río Paradiso (2022)</li>
        </ul>
      </section>
      <section className="biografia-section">
        <h2 className="biografia-subtitle">Giras importantes</h2>
        <ul className="biografia-list">
          <li>Italia 2010 junto a Omar Moreno Palacios (Roma - Vicenza - Francavila)</li>
          <li>Qatar y Guyana Británica - Dúo Escordando (2014)</li>
        </ul>
      </section>
      <section className="biografia-section">
        <h2 className="biografia-subtitle">Colaboraciones</h2>
        <ul className="biografia-list">
          <li>Omar Moreno Palacios - Los hermanos sean unidos / colaboración tema 6 &quot;Gateando por Re Mayor&quot;</li>
          <li>Canal Encuentro - Creación de la música original para el Documental &quot;Aquellos años felices&quot; basado en cuentos de Osvaldo Soriano</li>
        </ul>
      </section>
      <section className="biografia-section">
        <h2 className="biografia-subtitle">Becas y Premios</h2>
        <ul className="biografia-list">
          <li>FNA (Fondo Nacional de las Artes) Beca a la Formación 2016</li>
          <li>INAMU (Instituto Nacional de la Música) Convocatoria de Fomento 2016 para la Grabación del disco Escordando</li>
          <li>INAMU Convocatoria de Fomento 2017, subsidio para la replicación del disco Escordando</li>
          <li>FNA 2019 - Segundo Premio en el Concurso Nacional de Composición de Música Popular Inédita del Fondo Nacional de las Artes</li>
          <li>INAMU - Convocatoria de Fomento 2019</li>
          <li>FNA 2021 - Beca Creación Individual para la composición de la &quot;Serie Argentina para Guitarra&quot;</li>
          <li>INAMU - Convocatoria de fomento 2021 &quot;Argentina Florece&quot;</li>
          <li>FNA 2022 - Beca Creación &quot;Finalización de obra&quot; - Serie para Guitarra</li>
          <li>FNA 2023 - Concurso de música Académica - Mención Honorífica por &quot;Ritual&quot; para flauta traversa y guitarra</li>
          <li>FNA 2024 – Beca creación Producción creativa individual para el proyecto Alma de Guitarra volumen II</li>
          <li>FESTIMAG 3ra Edición (Festival de Música Argentina para Guitarra): Primer Premio - Concurso Nacional de composición con la obra Milonga del Despertar</li>
        </ul>
      </section>
    </div>
  );
}

export default page;
