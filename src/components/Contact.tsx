
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="bg-gray-50" id="contact">
      <div className="container-custom mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="text-center text-portfolio-gray max-w-2xl mx-auto mb-12">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-bold text-portfolio-blue mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail size={20} className="mr-3 text-portfolio-purple mt-1" />
                    <div>
                      <p className="font-medium text-portfolio-blue">Email</p>
                      <a href="mailto:yourname@example.com" className="text-portfolio-gray hover:text-portfolio-purple transition-colors">
                        yourname@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <User size={20} className="mr-3 text-portfolio-purple mt-1" />
                    <div>
                      <p className="font-medium text-portfolio-blue">LinkedIn</p>
                      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray hover:text-portfolio-purple transition-colors">
                        linkedin.com/in/yourusername
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare size={20} className="mr-3 text-portfolio-purple mt-1" />
                    <div>
                      <p className="font-medium text-portfolio-blue">Response Time</p>
                      <span className="text-portfolio-gray">
                        Usually within 24-48 hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-portfolio-blue mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-portfolio-blue mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email address"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-portfolio-blue mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message"
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-portfolio-purple hover:bg-portfolio-lightpurple w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" /> Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
