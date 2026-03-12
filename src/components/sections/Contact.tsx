import { useState, FormEvent, ChangeEvent } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { contactInfo, contactSection, personalInfo } from '../../data/portfolio-info';
import { renderContactIcon } from '../ui/Icons';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contato de ${formData.name}&body=${formData.message}%0D%0A%0D%0ADe: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {contactSection.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {contactSection.subtitle}
              </h3>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {contactSection.description}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4" hover={true}>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        {renderContactIcon(info.icon)}
                      </div>
                      <div>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {info.label}
                        </p>
                        <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="text-blue-600">{renderContactIcon(info.icon)}</div>
                      <div>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {info.label}
                        </p>
                        <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {contactSection.form.nameLabel}
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={contactSection.form.namePlaceholder}
                  required
                />
              </div>

              <div>
                <label className={`block mb-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {contactSection.form.emailLabel}
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={contactSection.form.emailPlaceholder}
                  required
                />
              </div>

              <div>
                <label className={`block mb-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {contactSection.form.messageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={contactSection.form.messagePlaceholder}
                  rows={5}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                {contactSection.form.submitButton}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
