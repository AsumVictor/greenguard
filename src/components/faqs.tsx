import Header from "@/components/header"
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion"

export default function FAQs() {
  return (
    <section className="pt-24 pb-48">
      <div>
        <Header heading="Frequently Asked Questions" />
      </div>
      <div className="mt-16 px-8 flex justify-center">
        <Accordion type="single" collapsible className="w-11/12 lg:w-1/2">
          <AccordionItem value="question-1">
            <AccordionTrigger>What kind of plants does GreenGuard cater to?</AccordionTrigger>
            <AccordionContent>Greenguard is crafted to support a diverse array of plants, encompassing ornamental species and agricultural crops alike. Its artificial intelligence capabilities enable the detection of diseases across a spectrum of leaf types, providing valuable assistance to both home gardeners and farmers. </AccordionContent>
          </AccordionItem>
         
        </Accordion>
      </div>
    </section>
  )
}
