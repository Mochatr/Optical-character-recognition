import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const { t } = useTranslation();
  
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) onFileSelect(file);
    },
    [onFileSelect]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-4 text-sm text-gray-600">
        {t('fileUpload.dragAndDrop')}{' '}
        <label className="text-blue-600 hover:text-blue-700 cursor-pointer">
          {t('fileUpload.browse')}
          <input type="file" className="hidden" onChange={handleChange} />
        </label>
      </p>
      <p className="mt-2 text-xs text-gray-500">{t('fileUpload.supportedFiles')}</p>
    </div>
  );
}