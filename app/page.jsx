import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  BarChart,
  LineChart,
  MapPin,
  TrendingUp,
  Users,
  BookOpen,
  Heart,
  Shield,
  Map,
  BarChart3,
  Compass,
  GraduationCap,
} from "lucide-react";
import { NavBar } from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>

      <main className="flex-1">
        {/* Hero Section - Centered */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200">
                Rozšířená verze 2.0
              </span>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Komplexní Analýza Regionů ČR
              </h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Objevte detailní analýzu českých regionů napříč ekonomikou,
                školstvím, zdravotnictvím, bezpečností a kvalitou života.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/vizualizace">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Kde chci bydlet? <Compass className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tool Section - Kde chci bydlet */}
        <section className="w-full py-16 md:py-20 bg-blue-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-[350px] bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Fix map image implementation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/mapa.png"
                      alt="Interaktivní mapa regionů ČR"
                      width={500}
                      height={300}
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                    />

                    {/* Fallback in case image doesn't load */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Map className="h-16 w-16 text-gray-300" />
                      <span className="sr-only">Mapa České republiky</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  Kde chci bydlet?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Náš nový nástroj vám pomůže najít ideální region pro život
                  podle vašich preferencí.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-blue-100 p-2 rounded-full dark:bg-blue-900">
                      <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="font-medium">Nastavení vlastních vah</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Přizpůsobte váhy pro ekonomiku, školství, zdravotnictví
                        a další faktory
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-blue-100 p-2 rounded-full dark:bg-blue-900">
                      <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="font-medium">Souhrnný index</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Automaticky vypočítaný index podle vašich priorit
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-blue-100 p-2 rounded-full dark:bg-blue-900">
                      <Map className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Interaktivní mapová vizualizace
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Přehledná vizualizace výsledků na mapě ČR
                      </p>
                    </div>
                  </li>
                </ul>
                <Link href="/vizualizace">
                  <Button size="lg" className="mt-4">
                    Vyzkoušet nástroj
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Data Categories Section */}
        <section id="features" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Všestranná Analýza Dat
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Prozkoumejte komplexní sadu indikátorů z různých oblastí
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card>
                <CardHeader className="space-y-1">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2 dark:bg-blue-900">
                    <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <CardTitle>Ekonomika</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Mzdy a ceny nemovitostí v jednotlivých regionech</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2 dark:bg-green-900">
                    <BookOpen className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <CardTitle>Školství</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Přehled vzdělávacích institucí a výsledků vzdělávání</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2 dark:bg-red-900">
                    <Heart className="h-6 w-6 text-red-600 dark:text-red-300" />
                  </div>
                  <CardTitle>Zdravotnictví</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Dostupnost a kvalita zdravotní péče v regionech</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2 dark:bg-purple-900">
                    <Shield className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <CardTitle>Bezpečnost</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Statistiky kriminality a bezpečnostní ukazatele</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2 dark:bg-orange-900">
                    <GraduationCap className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                  </div>
                  <CardTitle>Seberozvoj krajů</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Kapitalové investice do rozvoje krajů</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2 dark:bg-gray-700">
                    <LineChart className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <CardTitle>Časové řady</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Analýza vývoje ukazatelů v čase</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://susice-hackathon2024.vercel.app/vizualizace">
                  <Button variant="outline" size="lg">
                    Původní vizualizace (v1)
                  </Button>
                </Link>
                <Link href="/vizualizace">
                  <Button size="lg">Nová verze nástrojů (v2)</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Keeping original */}
        <section
          id="team"
          className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
              Náš Tým
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-3 rounded-full dark:bg-blue-900/50">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <CardTitle className="mt-4">Tomáš Opatrný</CardTitle>
                  <CardDescription>Datový Specialista</CardDescription>
                </CardHeader>
                <CardContent>
                  Odborné znalosti ve statistické analýze a normalizaci dat.
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-3 rounded-full dark:bg-blue-900/50">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <CardTitle className="mt-4">Jáchym Hašek</CardTitle>
                  <CardDescription>Full-stack Vývojář</CardDescription>
                </CardHeader>
                <CardContent>
                  Zkušený ve vytváření webových aplikací a práci s daty.
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-3 rounded-full dark:bg-blue-900/50">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <CardTitle className="mt-4">Antonín Marek</CardTitle>
                  <CardDescription>Datový Specialista</CardDescription>
                </CardHeader>
                <CardContent>
                  Odborné znalosti v analýze a interpretaci dat.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section id="sources" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
              Zdroje Dat
            </h2>
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                  <p>
                    <a
                      href="https://monitor.statnipokladna.gov.cz/analyza/"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Monitor státní pokladny
                    </a>
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                  <p>
                    <a
                      href="https://data.gov.cz"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      data.gov.cz - Rejstřík škol a školských zařízení - celá ČR
                    </a>
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                  <p>
                    <a
                      href="https://vdb.czso.cz/vdbvo2/faces/cs/index.jsf?page=statistiky#katalog=31008"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kriminalita - trestné činy (ČSÚ)
                    </a>
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                  <p>
                    <a
                      href="https://data.gov.cz"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      data.gov.cz - Průměrná hrubá měsíční mzda a medián mezd v
                      krajích
                    </a>
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                  <p>
                    <a
                      href="https://data.gov.cz"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      data.gov.cz - Kvalita ovzduší – přehledy (data) na
                      měřicích stanicích
                    </a>
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                  <p>
                    <a
                      href="https://data.gov.cz"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      data.gov.cz - Počet obyvatel celkem podle pohlaví
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <div className="space-y-2 max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Objevte ideální lokalitu pro váš život
                </h2>
                <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                  Náš nástroj "Kde chci bydlet" vám pomůže porovnat regiony
                  podle vašich priorit a najít místo, které nejlépe odpovídá
                  vašim potřebám.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/vizualizace">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Kde chci bydlet? <Compass className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 w-full border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-medium mb-4">O projektu</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Vizualizace a analýza socioekonomických dat České republiky pro
                informované rozhodování.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Hlavní funkce</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Analýza regionů</li>
                <li>Interaktivní mapy</li>
                <li>Kde chci bydlet</li>
                <li>Časové řady</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Zdroje dat</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>ČSÚ</li>
                <li>Monitor státní pokladny</li>
                <li>Data.gov.cz</li>
                <li>Ostatní veřejné zdroje</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Odkazy</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://susice-hackathon2024.vercel.app/vizualizace"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Vizualizace (v1)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vizualizace"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Kde chci bydlet (v2)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/jachymhh/hackujstat-nku"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col gap-2 sm:flex-row items-center justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 Tomáš Opatrný, Antonín Marek, Jáchym Hašek - VOŠ a SPŠE
              Plzeň
            </p>
            <div className="flex items-center gap-4">
              <Link
                className="text-xs text-blue-500 hover:underline"
                href="https://github.com/jachymhh/hackujstat-nku"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
