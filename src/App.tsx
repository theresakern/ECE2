import { ComponentProps, useState } from 'react';
import SplitPane from 'react-split-pane'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ModeToggle } from './components/mode-toggle';
import { useTheme } from './components/theme-provider';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { cn } from './lib/utils';
import Link, { LinkProps } from "next/link";
import logo from './lib/baufirma.jpg';
import logo2 from './lib/logo.png';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { AlignCenter } from 'lucide-react';







const CodeText = (props: ComponentProps<'span'>) => {
  return <span {...props} className={cn(props.className, 'bg-muted text-muted-foreground rounded font-mono text-sm p-1')} />
}

function App() {
  const { theme } = useTheme()
  return (
    <div>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Team />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/referenzen" element={<Referenzen />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/aktuelles" element={<Referenzen />} />
          </Routes>
        </Router>
      </div>


    </div>

  );
}

const Home = () => {
  return (


    <div className='h-screen container-fluid'>
      <Header />

      <div className="w-full grid grid-cols-3 gap-0 content-start items-center justify-center ">

        <Card className='h-full col-span-2'>
          <CardHeader>
            <CardTitle>ECE Bau- und Projektmanagement</CardTitle>
            <CardDescription >Kontakt</CardDescription>
          </CardHeader>
          <CardContent>

            <div className='text-m '>
              <p>Wir freuen uns über Ihr Interesse!
              </p>
              <p>ECE Bau- und Projektmanagement
              </p>
              <p>Straße 3
              </p>
              <p>85551 Kirchheim
              </p>
              <p>Tel.: +49 1234
              </p>
              <p>E-Mail: office@ece.de
              </p>
            </div>

          </CardContent>
        </Card>


        <img src={logo} className='h-full col-span-1' />


      </div>

      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className='h-50 container  ' style={{ display: 'flex', flexDirection: 'column', alignContent: 'left' }}>


      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem className="w-100">
            <img width={100} height={100} src={logo2} />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a className='px-8' rel='noreferrer' href='/' >Home</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a className='px-8' rel='noreferrer' href='/about' >Über uns</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a className='px-8' rel='noreferrer' href='/aktuelles' >Aktuelles</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a className='px-8' rel='noreferrer' href='/leistungen' >Leistungen</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a className='px-8' rel='noreferrer' href='/referenzen' >Referenzen</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a className='px-8' rel='noreferrer' href='/kontakt' >Kontakt</a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>



    </header>

  );
};

const Kontakt = () => {
  return (
    <div className='h-screen container-fluid  ' style={{ minHeight: "100%", height: "100%", display: "flex" }}>
      <div className=" w-full grid grid-rows-10 gap-0 content-start items-center justify-center ">
        <div className='row-span-1 '>
          <Header />
        </div>
        <div className=" w-full grid grid-cols-7 gap-0 content-start items-center justify-center " style={{ margin: '10px' }}>

          <Card className='h-full col-span-4 p-100' style={{ margin: '20px', padding: '20px' }}>
            <CardHeader>
              <CardTitle>ECE Bau- und Projektmanagement</CardTitle>

            </CardHeader>
            <CardContent>

              <div className='text-m'>
                <p className='mb-8'>Wir freuen uns über Ihr Interesse! <br></br>
                </p>

                <p>ECE Bau- und Projektmanagement
                </p>
                <p>Straße 3
                </p>
                <p>85551 Kirchheim
                </p>
                <p>Tel.: +49 1234
                </p>
                <p>E-Mail: office@ece.de
                </p>
                <br></br>
                <Button variant='outline' >
                  Zum E-Mail Kontaktformular
                </Button>
              </div>

            </CardContent>
          </Card>


          <img src={logo} className='h-full col-span-3' />


        </div>

        <Footer />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100" style={{ position: "relative", flex: "1" }}>
      <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li><a href={"/"}>Home</a></li>
            <li><a href={"/about"}>Über uns</a></li>
            <li><a href={"/kontakt"}>Impressum</a></li>
            <li><a href={"/datenschutz"}>Datenschutzerklärung</a></li>
          </ul>
        </div>
      </div>
      <div className="pb-2">
        <p className="text-center">
          @2024 ECE Bau- und Projektmanagement
        </p>
      </div>
    </footer>
  );
};

const Leistungen = () => {
  return (

    <div className='h-screen container-fluid'>
      <Header />

      <div className="w-full grid grid-cols-7 gap-0 content-start items-center justify-center " style={{ margin: '10px' }}>

        <Card className='h-full col-span-4' style={{ margin: '20px', padding: '50px' }}>
          <CardHeader>
            <CardTitle>Unsere Leistungen</CardTitle>
            <CardDescription >Übersicht</CardDescription>
          </CardHeader>
          <CardContent>

            <div className='text-m' >
              <p className='mb-10'>Wir bieten Dienstleistungen in den Bereichen: <br>
              </br>
                <li>Trockenbau</li>
                <li>Maurerarbeiten</li>
                <li>Steinsetzung</li>
                <li>Eisenflechter</li>
                <li>Maler- und Lackiererarbeiten</li>
                <li>Bodenverlegung</li>
                <li>Garten- und Landschaftsbau</li>
                <li>Tiefbau</li>
                <li>Erdbau</li>
                <li>Abriss</li>
                <li>Kernsanierung</li>
                <li>Instandsetzung</li>

                <br>
                </br>

                <p className='mb-10'>Des Weiteren bieten wir:
                  <li>Hauswarttätigkeiten</li>
                  <li>Reinigungsarbeiten</li>
                  <li>Bau- und Feinendreinigung</li>
                  <li>Glasreinigung</li>
                  <li>Hilfstätigkeiten für Bau und andere Gewerke</li>

                </p>
              </p>

              <a rel='noreferrer' className='underline' href='/kontakt'>Kontaktieren Sie uns</a> gerne für weitere Auskünfte.
            </div>

          </CardContent>
        </Card>


        <img src={logo} className='h-full col-span-3' />


      </div>

      <Footer />
    </div>
  );
};

const Referenzen = () => {
  return (
    <div>
      <Header />
      <h2>Our References</h2>
      <p>Explore our portfolio and references.</p>
    </div>
  );
};

const Team = () => {
  return (
    <div className='h-screen container-fluid'>
      <Header />

      <div className="w-full grid grid-cols-7 gap-0 content-start items-center justify-center " style={{ margin: '10px' }}>

        <Card className='h-full col-span-4' style={{ margin: '20px', padding: '50px' }}>
          <CardHeader>
            <CardTitle>Unser Team</CardTitle>
          </CardHeader>
          <CardContent>

            <div className='text-m' >
              <p className='mb-10'>Teil unseres Teams sind neben den Geschäftsführern,  <br>
              </br>

              </p>
              <Button variant='outline' onClick={event => window.location.href = '/leistungen'}>
                Informieren Sie sich über unsere Leistungen.
              </Button>


            </div>

          </CardContent>
        </Card>


        <img src={logo} className='h-full col-span-3' />


      </div>

      <Footer />
    </div>
  );
};

const Impressum = () => {
  return (
    <div>
      <Header />
      <h2>Meet Our Team</h2>
      <p>Learn about our amazing team members.</p>
    </div>
  );
};


export default App;
