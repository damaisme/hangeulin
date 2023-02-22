import {useState, useEffect} from 'react'
import ellipse1 from "../src/img/ellipse-1.png"
import illvect from "../src/img/ill-vect.png"
import vid from "../src/img/vid.png"
import supdate from "../src/img/s-update.png"
import stime from "../src/img/s-time.png"
import scert from "../src/img/s-cert.png"
import sinstructor from  "../src/img/s-instructor.png"
import checklist from "../src/img/checklist.svg"
import avatar from "../src/img/avatar.png"
import testi from "../src/img/testi.svg"
import fb from "../src/img/icon-fb.svg"
import twt from "../src/img/Twitter.svg"
import ig from "../src/img/Instagram.svg"
import line from "../src/img/Line.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

  const [header, setHeader] = useState(0);

  const pakets = [
    {
      name: "Paket 1",
      features: ["Vitae Sagitis", "Quis ipsum gravida in", "Nibh mauris erat tristique sagittis nunc", "Tellus nunc fermentum eget eu", "Porttitor egestas lobortis elit", "Consequat sed id ornare odio", "Consequat sed id ornare odio"],
      link: "http://course.com"
    },
    {
      name: "Paket 2",
      features: ["Vitae Sagitis", "Quis ipsum gravida in", "Nibh mauris erat tristique sagittis nunc", "Tellus nunc fermentum eget eu", "Porttitor egestas lobortis elit", "Consequat sed id ornare odio", "Consequat sed id ornare odio"],
      link: "http://course.com"
    },
    {
      name: "Paket 3",
      features: ["Vitae Sagitis", "Quis ipsum gravida in", "Nibh mauris erat tristique sagittis nunc", "Tellus nunc fermentum eget eu", "Porttitor egestas lobortis elit", "Consequat sed id ornare odio", "Consequat sed id ornare odio"],
      link: "http://course.com"
    },
  ]

  function listenScrollEvent (e) {
    if (window.scrollY > 50) {
      setHeader(1)
    } else {
      setHeader(0)
    }
  }

  useEffect(() => {
    document.title = 'HangeulIn | Belajar Bahasa Korea';
    AOS.init({once: true});
    window.addEventListener('scroll', listenScrollEvent)
  })

  return (
    <>
    <header className="relative">
      <img src={ellipse1} className="absolute top-0 left-0 w-60 h-60"/>
      <nav className={`fixed top-0 left-0 w-full px-8 md:px-12 lg:px-32 py-4 flex justify-between items-center z-50 ${header ? 'bg-white': 'bg-transparent'} `}>
            <h1 className="font-rubik font-bold text-xl">Hangeul<span className="text-saffron-400">in</span></h1>

            <ul className="hidden md:flex font-poppins">
              <li className="px-4"><a href="#kursus" className="hover:underline">Kursus</a></li>
              <li className="px-4"><a href="#skills" className="hover:underline">Beasiswa</a></li>
              <li className="px-4"><a href="#honors" className="hover:underline">Travel</a></li>
              <li className="px-4"><a href="#certs" className="hover:underline">Tentang Kami</a></li>
            </ul>

            <ul className="flex items-center">
              <li>
                <a className="px-4 py-2 bg-gradient-to-r from-saffron-400 to-saffron-500 bg-blue-300 text-black rounded-md ml-8 font-poppins" href="#">Masuk</a>
              </li>
              <li>
                <a className="px-4 py-2 text-black font-poppins" href="#">Daftar</a>
              </li>
            </ul>
        </nav>
    </header>


    <section id="hiro" className="overflow-hidden h-screen px-8 md:px-12 lg:px-32 grid grid-cols-1 md:grid-cols-2 content-center justify-center items-center">
      <img src={illvect} className="md:order-2 mx-auto" data-aos="zoom-in" data-aos-duration="500" />

      <div className="z-10 md:order-1 mt-4">
        <h1 className="font-rubik font-medium text-2xl" data-aos="fade-right" data-aos-duration="500" >Solusi <span className="text-blue-800">Terbaik</span> Untuk <br/>
        Belajar Bahasa Korea</h1>
        <p className="font-poppins mt-2"  data-aos="fade-left" data-aos-duration="500"  >Kursus online gratis yang menyediakan beragam fasilitas dan dapat membantu dalam mengasah kemampuan berbahasa koreamu</p>

        <a className="inline-block px-4 py-2 mt-2 bg-gradient-to-r from-saffron-400 to-saffron-500 bg-blue-300 text-black rounded-md font-poppins" href="#"  data-aos="fade-right" data-aos-duration="500" >Gabung Sekarang</a>
      </div>

      
    </section>


    <section id="service" className="mt-8 px-8 md:px-12 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-y-7 content-center gap-x-10 justify-center items-center">
      <div> 
        <h1 className="text-xl font-semibold font-poppins mb-4" data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" >Layanan Kami Dalam Membantu <br/>Anda</h1>
        <img data-aos="fade-up" data-aos-duration="500" data-aos-offset="200"  src={vid}/>
      </div>

      <div className=" grid grid-cols-2 gap-y-4 gap-x-4 sm:mt-8">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <img src={supdate} />
          <h1 className="mt-2">Materi Terupdate</h1>
          <p className="mt-2 text-sm font-light">Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at.</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <img src={stime} />
          <h1 className="mt-2">Akses Selamanya</h1>
          <p className="mt-2 text-sm font-light">Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at.</p>
        </div>       
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <img src={sinstructor} />
          <h1 className="mt-2">Pengajar Berpengalaman</h1>
          <p className="mt-2 text-sm font-light">Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at.</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
          <img src={supdate} />
          <h1 className="mt-2">Materi Terupdate</h1>
          <p className="mt-2 text-sm font-light">Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at.</p>
        </div>
      </div>
    </section>


    <section id="plan" className="mt-14 md:mt-20 px-8 md:px-12 lg:px-32">
      <h1 data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" className="text-xl font-semibold font-poppins mb-4 text-center">Pilih Paket</h1>
      <p data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" className="text-center font-light md:w-4/6 mx-auto">Quisque aliquam, faucibus est massa phasellus turpis pellentesque nam tristique. Facilisi varius sed ridiculus cras lacus. Elementum in in convallis sit vitae donec amet.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 md:gap-x-8 lg:gap-x-8 mt-4">
        {pakets.map((paket) => (
          <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" key={paket.name} className="rounded-lg bg-saffron-400 px-6 py-4 flex flex-col items-center">
            <h1 className="text-center text-lg font-poppins font-semibold mb-2">{paket.name}</h1>
            <div className="w-full md:w-11/12">
            {paket.features.map(feature => (
              <li key={feature} className="list-none font-poppins font-light text-sm mt-4 flex items-center gap-x-2"><img src={checklist} className="w-6" />{feature}</li>
            ))}
            </div>
            <a className="px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-md font-poppins mt-5 inline-block" href="#">Beli Kelas</a>
          </div>
        ))}
        <div></div>
      </div>
    </section>


    <section id="testi" className="mt-14 md:mt-20 px-8 md:px-12 lg:px-32 grid grid-cols-1 md:grid-cols-2 items-center gap-x-4">

      <div>
        <h1 data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" className="text-xl md:text-2xl font-semibold font-poppins mb-4">Apa yang member kami<br/>katakan</h1>

        <img data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" src={testi} className="mx-auto md:hidden"/>
        <p data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" className="font-light font-poppins mt-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, nulla iaculis eget id arcu est cras. Purus at interdum est in lorem aliquam. Arcu, enim purus cras commodo aliquam purus a, justo nulla. Quis duis vulputate egestas dictum et in risus curabitur enim. Risus non semper pellentesque ornare accumsan malesuada. Risus leo erat neque rhoncus egestas id imperdiet. Dictum sed tristique lacus, ut vulputate dapibus elit. Gravida donec amet, non donec praesent diam gravida.”</p>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" className="mt-4 flex items-center">
          <img src={avatar} className="w-12 h-12"/>
          <div className="ml-2" >
            <h1>Mamang Resing</h1>
            <p className="font-thin">Palembang, Sumatera Selatan</p>
          </div>
        </div>
      </div>

      <img data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" src={testi} className="mx-auto hidden md:block md:order-2"/>

    </section>


    <section id="join" data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" className="mt-14 md:mt-20 px-8 md:px-12 lg:px-32">
      <div className="w-full bg-saffron-400 rounded-md p-8 md:p-12 grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="font-poppins font-bold text-xl">Siap Bergabung?</h1>
          <p className="font-poppins mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices laoreet eget in id donec arcu nunc. Tortor risus adipiscing elit euismod montes, eget. Purus diam ultricies sed adipiscing at feugiat purus.</p>
        </div>
        
        <div className="flex justify-center md:justify-end items-center">
          <a className="px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-md font-poppins mt-5 inline-block" href="#">Gabung Sekarang</a>
        </div>
      </div>
    </section>


    <section id="footer" className="bg-saffron-200 mt-14 px-8 py-8 md:px-12 lg:px-32 md:flex gap-x-4">
      <div className="w-full md:w-4/12">
        <h1 className="text-2xl font-bold text-blue-700">Hangeul<span className="text-pink-400">In</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sollicitudin malesuada cras egestas gravida. Quis potenti suspendisse aliquet consectetur egestas et.</p>
      </div>
      <div className="w-full md:w-2/12 mt-4">
        <h1 className="font-semibold">Legalitas</h1>
        <ul className="mt-2">
          <li className="list-none mt-2"><a href="#">Kebijakan Privasi</a></li>
          <li className="list-none mt-2"><a href="#">Persyaratan Layanan</a></li>
        </ul>
      </div>
      <div className="w-full md:w-2/12 mt-4">
        <h1 className="font-semibold">Jelajahi</h1>
        <ul className="mt-2">
          <li className="list-none mt-2"><a href="#">Kursus</a></li>
          <li className="list-none mt-2"><a href="#">Beasiswa</a></li>
          <li className="list-none mt-2"><a href="#">Tour</a></li>
        </ul>
      </div>
      <div className="w-full md:w-2/12 mt-4">
        <h1 className="font-semibold">Perusahaan</h1>
        <ul className="mt-2">
          <li className="list-none mt-2"><a href="#">Hubungi Kami</a></li>
          <li className="list-none mt-2"><a href="#">Tentang Kami</a></li>
        </ul>
      </div>
      <div className="w-full md:w-4/12 mt-4">
        <h1 className="font-semibold">Newsletter</h1>
        <p className="mt-2">Dapatkan pembaruan yang menarik dari kami</p>
<input type="email" id="email" class="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email Anda" required/>
        <a className="px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-md font-poppins mt-5 inline-block" href="#">Subscribe</a>
      </div>

    </section>


    <section id="footer" className="px-8 py-4 md:px-12 lg:px-32 flex  flex-col md:flex-row justify-between gap-y-4">
      <p>Copyright 2021 Hak Cipta Terpelihara oleh Hangeulin.</p>
      <div className="flex gap-x-4">
        <a href="#"><img src={fb}/></a>
        <a href="#"><img src={ig}/></a>
        <a href="#"><img src={twt}/></a>
        <a href="#"><img src={line}/></a>
      </div>
    </section>

    </>
  )
}

