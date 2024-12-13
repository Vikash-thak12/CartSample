import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "./ui/separator"


const Question = () => {
    return (
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-bold">About the Product</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

                <Separator className="bg-gray-400" />

                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-bold">Wash Care Instructions</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

                <Separator className="bg-gray-400" />

                <AccordionItem value="item-3">
                    <AccordionTrigger className="font-bold">Service and Policy</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <Separator className="bg-gray-400" />
            </Accordion>

        </div>
    )
}

export default Question
