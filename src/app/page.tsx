import FAQs from "@/components/faqs"
import HowItWorks from "@/components/how-it-works"
import Introduction from "@/components/intro"
import Team from "@/components/team"

export default function Landing() {
  return (
    <main>
      <Introduction />
      <HowItWorks />
      <Team />
      <FAQs />
    </main>
  )
}
