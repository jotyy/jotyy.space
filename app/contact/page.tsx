import { ContactForm } from "@/components/contact-form";
import { PageContainer, PageHeader } from "@/components/page-container";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <PageContainer>
      <PageHeader heading="Contact" description="Get in touch with me." />

      <Card className="py-6">
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </PageContainer>
  );
}
