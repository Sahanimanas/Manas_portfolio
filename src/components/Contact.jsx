
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {Link} from 'react-router-dom'
import { ChevronDown} from 'lucide-react';
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
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
    <section className="bg-gradient-to-br from-gray-700 to-slate-800" id="contact">
      <div className="container-custom mx-auto flex flex-col">
        <h2 className="section-title text-center text-white">CONTACT ME !</h2>
        <p className="text-center text-portfolio-gray max-w-2xl mx-auto mb-12">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className=" gap-8 flex-col flex  ">
            <div className="md:col-span-2">
              <div className="bg-white-900 shadow-blue-500 shadow-[0px_0px_20px_1px] p-6 rounded-lg border  ">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail size={20} className="mr-3 text-portfolio-purple mt-1" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a href="mailto:manashvisahani@gmail.com" className="text-portfolio-gray hover:text-portfolio-purple transition-colors">
                        manashvisahani@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <User size={20} className="mr-3 text-portfolio-purple mt-1" />
                    <div>
                      <p className="font-medium text-white">LinkedIn</p>
                      <a href="https://linkedin.com/in/manashvisahani" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray hover:text-portfolio-purple transition-colors">
                        linkedin.com/in/manashvisahani
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare size={20} className="mr-3 text-portfolio-purple mt-1" />
                    <div>
                      <p className="font-medium text-white">Response Time</p>
                      <span className="text-portfolio-gray">
                        Usually within 24-48 hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 ">
              <form onSubmit={handleSubmit} className="bg-white-900 p-6 rounded-lg  outline-none  shadow-blue-500 shadow-[0px_0px_20px_1px] hover:shadow-[0px_20px_20px_2px] hover:shadow-blue-900">
                <div className="space-y-4 flex flex-col text-center justify-center items-center mx-auto ">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full text-center "
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1 ">
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
                      className="w-full]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
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
                      className="w-full "
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
                      < >
                        <Send size={16} className="mr-2 " /> Send Message
                      </>
                    )}
                  </Button>
                  
                </div>
              </form>
            </div>
            {/* <div className='flex mx-auto text-center justify-center  '>
                    <Link to={'/Wish'} className="animate-bounce p-2 border rounded-full ">
                              <ChevronDown size={36} className="text-portfolio-purple " />
                            </Link>
                  </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
