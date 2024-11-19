import React from 'react';
import { File, Download, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Document {
  id: string;
  name: string;
  uploadDate: string;
  size: string;
  type: string;
}

interface DocumentListProps {
  documents: Document[];
  onDownload: (id: string) => void;
  onDelete: (id: string) => void;
}

export function DocumentList({ documents, onDownload, onDelete }: DocumentListProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('documentList.name')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('documentList.date')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('documentList.size')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('documentList.type')}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('documentList.actions')}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <File className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-sm text-gray-900">{doc.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.uploadDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.size}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => onDownload(doc.id)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                    title={t('documentList.downloadTitle')}
                  >
                    <Download className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(doc.id)}
                    className="text-red-600 hover:text-red-900"
                    title={t('documentList.deleteTitle')}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}