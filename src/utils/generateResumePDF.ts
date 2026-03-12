import jsPDF from 'jspdf';
import { personalInfo, experiences, skillCategories, additionalSkills, aboutSection } from '../data/portfolio-info';

const formatWhatsApp = (phone: string): string => {
  // Remove qualquer caractere não numérico
  const cleaned = phone.replace(/\D/g, '');
  // Formata como (XX) XXXXX-XXXX
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
};

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let yPosition = 20;

  // Cores
  const primaryColor: [number, number, number] = [37, 99, 235]; // blue-600
  const textColor: [number, number, number] = [31, 41, 55]; // gray-800
  const lightGray: [number, number, number] = [156, 163, 175]; // gray-400

  // Header com retângulo arredondado
  const headerMargin = 15;
  const headerWidth = pageWidth - (headerMargin * 2);
  const headerHeight = 40;
  const cornerRadius = 5;
  
  doc.setFillColor(59, 130, 246); // blue-500 (mais claro)
  doc.roundedRect(headerMargin, 15, headerWidth, headerHeight, cornerRadius, cornerRadius, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(personalInfo.name, pageWidth / 2, 28, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(personalInfo.title, pageWidth / 2, 38, { align: 'center' });

  // Informações de contato
  doc.setFontSize(9);
  const contactParts = [
    personalInfo.email,
    `WhatsApp: ${formatWhatsApp(personalInfo.whatsapp)}`,
    personalInfo.location
  ];
  const contactText = contactParts.join(' | ') + ' | ';
  const textWidth = doc.getTextWidth(contactText);
  const githubText = ` github.com/${personalInfo.githubUsername}`;
  const totalWidth = textWidth + doc.getTextWidth(githubText);
  const startX = (pageWidth - totalWidth) / 2;
  
  doc.text(contactText, startX, 48);
  doc.setTextColor(255, 255, 255);
  doc.textWithLink(githubText, startX + textWidth, 48, { url: personalInfo.github });

  yPosition = 65;

  // Seção Sobre
  doc.setTextColor(...primaryColor);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('SOBRE', 15, yPosition);
  
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(0.5);
  doc.line(15, yPosition + 2, pageWidth - 15, yPosition + 2);
  
  yPosition += 8;

  doc.setTextColor(...textColor);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  aboutSection.paragraphs.forEach(paragraph => {
    const lines = doc.splitTextToSize(paragraph, pageWidth - 30);
    doc.text(lines, 15, yPosition);
    yPosition += lines.length * 5;
  });

  yPosition += 5;

  // Seção Experiência Profissional
  if (yPosition > 240) {
    doc.addPage();
    yPosition = 20;
  }

  doc.setTextColor(...primaryColor);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('EXPERIÊNCIA PROFISSIONAL', 15, yPosition);
  
  doc.setDrawColor(...primaryColor);
  doc.line(15, yPosition + 2, pageWidth - 15, yPosition + 2);
  
  yPosition += 10;

  experiences.forEach((exp) => {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setTextColor(...textColor);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(exp.title, 15, yPosition);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...lightGray);
    doc.text(exp.period, pageWidth - 15, yPosition, { align: 'right' });
    
    yPosition += 5;
    
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.text(exp.company, 15, yPosition);
    
    yPosition += 5;
    
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const descLines = doc.splitTextToSize(exp.description, pageWidth - 30);
    doc.text(descLines, 15, yPosition);
    yPosition += descLines.length * 4;
    
    if (exp.highlights.length > 0) {
      yPosition += 2;
      exp.highlights.forEach(highlight => {
        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }
        const bulletLines = doc.splitTextToSize(`• ${highlight}`, pageWidth - 35);
        doc.text(bulletLines, 20, yPosition);
        yPosition += bulletLines.length * 4;
      });
    }
    
    yPosition += 5;
  });

  // Seção Habilidades Técnicas
  if (yPosition > 200) {
    doc.addPage();
    yPosition = 20;
  }

  doc.setTextColor(...primaryColor);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('HABILIDADES TÉCNICAS', 15, yPosition);
  
  doc.setDrawColor(...primaryColor);
  doc.line(15, yPosition + 2, pageWidth - 15, yPosition + 2);
  
  yPosition += 10;

  // Dividir em duas colunas
  const columnWidth = (pageWidth - 40) / 2;
  let leftColumnY = yPosition;
  let rightColumnY = yPosition;
  
  skillCategories.forEach((category, index) => {
    const isLeftColumn = index % 2 === 0;
    const xPosition = isLeftColumn ? 15 : 15 + columnWidth + 10;
    let currentY = isLeftColumn ? leftColumnY : rightColumnY;

    if (currentY > 260) {
      doc.addPage();
      leftColumnY = 20;
      rightColumnY = 20;
      currentY = 20;
    }

    doc.setTextColor(...textColor);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(category.category, xPosition, currentY);
    currentY += 5;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    
    category.skills.forEach(skill => {
      doc.text(`• ${skill.name}`, xPosition + 3, currentY);
      currentY += 4;
    });
    
    currentY += 3;
    
    if (isLeftColumn) {
      leftColumnY = currentY;
    } else {
      rightColumnY = currentY;
    }
  });

  yPosition = Math.max(leftColumnY, rightColumnY) + 5;

  // Habilidades Adicionais
  if (yPosition > 250) {
    doc.addPage();
    yPosition = 20;
  }

  doc.setTextColor(...primaryColor);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('OUTRAS COMPETÊNCIAS', 15, yPosition);
  
  doc.setDrawColor(...primaryColor);
  doc.line(15, yPosition + 2, pageWidth - 15, yPosition + 2);
  
  yPosition += 8;
  
  doc.setTextColor(...textColor);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  
  const skillsText = additionalSkills.join(' • ');
  const skillsLines = doc.splitTextToSize(skillsText, pageWidth - 30);
  doc.text(skillsLines, 15, yPosition);

  // Salvar PDF
  doc.save(`Curriculo_${personalInfo.name.replace(' ', '_')}.pdf`);
};
