import { Header } from "./components/header";
import { HighlightedLink } from "./components/highlighted-link";


export default function Dashboard(){
  return (
    <div>
      <Header />

      <section className="mt-6 grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <HighlightedLink />
        <HighlightedLink />
        <HighlightedLink />
        <HighlightedLink />
      </section>

    </div>
  )
}