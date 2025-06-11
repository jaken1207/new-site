import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../_ui/accordion";
import React from "react";

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
};

const FAQSection = ({ faqs }: Props) => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-gray-600">
            患者様からよくいただくご質問にお答えします
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              className="border-b border-gray-200 "
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger className="text-left text-gray-700 font-bold  hover:no-underline hover:text-green-700">
                Q{index + 1}: {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-medium">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
