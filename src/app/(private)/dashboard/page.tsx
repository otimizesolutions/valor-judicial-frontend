import { Header } from "./components/header";
import { HighlightedLink } from "./components/highlighted-link";


export default function Dashboard(){
  return (
    <div>
      <Header />

      <section className="mt-6 flex gap-6">
        <HighlightedLink />
        <HighlightedLink />
        <HighlightedLink />
        <HighlightedLink />
      </section>

      

    </div>
  )
}