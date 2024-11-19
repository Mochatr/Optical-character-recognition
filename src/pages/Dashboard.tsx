import React, { useState } from 'react';
import { FileUpload } from '../components/documents/FileUpload';
import { DocumentList } from '../components/documents/DocumentList';
import { FileText, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '../components/common/LanguageSwitch';

export function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [documents, setDocuments] = useState([
    {
      id: 'doc_1',
      name: 'Project Proposal.pdf',
      uploadDate: '2024-03-15',
      size: '2.5 MB',
      type: 'PDF',
    },
    {
      id: 'doc_2',
      name: 'Financial Report.docx',
      uploadDate: '2024-03-14',
      size: '1.8 MB',
      type: 'DOCX',
    },
  ]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleFileSelect = (file: File) => {
    const newDoc = {
      id: `doc_${Date.now()}`,
      name: file.name,
      uploadDate: new Date().toISOString().split('T')[0],
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      type: file.name.split('.').pop()?.toUpperCase() || 'Unknown',
    };
    setDocuments([...documents, newDoc]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">OCR</span>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitch />
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                <LogOut className="h-5 w-5 mr-2" />
                {t('nav.logout')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('dashboard.title')}</h1>
          
          <div className="mb-8">
            <FileUpload onFileSelect={handleFileSelect} />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('dashboard.yourDocuments')}</h2>
            <DocumentList
              documents={documents}
              onDownload={(id) => console.log('Downloading:', id)}
              onDelete={(id) => setDocuments(documents.filter(doc => doc.id !== id))}
            />
          </div>
        </div>
      </main>
    </div>
  );
}