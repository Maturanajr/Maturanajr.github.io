import jsPDF from 'jspdf';
import { 
  personalInfo, 
  experiences, 
  skillCategories, 
  additionalSkills, 
  professionalSummary,
  coreCompetencies,
  education
} from '../data/portfolio-info';
import { formatWhatsApp } from './formatters';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let yPosition = 15;

  // Cores otimizadas para ATS (menos decoração, mais legibilidade)
  const primaryColor: [number, number, number] = [0, 0, 0]; // Preto para melhor leitura ATS
  const textColor: [number, number, number] = [31, 41, 55];
  const lightGray: [number, number, number] = [100, 100, 100];

  // ========== HEADER SIMPLIFICADO (MELHOR PARA ATS) ==========
  doc.setTextColor(...primaryColor);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(personalInfo.name.toUpperCase(), pageWidth / 2, yPosition, { align: 'center' });
  
  yPosition += 6;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(personalInfo.title, pageWidth / 2, yPosition, { align: 'center' });
  
  yPosition += 5;
  
  // Contato em linha única (ATS preferem formato simples)
  doc.setFontSize(9);
  doc.setTextColor(...lightGray);
  const contactLine = `${personalInfo.email} | ${formatWhatsApp(personalInfo.whatsapp)} | ${personalInfo.location} | github.com/${personalInfo.githubUsername}`;
  doc.text(contactLine, pageWidth / 2, yPosition, { align: 'center' });
  
  yPosition += 8;
  
  // Linha separadora
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(15, yPosition, pageWidth - 15, yPosition);
  
  yPosition += 8;

  // ========== RESUMO PROFISSIONAL (CRÍTICO PARA ATS) ==========
  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('RESUMO PROFISSIONAL', 15, yPosition);
  
  yPosition += 6;
  
  doc.setTextColor(...textColor);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  
  const resumoLines = doc.splitTextToSize(professionalSummary, pageWidth - 30);
  doc.text(resumoLines, 15, yPosition);
  yPosition += resumoLines.length * 4 + 5;

  // ========== COMPETÊNCIAS-CHAVE (ATS ADORAM ISSO) ==========
  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('COMPETÊNCIAS-CHAVE', 15, yPosition);
  
  yPosition += 6;
  
  doc.setTextColor(...textColor);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  
  coreCompetencies.forEach(skillLine => {
    doc.text(skillLine, 15, yPosition);
    yPosition += 4;
  });
  
  yPosition += 5;

  // ========== EXPERIÊNCIA PROFISSIONAL ==========
  if (yPosition > 240) {
    doc.addPage();
    yPosition = 20;
  }

  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('EXPERIÊNCIA PROFISSIONAL', 15, yPosition);
  
  yPosition += 7;

  experiences.forEach((exp) => {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    // Título do cargo
    doc.setTextColor(...textColor);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(exp.title, 15, yPosition);
    
    // Período alinhado à direita
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...lightGray);
    doc.text(exp.period, pageWidth - 15, yPosition, { align: 'right' });
    
    yPosition += 5;
    
    // Empresa
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(exp.company, 15, yPosition);
    
    yPosition += 5;
    
    // Descrição
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const descLines = doc.splitTextToSize(exp.description, pageWidth - 30);
    doc.text(descLines, 15, yPosition);
    yPosition += descLines.length * 4;
    
    // Highlights com bullets
    if (exp.highlights.length > 0) {
      yPosition += 2;
      exp.highlights.forEach(highlight => {
        if (yPosition > 275) {
          doc.addPage();
          yPosition = 20;
        }
        const bulletLines = doc.splitTextToSize(`• ${highlight}`, pageWidth - 35);
        doc.text(bulletLines, 20, yPosition);
        yPosition += bulletLines.length * 4;
      });
    }
    
    yPosition += 6;
  });

  // ========== HABILIDADES TÉCNICAS DETALHADAS ==========
  if (yPosition > 200) {
    doc.addPage();
    yPosition = 20;
  }

  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('HABILIDADES TÉCNICAS', 15, yPosition);
  
  yPosition += 7;

  // Formato de lista simples (melhor para ATS)
  doc.setTextColor(...textColor);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  
  skillCategories.forEach((category) => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }

    // Categoria em negrito
    doc.setFont('helvetica', 'bold');
    doc.text(`${category.category}:`, 15, yPosition);
    yPosition += 4;
    
    // Skills em linha (formato ATS-friendly)
    doc.setFont('helvetica', 'normal');
    const skillsLine = category.skills.map(s => s.name).join(', ');
    const skillLines = doc.splitTextToSize(skillsLine, pageWidth - 30);
    doc.text(skillLines, 15, yPosition);
    yPosition += skillLines.length * 4 + 3;
  });

  yPosition += 3;

  // ========== COMPETÊNCIAS ADICIONAIS ==========
  if (yPosition > 250) {
    doc.addPage();
    yPosition = 20;
  }

  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('COMPETÊNCIAS ADICIONAIS', 15, yPosition);
  
  yPosition += 6;
  
  doc.setTextColor(...textColor);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  
  // Formato de lista com separadores (ATS-friendly)
  const skillsText = additionalSkills.join(' • ');
  const skillsLines = doc.splitTextToSize(skillsText, pageWidth - 30);
  doc.text(skillsLines, 15, yPosition);

  // ========== EDUCAÇÃO (IMPORTANTE PARA ATS) ==========
  yPosition += skillsLines.length * 4 + 8;
  
  if (yPosition > 260) {
    doc.addPage();
    yPosition = 20;
  }

  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('FORMAÇÃO ACADÊMICA', 15, yPosition);
  
  yPosition += 6;
  
  doc.setTextColor(...textColor);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text(education.degree, 15, yPosition);
  
  yPosition += 4;
  
  doc.setFont('helvetica', 'normal');
  doc.text(education.institution, 15, yPosition);
  
  if (education.period) {
    yPosition += 4;
    doc.setTextColor(...lightGray);
    doc.text(education.period, 15, yPosition);
  }

  // Salvar PDF
  doc.save(`Curriculo_${personalInfo.name.replace(/\s+/g, '_')}.pdf`);
};
